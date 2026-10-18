---
name: Taberna Jovi
description: A lamplit British pub in Cuenca's old town, since 1977.
colors:
  bottle-green: "oklch(0.17 0.02 160)"
  bottle-green-raised: "oklch(0.21 0.025 160)"
  bottle-green-lifted: "oklch(0.25 0.025 160)"
  lamp-amber: "oklch(0.8 0.12 75)"
  bone: "oklch(0.94 0.012 85)"
  bone-muted: "oklch(0.76 0.015 100)"
  hairline: "oklch(0.94 0.012 85 / 14%)"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 5vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Manrope Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "0.005em"
  body-sm:
    fontFamily: "Manrope Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.005em"
  label:
    fontFamily: "Manrope Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "0.005em"
rounded:
  none: "0px"
  pill: "9999px"
spacing:
  gutter: "16px"
  gutter-md: "32px"
  tile-gap: "16px"
  tile-gap-md: "20px"
  block: "48px"
  section: "96px"
  section-md: "128px"
components:
  button-primary:
    backgroundColor: "{colors.lamp-amber}"
    textColor: "{colors.bottle-green}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "48px"
  button-outline:
    backgroundColor: "{colors.bottle-green}"
    textColor: "{colors.bone}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "48px"
  nav-bar:
    backgroundColor: "{colors.bottle-green}"
    textColor: "{colors.bone-muted}"
    typography: "{typography.label}"
    height: "64px"
  bento-tile-tinted:
    backgroundColor: "{colors.bottle-green-raised}"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "40px"
  menu-tab:
    textColor: "{colors.bone-muted}"
    typography: "{typography.body-sm}"
  menu-tab-active:
    textColor: "{colors.bone}"
---

# Design System: Taberna Jovi

## Overview

**Creative North Star: "The Lamplit Bar"**

The system is the bar itself after dark. Bottle-green surfaces stand in for the panelled walls and striped wallpaper, bone text for the paper of a menu card, and one amber, taken from the stained-glass lamps, for every point of light that asks to be followed. The venue's own photographs carry the atmosphere; the interface stays quiet around them, as a good bar stays quiet around its drinks.

Density is gallery-airy: generous section breathing room, few elements per screen, one message per section. Layouts are asymmetric but calm: a full-bleed photograph opening the home page, a painting set beside its story, a bento of real photos with one tinted tile. Motion is a slow reveal, as when the eyes adjust to a dim room: content fades up once, the hero photograph settles from a slight zoom, and nothing loops.

The owner rejected a hairline Didone as hard to read on dark. Legibility in a dim bar or outdoors on a phone outranks typographic flourish.

**Key Characteristics:**
- One dark theme, locked for the whole site; no light sections.
- One accent, lamp amber, reserved for actions, emphasis and the occasional display numeral.
- Square corners on every surface; buttons alone are pills.
- Flat surfaces; depth comes from photography and tonal steps of green, never from shadows.
- Real venue photography only.

## Colors

A night palette from one room: three steps of bottle green, a bone for text, and a single lamp-amber accent.

### Primary
- **Lamp Amber** (`lamp-amber`): the only accent. It is used for:
  - primary button fills
  - the active tab underline and inline link labels with arrows
  - the coloured emphasis in the hero headline ("desde 1977")
  - the cocktail count numeral
  - menu sub-section headings
  - text selection and focus rings

### Neutral
- **Bottle Green** (`bottle-green`): the page background on every page, and the text colour on amber buttons.
- **Raised Bottle Green** (`bottle-green-raised`): the tinted bento tile and the menu section band; one step up for grouping without a border.
- **Lifted Bottle Green** (`bottle-green-lifted`): hover fill on the tinted tile.
- **Bone** (`bone`): headings, body copy on photos, menu item names.
- **Muted Bone** (`bone-muted`): secondary text such as descriptions, prices, allergen lines, nav links at rest and footer text. It passes AA on all three greens.
- **Hairline** (`hairline`): 1px dividers (nav and footer rules, the tab list baseline, the dotted price leaders, outline button borders).

### Named Rules
**The One Lamp Rule.** Amber is the only chromatic colour on the site. Nothing else gets a hue. A second accent, a status colour or a tinted badge breaks the room.

**The Night Lock Rule.** The site has one dark theme. No section switches to a light background mid-scroll.

## Typography

**Display Font:** Bricolage Grotesque Variable (with ui-sans-serif, system-ui)
**Body Font:** Manrope Variable (with ui-sans-serif, system-ui)

**Character:** Bricolage is a characterful modern grotesque with optical sizing that tightens it at large sizes; at semibold it reads solid and current against dark green. Manrope is calm, open and geometric, so menus and body copy stay effortless to scan.

