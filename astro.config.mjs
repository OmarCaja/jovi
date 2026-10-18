// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  // GitHub Pages on a custom domain (public/CNAME), so no `base` is needed.
  // https://docs.astro.build/en/guides/deploy/github/#change-your-github-url-to-a-custom-domain
  site: "https://www.tabernajovi.es",
  // Matches how GitHub Pages serves directories, so links never hit its 301 redirect.
  trailingSlash: "always",
  // Three small pages: fetch each linked page as soon as its link is on screen,
  // so the ClientRouter swap doesn't wait on the network (phones have no hover).
  prefetch: { prefetchAll: true, defaultStrategy: "viewport" },
  // Spanish at the root, English under /en/.
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
