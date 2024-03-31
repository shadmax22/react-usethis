import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: {
                index: "index.js",
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
});
