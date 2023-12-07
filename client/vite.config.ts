import { defineConfig, splitVendorChunkPlugin } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";

export default defineConfig(async ({ command, mode }) => {
  return {
    build: {
      outDir: resolve(__dirname, "../out/static/"),
      emptyOutDir: true,
      manifest: false,

      minify: "esbuild",
      target: "esnext",
      modulePreload: true,

      cssMinify: "esbuild",
      cssCodeSplit: true,

      rollupOptions: {
        output: {
          manualChunks: {
            lodash: ["lodash"],
          },
          minifyInternalExports: true,
        },
        plugins: [
          // alias({
          //   entries: [
          //     { find: "react", replacement: "preact/compat" },
          //     {
          //       find: "react-dom/test-utils",
          //       replacement: "preact/test-utils",
          //     },
          //     { find: "react-dom", replacement: "preact/compat" },
          //     { find: "react/jsx-runtime", replacement: "preact/jsx-runtime" },
          //   ],
          // }),
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

        // "react": "preact/compat",
        // "react-dom/test-utils": "preact/test-utils",
        // "react-dom": "preact/compat",
        // "react/jsx-runtime": "preact/jsx-runtime"
      },
    },

    publicDir: "public",
    plugins: [
      react(),
      VitePWA({
        minify: true,
        mode: mode as "production" | "development",
        injectRegister: "script-defer",
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
      // splitVendorChunkPlugin(),
    ],
  };
});