### Hierarchy
- **Display** (600, 48px rising to 72px, 1.1): the home hero headline and the page titles on Carta and Galería. Two lines maximum. Emphasis comes from amber colour, not italics (Bricolage has no italic).
- **Headline** (600, 36px rising to 48px, 1.1): section headings ("Un rincón británico en Cuenca", "Hablan de nosotros", "Para comer"). The featured press quote uses this size at weight 500.
- **Title** (600, 30px, 1.1): bento tile titles. Menu sub-section titles use 24px in amber, and press source names use 24-30px at weight 500.
- **Body** (400, 18px, 1.625): lead paragraphs under headings, with a measure capped near 42-48ch.
- **Body small** (400, 16px, 1.5): menu items, tile copy and buttons.
- **Label** (500, 14px): nav links, link labels with arrows, allergen and footer text.
- **Display numeral:** the cocktail count is set at 128px, semibold, tracked to -0.04em, in amber.

### Named Rules
**The Readable Room Rule.** No hairline or high-contrast display faces. Every role must read on dark green in dim light at arm's length.

**The No Fake Italic Rule.** The display face has no italic; never apply `font-style: italic` to it. Emphasise with amber or weight.

## Layout

The page sits in a centred container up to 1280px wide, with 16px gutters on mobile and 32px from 768px. Sections breathe at 96px of vertical padding, rising to 128px from 768px. Headings sit 48px above their content.

Section compositions vary deliberately, and each family appears once per page:
- a full-bleed photographic hero with copy anchored bottom-left over a scrim
- an asymmetric 5/6 split (image, gap, story)
- an asymmetric bento: one tall tinted tile, one wide photo tile, two single photo tiles, with 16px gaps rising to 20px
- a press block: featured quote plus two grouped link columns
- a centred closing call to "Cómo llegar"

The menu uses a tabbed list flowing in 1, 2 or 3 columns. The gallery is a masonry of 1, 2 or 3 columns with mixed aspect ratios.

Every multi-column layout collapses to a single column below 768px. Heroes use `min-height: 100dvh`. The fixed nav is 64px tall, and anchors are offset to clear it.

## Elevation & Depth

The system is flat. There are no shadows anywhere. Depth comes from three tonal steps of bottle green, from photography, and from bottom-up or left-to-right gradient scrims of bottle green over photos, which also secure text contrast. The nav uses an 85% bottle-green fill with a backdrop blur, the only translucent surface, so the photography passes softly underneath as you scroll.

### Named Rules
**The No Shadow Rule.** Never add a box-shadow. Separate with a tonal step, a hairline or space.

## Shapes

Surfaces are square (0px radius): tiles, images, tabs, the nav bar and every container. Buttons are the single exception: full pills (9999px), so the few things you can press read as objects in the room, like a coaster on the bar. Focus rings follow the shape they surround. Borders are 1px hairlines, used sparingly: the nav and footer rules, the tab baseline, the outline button and the dotted price leaders. Photos are cropped to fixed aspect ratios (4:5 portrait, 16:9 or 3:2 landscape, square) with `object-fit: cover` and a chosen focal point. The sandwiches photo is shown uncropped because its subject reaches the frame edge.

### Named Rules
**The Pressable Pill Rule.** Only buttons are round. Never round a tile, image, tab or card; never square a button.

## Components

### Buttons
Sharp and quiet, in a pill: a block of lamp light, or a fine outline.
- **Shape:** full pill (9999px), 48px tall, label 16px semibold, never wrapping. The nav variant is 40px.
- **Icons:** a 2px chevron trails "Ver la carta" and slides 4px right on hover. A location pin (Hugeicons, 1.75 stroke) leads "Cómo llegar". The icon side gets 20px of padding and the label side 28px.
- **Primary:** Lamp Amber fill with Bottle Green text. Hover warms it toward Bone (22% mix) over 300ms (`cubic-bezier(0.16, 1, 0.3, 1)`). Pressing nudges it 1px down.
- **Outline:** a 30% Bone border over 30% Bottle Green with a light backdrop blur, so it holds over photographs, with Bone text. Hover raises the border to 60% and adds a 10% Bone wash.
- **Focus:** an amber ring of 3px at 50% opacity, following the pill.
- **Labels:** one label per intent, used everywhere: "Ver la carta" for the menu, "Cómo llegar" for directions. The closing "Cómo llegar" uses the primary fill.

### Navigation
A fixed 64px bar in translucent bottle green with a backdrop blur, a hairline bottom rule and safe-area padding at the top.
- **Desktop (768px and up):** the wordmark sits left in Bricolage semibold. Links in the centre are 14px Manrope in Muted Bone, turning Bone on hover and on the current page. "Cómo llegar" sits right as the outline button.
- **Mobile:** the wordmark and a borderless 44px round menu button with two hairline bars, which rotate into an × (500ms, `cubic-bezier(0.16, 1, 0.3, 1)`).

