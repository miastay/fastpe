const { app, BrowserWindow } = require("electron");
const { ipcMain } = require('electron/main');
const { exec } = require('child_process');
const path = require("path");
const fs = require("fs");
require('electron-reload')(__dirname);

var mainWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        width: 1400,
        height: 900,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.mjs')
        }
    });
    mainWindow.loadFile(path.join(__dirname, "public/index.html"));
    mainWindow.webContents.openDevTools();
});

ipcMain.on('fastp', function (args) {
    console.log('captured on ipcMain')
    fastp(args);
})

function fastp(args) {
    console.log('fastp', JSON.stringify(args))
    exec("dir output", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    fs.readFile("output/fastp.json", (error, data) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        console.log("sending fastp report")
        mainWindow.webContents.send("fastp-data", JSON.parse(data));
    });
}

app.on('window-all-closed', () => app.quit());
