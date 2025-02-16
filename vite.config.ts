import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: "app",
      remotes: {
        mfe_header: "http://localhost:5001/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: true,
  },
  server: {
    cors: true,
  },
});