### Mobile Menu (signature)
The bar after dark, in your pocket.
- **Sheet:** a full-screen Bottle Green sheet under the header, over the bar photo at 35% behind a bottle-green gradient. The header turns solid while the menu is open.
- **Links:** Inicio, La casa, Carta and Galería in Bricolage at 44 to 60px (`clamp(2.75rem, 13vw, 3.75rem)`). The current page shows in amber.
- **Thumb zone:** today's hours ("Hoy 16:00 a 2:00" with the time in amber), the address, a 56px full-width amber "Cómo llegar" pill and a 56px round Instagram button, all inset by the bottom safe area.
- **Motion:** the sheet drops in like a blind (clip-path, 0.6s `expo.out`) as the photo settles from 108%. Each link rises out of its own mask, 60ms apart, and the bottom block fades up. Closing is faster (0.4s `power3.inOut`). Under reduced motion it becomes a 0.2s fade.
- **Behaviour:** the page behind becomes inert and stops scrolling. Focus moves to the first link. Escape closes the menu and returns focus to the button, choosing a link closes it, and widening past 768px closes it.

### Touch
Every tap target is at least 44px. The menu tabs become one horizontally scrollable row on mobile, with 44px tabs; a partly cut-off last tab hints that the row scrolls.

### Bento Tiles
- **Photo tile:** a photo fills the tile under a bottle-green gradient scrim, with the title, one line of copy and an amber link label anchored bottom-left. The whole tile is the link. On hover the photo scales to 103% over 700ms (`cubic-bezier(0.16, 1, 0.3, 1)`) and the arrow slides 4px right.
- **Tinted tile:** a Raised Bottle Green fill with 40px padding and a large amber numeral. Hover lifts it to Lifted Bottle Green.

### Menu (signature)
- **Tabs:** a line-style tab list, 16px Manrope. Muted Bone at rest, Bone when active, with a 2px amber underline. Tabs wrap onto two lines on mobile.
- **Item row:** the name in Bone, a dotted Hairline leader, then the price in Muted Bone with tabular figures and no wrapping. An optional 14px description and allergen line follows in Muted Bone.
- **Sub-section titles:** 24px Bricolage in amber.
- **Notes and allergen legend:** 14px Muted Bone, set below a hairline.
- **Deep links:** `?tab=<id>` selects a tab.

### Link Label
Amber text in 14-16px Manrope with a 1.5px-stroke arrow (Hugeicons) that slides on hover. External links use an up-right arrow and nudge diagonally.

### Press Link Row
A source name in Bricolage at 24-30px and weight 500, with a Muted Bone descriptor below and an up-right arrow aligned right. The name turns amber on hover. Rows are grouped under small Muted Bone group labels and separated by space, never by dividers.

### The Picture Light (signature, home "La casa")
The lamp switches on.
- **Build:** the horse painting photo is stacked twice. Underneath is the wall in the dark (brightness 16%, saturation 60%). On top is the lit photo, shown through an elliptical mask hung from the picture lamp at 50% 9%. A warm amber soft-light glow and a wide bulb hotspot sit over both.
- **Desktop:** the section pins for 110% of a viewport and the scroll acts as the dimmer: scrub 0.8, refreshed before other triggers. The bulb stutters on twice like warming tungsten. The cone pours down the wall (mask 0 to 150% and 170%, `power2.inOut`) while the photo settles from 106%. The glow peaks, then relaxes, and the heading, text and link rise in at 62% of the scroll.
- **Mobile:** no pinning. The same sequence plays once on arrival at 0.55× speed, after the flicker.
- **Fallback:** the markup's default is the fully lit wall, so without JS or with reduced motion the photo is simply lit.

### Gallery Lightbox
The thumbnail becomes the photo.
- Opening a gallery photo flies the thumbnail to the centre of the screen. Its crop opens to the full uncropped picture (clip-path inset to 0) over 0.75s `expo.out`. The 95% bottle-green backdrop fades in over 0.5s and the round controls fade in after 0.35s.
- Closing reverses the move into the current thumbnail in 0.5s `power3.inOut`; exits run faster than entrances. If that thumbnail is off screen, the photo fades and shrinks to 96% instead.
- Moving between photos drifts the new one 48px in from the direction of travel over 0.45s.
- Under reduced motion, every step becomes a 0.2s opacity fade.

## Do's and Don'ts

### Do:
- **Do** use the venue's own photographs, cropped with a deliberate focal point; scrim with bottle green when text sits on them.
- **Do** keep amber for things that act or matter: actions, emphasis, the active tab, link labels.
- **Do** keep every surface square and flat; reserve the pill for buttons.
- **Do** step through the three bottle greens for grouping before reaching for a border.
- **Do** honour reduced motion: content must be fully visible without animation, and reveals only hide content when motion is allowed and JS is running.
- **Do** keep hero headlines to two lines and leave the call to action visible without scrolling.

### Don't:
- **Don't** use a hairline or high-contrast display face such as Bodoni or Didot; the owner rejected it as hard to read.
- **Don't** apply faux italics to Bricolage Grotesque.
- **Don't** introduce a second accent colour, a light section, rounded tiles or images, or any box-shadow.
- **Don't** use stock photography, illustrations or decorative SVG scenes.
- **Don't** put pills or labels over photos, or add photo-credit captions.
- **Don't** add looping or perpetual animation; motion happens once, on entry or on hover.
