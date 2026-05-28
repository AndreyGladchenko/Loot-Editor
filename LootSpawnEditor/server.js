const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const PORT = 3000;

// Helper paths relative to workspace root (parent of LootSpawnEditor directory)
const WORKSPACE_ROOT = path.resolve(__dirname, '..');
const LOOT_DIR = path.join(WORKSPACE_ROOT, 'WindowsServer', 'Loot');

const COOLDOWN_DEFAULT_PATH = path.join(LOOT_DIR, 'CooldownGroups', 'Default', 'CooldownGroups.json');
const ITEMS_DEFAULT_PATH = path.join(LOOT_DIR, 'Items', 'Default', 'Parameters.json');
const NODES_DEFAULT_DIR = path.join(LOOT_DIR, 'Nodes', 'Default');
const SPAWNERS_DEFAULT_DIR = path.join(LOOT_DIR, 'Spawners', 'Presets', 'Default');

const CONFIG_FILE_PATH = path.join(__dirname, 'config.json');
let customLootDir = null;
let gameVersion = '1.3.0.0.117753'; // Fallback default

// Read config synchronously at startup
try {
    const fsSync = require('fs');
    if (fsSync.existsSync(CONFIG_FILE_PATH)) {
        const configContent = fsSync.readFileSync(CONFIG_FILE_PATH, 'utf-8');
        const configData = JSON.parse(configContent);
        customLootDir = configData.customLootDir || null;
        gameVersion = configData.ver || '1.3.0.0.117753';
    }
} catch (err) {
    console.error('Failed to read config.json at startup:', err.message);
}

// Compute dynamic paths based on selected custom Loot folder
const getOverridePaths = () => {
    const root = customLootDir || LOOT_DIR;
    return {
        cooldownDir: path.join(root, 'CooldownGroups', 'Override'),
        itemsPath: path.join(root, 'Items', 'Override', 'Parameters.json'),
        itemsFallbackPath: path.join(root, 'Items', 'Override', 'Parameters_mod.json'),
        nodesDir: path.join(root, 'Nodes', 'Override'),
        spawnersDir: path.join(root, 'Spawners', 'Presets', 'Override')
    };
};

// MIME types for static file serving
const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.ico': 'image/x-icon',
    '.svg': 'image/svg+xml'
};

// Helper to parse JSON request body
const parseJsonBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (err) {
                reject(err);
            }
        });
        req.on('error', (err) => {
            reject(err);
        });
    });
};

// Helper to send JSON response
const sendJson = (res, statusCode, data) => {
    res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(data));
};

// Helper to serve a static file
const serveStaticFile = async (res, filePath) => {
    try {
        const ext = path.extname(filePath);
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        const data = await fs.readFile(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    } catch (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('File Not Found');
    }
};

// Helper for recursive JSON scanning
const globJsonFiles = async (dir, relativeTo = dir) => {
    let results = [];
    try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            const relativePath = path.relative(relativeTo, fullPath).replace(/\\/g, '/');
            if (entry.isDirectory()) {
                const subResults = await globJsonFiles(fullPath, relativeTo);
                results = results.concat(subResults);
            } else if (entry.isFile() && entry.name.endsWith('.json')) {
                results.push({
                    fileName: entry.name,
                    relativePath,
                    fullPath
                });
            }
        }
    } catch (err) {
        // Directory may not exist yet
    }
    return results;
};

