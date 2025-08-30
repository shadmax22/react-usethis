// vite.config.js
import { defineConfig } from "file:///C:/Users/ganga/Desktop/react-usethis/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/ganga/Desktop/react-usethis/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///C:/Users/ganga/Desktop/react-usethis/node_modules/vite-plugin-dts/dist/index.mjs";

// package.json
var package_default = {
  name: "react-usethis",
  version: "0.1.53",
  description: "Redux state management utilty",
  repository: {
    type: "git",
    url: "git+ssh://git@github.com/shadmax22/react-usethis.git"
  },
  publishConfig: {
    access: "public"
  },
  author: "Md Shad",
  license: "ISC",
  bugs: {
    url: "https://github.com/shadmax22/react-usethis/issues"
  },
  homepage: "https://github.com/shadmax22/react-usethis#readme",
  type: "module",
  module: "./dist/index.js",
  main: "./dist/index.cjs",
  types: "./dist/index.d.ts",
  exports: {
    ".": {
      import: "./dist/index.js",
      require: "./dist/index.umd.cjs",
      types: "./dist/index.d.ts"
    },
    "./thisProvider": {
      import: "./dist/thisProvider.js",
      require: "./dist/thisProvider.umd.cjs",
      types: "./dist/src/thisProvider/index.d.ts"
    }
  },
  scripts: {
    dev: "vite",
    build: "tsc && vite build",
    lint: "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    preview: "vite preview",
    test: "vitest"
  },
  dependencies: {
    "@reduxjs/toolkit": "^2.2.1",
    react: "^18.3.1",
    "react-dom": "^18.3.1",
    "react-redux": "^9.1.0",
    "vite-plugin-dts": "^3.8.1"
  },
  devDependencies: {
    "@testing-library/jest-dom": "^6.4.8",
    "@testing-library/react": "^16.0.0",
    "@testing-library/user-event": "^14.5.2",
    "@types/react": "^18.3.14",
    "@types/react-dom": "^18.3.2",
    "@typescript-eslint/eslint-plugin": "^7.1.1",
    "@typescript-eslint/parser": "^7.1.1",
    "@vitejs/plugin-react": "^4.2.1",
    "babel-jest": "^29.7.0",
    eslint: "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    jest: "^29.7.0",
    jsdom: "^24.1.1",
    "ts-jest": "^29.2.4",
    typescript: "^5.2.2",
    vite: "^5.2.13",
    vitest: "^1.6.0"
  },
  files: [
    "dist"
  ]
};

