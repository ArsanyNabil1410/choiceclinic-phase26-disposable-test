import { defineConfig } from "astro/config";

// Static output, no adapter needed - matches how the real Choice Clinic site builds.
export default defineConfig({
  output: "static",
});
