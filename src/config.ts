import { BrowserWindowConstructorOptions } from 'electron';

export default {
  browserWindow: {
    titleBarStyle: process.platform === 'win32' ? 'hidden' : 'hiddenInset',
    maximizable: false,
    webPreferences: {
      contextIsolation: false,
      enableRemoteModule: true
    }
  } as BrowserWindowConstructorOptions
};