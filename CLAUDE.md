# Előtted a Cél Egyesület — Website

Static marketing site for a Hungarian-language nonprofit (egyesület) based in Nyárádszereda, Romania. The site is the credibility layer for the org's existing Facebook activity and the conversion funnel for the annual 3,5% tax redirection campaign.

## Mission, in one sentence

Convince a first-time visitor the org is real and worth supporting; make it easy for a returning visitor to find the 3,5% form, the next event, or last week's photos.

## Brand spine

- **Name origin**: Philippians 3:13–14 — *"...ami pedig előttem van, annak nekifeszülve futok egyenest a cél felé..."*. The org's name = "the goal is in front of you".
- **Tagline (use it)**: *Testet erősítünk, lelket emelünk, közösséget építünk.*
- **Four pillars**: Segítségnyújtás · Zene · Sport · Kultúra és közösségépítés
- **Religion-adjacent, not religious**: the verse appears once, on the About page, quietly. Values come through in language, not iconography. No crosses, no scripture pinned to headers.

## Tech stack

- **Framework**: Astro (content collections for news, MD-driven)
- **Styling**: Tailwind CSS
- **Hosting**: Cloudflare Pages
- **Domain**: elottedacel.ro (already registered with Cloudflare)
- **Forms**: Cloudflare Pages Functions + Turnstile
- **CMS (later)**: Decap CMS for non-technical news editing
- **Images**: in-repo at first (`/public/img/`), migrate to Cloudflare Images if size warrants

## Commands

```bash
bun run dev       # local dev server
bun run build     # static build → ./dist
bun run preview   # preview built site
bun run deploy    # deploy to Cloudflare Pages (via wrangler)
```

## Site structure

- `/` — Kezdőlap (hero, four pillars, stats strip, latest 3 news, 3,5% banner during season, recurring events)
- `/rolunk` — About (story, leadership, the verse, legal info, IBAN, CIF, statute PDF)
- `/tevekenysegeink` — All four pillars on one page; sport section is the longest
- `/futocsapat` — Dedicated page for the running team (own program, big enough to deserve it)
- `/hirek` — News feed (Astro content collection, MD posts)
- `/hirek/[slug]` — Individual post
- `/tamogatas` — 3,5% process, IBAN, volunteering, contact form
- Footer block: contact, FB link, address — no separate Kapcsolat page

## Content collections

Defined under `src/content/`:

- `news` — `*.md` with frontmatter: `title, date, pillar, eventSeries?, photos[], photoCredit?, excerpt`
- `events` — recurring events (Újévköszöntő futás, Gitártábor, Együtt Egymásért, Meleg étel)
- `partners` — sponsor logos with `name, url, logoPath`
- `results` — race results for /futocsapat (`date, race, city, distance, athlete, time, placement`)

Tag news posts with `pillar` (one of: `segitseg`, `zene`, `sport`, `kultura`) and optional `eventSeries` (e.g. `ujevkoszonto`, `gitartabor`) so series pages can aggregate across years.

## Design tokens

### Colors

```css
--orange-500: #E8590C;   /* primary accent, from logo */
--orange-600: #D14A06;   /* hover, deeper */
--ink: #1A1A1A;          /* body text */
--ink-soft: #4A4A4A;     /* secondary text */
--cream: #FAFAF7;        /* page background, not pure white */
--line: #E8E4DC;         /* borders, dividers */
```

Orange is used **only** for: CTAs, section H2 underline accents, active states, and tasteful pull-quotes. Never for body text, never for large surfaces.

### Typography

- **Body**: Inter or Public Sans (must support Hungarian diacritics: ő, ű, á, é, í, ó, ú — verify before committing)
- **Display**: Fraunces (serif, warm, for H1/H2)
- **Sizes**: 16px base, 1.125 modular scale, 1.6 line-height for body
- Test the long ő and ű early — many fonts mangle the double-acute accent.

### Layout

- Single-column where possible, max-width ~720px for prose
- Generous whitespace
- Photo-led: every page leads with a real event photo, never a hero illustration

## Hard nos

- No glassmorphism, frosted backgrounds, gradient meshes
- No AI-generated illustrations or stock photos of generic "diverse hands"
- No emoji in nav or headings (FB-style emoji in body text is fine, but sparingly)
- No glossy SaaS gradients
- No carousels for the hero
- No cookie banner unless we add analytics that requires one
- No dark mode for v1 — adds maintenance, low value for this audience

## Language

- **Hungarian (HU)**: primary, all pages, all news posts
- **Romanian (RO)**: static pages only (Rólunk, Tevékenységek, Támogass minket). News stays HU-only.
- **English**: skip entirely
- Locale toggle in top-right of header, only on translated pages. Persist via URL prefix (`/ro/...`), not cookie.
- Set `lang` attribute on `<html>` and on Romanian sections.

## The 3,5% campaign

- Active period: roughly mid-January through May 25 (Romanian deadline). Outside this window, soft mode.
- Active mode: slim banner at top of every page, dismissible per-session, links to `/tamogatas#harom-ot`.
- The form230 link goes here: **TODO — get URL from board**.
- Three-step visual on /tamogatas: *Letöltöd → Kitöltöd → Beadod*.

## Components to build (in order)

1. `Layout.astro` with header + footer
2. `LocaleToggle.astro`
3. `Hero.astro` (homepage only — full-bleed photo + headline + tagline + primary CTA)
4. `PillarGrid.astro` (2×2 cards: icon + name + thumbnail + 1 sentence)
5. `StatsStrip.astro` (4 large numbers + labels, annual update)
6. `NewsCard.astro` and `NewsList.astro`
7. `RecurringEvents.astro`
8. `PartnerWall.astro` (grayscale logo grid)
9. `Banner35.astro` (the seasonal 3,5% banner)
10. `EventSeriesPage.astro` (template for filtered news by series)

Use Lucide icons for the four pillars: `HandHeart` (Segítségnyújtás), `Music` (Zene), `Activity` (Sport), `Users` (Kultúra).

## Photo handling

- Always credit: every image needs an `alt` AND, if applicable, a visible "Fotó: [name]" caption. Bastion Photography is a known credit — use it by default unless we know otherwise.
- Resolutions: provide 2 sizes via Astro's `<Image>` component — full (1600px wide) and thumb (640px wide).
- Format: AVIF with JPEG fallback, lazy-load below the fold.
- File naming: `YYYY-MM-DD-event-slug-NN.jpg` in `/public/img/news/`.

## Accessibility

- All interactive elements must have visible focus states
- Color contrast: orange on cream is borderline — use `--ink` for body, orange only for large headings or buttons with white text
- Skip-to-content link
- Form labels always present, never placeholder-only
- Language attribute correct on all sections

## SEO basics

- Per-page `<title>` and `<meta description>`
- Open Graph image per page (default: logo on cream)
- Sitemap via `@astrojs/sitemap`
- robots.txt allowing all
- RSS feed at `/hirek/rss.xml` from day 1
- Schema.org `Organization` markup on homepage with name, logo, contactPoint, sameAs (Facebook URL)

## Don't do these without asking

- Add JS frameworks beyond Astro
- Add analytics (we'll likely use Cloudflare Web Analytics — cookieless, no banner)
- Embed third-party widgets (Facebook feed, etc.) — they hurt performance and privacy
- Auto-translate news posts
- Change the four-pillar names or order
- Quote scripture outside the About page
- Add a chat widget, popup, or "subscribe to newsletter" modal
