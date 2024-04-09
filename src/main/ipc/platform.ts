import { ipcMain } from 'electron';

ipcMain.handle('getPlatform', () => {
  return `hi, i'm from ${process.platform}`;
});

// node: () => process.versions.node,
// chrome: () => process.versions.chrome,
// electron: () => process.versions.electron,