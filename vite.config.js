import { defineConfig } from "vite";

export default defineConfig({
  base: "/webgpu/",
  build: {
    target: "chrome89",
  },
});
