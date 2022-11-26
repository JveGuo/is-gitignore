import { defineConfig } from "father";

export default defineConfig({
  sourcemap: true,
  cjs: {
    input: "src",
    platform: "node",
    output: "lib",
  },
  prebundle: {
    deps: [],
  },
});
