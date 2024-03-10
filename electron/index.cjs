const { app, BrowserWindow } = require("electron");
const { ipcMain } = require('electron/main');
const { exec } = require('child_process');
const path = require("path");

app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
        preload: path.join(__dirname, 'preload.mjs')
    }});
    mainWindow.loadFile(path.join(__dirname, "public/index.html"));
    mainWindow.webContents.openDevTools();
});

ipcMain.on('fastp', function (args) {
    console.log('captured on ipcMain')
    fastp(args);
})


function fastp(args) {
    console.log('fastp', JSON.stringify(args))
    exec(".\\fastp --help", (error, stdout, stderr) => {
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
}