// Main request handler
const requestHandler = async (req, res) => {
    const { method, url } = req;
    const parsedUrl = new URL(url, `http://localhost:${PORT}`);
    const pathname = parsedUrl.pathname;

    // Enable CORS for development
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    try {
        // 0. GET /api/config
        if (method === 'GET' && pathname === '/api/config') {
            sendJson(res, 200, { customLootDir, ver: gameVersion });
            return;
        }

        // 0. POST /api/config
        if (method === 'POST' && pathname === '/api/config') {
            const body = await parseJsonBody(req);
            let dir = body.customLootDir ? body.customLootDir.trim() : null;
            
            if (dir) {
                // Normalize slashes
                dir = path.resolve(dir);
                try {
                    const stat = await fs.stat(dir);
                    if (!stat.isDirectory()) {
                        sendJson(res, 400, { error: 'Указанный путь не является директорией.' });
                        return;
                    }
                } catch (err) {
                    sendJson(res, 400, { error: 'Директория по указанному пути не существует.' });
                    return;
                }
            }
            
            customLootDir = dir;
            
            try {
                await fs.writeFile(CONFIG_FILE_PATH, JSON.stringify({ customLootDir, ver: gameVersion }, null, 4), 'utf-8');
                sendJson(res, 200, { success: true, customLootDir, ver: gameVersion, message: 'Путь к директории Loot успешно сохранен.' });
            } catch (err) {
                sendJson(res, 500, { error: 'Не удалось сохранить файл конфигурации.', details: err.message });
            }
            return;
        }

        // 1. GET /api/cooldown-groups
        if (method === 'GET' && pathname === '/api/cooldown-groups') {
            let defaultData = { DeleteAllDefaultCooldownGroups: false, DefaultCooldownGroupsToDelete: [], CooldownGroups: [] };
            try {
                const defaultContent = await fs.readFile(COOLDOWN_DEFAULT_PATH, 'utf-8');
                defaultData = JSON.parse(defaultContent);
            } catch (err) {
                console.error('Error reading default cooldown groups:', err.message);
            }

            const overrideFiles = {};
            const cooldownOverrideDir = getOverridePaths().cooldownDir;
            try {
                // Ensure override directory exists if we actually read
                await fs.mkdir(cooldownOverrideDir, { recursive: true });
                const files = await fs.readdir(cooldownOverrideDir);
                const jsonFiles = files.filter(f => f.endsWith('.json'));

                for (const file of jsonFiles) {
                    try {
                        const fileContent = await fs.readFile(path.join(cooldownOverrideDir, file), 'utf-8');
                        overrideFiles[file] = JSON.parse(fileContent);
                    } catch (err) {
                        console.error(`Error reading override file ${file}:`, err.message);
                    }
                }
            } catch (err) {
                console.error('Error reading cooldown override directory:', err.message);
            }

            sendJson(res, 200, {
                defaultGroups: defaultData.CooldownGroups || [],
                defaultDataMetadata: {
                    DeleteAllDefaultCooldownGroups: defaultData.DeleteAllDefaultCooldownGroups || false,
                    DefaultCooldownGroupsToDelete: defaultData.DefaultCooldownGroupsToDelete || []
                },
                overrideFiles
            });
            return;
        }

        // 2. POST /api/cooldown-groups
        if (method === 'POST' && pathname === '/api/cooldown-groups') {
            const body = await parseJsonBody(req);
            const { fileName, data } = body;

            if (!fileName || !fileName.endsWith('.json')) {
                sendJson(res, 400, { error: 'Invalid filename. Must end with .json' });
                return;
            }

            // Ensure override directory exists
            const cooldownOverrideDir = getOverridePaths().cooldownDir;
            await fs.mkdir(cooldownOverrideDir, { recursive: true });
            const targetPath = path.join(cooldownOverrideDir, fileName);

            // Format JSON nicely with 4 spaces to match original SCUM configs
            const jsonString = JSON.stringify(data, null, 4);
            await fs.writeFile(targetPath, jsonString, 'utf-8');

            sendJson(res, 200, { success: true, message: `Successfully saved ${fileName}` });
            return;
        }

        // 3. GET /api/items
        if (method === 'GET' && pathname === '/api/items') {
            let defaultData = { Parameters: [] };
            try {
                const defaultContent = await fs.readFile(ITEMS_DEFAULT_PATH, 'utf-8');
                defaultData = JSON.parse(defaultContent);
            } catch (err) {
                console.error('Error reading default items parameters:', err.message);
            }

            let overrideData = { Parameters: [] };
            const itemsPaths = getOverridePaths();
            let usedPath = itemsPaths.itemsPath;
            try {
                // Try reading main override Parameters.json first
                const overrideContent = await fs.readFile(itemsPaths.itemsPath, 'utf-8');
                overrideData = JSON.parse(overrideContent);
            } catch (err) {
                // If it doesn't exist, try reading the fallback example Parameters_mod.json
                try {
                    const fallbackContent = await fs.readFile(itemsPaths.itemsFallbackPath, 'utf-8');
                    overrideData = JSON.parse(fallbackContent);
                    usedPath = itemsPaths.itemsFallbackPath;
                    console.log('Parameters.json not found in Override. Loaded Parameters_mod.json as example fallback.');
                } catch (fallbackErr) {
                    console.log('No override file found. Starting with empty overrides.');
                }
            }

            const defaultItems = defaultData.Parameters || [];
            const overrideItems = overrideData.Parameters || [];

            // Index override items by ID
            const overrideMap = new Map();
            overrideItems.forEach(item => {
                if (item && item.Id) {
                    overrideMap.set(item.Id, item);
                }
            });

            // Merge default and override lists
            const mergedItems = [];
            defaultItems.forEach(defaultItem => {
                const id = defaultItem.Id;
                if (overrideMap.has(id)) {
                    const overrideItem = overrideMap.get(id);
                    mergedItems.push({
                        ...defaultItem,
                        ...overrideItem,
                        isOverridden: true,
                        isNew: false
                    });
                    overrideMap.delete(id); // Remove from map so we know what is left
                } else {
                    mergedItems.push({
                        ...defaultItem,
                        isOverridden: false,
                        isNew: false
                    });
                }
            });

            // Any items left in overrideMap are custom items created by user
            overrideMap.forEach(customItem => {
                mergedItems.push({
                    ...customItem,
                    isOverridden: true,
                    isNew: true
                });
            });

            sendJson(res, 200, {
                items: mergedItems,
                sourceFile: path.basename(usedPath)
            });
            return;
        }

        // 4. POST /api/items
        if (method === 'POST' && pathname === '/api/items') {
            const body = await parseJsonBody(req);
            const { items } = body;

            if (!Array.isArray(items)) {
                sendJson(res, 400, { error: 'Invalid items data. Must be an array.' });
                return;
            }

            // Clean up items (remove isOverridden and isNew helper flags before saving)
            const cleanedItems = items.map(item => {
                const { isOverridden, isNew, ...rest } = item;
                return rest;
            });

            // Ensure override directory exists
            const targetPath = getOverridePaths().itemsPath;
            await fs.mkdir(path.dirname(targetPath), { recursive: true });

            // Format nicely
            const outputData = {
                Parameters: cleanedItems
            };
            const jsonString = JSON.stringify(outputData, null, 2);
            await fs.writeFile(targetPath, jsonString, 'utf-8');

            sendJson(res, 200, { success: true, message: 'Successfully saved parameters to Override/Parameters.json' });
            return;
        }

        // 5. GET /api/nodes
        if (method === 'GET' && pathname === '/api/nodes') {
            let defaultFiles = [];
            try {
                const files = await fs.readdir(NODES_DEFAULT_DIR);
                defaultFiles = files.filter(f => f.endsWith('.json')).sort();
            } catch (err) {
                console.error('Error reading default nodes directory:', err.message);
            }

            // Recursively collect all unique systemic node names and paths from Default directory
            const defaultNodeNames = new Set();
            const defaultNodePaths = new Set();
            const defaultTerminalNodePaths = new Set();
            for (const file of defaultFiles) {
                try {
                    const fileContent = await fs.readFile(path.join(NODES_DEFAULT_DIR, file), 'utf-8');
                    const parsed = JSON.parse(fileContent);
                    const collectNamesAndPaths = (node, currentPath = '') => {
                        if (node && node.Name) {
                            defaultNodeNames.add(node.Name);
                            const nodePath = currentPath ? `${currentPath}.${node.Name}` : node.Name;
                            // Only collect node paths that represent groups (have children)
                            if (node.Children && Array.isArray(node.Children) && node.Children.length > 0) {
                                defaultNodePaths.add(nodePath);
                                
                                const hasSubGroups = node.Children.some(child => child.Children && Array.isArray(child.Children) && child.Children.length > 0);
                                if (!hasSubGroups) {
                                    defaultTerminalNodePaths.add(nodePath);
                                }
                            }
                            if (node.Children && Array.isArray(node.Children)) {
                                node.Children.forEach(child => collectNamesAndPaths(child, nodePath));
                            }
                        }
                    };
                    collectNamesAndPaths(parsed);
                } catch (err) {
                    console.error(`Error indexing default file ${file}:`, err.message);
                }
            }

            const overrideFiles = {};
            const nodesOverrideDir = getOverridePaths().nodesDir;
            try {
                await fs.mkdir(nodesOverrideDir, { recursive: true });
                const files = await fs.readdir(nodesOverrideDir);
                const jsonFiles = files.filter(f => f.endsWith('.json')).sort();

                for (const file of jsonFiles) {
                    try {
                        const fileContent = await fs.readFile(path.join(nodesOverrideDir, file), 'utf-8');
                        overrideFiles[file] = JSON.parse(fileContent);
                    } catch (err) {
                        console.error(`Error reading override node file ${file}:`, err.message);
                    }
                }
            } catch (err) {
                console.error('Error reading override nodes directory:', err.message);
            }

            sendJson(res, 200, {
                defaultFiles,
                defaultNodeNames: Array.from(defaultNodeNames),
                defaultNodePaths: Array.from(defaultNodePaths),
                defaultTerminalNodePaths: Array.from(defaultTerminalNodePaths),
                overrideFiles
            });
            return;
        }

        // 6. POST /api/nodes
        if (method === 'POST' && pathname === '/api/nodes') {
            const body = await parseJsonBody(req);
            const { fileName, data } = body;

            if (!fileName || !fileName.endsWith('.json')) {
                sendJson(res, 400, { error: 'Invalid filename. Must end with .json' });
                return;
            }

            const nodesOverrideDir = getOverridePaths().nodesDir;
            await fs.mkdir(nodesOverrideDir, { recursive: true });
            const targetPath = path.join(nodesOverrideDir, fileName);

            const jsonString = JSON.stringify(data, null, 4);
            await fs.writeFile(targetPath, jsonString, 'utf-8');

            sendJson(res, 200, { success: true, message: `Successfully saved node file ${fileName}` });
            return;
        }

        // 7. POST /api/nodes/create-from-template
        if (method === 'POST' && pathname === '/api/nodes/create-from-template') {
            const body = await parseJsonBody(req);
            const { fileName, templateName } = body;

            if (!fileName || !fileName.endsWith('.json')) {
                sendJson(res, 400, { error: 'Invalid filename. Must end with .json' });
                return;
            }

            const nodesOverrideDir = getOverridePaths().nodesDir;
            await fs.mkdir(nodesOverrideDir, { recursive: true });
            const targetPath = path.join(nodesOverrideDir, fileName);

            let templateData = { Name: "ItemLootTreeNodes", Children: [] };
            if (templateName) {
                try {
                    const content = await fs.readFile(path.join(NODES_DEFAULT_DIR, templateName), 'utf-8');
                    templateData = JSON.parse(content);
                } catch (err) {
                    console.error(`Error copying template ${templateName}:`, err.message);
                    sendJson(res, 500, { error: `Failed to read template ${templateName}` });
                    return;
                }
            }

            const jsonString = JSON.stringify(templateData, null, 4);
            await fs.writeFile(targetPath, jsonString, 'utf-8');

            sendJson(res, 200, { success: true, message: `Successfully created node file ${fileName}` });
            return;
        }

        // 7.1. GET /api/nodes/default-detail — serve a single default node file for read-only viewing
        if (method === 'GET' && pathname === '/api/nodes/default-detail') {
            const fileName = parsedUrl.searchParams.get('fileName');
            if (!fileName || !fileName.endsWith('.json')) {
                sendJson(res, 400, { error: 'Invalid filename' });
                return;
            }

            // Safety: prevent path traversal
            const safeName = path.basename(fileName);
            const filePath = path.join(NODES_DEFAULT_DIR, safeName);
            const resolvedPath = path.resolve(filePath);
            const resolvedBase = path.resolve(NODES_DEFAULT_DIR);
            if (!resolvedPath.startsWith(resolvedBase)) {
                sendJson(res, 403, { error: 'Path traversal attempt detected' });
                return;
            }

            try {
                const content = await fs.readFile(filePath, 'utf-8');
                const defaultData = JSON.parse(content);
                sendJson(res, 200, defaultData);
            } catch (err) {
                console.error(`Error reading default node file ${safeName}:`, err.message);
                sendJson(res, 404, { error: 'Default node file not found' });
            }
            return;
        }

        // --- SPAWNERS ENDPOINTS ---

        // 8. GET /api/spawners
        if (method === 'GET' && pathname === '/api/spawners') {
            let defaultFiles = [];
            try {
                const files = await fs.readdir(SPAWNERS_DEFAULT_DIR);
                defaultFiles = files.filter(f => f.endsWith('.json')).sort();
            } catch (err) {
                console.error('Error reading default spawners directory:', err.message);
            }

            let overrideFiles = [];
            let overrideDirs = ['_Global_misc'];
            const spawnersOverrideDir = getOverridePaths().spawnersDir;
            try {
                await fs.mkdir(spawnersOverrideDir, { recursive: true });
                overrideFiles = await globJsonFiles(spawnersOverrideDir);

                const entries = await fs.readdir(spawnersOverrideDir, { withFileTypes: true });
                for (const entry of entries) {
                    if (entry.isDirectory()) {
                        overrideDirs.push(entry.name);
                    }
                }
                overrideDirs = Array.from(new Set(overrideDirs)).sort();
            } catch (err) {
                console.error('Error reading override spawners directory:', err.message);
            }

            sendJson(res, 200, {
                defaultFiles,
                overrideFiles: overrideFiles.map(o => ({ fileName: o.fileName, relativePath: o.relativePath })),
                overrideDirs
            });
            return;
        }

        // 9. GET /api/spawners/detail
        if (method === 'GET' && pathname === '/api/spawners/detail') {
            const fileName = parsedUrl.searchParams.get('fileName');
            if (!fileName || !fileName.endsWith('.json')) {
                sendJson(res, 400, { error: 'Invalid filename' });
                return;
            }

            let defaultData = null;
            try {
                const content = await fs.readFile(path.join(SPAWNERS_DEFAULT_DIR, fileName), 'utf-8');
                defaultData = JSON.parse(content);
            } catch (err) {
                // It is fine if a default file does not exist (custom spawner override)
                console.log(`Default spawner template not found for: ${fileName}. Checking override...`);
            }

            let overrideData = null;
            let overridePath = null;
            const spawnersOverrideDir = getOverridePaths().spawnersDir;
            try {
                await fs.mkdir(spawnersOverrideDir, { recursive: true });
                const overrides = await globJsonFiles(spawnersOverrideDir);
                const match = overrides.find(o => o.fileName === fileName);
                if (match) {
                    const content = await fs.readFile(match.fullPath, 'utf-8');
                    overrideData = JSON.parse(content);
                    overridePath = match.relativePath;
                }
            } catch (err) {
                console.error('Error scanning for override spawner file:', err.message);
            }

            if (!defaultData && !overrideData) {
                sendJson(res, 404, { error: 'Spawner preset file not found' });
                return;
            }

            sendJson(res, 200, {
                defaultData,
                overrideData,
                overridePath
            });
            return;
        }

        // 10. POST /api/spawners
        if (method === 'POST' && pathname === '/api/spawners') {
            const body = await parseJsonBody(req);
            const { fileName, relativePath, data } = body;

            if (!fileName || !fileName.endsWith('.json') || !relativePath) {
                sendJson(res, 400, { error: 'Invalid filename or relative path' });
                return;
            }

            const spawnersOverrideDir = getOverridePaths().spawnersDir;
            const targetPath = path.join(spawnersOverrideDir, relativePath);
            // Safety check: ensure target path is within spawnersOverrideDir
            const resolvedTarget = path.resolve(targetPath);
            const resolvedBase = path.resolve(spawnersOverrideDir);
            if (!resolvedTarget.startsWith(resolvedBase)) {
                sendJson(res, 403, { error: 'Path traversal attempt detected' });
                return;
            }

            try {
                await fs.mkdir(path.dirname(resolvedTarget), { recursive: true });
                const jsonString = JSON.stringify(data, null, 4);
                await fs.writeFile(resolvedTarget, jsonString, 'utf-8');
                sendJson(res, 200, { success: true, message: `Successfully saved spawner override ${relativePath}` });
            } catch (err) {
                console.error('Error saving spawner override:', err.message);
                sendJson(res, 500, { error: 'Failed to save spawner override', details: err.message });
            }
            return;
        }

        // 11. POST /api/spawners/delete
        if (method === 'POST' && pathname === '/api/spawners/delete') {
            const body = await parseJsonBody(req);
            const { fileName, relativePath } = body;

            if (!fileName || !relativePath) {
                sendJson(res, 400, { error: 'Invalid parameters for deletion' });
                return;
            }

            const spawnersOverrideDir = getOverridePaths().spawnersDir;
            const targetPath = path.join(spawnersOverrideDir, relativePath);
            const resolvedTarget = path.resolve(targetPath);
            const resolvedBase = path.resolve(spawnersOverrideDir);
            if (!resolvedTarget.startsWith(resolvedBase)) {
                sendJson(res, 403, { error: 'Path traversal attempt detected' });
                return;
            }

            try {
                await fs.unlink(resolvedTarget);
                sendJson(res, 200, { success: true, message: `Successfully deleted spawner override ${relativePath}` });
            } catch (err) {
                console.error('Error deleting spawner override:', err.message);
                sendJson(res, 500, { error: 'Failed to delete spawner override', details: err.message });
            }
            return;
        }

        // --- ZONE MODIFIERS ENDPOINTS ---
        if (method === 'GET' && pathname === '/api/zone-modifiers') {
            const filePath = path.join(customLootDir || LOOT_DIR, 'GeneralZoneModifiers.json');
            console.log(`[GET /api/zone-modifiers] Reading file at: ${filePath}`);
            let data = { Modifiers: [] };
            try {
                const content = await fs.readFile(filePath, 'utf-8');
                data = JSON.parse(content);
                console.log(`[GET /api/zone-modifiers] Successfully read and parsed. Modifiers count: ${data.Modifiers ? data.Modifiers.length : 0}`);
            } catch (err) {
                console.error(`[GET /api/zone-modifiers] Failed to read file at ${filePath}:`, err.message);
            }
            sendJson(res, 200, data);
            return;
        }

        if (method === 'POST' && pathname === '/api/zone-modifiers') {
            const body = await parseJsonBody(req);
            const filePath = path.join(customLootDir || LOOT_DIR, 'GeneralZoneModifiers.json');
            console.log(`[POST /api/zone-modifiers] Writing file at: ${filePath}`);
            try {
                const jsonString = JSON.stringify(body, null, 4);
                await fs.writeFile(filePath, jsonString, 'utf-8');
                console.log(`[POST /api/zone-modifiers] Successfully saved.`);
                sendJson(res, 200, { success: true, message: 'Successfully saved GeneralZoneModifiers.json' });
            } catch (err) {
                console.error(`[POST /api/zone-modifiers] Failed to save file at ${filePath}:`, err.message);
                sendJson(res, 500, { error: 'Failed to save GeneralZoneModifiers.json', details: err.message });
            }
            return;
        }

        // --- SPAWNER ZONES ENDPOINTS ---
        if (method === 'GET' && pathname === '/api/spawner-zones') {
            const spawnersOverrideDir = getOverridePaths().spawnersDir;
            const folders = [];
            try {
                await fs.mkdir(spawnersOverrideDir, { recursive: true });
                const entries = await fs.readdir(spawnersOverrideDir, { withFileTypes: true });
                for (const entry of entries) {
                    if (entry.isDirectory()) {
                        const folderName = entry.name;
                        const filePath = path.join(spawnersOverrideDir, folderName, 'Zones.json');
                        let zones = [];
                        try {
                            const content = await fs.readFile(filePath, 'utf-8');
                            const parsed = JSON.parse(content);
                            zones = parsed.Zones || [];
                        } catch (readErr) {
                            // Zones.json might not exist, keep empty list
                        }
                        folders.push({
                            name: folderName,
                            zones
                        });
                    }
                }
                folders.sort((a, b) => a.name.localeCompare(b.name));
            } catch (err) {
                console.error('[GET /api/spawner-zones] Error reading override dirs:', err.message);
            }
            sendJson(res, 200, { folders });
            return;
        }

        if (method === 'POST' && pathname === '/api/spawner-zones') {
            const body = await parseJsonBody(req);
            const { subfolder, data } = body;

            if (!subfolder) {
                sendJson(res, 400, { error: 'Missing subfolder parameter' });
                return;
            }

            const spawnersOverrideDir = getOverridePaths().spawnersDir;
            const targetPath = path.join(spawnersOverrideDir, subfolder, 'Zones.json');
            const resolvedTarget = path.resolve(targetPath);
            const resolvedBase = path.resolve(spawnersOverrideDir);
            if (!resolvedTarget.startsWith(resolvedBase)) {
                sendJson(res, 403, { error: 'Path traversal attempt detected' });
                return;
            }

            try {
                await fs.mkdir(path.dirname(resolvedTarget), { recursive: true });
                const jsonString = JSON.stringify(data || { Zones: [] }, null, 4);
                await fs.writeFile(resolvedTarget, jsonString, 'utf-8');
                console.log(`[POST /api/spawner-zones] Successfully saved Zones.json for ${subfolder}`);
                sendJson(res, 200, { success: true, message: `Successfully saved Zones.json for ${subfolder}` });
            } catch (err) {
                console.error(`[POST /api/spawner-zones] Failed to save Zones.json for ${subfolder}:`, err.message);
                sendJson(res, 500, { error: 'Failed to save Zones.json', details: err.message });
            }
            return;
        }

        // --- STATIC FILES SERVING ---
        let filePath = '';
        if (pathname === '/' || pathname === '/index.html') {
            filePath = path.join(__dirname, 'public', 'index.html');
        } else {
            filePath = path.join(__dirname, 'public', pathname);
        }

        await serveStaticFile(res, filePath);

    } catch (err) {
        console.error('Server error handling request:', err);
        sendJson(res, 500, { error: 'Internal Server Error', details: err.message });
    }
};

// Create and start server
const server = http.createServer(requestHandler);
server.listen(PORT, '127.0.0.1', () => {
    console.log(`==================================================`);
    console.log(`   SCUM LOOT SPAWN EDITOR SERVER RUNNING`);
    console.log(`   URL: http://localhost:${PORT}`);
    console.log(`   Workspace root: ${WORKSPACE_ROOT}`);
    console.log(`==================================================`);
});
