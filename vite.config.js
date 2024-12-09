import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      // plugin options
      include: ["**/*.ts"], // Paths to include
      exclude: ["**/*.spec.ts"], // Paths to exclude
      outDir: "dist", // Output directory for declaration files
    }),
  ],
  build: {
    lib: {
      entry: {
        index: "index.ts",
        thisProvider: "src/thisProvider/index.ts",
      },
      name: "useThis", // Replace with your library name
    },
    rollupOptions: {
      // Make sure to externalize React and ReactDOM
      external: ["react", "react-dom"],
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
  },
});
