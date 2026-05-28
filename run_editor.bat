@echo off
chcp 65001 >nul
:: 65001 - UTF-8

title SCUM LOOT SPAWN EDITOR (Ultimate)
color 0B

echo ======================================================================
echo                  SCUM - LOOT SPAWN EDITOR
echo                      (Ultimate Version)
echo ======================================================================
echo.
echo [SYSTEM] Checking Node.js execution environment...

:: Check Node.js execution (most robust way on Windows)
node -v >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH!
    echo Please download and install Node.js from: https://nodejs.org/
    echo After installation, restart this runner.
    echo.
    pause
    exit /b 1
)

echo [SYSTEM] Node.js successfully detected!
echo [SYSTEM] Starting local Loot Spawn Editor server...
echo [SYSTEM] Opening web browser at: http://localhost:3000
echo.

:: Ensure we are in the script's directory
cd /d "%~dp0"

:: Launch browser automatically
start "" http://localhost:3000

:: Start Node.js server from LootSpawnEditor directory
node LootSpawnEditor/server.js

if %errorlevel% neq 0 (
    echo.
    echo [SYSTEM] Server stopped with error.
    pause
)
