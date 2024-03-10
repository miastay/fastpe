const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    fastp: (args) => ipcRenderer.send('fastp', args)
})