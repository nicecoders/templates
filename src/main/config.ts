import { BrowserWindowConstructorOptions } from 'electron';

export default {
  browserWindow: {
    title: 'nicecode 客户端模板',
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#2f3241',
      symbolColor: '#74b1be',
      height: 32
    },
    maximizable: false,
    webPreferences: {
      enableRemoteModule: true,
    }
  } as BrowserWindowConstructorOptions
};