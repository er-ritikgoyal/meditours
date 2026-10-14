# SEO bot change log

Automated changes made by Claude's SEO bot for alispromeditours.com. Kept so
any translated copy below can get a quick native-speaker sanity check
whenever convenient — nothing here required review before shipping.

## 2026-09-04

**Fixed — duplicate meta descriptions (18 files, all treatment/destination
detail pages, all 9 locales).** Every treatment and destination detail page
was missing a `description` prop, so it silently inherited the homepage's
generic description. All 108+ affected page variants now get a unique,
already-existing, already-translated description
(`treatment.shortDescription` / the locale's destination description).

**Added — `public/sitemap.xml` + `public/robots.txt`, auto-regenerated on
every build.** New `scripts/generate-seo-files.mjs`, wired in as
`package.json`'s `prebuild` step. Reads treatment/destination slugs
straight from `src/data/*.ts` so new content is picked up automatically.
252 URLs (28 pages x 9 locales) with per-page hreflang alternates.

**Rewrote — treatment page `<title>` tags (9 files, one per locale), based
on competitor research.** Searched what's actually ranking for high-intent
queries like "heart bypass surgery cost in india" and "IVF cost in india" —
the winning pattern everywhere is `[Procedure] Cost in India [Year]`, not a
generic category name. Old: `${treatment.name} in India | Alis Pro Med Tour`.
New: `${treatment.name} Cost in India (${year}) | Alis Pro Med Tour` (year
is computed live, so it never goes stale). Brand suffix left untouched.

For the 8 non-English locales, only the added "cost + year" clause is new
translated text (a short appended fragment, not a restructured sentence) —
worth a native-speaker glance if you get a chance, listed here for that:

| Locale | New clause added |
|---|---|
| fr | `– Coût {year}` |
| es | `– Costo {year}` |
| pt | `– Custo {year}` |
| ro | `– Cost {year}` |
| ru | `– Стоимость {year}` |
| vi | `– Chi phí {year}` |
| bn | `– খরচ {year}` |
| ar | `– التكلفة {year}` |

**Flagged, not changed — needs your decision:**
- Footer "Our Doctors" link (`/doctors`) points to a page that doesn't
  exist, on every page, every locale. Needs you to pick: build a real page,
  point it at an anchor on the homepage's doctors section, or remove it.
- The site uses two different brand strings: "Alis Pro Med Tour" (all
  treatment/destination page titles, footer default) vs "AlisPro MediTours"
  (site-wide default title, JSON-LD, Open Graph, the domain name itself).
  Left both as-is since I can't tell which is the intended public name —
  worth deciding and standardizing on one.
- FAQ rich results: Google fully retired these from search as of May 2026,
  so FAQPage structured data wouldn't currently earn any visible SERP
  benefit — not implemented, not worth prioritizing right now.
- Treatment/destination pages still fall back to the logo for social share
  images. `public/images` has some matching treatment photos but several
  are 2-4MB (too large) with spaces in filenames — flagged for a follow-up
  pass rather than risking it now.
