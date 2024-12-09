// vite.config.js
import { defineConfig } from "file:///workspaces/react-usethis/node_modules/vite/dist/node/index.js";
import react from "file:///workspaces/react-usethis/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///workspaces/react-usethis/node_modules/vite-plugin-dts/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      // plugin options
      include: ["**/*.ts"],
      // Paths to include
      exclude: ["**/*.spec.ts"],
      // Paths to exclude
      outDir: "dist"
      // Output directory for declaration files
    })
  ],
  build: {
    lib: {
      entry: {
        index: "index.ts",
        thisProvider: "src/thisProvider/index.ts"
      },
      name: "useThis"
      // Replace with your library name
    },
    rollupOptions: {
      // Make sure to externalize React and ReactDOM
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        },
        format: "umd"
        // Universal Module Definition (UMD)
      }
    },
    sourcemap: true
  },
  server: {
    open: "/test/index.html"
  },
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.js"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvd29ya3NwYWNlcy9yZWFjdC11c2V0aGlzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvd29ya3NwYWNlcy9yZWFjdC11c2V0aGlzL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy93b3Jrc3BhY2VzL3JlYWN0LXVzZXRoaXMvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBkdHMoe1xuICAgICAgLy8gcGx1Z2luIG9wdGlvbnNcbiAgICAgIGluY2x1ZGU6IFtcIioqLyoudHNcIl0sIC8vIFBhdGhzIHRvIGluY2x1ZGVcbiAgICAgIGV4Y2x1ZGU6IFtcIioqLyouc3BlYy50c1wiXSwgLy8gUGF0aHMgdG8gZXhjbHVkZVxuICAgICAgb3V0RGlyOiBcImRpc3RcIiwgLy8gT3V0cHV0IGRpcmVjdG9yeSBmb3IgZGVjbGFyYXRpb24gZmlsZXNcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiB7XG4gICAgICAgIGluZGV4OiBcImluZGV4LnRzXCIsXG4gICAgICAgIHRoaXNQcm92aWRlcjogXCJzcmMvdGhpc1Byb3ZpZGVyL2luZGV4LnRzXCIsXG4gICAgICB9LFxuICAgICAgbmFtZTogXCJ1c2VUaGlzXCIsIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIGxpYnJhcnkgbmFtZVxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgLy8gTWFrZSBzdXJlIHRvIGV4dGVybmFsaXplIFJlYWN0IGFuZCBSZWFjdERPTVxuICAgICAgZXh0ZXJuYWw6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCJdLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogXCJSZWFjdFwiLFxuICAgICAgICAgIFwicmVhY3QtZG9tXCI6IFwiUmVhY3RET01cIixcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBcInVtZFwiLCAvLyBVbml2ZXJzYWwgTW9kdWxlIERlZmluaXRpb24gKFVNRClcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIG9wZW46IFwiL3Rlc3QvaW5kZXguaHRtbFwiLFxuICB9LFxuICB0ZXN0OiB7XG4gICAgLy8gXHVEODNEXHVEQzRCIGFkZCB0aGUgbGluZSBiZWxvdyB0byBhZGQganNkb20gdG8gdml0ZVxuICAgIGVudmlyb25tZW50OiBcImpzZG9tXCIsXG4gICAgZ2xvYmFsczogdHJ1ZSxcblxuICAgIHNldHVwRmlsZXM6IFwiLi90ZXN0cy9zZXR1cC5qc1wiLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZQLFNBQVMsb0JBQW9CO0FBQzFSLE9BQU8sV0FBVztBQUNsQixPQUFPLFNBQVM7QUFHaEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sSUFBSTtBQUFBO0FBQUEsTUFFRixTQUFTLENBQUMsU0FBUztBQUFBO0FBQUEsTUFDbkIsU0FBUyxDQUFDLGNBQWM7QUFBQTtBQUFBLE1BQ3hCLFFBQVE7QUFBQTtBQUFBLElBQ1YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLGNBQWM7QUFBQSxNQUNoQjtBQUFBLE1BQ0EsTUFBTTtBQUFBO0FBQUEsSUFDUjtBQUFBLElBQ0EsZUFBZTtBQUFBO0FBQUEsTUFFYixVQUFVLENBQUMsU0FBUyxXQUFXO0FBQUEsTUFDL0IsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFFBQ2Y7QUFBQSxRQUNBLFFBQVE7QUFBQTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxXQUFXO0FBQUEsRUFDYjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE1BQU07QUFBQTtBQUFBLElBRUosYUFBYTtBQUFBLElBQ2IsU0FBUztBQUFBLElBRVQsWUFBWTtBQUFBLEVBQ2Q7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
