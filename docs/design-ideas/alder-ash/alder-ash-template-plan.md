# Alder & Ash — Multi-Page Resort Website Template
### Build spec for Codex

This is a build-ready spec for a **natural/eco resort website template**, meant to be built as a real multi-page site (not a single-page app), then packaged and listed on a template marketplace for browsing, live preview, and purchase.

---

## 1. Tech stack recommendation

For a template you're going to sell, portability and easy customization matter more than framework power. Recommendation:

- **Static HTML + CSS + vanilla JS**, no framework, no build step required to run it.
- Use a **lightweight include system only at build time** so the header/nav/footer/booking-modal aren't duplicated in every file, then output flat HTML (so buyers can drop it anywhere — no Node required to use it):
  - Simplest: **Eleventy (11ty)** with Nunjucks partials → outputs plain HTML. Buyers get static files; you get maintainable source.
  - Alternative if you want to stay framework-free even in source: a small Node script using `posthtml-include`, or even a Python script that stitches `_header.html` / `_footer.html` into each page at build time.
- **Tailwind CSS (compiled to a single CSS file)** or a hand-written CSS file with custom properties (as in the design system below) — either works; hand-written CSS keeps the template lighter and easier for buyers to restyle, which matters for a template product.
- **Vanilla JS**, one `main.js`, for nav toggle, scroll reveal, FAQ accordion, gallery lightbox, and the booking widget. No React/build tooling needed for buyers.
- **Font Awesome via CDN** + **Google Fonts** — already CDN-based, zero install for buyers.

Tell Codex: *"Build this as a static multi-page site with Eleventy for templating during development, output flat HTML/CSS/JS. No client-side framework. No backend required — booking form should be front-end only with a clear `// TODO: connect to booking API` comment where a real integration would go."*

---

## 2. File / folder structure

```
alder-ash-template/
├── index.html
├── rooms.html
├── room-detail.html          (template page — one room, linked from rooms.html cards)
├── dining.html
├── experiences.html
├── experience-detail.html    (template page — one activity)
├── gallery.html
├── blog.html
├── blog-post.html            (template page — one article)
├── faq.html
├── contact.html
├── booking.html              (dedicated multi-step booking page)
├── booking-confirmation.html
├── 404.html
├── /assets
│   ├── /css
│   │   ├── base.css          (tokens, reset, typography)
│   │   ├── components.css    (nav, cards, modal, buttons, forms)
│   │   └── pages.css         (page-specific overrides)
│   ├── /js
│   │   ├── nav.js
│   │   ├── scroll-reveal.js
│   │   ├── booking-widget.js
│   │   ├── faq-accordion.js
│   │   └── gallery-lightbox.js
│   ├── /img                  (placeholder/demo images, replaceable)
│   └── /fonts                (fallback local copies, optional)
├── /partials  (source only, not shipped — _header.html, _footer.html, _booking-modal.html, _head.html)
├── README.md                 (buyer-facing setup + customization guide)
├── LICENSE.txt
└── CHANGELOG.md
```

Every page shares the same `<head>` partial, header/nav partial, footer partial, and the "quick book" modal partial — so Codex should build those once and include them everywhere, not copy-paste per page.

---

## 3. Design system (carries the natural-resort identity across every page)

- **Palette:** `--pine:#0F2B22` (bg base), `--moss:#3E7A5C` (accent shadow), `--sand:#E8DCC3` (light surfaces/text), `--ember:#D98F4A` (CTA/accent), `--cream:#F5EFE3` (primary text)
- **Type:** `Fraunces` (serif, display/headings) + `Manrope` (sans, body/UI)
- **Components to build once, reuse everywhere:** glassmorphic nav bar (fixed, blurred), glass card, glass modal, pill button, primary CTA button, ghost button, price tag, accordion item, tab switcher, toast notification
- **Motion:** IntersectionObserver-based fade-up reveal per section (one pass, not per-card stagger unless content is truly sequential); modal scale-in; respect `prefers-reduced-motion`
- **Background:** consistent gradient wash (pine → moss glow → ember hint) applied globally via `body`, so pages feel continuous when navigating — not a plain white/gray body per page

---

## 4. Page-by-page plan

### `index.html` — Home
- Hero: headline, subcopy, two CTAs ("Check availability" → `booking.html`, "See experiences" → `experiences.html`), stat row (cabins, acres, rating, founded year)
- "Why Alder & Ash" — 3 glass cards (soaking, kitchen, trails)
- "Stay with us" teaser — 3 room-type cards linking to `rooms.html`
- Testimonial strip (add: this was missing before — 3 short guest quotes with name/location)
- Newsletter signup band
- Footer

### `rooms.html` — Accommodations
- Intro + filter row (Solo / Couple / Group / All) — client-side filter via JS, no reload
- Full grid of room cards (6+), each linking to `room-detail.html?id=` or a static per-room page if Codex prefers fully static pages over query params
- Each card: image, name, capacity, one amenity tag, price, "Book this room" → `booking.html` pre-filled

