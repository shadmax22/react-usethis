import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import packageJson from "./package.json";
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
  plugins: [
    react(),
    dts({
      include: ["**/*.ts", "**/*.tsx"],
      exclude: ["**/*.spec.ts"],
      outDir: "dist",
    }),
  ],
  build: {
    lib: {
      entry: {
        index: "exports/index.ts",
        thisProvider: "exports/thisProvider.ts",
      },
      name: "useThis",
    },
    rollupOptions: {
      // ✅ ensure ALL React deps are externalized
      external: (id) =>
        ["react", "react-dom", "react-redux"].some(
          (pkg) => id === pkg || id.startsWith(`${pkg}/`)
        ),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-redux": "ReactRedux",
        },
        format: "umd",
      },
    },
    sourcemap: true,
  },
  server: {
    open: "/test/index.html",
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./test/setup.js",
    exclude: ["test/env/**", "node_modules/**", "dist/**"],
  },
});
