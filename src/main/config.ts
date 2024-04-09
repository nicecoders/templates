import { BrowserWindowConstructorOptions } from 'electron';

export default {
  browserWindow: {
    title: 'nicecode 客户端模板',
    titleBarOverlay: {
      color: '#2f3241',
      symbolColor: '#74b1be',
      height: 48
    },
    maximizable: false,
    webPreferences: {
      enableRemoteModule: true,
    }
  } as BrowserWindowConstructorOptions
};