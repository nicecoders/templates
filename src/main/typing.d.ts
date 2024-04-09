import { BrowserWindow } from 'electron';

declare global {
  export function getBrowserWindowRuntime(): BrowserWindow;
  const APP_ENV: string
}
