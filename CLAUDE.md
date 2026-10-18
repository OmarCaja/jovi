# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Website for Taberna Jovi, a British-style pub and cocktail bar in Cuenca (since 1977). A static Astro site, deployed to GitHub Pages at https://www.tabernajovi.es.

## Commands

Package manager is pnpm (lockfile is committed; the deploy action detects pnpm from it).

```bash
pnpm dev          # http://localhost:4321/
pnpm build        # static output in dist/
pnpm preview      # serve dist/ (use this to test ClientRouter navigation; see Gotchas)
pnpm typecheck    # astro check
pnpm lint         # eslint
pnpm format       # prettier (astro + tailwind class sorting)
pnpm dlx shadcn@latest add <component>   # adds to src/components/ui
```

There is no test suite.

## Product and design context

Read these before UI or copy work. They record decisions the user made in earlier sessions:

- `PRODUCT.md`: audience, purpose (walk-in only, never a booking flow), confirmed facts (address, hours), what must not be invented (reviews, ratings, phone, dish descriptions beyond the printed menu).
- `DESIGN.md` (+ `.impeccable/design.json` sidecar): the "Lamplit Bar" system. One locked dark theme, lamp amber as the only accent, square surfaces with pill-shaped buttons only, no shadows, Bricolage Grotesque + Manrope. The user rejected a hairline Didone as hard to read.
- No em dashes or en dashes anywhere in visible text.

## Architecture

**i18n (Astro i18n routing).** Spanish is the default at `/`, English at `/en/` (`astro.config.mjs`, `prefixDefaultLocale: false`). Page bodies live once in `src/components/pages/{Home,Carta,Galeria}.astro`; `src/pages/*.astro` and `src/pages/en/*.astro` are one-line wrappers that render them. Each page component reads its language with `getLangFromUrl(Astro.url)`.
- UI strings: `src/i18n/ui.ts` (typed dictionary; every Spanish key must exist in English).
- Menu data: `src/data/food.json` and `drinks.json` are the Spanish source of truth. `src/i18n/menu.ts` maps Spanish names to English and builds the `MenuGroup[]` passed to `src/components/menu.astro` (server-rendered tabs plus a small script; no React island). Names not in the map (brands, cocktail names) stay as-is. `drinks.json` uses the misspelled key `tittle`.
- Helpers in `src/i18n/utils.ts` are named `get*` (not the docs' `use*`), because the React-hooks lint rule flags `use*` names.
- **All internal links must go through `getTranslatedPath(lang)(path)`** (or `withBase`). It adds the language prefix and `import.meta.env.BASE_URL`, so a future `base` change needs no page edits.

**Venue facts.** `src/lib/site.ts` holds the address, opening hours (label keys + `[opens, closes]` or `null` for closed) and the Maps URL. Today's hours are highlighted client-side in the Europe/Madrid time zone.

**Client-side navigation and scripts.** `<ClientRouter />` (view transitions) is in `src/layouts/main.astro`; only `<main>` animates, header and footer use `transition:animate="none"`. Because bundled scripts run once per visit, every page script registers through `onPage(setup)` from `src/lib/page.ts`, which runs `setup` on `astro:page-load` and its returned cleanup on `astro:before-swap`. New page scripts must follow this pattern, guard on their own root element, and revert GSAP `matchMedia` contexts / ScrollTriggers in the cleanup. The layout re-adds the `js` class on `astro:after-swap` (the router replaces `<html>` attributes).

**Motion.** GSAP + ScrollTrigger, always inside `gsap.matchMedia()` with `prefers-reduced-motion: no-preference`. Content is visible by default; CSS only hides `[data-reveal]` / `[data-hero]` under `.js` + no-preference, so no-JS and reduced-motion users see everything. Signature pieces:
- La casa "picture light" (`Home.astro`): pinned scrub on desktop, plays once on mobile. The defaults in `.lamp-lit` / `.casa-spill` (`global.css`) are the fully lit state.
- Gallery lightbox (`Galeria.astro`): native `<dialog>` with a shared-element FLIP from thumbnail to full screen.
- Mobile menu (layout): full-screen sheet; the page behind is made `inert`.

**Styling.** Tailwind v4 via the Vite plugin; theme tokens are CSS variables on `:root` in `src/styles/global.css` (shadcn variable names, `--radius: 0`). shadcn components use Base UI primitives (`src/components/ui`); only `buttonVariants` is used, server-side. No page ships React: the `@astrojs/react` integration is removed, so re-add it to `astro.config.mjs` before using a shadcn component as an island. Icons come from Hugeicons only, rendered as static SVG through `src/components/icon.astro`. Images are imported from `src/assets/` and rendered with `astro:assets` `<Image>` (always pass `widths` and `width`).

## Deploy

`.github/workflows/deploy.yml` (from the Astro docs) builds with `withastro/action` and publishes to GitHub Pages on every push to `main`. `public/CNAME` sets the custom domain, so `base` is intentionally unset.

## Gotchas

- A long-running `pnpm dev` can serve stale optimized deps ("504 Outdated Optimize Dep") after config or dependency changes, which breaks client scripts; restart it. Verify navigation and GSAP behaviour against `pnpm build && pnpm preview`.
- In a hidden or background browser tab, `requestAnimationFrame` pauses, so GSAP timelines and view transitions stall. Don't read that as a bug.
