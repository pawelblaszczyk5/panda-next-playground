import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./app/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {},
  },
  conditions: {
    extend: {
      test: "[data-test]",
    },
  },
  hooks: {
    "config:resolved": (config) => {
      delete config.config.patterns;

      console.log(config.config.conditions);
    },
  },
  strictTokens: true,
  outdir: "styled-system",
});
