// vite.config.js
import { defineConfig } from "file:///C:/Users/HP/Desktop/New%20folder/react-usethis/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/HP/Desktop/New%20folder/react-usethis/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///C:/Users/HP/Desktop/New%20folder/react-usethis/node_modules/vite-plugin-dts/dist/index.mjs";

// package.json
var package_default = {
  name: "react-usethis",
  version: "0.1.6913",
  description: "Optimized Redux state management utilty",
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
  module: "dist/index.js",
  main: "dist/index.cjs",
  types: "./dist/exports/index.d.ts",
  exports: {
    ".": {
      import: "./dist/index.js",
      require: "./dist/index.umd.cjs",
      types: "./dist/exports/index.d.ts"
    },
    "./thisProvider": {
      import: "./dist/thisProvider.js",
      require: "./dist/thisProvider.umd.cjs",
      types: "./dist/exports/thisProvider.d.ts"
    }
  },
  scripts: {
    dev: "vite",
    build: "cross-env NODE_ENV=production tsc && vite build",
    lint: "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    preview: "vite preview",
    test: "vitest",
    "test:react18": "cd test/env/react-18 && pnpm install && pnpm link react-usethis && pnpm vitest"
  },
  dependencies: {
    "@reduxjs/toolkit": "^2.2.1",
    "js-upsert": "^0.2.51",
    "vite-plugin-dts": "^3.8.1"
  },
  peerDependencies: {
    react: ">=18.0.0 <20.0.0",
    "react-dom": ">=18.0.0 <20.0.0",
    "react-redux": ">=8.0.0"
  },
  devDependencies: {
    "@testing-library/jest-dom": "^6.4.8",
    "@testing-library/react": "^16.0.0",
    "@testing-library/user-event": "^14.5.2",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@typescript-eslint/eslint-plugin": "^7.1.1",
    "@typescript-eslint/parser": "^7.1.1",
    "@vitejs/plugin-react": "^4.2.1",
    "babel-jest": "^29.7.0",
    "cross-env": "^10.0.0",
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
      include: ["**/*.ts", "**/*.tsx"],
      exclude: ["**/*.spec.ts"],
      outDir: "dist"
    })
  ],
  build: {
    lib: {
      entry: {
        index: "exports/index.ts",
        thisProvider: "exports/thisProvider.ts"
      },
      name: "useThis"
    },
    rollupOptions: {
      // ✅ ensure ALL React deps are externalized
      external: (id) => ["react", "react-dom", "react-redux"].some(
        (pkg) => id === pkg || id.startsWith(`${pkg}/`)
      ),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-redux": "ReactRedux"
        },
        format: "umd"
      }
    },
    sourcemap: true
  },
  server: {
    open: "/test/index.html"
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./test/setup.js",
    exclude: ["test/env/**", "node_modules/**", "dist/**"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcSFBcXFxcRGVza3RvcFxcXFxOZXcgZm9sZGVyXFxcXHJlYWN0LXVzZXRoaXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEhQXFxcXERlc2t0b3BcXFxcTmV3IGZvbGRlclxcXFxyZWFjdC11c2V0aGlzXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9IUC9EZXNrdG9wL05ldyUyMGZvbGRlci9yZWFjdC11c2V0aGlzL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcclxuaW1wb3J0IHBhY2thZ2VKc29uIGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBkZWZpbmU6IHtcclxuICAgIF9fQVBQX1ZFUlNJT05fXzogSlNPTi5zdHJpbmdpZnkocGFja2FnZUpzb24udmVyc2lvbiksXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgZHRzKHtcclxuICAgICAgaW5jbHVkZTogW1wiKiovKi50c1wiLCBcIioqLyoudHN4XCJdLFxyXG4gICAgICBleGNsdWRlOiBbXCIqKi8qLnNwZWMudHNcIl0sXHJcbiAgICAgIG91dERpcjogXCJkaXN0XCIsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6IHtcclxuICAgICAgICBpbmRleDogXCJleHBvcnRzL2luZGV4LnRzXCIsXHJcbiAgICAgICAgdGhpc1Byb3ZpZGVyOiBcImV4cG9ydHMvdGhpc1Byb3ZpZGVyLnRzXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIG5hbWU6IFwidXNlVGhpc1wiLFxyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgLy8gXHUyNzA1IGVuc3VyZSBBTEwgUmVhY3QgZGVwcyBhcmUgZXh0ZXJuYWxpemVkXHJcbiAgICAgIGV4dGVybmFsOiAoaWQpID0+XHJcbiAgICAgICAgW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIiwgXCJyZWFjdC1yZWR1eFwiXS5zb21lKFxyXG4gICAgICAgICAgKHBrZykgPT4gaWQgPT09IHBrZyB8fCBpZC5zdGFydHNXaXRoKGAke3BrZ30vYClcclxuICAgICAgICApLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICByZWFjdDogXCJSZWFjdFwiLFxyXG4gICAgICAgICAgXCJyZWFjdC1kb21cIjogXCJSZWFjdERPTVwiLFxyXG4gICAgICAgICAgXCJyZWFjdC1yZWR1eFwiOiBcIlJlYWN0UmVkdXhcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvcm1hdDogXCJ1bWRcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzb3VyY2VtYXA6IHRydWUsXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIG9wZW46IFwiL3Rlc3QvaW5kZXguaHRtbFwiLFxyXG4gIH0sXHJcbiAgdGVzdDoge1xyXG4gICAgZW52aXJvbm1lbnQ6IFwianNkb21cIixcclxuICAgIGdsb2JhbHM6IHRydWUsXHJcbiAgICBzZXR1cEZpbGVzOiBcIi4vdGVzdC9zZXR1cC5qc1wiLFxyXG4gICAgZXhjbHVkZTogW1widGVzdC9lbnYvKipcIiwgXCJub2RlX21vZHVsZXMvKipcIiwgXCJkaXN0LyoqXCJdLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCAie1xyXG4gIFwibmFtZVwiOiBcInJlYWN0LXVzZXRoaXNcIixcclxuICBcInZlcnNpb25cIjogXCIwLjEuNjkxM1wiLFxyXG4gIFwiZGVzY3JpcHRpb25cIjogXCJPcHRpbWl6ZWQgUmVkdXggc3RhdGUgbWFuYWdlbWVudCB1dGlsdHlcIixcclxuICBcInJlcG9zaXRvcnlcIjoge1xyXG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXHJcbiAgICBcInVybFwiOiBcImdpdCtzc2g6Ly9naXRAZ2l0aHViLmNvbS9zaGFkbWF4MjIvcmVhY3QtdXNldGhpcy5naXRcIlxyXG4gIH0sXHJcbiAgXCJwdWJsaXNoQ29uZmlnXCI6IHtcclxuICAgIFwiYWNjZXNzXCI6IFwicHVibGljXCJcclxuICB9LFxyXG4gIFwiYXV0aG9yXCI6IFwiTWQgU2hhZFwiLFxyXG4gIFwibGljZW5zZVwiOiBcIklTQ1wiLFxyXG4gIFwiYnVnc1wiOiB7XHJcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zaGFkbWF4MjIvcmVhY3QtdXNldGhpcy9pc3N1ZXNcIlxyXG4gIH0sXHJcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zaGFkbWF4MjIvcmVhY3QtdXNldGhpcyNyZWFkbWVcIixcclxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcclxuICBcIm1vZHVsZVwiOiBcImRpc3QvaW5kZXguanNcIixcclxuICBcIm1haW5cIjogXCJkaXN0L2luZGV4LmNqc1wiLFxyXG4gIFwidHlwZXNcIjogXCIuL2Rpc3QvZXhwb3J0cy9pbmRleC5kLnRzXCIsXHJcbiAgXCJleHBvcnRzXCI6IHtcclxuICAgIFwiLlwiOiB7XHJcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2luZGV4LmpzXCIsXHJcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC9pbmRleC51bWQuY2pzXCIsXHJcbiAgICAgIFwidHlwZXNcIjogXCIuL2Rpc3QvZXhwb3J0cy9pbmRleC5kLnRzXCJcclxuICAgIH0sXHJcbiAgICBcIi4vdGhpc1Byb3ZpZGVyXCI6IHtcclxuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvdGhpc1Byb3ZpZGVyLmpzXCIsXHJcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC90aGlzUHJvdmlkZXIudW1kLmNqc1wiLFxyXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2V4cG9ydHMvdGhpc1Byb3ZpZGVyLmQudHNcIlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgXCJzY3JpcHRzXCI6IHtcclxuICAgIFwiZGV2XCI6IFwidml0ZVwiLFxyXG4gICAgXCJidWlsZFwiOiBcImNyb3NzLWVudiBOT0RFX0VOVj1wcm9kdWN0aW9uIHRzYyAmJiB2aXRlIGJ1aWxkXCIsXHJcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgLiAtLWV4dCB0cyx0c3ggLS1yZXBvcnQtdW51c2VkLWRpc2FibGUtZGlyZWN0aXZlcyAtLW1heC13YXJuaW5ncyAwXCIsXHJcbiAgICBcInByZXZpZXdcIjogXCJ2aXRlIHByZXZpZXdcIixcclxuICAgIFwidGVzdFwiOiBcInZpdGVzdFwiLFxyXG4gICAgXCJ0ZXN0OnJlYWN0MThcIjogXCJjZCB0ZXN0L2Vudi9yZWFjdC0xOCAmJiBwbnBtIGluc3RhbGwgJiYgcG5wbSBsaW5rIHJlYWN0LXVzZXRoaXMgJiYgcG5wbSB2aXRlc3RcIlxyXG4gIH0sXHJcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xyXG4gICAgXCJAcmVkdXhqcy90b29sa2l0XCI6IFwiXjIuMi4xXCIsXHJcbiAgICBcImpzLXVwc2VydFwiOiBcIl4wLjIuNTFcIixcclxuICAgIFwidml0ZS1wbHVnaW4tZHRzXCI6IFwiXjMuOC4xXCJcclxuICB9LFxyXG4gIFwicGVlckRlcGVuZGVuY2llc1wiOiB7XHJcbiAgICBcInJlYWN0XCI6IFwiPj0xOC4wLjAgPDIwLjAuMFwiLFxyXG4gICAgXCJyZWFjdC1kb21cIjogXCI+PTE4LjAuMCA8MjAuMC4wXCIsXHJcbiAgICBcInJlYWN0LXJlZHV4XCI6IFwiPj04LjAuMFwiXHJcbiAgfSxcclxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XHJcbiAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvamVzdC1kb21cIjogXCJeNi40LjhcIixcclxuICAgIFwiQHRlc3RpbmctbGlicmFyeS9yZWFjdFwiOiBcIl4xNi4wLjBcIixcclxuICAgIFwiQHRlc3RpbmctbGlicmFyeS91c2VyLWV2ZW50XCI6IFwiXjE0LjUuMlwiLFxyXG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTguMy4wXCIsXHJcbiAgICBcIkB0eXBlcy9yZWFjdC1kb21cIjogXCJeMTguMy4wXCIsXHJcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiXjcuMS4xXCIsXHJcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJcIjogXCJeNy4xLjFcIixcclxuICAgIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjogXCJeNC4yLjFcIixcclxuICAgIFwiYmFiZWwtamVzdFwiOiBcIl4yOS43LjBcIixcclxuICAgIFwiY3Jvc3MtZW52XCI6IFwiXjEwLjAuMFwiLFxyXG4gICAgXCJlc2xpbnRcIjogXCJeOC41Ny4wXCIsXHJcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3QtaG9va3NcIjogXCJeNC42LjBcIixcclxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdC1yZWZyZXNoXCI6IFwiXjAuNC41XCIsXHJcbiAgICBcImplc3RcIjogXCJeMjkuNy4wXCIsXHJcbiAgICBcImpzZG9tXCI6IFwiXjI0LjEuMVwiLFxyXG4gICAgXCJ0cy1qZXN0XCI6IFwiXjI5LjIuNFwiLFxyXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuMi4yXCIsXHJcbiAgICBcInZpdGVcIjogXCJeNS4yLjEzXCIsXHJcbiAgICBcInZpdGVzdFwiOiBcIl4xLjYuMFwiXHJcbiAgfSxcclxuICBc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
