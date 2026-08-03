# Bazario — Vibrant E-Commerce Marketplace UI

A colorful, fully responsive e-commerce homepage front end, inspired by the energy of large marketplaces like Amazon, built with plain **HTML, CSS, and JavaScript** — no frameworks, no build step.

## 📁 Project structure

```
bazario/
├── index.html    → Page markup (structure & content)
├── style.css     → All styling (layout, colors, animations, responsiveness)
├── script.js     → Interactivity (product rendering, add-to-cart, image fallback)
└── README.md     → This file
```

## 🚀 How to run it

No installation or server required.

1. Download/keep all three files (`index.html`, `style.css`, `script.js`) in the **same folder**.
2. Double-click `index.html`, or right-click → **Open with** your browser.

That's it — the page loads directly from the file system.

*(Optional, for a local dev server instead of file:// — e.g. if you want live-reload tooling later: run `npx serve .` or `python3 -m http.server` from inside the folder, then visit `http://localhost:PORT`.)*

## ✨ Features

- **Sticky header** with logo, search bar, and cart icon
- **Category navigation bar** with quick links
- **Animated hero section** with floating product price cards
- **Scrolling flash-deals ticker** (CSS marquee animation)
- **Shop-by-category** icon grid
- **Dynamic product grid** — rendered from a JS data array, not hardcoded HTML
- **Working "Add to cart"** — clicking a product's button increments the cart badge and shows a confirmation state
- **Graceful image fallback** — if a product photo fails to load (e.g. no internet), a colorful gradient placeholder is generated automatically via inline SVG, so the layout never breaks
- **Fully responsive** — adapts down to mobile (grid columns collapse, hero visual hides on small screens)

## 🎨 Design system

| Token | Value | Use |
|---|---|---|
| `--teal` | `#0B3D3A` | Header, footer, primary dark surfaces |
| `--marigold` | `#F5A623` | Primary accent, CTAs, sale badges |
| `--coral` | `#FF6B5B` | Secondary accent, ticker, discount tags |
| `--cream` | `#FFF8EC` | Page background |
| `--mint` | `#1FA37E` | Price highlights, success states |
| `--ink` | `#16221F` | Body text |

**Fonts:** [Baloo 2](https://fonts.google.com/specimen/Baloo+2) (headings, playful & bold) + [Inter](https://fonts.google.com/specimen/Inter) (body, clean & readable), loaded via Google Fonts CDN in `index.html`.

## 🛠 How it works (quick tour)

- `script.js` holds a `products` array (name, category, image URL, prices, rating). On page load, it maps this array into product card HTML and injects it into the `#prodGrid` container in `index.html` — so adding a new product is just adding one object to the array.
- The `add-btn` click handler uses event delegation on the grid container, so it works for every product card without attaching individual listeners.
- The `placeholder()` function builds an inline SVG gradient as a data URI, used as the `onerror` fallback for any `<img>` that fails to load.

## 📝 Notes

- Product photos are pulled from Unsplash URLs — an internet connection is needed to see the real images; otherwise the gradient fallback kicks in automatically.
- This is a front-end demo only — there's no backend, so cart/search/checkout are illustrative (UI only), not functional e-commerce logic.

---
Built as a demo project.