// vite.config.js
var vite_config_default = defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(package_default.version)
  },
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
    setupFiles: "./test/setup.js"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcZ2FuZ2FcXFxcRGVza3RvcFxcXFxyZWFjdC11c2V0aGlzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxnYW5nYVxcXFxEZXNrdG9wXFxcXHJlYWN0LXVzZXRoaXNcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2dhbmdhL0Rlc2t0b3AvcmVhY3QtdXNldGhpcy92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcclxuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XHJcbmltcG9ydCBwYWNrYWdlSnNvbiBmcm9tICcuL3BhY2thZ2UuanNvbic7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGRlZmluZToge1xyXG4gICAgX19BUFBfVkVSU0lPTl9fOiBKU09OLnN0cmluZ2lmeShwYWNrYWdlSnNvbi52ZXJzaW9uKSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBkdHMoe1xyXG4gICAgICAvLyBwbHVnaW4gb3B0aW9uc1xyXG4gICAgICBpbmNsdWRlOiBbXCIqKi8qLnRzXCJdLCAvLyBQYXRocyB0byBpbmNsdWRlXHJcbiAgICAgIGV4Y2x1ZGU6IFtcIioqLyouc3BlYy50c1wiXSwgLy8gUGF0aHMgdG8gZXhjbHVkZVxyXG4gICAgICBvdXREaXI6IFwiZGlzdFwiLCAvLyBPdXRwdXQgZGlyZWN0b3J5IGZvciBkZWNsYXJhdGlvbiBmaWxlc1xyXG4gICAgfSksXHJcbiAgXSxcclxuICBidWlsZDoge1xyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiB7XHJcbiAgICAgICAgaW5kZXg6IFwiaW5kZXgudHNcIixcclxuICAgICAgICB0aGlzUHJvdmlkZXI6IFwic3JjL3RoaXNQcm92aWRlci9pbmRleC50c1wiLFxyXG4gICAgICB9LFxyXG4gICAgICBuYW1lOiBcInVzZVRoaXNcIiwgLy8gUmVwbGFjZSB3aXRoIHlvdXIgbGlicmFyeSBuYW1lXHJcbiAgICB9LFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAvLyBNYWtlIHN1cmUgdG8gZXh0ZXJuYWxpemUgUmVhY3QgYW5kIFJlYWN0RE9NXHJcbiAgICAgIGV4dGVybmFsOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgcmVhY3Q6IFwiUmVhY3RcIixcclxuICAgICAgICAgIFwicmVhY3QtZG9tXCI6IFwiUmVhY3RET01cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvcm1hdDogXCJ1bWRcIiwgLy8gVW5pdmVyc2FsIE1vZHVsZSBEZWZpbml0aW9uIChVTUQpXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc291cmNlbWFwOiB0cnVlLFxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBvcGVuOiBcIi90ZXN0L2luZGV4Lmh0bWxcIixcclxuICB9LFxyXG4gIHRlc3Q6IHtcclxuICAgIC8vIFx1RDgzRFx1REM0QiBhZGQgdGhlIGxpbmUgYmVsb3cgdG8gYWRkIGpzZG9tIHRvIHZpdGVcclxuICAgIGVudmlyb25tZW50OiBcImpzZG9tXCIsXHJcbiAgICBnbG9iYWxzOiB0cnVlLFxyXG5cclxuICAgIHNldHVwRmlsZXM6IFwiLi90ZXN0L3NldHVwLmpzXCIsXHJcbiAgfSxcclxufSk7XHJcbiIsICJ7XHJcbiAgXCJuYW1lXCI6IFwicmVhY3QtdXNldGhpc1wiLFxyXG4gIFwidmVyc2lvblwiOiBcIjAuMS41M1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJSZWR1eCBzdGF0ZSBtYW5hZ2VtZW50IHV0aWx0eVwiLFxyXG4gIFwicmVwb3NpdG9yeVwiOiB7XHJcbiAgICBcInR5cGVcIjogXCJnaXRcIixcclxuICAgIFwidXJsXCI6IFwiZ2l0K3NzaDovL2dpdEBnaXRodWIuY29tL3NoYWRtYXgyMi9yZWFjdC11c2V0aGlzLmdpdFwiXHJcbiAgfSxcclxuICBcInB1Ymxpc2hDb25maWdcIjoge1xyXG4gICAgXCJhY2Nlc3NcIjogXCJwdWJsaWNcIlxyXG4gIH0sXHJcbiAgXCJhdXRob3JcIjogXCJNZCBTaGFkXCIsXHJcbiAgXCJsaWNlbnNlXCI6IFwiSVNDXCIsXHJcbiAgXCJidWdzXCI6IHtcclxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3NoYWRtYXgyMi9yZWFjdC11c2V0aGlzL2lzc3Vlc1wiXHJcbiAgfSxcclxuICBcImhvbWVwYWdlXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3NoYWRtYXgyMi9yZWFjdC11c2V0aGlzI3JlYWRtZVwiLFxyXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxyXG4gIFwibW9kdWxlXCI6IFwiLi9kaXN0L2luZGV4LmpzXCIsXHJcbiAgXCJtYWluXCI6IFwiLi9kaXN0L2luZGV4LmNqc1wiLFxyXG4gIFwidHlwZXNcIjogXCIuL2Rpc3QvaW5kZXguZC50c1wiLFxyXG4gIFwiZXhwb3J0c1wiOiB7XHJcbiAgICBcIi5cIjoge1xyXG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9pbmRleC5qc1wiLFxyXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvaW5kZXgudW1kLmNqc1wiLFxyXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2luZGV4LmQudHNcIlxyXG4gICAgfSxcclxuICAgIFwiLi90aGlzUHJvdmlkZXJcIjoge1xyXG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC90aGlzUHJvdmlkZXIuanNcIixcclxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9kaXN0L3RoaXNQcm92aWRlci51bWQuY2pzXCIsXHJcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3Qvc3JjL3RoaXNQcm92aWRlci9pbmRleC5kLnRzXCJcclxuICAgIH1cclxuICB9LFxyXG4gIFwic2NyaXB0c1wiOiB7XHJcbiAgICBcImRldlwiOiBcInZpdGVcIixcclxuICAgIFwiYnVpbGRcIjogXCJ0c2MgJiYgdml0ZSBidWlsZFwiLFxyXG4gICAgXCJsaW50XCI6IFwiZXNsaW50IC4gLS1leHQgdHMsdHN4IC0tcmVwb3J0LXVudXNlZC1kaXNhYmxlLWRpcmVjdGl2ZXMgLS1tYXgtd2FybmluZ3MgMFwiLFxyXG4gICAgXCJwcmV2aWV3XCI6IFwidml0ZSBwcmV2aWV3XCIsXHJcbiAgICBcInRlc3RcIjogXCJ2aXRlc3RcIlxyXG4gIH0sXHJcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xyXG4gICAgXCJAcmVkdXhqcy90b29sa2l0XCI6IFwiXjIuMi4xXCIsXHJcbiAgICBcInJlYWN0XCI6IFwiXjE4LjMuMVwiLFxyXG4gICAgXCJyZWFjdC1kb21cIjogXCJeMTguMy4xXCIsXHJcbiAgICBcInJlYWN0LXJlZHV4XCI6IFwiXjkuMS4wXCIsXHJcbiAgICBcInZpdGUtcGx1Z2luLWR0c1wiOiBcIl4zLjguMVwiXHJcbiAgfSxcclxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XHJcbiAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvamVzdC1kb21cIjogXCJeNi40LjhcIixcclxuICAgIFwiQHRlc3RpbmctbGlicmFyeS9yZWFjdFwiOiBcIl4xNi4wLjBcIixcclxuICAgIFwiQHRlc3RpbmctbGlicmFyeS91c2VyLWV2ZW50XCI6IFwiXjE0LjUuMlwiLFxyXG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTguMy4xNFwiLFxyXG4gICAgXCJAdHlwZXMvcmVhY3QtZG9tXCI6IFwiXjE4LjMuMlwiLFxyXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvZXNsaW50LXBsdWdpblwiOiBcIl43LjEuMVwiLFxyXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiXjcuMS4xXCIsXHJcbiAgICBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI6IFwiXjQuMi4xXCIsXHJcbiAgICBcImJhYmVsLWplc3RcIjogXCJeMjkuNy4wXCIsXHJcbiAgICBcImVzbGludFwiOiBcIl44LjU3LjBcIixcclxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdC1ob29rc1wiOiBcIl40LjYuMFwiLFxyXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0LXJlZnJlc2hcIjogXCJeMC40LjVcIixcclxuICAgIFwiamVzdFwiOiBcIl4yOS43LjBcIixcclxuICAgIFwianNkb21cIjogXCJeMjQuMS4xXCIsXHJcbiAgICBcInRzLWplc3RcIjogXCJeMjkuMi40XCIsXHJcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS4yLjJcIixcclxuICAgIFwidml0ZVwiOiBcIl41LjIuMTNcIixcclxuICAgIFwidml0ZXN0XCI6IFwiXjEuNi4wXCJcclxuICB9LFxyXG4gIFwiZmlsZXNcIjogW1xyXG4gICAgXCJkaXN0XCJcclxuICBdXHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3UyxTQUFTLG9CQUFvQjtBQUNyVSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTOzs7QUNGaEI7QUFBQSxFQUNFLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxFQUNYLGFBQWU7QUFBQSxFQUNmLFlBQWM7QUFBQSxJQUNaLE1BQVE7QUFBQSxJQUNSLEtBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxlQUFpQjtBQUFBLElBQ2YsUUFBVTtBQUFBLEVBQ1o7QUFBQSxFQUNBLFFBQVU7QUFBQSxFQUNWLFNBQVc7QUFBQSxFQUNYLE1BQVE7QUFBQSxJQUNOLEtBQU87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
