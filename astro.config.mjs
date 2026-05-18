import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { fileURLToPath } from "node:url";

const deployTarget = process.env.DEPLOY_TARGET ?? "local";
const isGitHubPages = deployTarget === "github-pages";
const srcPath = fileURLToPath(new URL("./src/", import.meta.url));

export default defineConfig({
  site: isGitHubPages ? "https://kbizz.github.io" : "https://rcqt.ai",
  base: isGitHubPages ? "/buildrcqtailandingpage" : "/",
  output: "static",
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        "@components": `${srcPath}components`,
        "@data": `${srcPath}data`,
        "@layouts": `${srcPath}layouts`,
        "@lib": `${srcPath}lib`,
        "@styles": `${srcPath}styles`
      }
    }
  },
  build: {
    assets: "assets"
  }
});
