import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Deployed as a GitHub Pages project site: https://phisuidara.github.io/Neil-Alan-Rodriguez-Elias/
// If a custom domain is configured later via public/CNAME, update `site` and drop `base`.
export default defineConfig({
  site: "https://phisuidara.github.io",
  base: "/Neil-Alan-Rodriguez-Elias",
  trailingSlash: "ignore",
  integrations: [sitemap()],
});
