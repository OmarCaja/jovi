# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary:** people in or near Cuenca's old town deciding where to go right now or tonight: for a specialty coffee in the afternoon, a dinner of raciones and montados, or a cocktail late. Many check on a phone while walking the casco antiguo.
- **Tourists:** visitors to the old town, many not Spanish speakers. The printed menu already carries English, French and German translations, which confirms this audience.
- **Locals and regulars:** people who already know the bar and come back for the menu or to share the link.

Their job: decide whether Jovi is the place, see what it serves and what it costs, and find the way there.

## Product Purpose

The website of Taberna Jovi, a British-style pub and cocktail bar in Cuenca's historic old town, open since 1977. It exists to make people want to come in and to make coming in easy: show the place, show the full menu with prices, and point the way there.

Success means a visitor who arrives walking in. Jovi works on walk-in: **no reservations**, so the site never pushes a booking flow.

## Positioning

Since 1977, a mid-century British pub interior in Cuenca's old town (curved wooden bar, stained-glass lamps, leather stools, framed paintings on striped wallpaper) serving classic and house cocktails, specialty coffees and traditional montados. It holds a Guía Repsol Solete, and Condé Nast Traveler has run a piece calling it the best cocktail bar in inland Spain.

## Operating Context

- Visitors usually come on a phone while walking the old town, often deciding in the moment.
- The day runs from afternoon coffee through dinner to late cocktails.
- There is a terrace in the old town and an indoor bar.
- The printed menu is the source for food; the drinks list is kept as data in the project.

## Capabilities and Constraints

- Three pages: home (`/`), menu (`/carta`) and gallery (`/galeria`).
- **Menu:** food (Raciones, Tostas, Sándwiches, Montados) in `src/data/food.json`, transcribed from the printed menu, and drinks in `src/data/drinks.json`. It includes allergen numbers 1-14 with a legend, half portions on request, supplements at 0,50 €, bread at 0,50 € per person, and VAT included in prices.
- The menu can deep-link to a tab, for example `/carta?tab=coffees#beber`.
- "Cómo llegar" opens a Google Maps search for Taberna Jovi Cuenca.
- **Languages:** Spanish at `/` and English at `/en/`, using Astro i18n routing.
  - UI strings live in `src/i18n/ui.ts`.
  - English for the menu data lives in `src/i18n/menu.ts`; the JSON files stay the Spanish source.
  - Brand and cocktail names are not translated. The Traveler headline is shown translated on the English page.
- **Address and hours** come from the Google Maps listing (checked 2026-10-18) and are kept in `src/lib/site.ts`.
  - Address: C. Colmillo, 10, 16001 Cuenca.
  - Hours: closed Monday and Tuesday; Wednesday and Thursday 19:00 to 2:00; Friday 19:00 to 3:00; Saturday 16:00 to 3:00; Sunday 16:00 to 2:00.
  - On weekdays the bar opens in the evening, so afternoon coffee is a weekend thing.
- **Pending facts, never to be invented:** the phone number is not shown on the site yet.
- Stack in use: Astro with React islands, Tailwind v4, shadcn/ui (Base UI) and GSAP, built with pnpm.

## Brand Commitments

- Name: **Taberna Jovi** (also "Jovi"), Cuenca, since 1977.
- A house cocktail is named "Jovini". The menu also has a "Jovi" sandwich and coffee, and an "Antonio Chicote" sandwich.
- Voice: plain, warm Spanish; it names real things (wood, stained glass, the bar), not marketing filler.
- Brief adjectives from the owner: minimalist, elegant, traditional, with a modern and stylish edge in typography.

## Evidence on Hand

- **Photos:** the venue's own photography in `src/assets/`:
  - `gallery/4.jpg`: bar interior
  - `horse.jpeg`: horse painting
  - `gallery/1.jpg` and `gallery/2.jpg`: terrace
  - `gallery/3.jpg`: dark drink at the bar
  - `sandwiches.jpg`: sandwiches served on the bar
- **Press and listings, all real links:**
  - Condé Nast Traveler article
  - Guía Repsol Solete
  - Visita Cuenca (the link redirects to a login; it needs a public URL)
  - Toppings and Salads listing
  - Tripadvisor
  - Restaurant Guru
  - Instagram @tabernajovi
- **Absent, never to fabricate:** testimonials or quotes from customers, ratings or review counts, food photos per dish, and descriptions of dishes beyond the printed menu.

## Product Principles

1. **Get them through the door.** Every page ends a step away from walking in: the menu or the way there. No booking funnel.
2. **The real place is the proof.** Use the venue's own photos and real press; never stock imagery or invented praise.
3. **The menu is the product.** Keep it complete, accurate to the printed menu, priced and with allergens, and quick to scan on a phone.
4. **Heritage without nostalgia.** Fifty years of history, shown with restraint rather than pastiche.
5. **Bilingual by default.** Spanish first, English for the old town's visitors.

## Accessibility & Inclusion

- The allergen information (EU 14) must stay present and legible on the menu.
- The site is used on phones outdoors and in dim bars, so readable type and strong contrast are required. The owner rejected a hairline display face as hard to read.
