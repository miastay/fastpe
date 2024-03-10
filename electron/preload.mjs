const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    fastp: (args) => ipcRenderer.send('fastp', args),
    onFastpData: (callback) => {
        console.log("onFastpData")
        ipcRenderer.on('fastp-data', (_event, value) => callback(value))
    }
})