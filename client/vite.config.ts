import { defineConfig, splitVendorChunkPlugin } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";

import { uglify } from "rollup-plugin-uglify";
import alias from "@rollup/plugin-alias";

export default defineConfig(async ({ command, mode }) => {
  return {
    build: {
      emptyOutDir: true,
      manifest: true,

      minify: "esbuild",
      target: "esnext",
      modulePreload: true,

      cssMinify: "esbuild",
      cssCodeSplit: true,

      rollupOptions: {
        
        plugins: [
          alias({
            entries: [
              { find: "react", replacement: "preact/compat" },
              {
                find: "react-dom/test-utils",
                replacement: "preact/test-utils",
              },
              { find: "react-dom", replacement: "preact/compat" },
              { find: "react/jsx-runtime", replacement: "preact/jsx-runtime" },
            ],
          }),
          uglify(),
        ],
      },
    },
    base: "/",
    optimizeDeps: {
      force: true,
    },
    resolve: {
      extensions: [".ts", ".tsx"],
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
        "@components": fileURLToPath(
          new URL("./src/components", import.meta.url)
        ),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),

        "react": "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",   
        "react/jsx-runtime": "preact/jsx-runtime"
      },
    },

    publicDir: "public",
    plugins: [
      react(),
      VitePWA({
        minify: true,
        mode: mode as "production" | "development",
        injectRegister: "inline",
        registerType: "autoUpdate",
        useCredentials: true,

        strategies: "generateSW",

        workbox: {
          mode: mode,

          clientsClaim: true,
          skipWaiting: true,
          cleanupOutdatedCaches: true,

          globPatterns: ["**/*"],
        },
        includeAssets: ["public/*", "public/**/*"],
      }),
      splitVendorChunkPlugin(),
    ],
  };
});

/*
dist/manifest.webmanifest         0.15 kB
dist/index.html                   0.73 kB │ gzip:  0.44 kB
dist/.vite/manifest.json          0.75 kB │ gzip:  0.25 kB
dist/assets/index-u-bN2itq.js     2.03 kB │ gzip:  1.05 kB
dist/assets/Btn-2xl8mhz8.js       2.63 kB │ gzip:  1.29 kB
dist/assets/vendor-rWntmAlc.js   24.20 kB │ gzip:  9.28 kB
dist/assets/Router-fnbxdI-v.js  246.04 kB │ gzip: 82.96 kB


*/