import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('$api', {
  getPlatform: async () => {
    return await ipcRenderer.invoke('getPlatform');
  },
  uploadFile: (filePaths: string[]) => ipcRenderer.send('uploadFile', filePaths),
});
