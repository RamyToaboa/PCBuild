# VOLTWORKS — Custom PC Shop

A dark, workshop-styled e-commerce site for a custom PC shop and electronics store.
Built with **React 18 + TypeScript + Vite + Tailwind CSS v4**.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
```

## Folder structure

```
voltworks/
├── index.html                 # Entry HTML — Google Fonts, title, meta
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite + @tailwindcss/vite plugin
├── tsconfig.json
│
└── src/
    ├── main.tsx               # React bootstrap (renders <App />)
    ├── App.tsx                # ★ Page assembly + all cart state lives here
    ├── index.css              # ★ Design system: colors, fonts, keyframes,
    │                          #   ambient layers, reduced-motion fallbacks
    ├── hooks.tsx              # useScramble, Reveal, useCountdown,
    │                          # useCountUp, usePrefersReducedMotion
    │
    ├── data/
    │   └── catalog.ts         # ★ ALL content: products, images, deals,
    │                          #   builder parts, brands, reviews, ticker
    │
    └── components/
        ├── Nav.tsx            # Scrolling status ticker + sticky nav + mobile menu
        ├── Hero.tsx           # Scramble headline, Ken Burns rig photo,
        │                      #   spec bars, featured build CTA
        ├── Categories.tsx     # Department rail (synced with shop filters)
        ├── Shop.tsx           # Search + category chips + sort + product grid
        ├── Builder.tsx        # 5-step PC configurator, sticky summary,
        │                      #   live wattage vs PSU capacity meter
        ├── Deals.tsx          # Flash deals + ticking weekend countdown
        ├── Extras.tsx         # Brand marquee, reviews, services, newsletter
        ├── CartDrawer.tsx     # Slide-out cart: qty steppers, subtotal,
        │                      #   demo checkout with order number
        ├── Footer.tsx         # Link columns, hours, payments, socials
        └── Icons.tsx          # Hand-drawn inline SVG icon set
```

## Where to make common changes

| Task                          | File                          |
| ----------------------------- | ----------------------------- |
| Add / edit a product          | `src/data/catalog.ts` → `PRODUCTS` |
| Change prices / deal %        | `src/data/catalog.ts` → `DEALS` |
| Add a builder part option     | `src/data/catalog.ts` → `BUILDER_GROUPS` |
| Change colors / fonts         | `src/index.css` → `@theme` block |
| Add a new page section        | Create `src/components/X.tsx`, render it in `src/App.tsx` |
| Cart behavior / checkout      | `src/App.tsx` (state) + `src/components/CartDrawer.tsx` |
| Swap product photos           | `src/data/catalog.ts` → `IMG` object |
| Ticker / marquee copy         | `src/data/catalog.ts` → `TICKER`, `BRANDS` |

## Going further

- **Local images** — photos are currently remote URLs. To bundle them, create
  `public/images/`, drop files in, and update the `IMG` paths in `catalog.ts`
  to `"/images/gpu.jpg"`.
- **Real backend** — swap `useState` cart in `App.tsx` for a store
  (Zustand/Redux) + API calls; the `onAdd` payload shape is already
  `{ id, name, price, img, detail }`.
- **Persistence** — cart survives reloads with a `useEffect` writing
  `lines` to `localStorage`.
- **Routing** — product detail pages: add `react-router-dom` (already in
  dependencies) and route `/:id` against `PRODUCTS`.

## Design tokens (src/index.css)

- Display type: **Chakra Petch** · Body: **IBM Plex Sans** · Mono: **IBM Plex Mono**
- `--color-ink` deep petrol background · `--color-amber` primary accent
  · `--color-volt` teal highlights · `--color-ember` alerts
- All animation respects `prefers-reduced-motion`.
