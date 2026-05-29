# thetinyaditi — Social Media Portfolio

A single-page React portfolio for **Aditi (@thetinyaditi)**, a Berlin-based
Instagram lifestyle content creator and MBA student.

## Design

A dark, feminine aesthetic built around a curated palette:

| Token      | Colour    | Use                          |
| ---------- | --------- | ---------------------------- |
| Burgundy   | `#6B1F2A` | Dominant background          |
| Cream      | `#F5F0E8` | Contrast sections            |
| Gold       | `#C89B6A` | Accents, script headings     |

- **Playfair Display** — bold serif display headlines
- **Dancing Script** — handwritten-style section headings
- **DM Sans** — body text
- Wavy SVG dividers alternate between every section
- Rounded corners, soft gradient placeholders, no sharp borders

## Sections

Navbar · Hero · Stats · About Me · Content Pillars · Portfolio ·
Brand Collabs · Testimonials · Contact/CTA

## Motion

Built with [Framer Motion](https://www.framer.com/motion/) for a lively,
playful feel — staggered scroll reveals, floating hero blobs + portrait,
spring "pop" on pills/buttons, and hover lifts on every card. Honours the
visitor's "reduce motion" OS setting automatically.

## ✏️ Adding your own content

**You only ever edit one file: [`src/content.js`](src/content.js).**

| Want to add…        | Do this                                                                 |
| ------------------- | ----------------------------------------------------------------------- |
| **Photos**          | Drop images in `public/photos/`, then set `photos.hero` / `photos.about`. |
| **Reels / Posts**   | Copy the Instagram link and paste it into the `posts` or `reels` arrays. They render as **live Instagram embeds**. |
| **Media kit**       | Put a PDF in `public/`, then set `profile.mediaKit` (e.g. `'/media-kit.pdf'`). |
| **Brands/reviews**  | Edit the `collabs` and `reviews` arrays.                                |

Until you add real links/photos, the site shows polished gradient
placeholders, so it always looks complete. After editing, just push to
GitHub — Vercel rebuilds automatically.

## Run locally

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```

Built with [Vite](https://vitejs.dev/) + [React](https://react.dev/).
