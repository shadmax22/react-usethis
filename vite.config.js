import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import packageJson from "./package.json";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
  plugins: [
    react(),
    dts({
      // plugin options
      include: ["**/*.ts", "**/*.tsx"], // Paths to include
      exclude: ["**/*.spec.ts"], // Paths to exclude
      outDir: "dist", // Output directory for declaration files
    }),
  ],
  build: {
    lib: {
      entry: {
        index: "exports/index.ts",
        thisProvider: "exports/thisProvider.ts",
      },
      name: "useThis", // Replace with your library name
    },
    rollupOptions: {
      // Make sure to externalize React and ReactDOM
      external: ["react", "react-dom", "reactRedux"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        format: "umd", // Universal Module Definition (UMD)
      },
    },
    sourcemap: true,
  },
  server: {
    open: "/test/index.html",
  },
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: "jsdom",
    globals: true,

    setupFiles: "./test/setup.js",
    exclude: ["test/env/**", "node_modules/**", "dist/**"],
  },
});