### `room-detail.html` — Individual room template
- Large gallery/hero image, room description, full amenity list, capacity, bed configuration, price, availability calendar widget (static/demo), sticky "Book now" CTA, related rooms carousel

### `dining.html` — Dining
- Restaurant intro/story
- Tabbed menu (Breakfast / Dinner / Drinks) — same interaction as before, now on its own page
- Dietary accommodation note
- Reservation CTA (link to contact or a simple reservation form — **new addition, was missing:** in-house dining reservations are separate from room booking and resorts always need this)

### `experiences.html` — Activities/attractions
- Grid of activity cards (hike, hot spring, kayak, yoga, stargazing, group campfire)
- Each links to `experience-detail.html`
- **New addition:** a "build your itinerary" note or seasonal availability note (spring/summer/fall/winter activity differences) — real resorts need this since not everything runs year-round

### `experience-detail.html` — Individual activity template
- Description, duration, price, what's included, group size limits, meeting point, booking CTA

### `gallery.html` — Gallery
- Filterable image grid (Rooms / Grounds / Dining / Activities filters)
- Lightbox on click (JS)

### `blog.html` — Journal (index)
- Blog card grid, category filter, pagination or "load more"

### `blog-post.html` — Article template
- Title, hero image, author/date, body content, related posts, newsletter CTA at end

### `faq.html`
- Accordion, grouped by category (Booking, On-site, Policies, Accessibility) — **new addition:** grouping was flat before; real FAQ pages need categories once they grow past ~6 questions

### `contact.html`
- Contact form, resort info block, **embedded map** (was flagged as missing before — add a static map image or Google Maps embed placeholder), directions/how-to-arrive section, front desk hours

### `booking.html` — Dedicated booking page (not just a modal)
Multi-step flow, since a full page can do more than the popup could:
1. **Step 1:** Individual / Couple / Group toggle
2. **Step 2:** Dates + room type + guest count (live price summary sticky sidebar)
3. **Step 3:** Add-ons (breakfast package, spa/hot-spring slot, airport pickup — **new addition**, resorts monetize add-ons heavily)
4. **Step 4:** Guest details + special requests
5. **Step 5:** Review + confirm → `booking-confirmation.html`
- Keep the **glassmorphic "quick book" modal** available site-wide from every page (as before) for a fast path, but it should deep-link into this full page for anything beyond a 1-step booking — modal = shortcut, page = full flow.

### `booking-confirmation.html`
- Confirmation number, summary of stay, "add to calendar" button, what happens next, link back to home

### `404.html`
- On-brand not-found page with search + links back to Home/Rooms/Contact

---

## 5. Cross-page requirements

- **Global header/nav** with active-page state, mobile hamburger menu, "Book" CTA always visible
- **Global footer** with sitemap links, social, newsletter, accessibility note, legal links (Privacy/Terms — **new addition**, every real resort site needs these even as placeholder pages)
- **SEO:** unique `<title>` and meta description per page, Open Graph tags, a shared `sitemap.xml` and `robots.txt` (needed for the template to feel production-ready, not a demo)
- **Accessibility:** visible focus states, alt text on all images, proper heading hierarchy per page, `prefers-reduced-motion` respected
- **Performance:** lazy-load gallery/blog images, one shared CSS/JS bundle rather than per-page duplicates

---

## 6. What your marketplace platform will need from this template

Since this is going into a template browsing/purchasing platform, ask Codex to also produce:

- **`README.md`** — install instructions, how to swap colors (point to the CSS custom properties), how to swap fonts, how to replace demo images/content, how to connect the booking form to a real backend
- **A demo-content vs. real-content split** — keep all placeholder copy clearly swappable (a `content.json` or clearly marked `<!-- REPLACE -->` comments), so buyers customize fast
- **Preview assets for your listing page:** a set of screenshots (home, rooms, booking flow, mobile view) and ideally a hosted live-preview build your platform can iframe
- **A `LICENSE.txt`** matching whatever license model your platform uses (single-use, extended, etc.)
- **A "what's included" list** for your product page: page count, component count, responsive breakpoints supported, browser support

---

## 7. Suggested brief to paste into Codex

> Build a static multi-page resort website called "Alder & Ash" using the file structure, design system, and page-by-page spec below. Use Eleventy for templating with shared header/footer/booking-modal partials, output flat HTML/CSS/JS with no required build step for the buyer. Vanilla JS only, no framework. Match the glassmorphic, natural-resort visual style described (pine/moss/ember palette, Fraunces + Manrope typography, glass nav and cards, scroll-reveal animation). Include the booking page's 5-step flow and the sitewide quick-book modal. Produce README.md, LICENSE.txt, and a sitemap.xml alongside the pages.
> [paste sections 2–6 of this document]

---

## Changes from the single-page draft

- Converted from one scrolling page with JS-swapped sections into real separate HTML files with real URLs
- Added: room-detail and experience-detail template pages, dining reservations, itinerary/seasonal note for activities, add-ons step in booking, FAQ categorization, contact page map, Privacy/Terms placeholders, 404 page, SEO/sitemap requirements, and the marketplace-facing packaging requirements (README, license, screenshots, content-swap structure)
