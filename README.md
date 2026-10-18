# Taberna Jovi

Website for **Taberna Jovi**, a British-style pub and cocktail bar in the old town of Cuenca, open since 1977. It covers classic cocktails, signature coffees and traditional montaditos.

**Live site:** [www.tabernajovi.es](https://www.tabernajovi.es)

| Page    | Spanish    | English       |
| ------- | ---------- | ------------- |
| Home    | `/`        | `/en/`        |
| Menu    | `/carta`   | `/en/carta`   |
| Gallery | `/galeria` | `/en/galeria` |

## Stack

- [Astro](https://astro.build) 7, static output, with i18n routing and view transitions (`<ClientRouter />`)
- React islands for the menu tabs, built on [shadcn/ui](https://ui.shadcn.com) with Base UI primitives
- Tailwind CSS v4
- [GSAP](https://gsap.com) + ScrollTrigger for motion
- Fonts: Bricolage Grotesque and Manrope (self-hosted via Fontsource)
- Icons: Hugeicons

## Getting started

Requires Node 22.12+ and pnpm.

```bash
pnpm install
```

```bash
pnpm dev
```

The dev server runs at http://localhost:4321/.

| Command          | What it does                       |
| ---------------- | ---------------------------------- |
| `pnpm dev`       | Start the dev server               |
| `pnpm build`     | Build the static site into `dist/` |
| `pnpm preview`   | Serve the production build locally |
| `pnpm typecheck` | Run `astro check`                  |
| `pnpm lint`      | Run ESLint                         |
| `pnpm format`    | Format with Prettier               |

To add a shadcn component (it lands in `src/components/ui`):

```bash
pnpm dlx shadcn@latest add button
```

## Editing content

| What                                               | Where                  |
| -------------------------------------------------- | ---------------------- |
| Food menu (Raciones, Tostas, Sándwiches, Montados) | `src/data/food.json`   |
| Drinks menu                                        | `src/data/drinks.json` |
| English names for menu items and categories        | `src/i18n/menu.ts`     |
| All other page text, in Spanish and English        | `src/i18n/ui.ts`       |
| Address, opening hours, Google Maps link           | `src/lib/site.ts`      |
| Photos                                             | `src/assets/`          |

- **Menu changes:** the JSON files are the Spanish source and hold the prices. A new dish only needs an entry in `src/i18n/menu.ts` if its English name differs; brand and cocktail names stay the same in both languages.
- **New text strings:** add every key to both the `es` and `en` blocks in `src/i18n/ui.ts`.
- **Hours:** times are `["opens", "closes"]`, or `null` for a closed day. The site highlights today's row using Cuenca's time zone.

## Project structure

```text
src/
├── components/
│   ├── pages/      # Home, Carta, Galeria: the page bodies, shared by both languages
│   ├── ui/         # shadcn components
│   └── menu.tsx    # menu tabs (React island)
├── data/           # menu JSON (Spanish source)
├── i18n/           # translations and language/path helpers
├── layouts/        # main layout: header, mobile menu, footer, page transitions
├── lib/            # venue facts and the per-page script helper
├── pages/          # Spanish routes
│   └── en/         # English routes (same page components)
└── styles/         # Tailwind theme and global CSS
```

Design and product decisions are documented in [`DESIGN.md`](DESIGN.md) and [`PRODUCT.md`](PRODUCT.md).

## Deployment

Every push to `main` builds and publishes the site to GitHub Pages through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), following the [Astro guide](https://docs.astro.build/en/guides/deploy/github/). `public/CNAME` sets the custom domain.

One-time setup:

1. In the repository's **Settings > Pages**, set **Source** to **GitHub Actions** and enter `www.tabernajovi.es` as the custom domain.
2. At the domain provider, add a `CNAME` record for `www` pointing to `omarcaja.github.io`.
3. Once GitHub has issued the certificate, enable **Enforce HTTPS**.
