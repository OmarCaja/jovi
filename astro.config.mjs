// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  // GitHub Pages on a custom domain (public/CNAME), so no `base` is needed.
  // https://docs.astro.build/en/guides/deploy/github/#change-your-github-url-to-a-custom-domain
  site: "https://www.tabernajovi.es",
  // Spanish at the root, English under /en/.
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
})
