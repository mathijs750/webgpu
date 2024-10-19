import { defineConfig } from "vite";

export default defineConfig({
  base: "https://mathijs750.github.io/webgpu/",
  build: {
    target: "esnext",
  },
  compilerOptions: {
    types: ["@webgpu/types"],
  },
});
