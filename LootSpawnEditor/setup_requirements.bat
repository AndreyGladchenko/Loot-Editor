@echo off
chcp 65001 >nul
:: 65001 - UTF-8

echo ======================================================================
echo          SCUM Loot Spawn Editor - System Requirements Check
echo ======================================================================
echo.

:: Check Node.js by executing it directly (most robust way on Windows)
node -v >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is NOT installed on your system!
    echo.
    echo To run the Loot Spawn Editor, please install Node.js:
    echo 1. Download the LTS installer from: https://nodejs.org/
    echo 2. Run the installer and keep the default settings.
    echo 3. Restart this batch file once installation is complete.
    echo.
    pause
    exit /b 1
)

echo [SUCCESS] Node.js is detected!
for /f "tokens=*" %%i in ('node -v') do set NODE_VER=%%i
echo Installed version: %NODE_VER%
echo.
echo ======================================================================
echo Project Dependencies:
echo ======================================================================
echo This editor is ultra-lightweight and uses only built-in Node.js modules.
echo No external NPM packages or 'npm install' are required!
echo.
echo [INFO] No package installation is needed. Ready to run.
echo.

:: Create run.bat if it doesn't exist
if not exist "run.bat" (
    echo @echo off > run.bat
    echo chcp 65001 ^>nul >> run.bat
    echo :: 65001 - UTF-8 >> run.bat
    echo echo Starting SCUM Loot Spawn Editor... >> run.bat
    echo cd /d "%%~dp0" >> run.bat
    echo if exist "LootSpawnEditor\server.js" cd /d "LootSpawnEditor" >> run.bat
    echo start "" http://localhost:3000 >> run.bat
    echo node server.js >> run.bat
    echo pause >> run.bat
    echo [INFO] Created 'run.bat' shortcut in the application folder!
)

echo.
echo All setup is complete!
echo You can start the server by double-clicking 'run.bat'.
echo The editor will automatically open in your browser at http://localhost:3000
echo.
pause
