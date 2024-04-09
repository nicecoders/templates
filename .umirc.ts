import { defineConfig } from 'umi';
import { Platform, createTargets } from '@umijs/plugin-electron';

// example: mac & windows
const targets = createTargets([Platform.WINDOWS]);

// example: mac m1
// const targets = Platform.MAC.createTarget(['dmg'], Arch.arm64);

export default defineConfig({
  npmClient: 'yarn',
  plugins: ['@umijs/plugin-electron'],
  electron: {
    builder: {
      targets
    },
    extraDevFiles: {
      // 'xxxx.js' : fs.readFileSync('xxxx.js','utf-8'),
    }
  },
});
