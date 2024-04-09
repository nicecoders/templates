import { defineConfig } from "umi";
import { Platform, createTargets } from "@umijs/plugin-electron";

// example: mac & windows
const targets = createTargets([Platform.WINDOWS]);

// example: mac m1
// const targets = Platform.MAC.createTarget(['dmg'], Arch.arm64);

export default defineConfig({
  npmClient: "pnpm",
  plugins: ["@umijs/plugin-electron", "@umijs/plugins/dist/dva"],
  // metas: [
  //   {
  //     'http-equiv': 'Content-Security-Policy',
  //     content: "default-src 'none'"
  //   }
  // ],
  electron: {
    builder: {
      targets,
      config: {}
    },
    extraDevFiles: {}
  },
  define: {
    APP_ENV: "dev"
  },
  dva: {},
});
