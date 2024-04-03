// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
})

contextBridge.exposeInMainWorld('baseAPI', {
  setTitle: (title: string) => ipcRenderer.send('set-title', title),
  uploadFile: (filePath: string) => ipcRenderer.send('upload', filePath),
  onUploadProgress: (cb: (progress: string) => void) => ipcRenderer.on('upload-progress', 
    (_event, progress) => {
      cb?.(progress)
    }
  )
})