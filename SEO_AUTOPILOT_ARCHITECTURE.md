# SEO Autopilot — Architecture Proposal

Status: **Phase 1 (inspection) complete. No code has been changed.** This
document is the deliverable for Phase 1 and the basis for approving Phase 2+.

---

## 0. Reality check — read this before the rest

The requested end-to-end system (crawler → AI agent → GitHub branch → PR →
merge → deploy → re-crawl) assumes a few things that **do not exist yet** in
this project. Getting these wrong would waste the most expensive parts of
the build, so they're called out first instead of buried in a section below.

| Assumption in the brief | Actual state |
|---|---|
| Git history exists, rollback via `git revert` | **This repo has zero commits.** `git log` fails with "does not have any commits yet." Everything currently in the working tree is staged but uncommitted. |
| A GitHub remote exists | **No remote is configured** (`git remote -v` is empty). There is no GitHub repository to branch, push to, or open a PR against yet. |
| `gh` CLI or GitHub API access is available | **`gh` is not installed** in this environment, and no `GITHUB_TOKEN`/similar is configured. PR automation needs one of these provisioned. |
| CI/CD exists (GitHub Actions, Netlify, Vercel) | **None found.** No `.github/workflows`, no `netlify.toml`, no `vercel.json`. |
| The site deploys from git pushes | **Almost certainly not.** `public/send-enquiry.php` (a raw PHP mail-handler for the contact form) only makes sense on classic PHP/shared hosting — and this session has Hostinger MCP tools connected (`hostinger-billing`, `hostinger-reach`), which strongly suggests the live site is hosted on **Hostinger**, deployed by uploading the `dist/` build output (FTP, File Manager, or Hostinger's Git deploy feature) rather than a git-push-to-deploy pipeline. |
| Content lives in a database or CMS | **It's all typed TypeScript** in `src/data/*.ts` (`treatments.ts`, `destinations.ts`, `hospitals.ts`, `countries.ts`) plus hand-written locale dictionaries in `src/i18n/*.ts`. There is no headless CMS, no Astro Content Collections, no database at all today. |
| SEO changes are net-new territory | **Partially done already, by hand.** `SEO-BOT-LOG.md` records a prior pass (2026-09-04) that fixed duplicate meta descriptions, added the sitemap/robots generator, and rewrote treatment page titles — all committed directly to the working tree with no branch/PR, because there was no git history to branch from. |

**Practical implication:** before Phase 8/9 (GitHub integration, auto-PR) can
do anything real, this project needs: (1) an initial commit, (2) a GitHub
repository, (3) either `gh` authenticated in whatever environment runs the
bot, or a GitHub App/PAT with repo-scoped access, and (4) clarity on how
`dist/` actually gets from a merged PR to the live Hostinger site — that
last link is outside git entirely today and needs your input, not a guess.

None of this blocks Phases 1–7 (crawler, audit engine, research, AI
recommendations) — those can be built and demoed entirely against a local
build or the local dev server. It only blocks the "safely modify → PR →
deploy → verify" tail end, which is exactly where the brief says human
approval must sit anyway.

---

## 1. Existing architecture

**Stack:** Astro 7 (static output, no SSR adapter), TypeScript (`strict`
via `astro/tsconfigs/strict`), no UI framework integration (React/Vue/etc.
not installed) — everything is `.astro` components. Dependencies are
minimal: `astro`, `bootstrap-icons`, `flag-icons`, `healthicons`, `swiper`.
No test runner, no linter config, no `@astrojs/check` installed yet.

**Rendering mode:** fully static (`astro build` → `dist/`). No
`output: 'server'`, no adapter in `astro.config.mjs`. This matters a lot for
the SEO bot: there is no server to run scheduled jobs on *inside* this
project — any crawler/dashboard/database has to live in a separate
process (see §3).

**i18n:** Astro's built-in `i18n` config (`astro.config.mjs`) with 9 locales
(`en, fr, ru, bn, ro, es, pt, vi, ar`), default locale unprefixed. Routing
is **not** Astro's automatic locale routing for content — instead every
locale has a hand-duplicated folder of pages
(`src/pages/fr/about.astro`, `src/pages/fr/treatments/[slug].astro`, etc.)
that imports a matching hand-written dictionary from `src/i18n/<locale>.ts`
and its topic-split siblings (`<locale>-home.ts`, `<locale>-pages.ts`,
`<locale>-treatments.ts`, `<locale>-destinations.ts`, `<locale>-hospitals.ts`,
`<locale>-tourism.ts`). Arabic additionally flips `dir="rtl"` in the layout.

**Content model:** no Astro Content Collections, no CMS, no database.
Structured content lives in typed arrays in `src/data/`:
- `treatments.ts` — `TreatmentData[]`, one object per treatment (slug, name,
  pricing, procedures, FAQs, cost-comparison table, etc.)
- `destinations.ts` — `Destination[]`, one per city
- `hospitals.ts` — `HospitalData[]`, partner hospitals keyed by `citySlug`
- `countries.ts` — supporting reference data

Every treatment/destination detail page is generated via
`getStaticPaths()` mapping over these arrays (`src/pages/treatments/[slug].astro`,
`src/pages/destinations/[slug].astro`, and their 8 locale-prefixed twins).

**Routing surface:** ~9 static top-level pages × 9 locales, plus
8 treatments × 9 locales + 8 destinations × 9 locales as dynamic routes —
**252 URLs total today** (this number is already computed by the sitemap
script, see below).

**Images:** a mix of `astro:assets` local imports (`src/assets/...`,
optimized/resized by Astro's build pipeline via the `<Image>` component,
e.g. `src/assets/treatments/*.jpg`) and plain files in `public/images/`
referenced as raw URL strings for content added most recently (hospitals —
see the `HospitalData.image?: ImageMetadata | string` union in
`src/data/hospitals.ts`). Files in `public/` are copied byte-for-byte and
**not** optimized or resized.

**Deployment-adjacent file:** `public/send-enquiry.php` — a PHP mail
handler for the contact form, copied as-is into `dist/` on build. This is
the strongest signal that hosting is a classic PHP-capable host (Hostinger,
per the MCP tools connected to this session), not a JS-runtime platform.

---

## 2. Existing SEO architecture

**Centralized SEO component:** `src/layouts/Layout.astro`. Every page
wraps its content in `<Layout title=... description=... ogImage=... locale=...
alternates=...>`. This one file owns:
- `<title>`, `<meta name="description">`
- canonical URL (computed from `Astro.url.pathname` + hardcoded
  `https://alispromeditours.com`)
- `hreflang` alternates (per-page, passed in as an `alternates` prop —
  **opt-in, not automatic**: a page that forgets to pass `alternates` simply
  has no hreflang tags)
- Open Graph tags + a locale map (`en_IN`, `fr_FR`, etc.)
- One JSON-LD `@graph` with a sitewide `MedicalBusiness` + `WebSite` node,
  plus a `BreadcrumbList` node **only on the homepage** — no per-page
  breadcrumb or `MedicalWebPage`/`Product`/`FAQPage` schema anywhere yet.

**Page titles/descriptions:** set per-page as literal props to `<Layout>`.
Two different authoring patterns exist:
1. Static pages (`about.astro`, `contact.astro`, ...): hardcoded string props.
2. Dynamic detail pages (`treatments/[slug].astro`,
   `destinations/[slug].astro`): computed from the matched data record, e.g.
   `` title={`${treatment.name} Cost in India (${year}) | Alis Pro Med Tour`} ``
   and `description={treatment.shortDescription}`. The 2026-09-04 pass
   specifically fixed 18 detail-page files across all locales that were
   missing the `description` prop entirely (silently inheriting the
   homepage's generic description).

**Sitemap/robots:** `scripts/generate-seo-files.mjs`, a dependency-free
Node script wired in as `package.json`'s `prebuild` step (runs on every
`npm run build`, before `astro build`). It re-derives every URL from
`STATIC_ROUTES` (a hardcoded array — must be updated by hand if a new
top-level page is added) plus slugs regex-extracted directly from
`src/data/treatments.ts` / `destinations.ts` (so new treatments/destinations
are picked up with zero code changes). Output: `public/sitemap.xml` (252
URLs, full hreflang alternates per URL) and `public/robots.txt`
(allow-all + sitemap pointer). **This is a genuinely reusable building
block for the crawler** — it's already the authoritative "what pages should
exist" list; Phase 2 should read from it rather than re-inventing route
discovery.

**Known, already-flagged gaps** (from `SEO-BOT-LOG.md`, not yet fixed):
- Footer "Our Doctors" link (`/doctors`) 404s on every page, every locale.
- Two inconsistent brand strings in the wild: "Alis Pro Med Tour" (treatment/
  destination titles, footer) vs. "AlisPro MediTours" (site default title,
  JSON-LD, OG, domain name).
- No `FAQPage` structured data (deliberately skipped — Google retired FAQ
  rich results in May 2026).
- Treatment/destination pages fall back to the site logo for social share
  images; real photos exist in `public/images` but several are 2–4MB with
  spaces in filenames.
- No Google Search Console property connected, no analytics/GA/GTM script
  found anywhere in the codebase.
- No `@astrojs/sitemap` integration (sitemap is fully hand-rolled, see above
  — not a gap exactly, just worth knowing before "fixing" it).

---

## 3. Recommended architecture

Given §0, the recommendation is to build the SEO bot as **a standalone
tool that treats this Astro repo as a target it operates on from the
outside** — not something wedged into the Astro app itself. Concretely:

```
medicaltravel/                 (this repo — the Astro site, mostly untouched)
├── src/, public/, scripts/... (existing app — see "files that should not
│                                be modified" below for the boundary)
└── seo-bot/                   (NEW — the autopilot system, own package.json)
    ├── crawler/               Phase 2
    ├── audit/                 Phase 3
    ├── db/                    Phase 4 (schema + migrations)
    ├── research/              Phase 6 (SERP/competitor lookups)
    ├── agent/                 Phase 7 (AI recommendation engine)
    ├── github/                Phase 8–9 (branch/commit/PR automation)
    ├── astro-adapter/         Phase 8 (the "understands frontmatter/data
    │                          files" abstraction layer — see §8 below)
    └── dashboard/             Phase 5 (separate Next.js app)
```

Rationale for a separate top-level folder instead of e.g. `src/seo-bot`:
- The bot needs its own `package.json` (Postgres client, a queue library,
  an AI SDK, a GitHub client) — none of that belongs in the Astro site's
  dependency tree or its `dist/` output.
- It needs to run crawls against a **built** version of the site
  (`astro preview` or the live URL), so it must be a separate process, not
  an Astro integration hook.
- Keeping it out of `src/` guarantees it can never accidentally end up in
  the static build that gets deployed to Hostinger.

**Astro-specific abstraction layer (the "don't string-replace HTML" rule):**
Because this project has no Content Collections and no frontmatter, "modify
the frontmatter" (as the brief suggests) doesn't apply literally. The real
equivalent here is: **the AI must never touch generated HTML or do
regex/string surgery on `.astro` files' markup.** It should only ever
produce one of these structured, typed edits:
1. A field change inside a `src/data/*.ts` record (e.g.
   `treatments[i].shortDescription`, `treatments[i].faqs[j].answer`) —
   the equivalent of "editing frontmatter."
2. A `title`/`description`/`ogImage` prop change on a specific `<Layout>`
   call in a specific page file — always a single, named JSX-attribute
   value, identified by page path + prop name, never a blind text search.
3. A new locale-dictionary key/value in the matching `src/i18n/<locale>-*.ts`
   file, mirrored across all 9 locales in the same change (never English-only).
4. A whole-file addition (e.g. a new FAQ block component) — always reviewed
   as HIGH RISK per §10.

This means Phase 8's "Astro code modification" work is really: write a
small TypeScript codemod layer (using the TypeScript compiler API or
`ts-morph`) that can (a) parse `src/data/*.ts` and locate/replace a specific
object property by `slug` + key path, and (b) parse a page's frontmatter
`<Layout ...>` call and replace one named prop's value — both via AST edits,
never string replacement, so formatting/comments/adjacent code survive
untouched.

---

## 4. Files that should be modified (by the bot, once approved)

- `src/data/treatments.ts`, `src/data/destinations.ts`, `src/data/hospitals.ts`
  — field-level edits only (descriptions, FAQ copy, procedure lists), via
  the AST codemod layer above.
- Individual `<Layout title=... description=... ogImage=...>` prop values in
  `src/pages/**/*.astro` and its locale twins — title/description/OG image
  changes, one prop at a time, always paired across all locale files for the
  same logical page.
- `src/i18n/*.ts` — new/updated translated strings, always changed in the
  same PR as the English source string that motivated them, one language
  per reviewer note (see the table pattern already used in `SEO-BOT-LOG.md`).
- `src/layouts/Layout.astro` — **only** for structural SEO additions that
  apply sitewide (e.g. adding `MedicalWebPage`/`BreadcrumbList` JSON-LD for
  every page, not just the homepage) — always MEDIUM/HIGH risk, never
  auto-applied.
- `scripts/generate-seo-files.mjs` — only if `STATIC_ROUTES` needs a new
  entry because a genuinely new top-level page was added (rare, and only
  ever alongside adding that actual page).
- New files: additional `<FaqAccordion>`/schema components, new alt text on
  existing `<Image>` calls, new internal `<a>` links between existing pages.

## 4b. Files that should NOT be modified

- Anything under `dist/` (build output — never hand-edited, always
  regenerated).
- `public/send-enquiry.php` — production mail-handler logic; a bug here
  breaks lead capture, and it's PHP, outside any Astro/TS tooling the bot
  has. Out of scope entirely.
- `astro.config.mjs` locale list / routing config — changing this changes
  every URL on the site; HIGH RISK, human-only, and not something an SEO
  bot should ever propose.
- `package.json` dependencies/scripts (other than the narrow, explicit case
  of registering the bot's own npm scripts) — no silent dependency changes.
- `.claude/`, `AGENTS.md`, `CLAUDE.md` — project/tooling config, unrelated
  to site SEO.
- Anything in `src/assets/` as a bulk operation (individual `alt` text
  additions on `<Image>` calls are fine and LOW RISK; replacing/re-encoding
  the images themselves is not part of this system).
- `public/images/*` binary files — the bot can propose *using* an existing
  image (e.g. as an OG image) but should never generate, download, or
  overwrite image binaries itself.

---

## 5. Proposed database structure

Postgres (Supabase acceptable for MVP, per the brief). One additions vs. the
brief's table list: `site_pages_snapshot` isn't separate — folded into
`pages` with a `crawl_run_id` FK so history is just "many rows per URL."

```sql
-- One row per site the bot manages (you likely only ever have one).
create table sites (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  production_url text not null,          -- https://alispromeditours.com
  repo_url text,                          -- filled in once a GitHub repo exists
  default_branch text default 'main',
  locales text[] not null,                -- ['en','fr','ru',...]
  created_at timestamptz default now()
);

create table crawl_runs (
  id uuid primary key default gen_random_uuid(),
  site_id uuid references sites(id),
  started_at timestamptz default now(),
  finished_at timestamptz,
  target text not null,                   -- 'local-build' | 'preview' | 'production'
  pages_crawled int,
  status text not null default 'running'  -- running|completed|failed
);

create table pages (
  id uuid primary key default gen_random_uuid(),
  site_id uuid references sites(id),
  crawl_run_id uuid references crawl_runs(id),
  url text not null,
  locale text,
  http_status int,
  response_time_ms int,
  title text,
  meta_description text,
  h1 text[],
  h2 text[],
  h3 text[],
  canonical text,
  robots_directives text,
  word_count int,
  internal_links jsonb,                   -- [{href, anchor}]
  external_links jsonb,
  images jsonb,                           -- [{src, alt, hasAlt}]
  structured_data jsonb,                  -- parsed JSON-LD graph(s) found
  open_graph jsonb,
  twitter_card jsonb,
  source_file text,                       -- e.g. src/pages/treatments/[slug].astro
  data_record_ref text,                   -- e.g. treatments.ts#fertility
  created_at timestamptz default now()
);
create index on pages (site_id, url);
create index on pages (crawl_run_id);

create table seo_issues (
  id uuid primary key default gen_random_uuid(),
  page_id uuid references pages(id),
  crawl_run_id uuid references crawl_runs(id),
  issue_type text not null,               -- 'missing_title' | 'duplicate_title' | ...
  severity text not null,                 -- CRITICAL|HIGH|MEDIUM|LOW|INFO
  details jsonb,
  first_seen_at timestamptz default now(),
  resolved_at timestamptz
);

create table keywords (
  id uuid primary key default gen_random_uuid(),
  site_id uuid references sites(id),
  page_id uuid references pages(id),
  query text not null,
  source text not null,                   -- 'gsc' | 'serp_research'
  impressions int,
  clicks int,
  ctr numeric,
  avg_position numeric,
  captured_at timestamptz default now()
);

create table competitors (
  id uuid primary key default gen_random_uuid(),
  site_id uuid references sites(id),
  keyword_id uuid references keywords(id),
  url text not null,
  rank int,
  title text,
  headings jsonb,
  word_count int,
  captured_at timestamptz default now()
);

create table search_results (
  id uuid primary key default gen_random_uuid(),
  keyword_id uuid references keywords(id),
  raw jsonb not null,                     -- full SERP API response, cached
  fetched_at timestamptz default now()
);

create table seo_audits (
  id uuid primary key default gen_random_uuid(),
  site_id uuid references sites(id),
  crawl_run_id uuid references crawl_runs(id),
  technical_score int,
  onpage_score int,
  content_score int,
  internal_linking_score int,
  overall_score int,
  scoring_breakdown jsonb,                -- itemized per §14 rules
  created_at timestamptz default now()
);

create table seo_recommendations (
  id uuid primary key default gen_random_uuid(),
  site_id uuid references sites(id),
  page_id uuid references pages(id),
  recommendation_type text not null,      -- 'title' | 'description' | 'content_gap' | ...
  what_should_change text not null,
  why text not null,
  evidence jsonb,                         -- SERP data, competitor snippets, GSC numbers
  expected_benefit text,
  risk_level text not null,               -- LOW|MEDIUM|HIGH
  confidence numeric,                     -- 0..1
  proposed_value text,                    -- the actual new title/description/etc.
  status text not null default 'pending', -- pending|approved|rejected|superseded
  created_at timestamptz default now()
);

create table seo_changes (
  id uuid primary key default gen_random_uuid(),
  site_id uuid references sites(id),
  page_id uuid references pages(id),
  recommendation_id uuid references seo_recommendations(id),
  change_type text not null,
  old_value text,                         -- NEVER null-and-forgotten; always captured
  new_value text,
  reason text,
  risk_level text not null,
  status text not null default 'proposed',-- proposed|branch_created|pr_open|merged|deployed|verified|rolled_back|failed
  git_branch text,
  commit_hash text,
  pull_request_url text,
  deployment_id uuid references deployments(id),
  created_at timestamptz default now(),
  applied_at timestamptz,
  rolled_back_at timestamptz
);

create table deployments (
  id uuid primary key default gen_random_uuid(),
  site_id uuid references sites(id),
  commit_hash text,
  method text,                            -- 'manual_upload' | 'hostinger_git' | 'ftp' | 'ci'
  status text not null default 'pending',
  triggered_at timestamptz default now(),
  completed_at timestamptz,
  verified_at timestamptz
);
```

Every table above is additive/append-only where it matters
(`seo_changes.old_value`, `crawl_runs`, `search_results`) so "never lose the
old value" and "full history" fall out of the schema instead of needing
special-cased code.

---

## 6. Proposed API structure

A small internal API (used by the dashboard, and by the agent/crawler
workers) — REST is fine for the MVP, no need for GraphQL/tRPC complexity:

```
GET    /api/sites/:siteId/overview            -> scores, counts, recent changes
GET    /api/sites/:siteId/pages               -> paginated page list + issues
GET    /api/pages/:pageId                     -> full page detail (§4 dashboard view)
GET    /api/pages/:pageId/recommendations
POST   /api/crawl-runs                        -> start a crawl (target: local|preview|prod)
GET    /api/crawl-runs/:id                     -> status/progress

GET    /api/recommendations/:id
POST   /api/recommendations/:id/approve
POST   /api/recommendations/:id/reject
POST   /api/recommendations/:id/edit           -> human edits proposed value before approving

POST   /api/changes/:id/create-pr              -> only callable once recommendation approved
GET    /api/changes/:id                        -> status, diff, PR link
POST   /api/changes/:id/rollback               -> revert commit + open rollback PR

GET    /api/keywords?siteId=...&source=gsc
POST   /api/gsc/sync                           -> pull latest GSC data (Phase 10)

GET    /api/audits/latest?siteId=...
GET    /api/audits/:id/breakdown                -> scoring rule-by-rule (§14, never opaque)
```

Auth: single-tenant to start (you're the only user) — a simple session
cookie + one admin account is enough; no need for multi-tenant RBAC in the
MVP. All secrets (GitHub token, AI provider key, SERP API key, DB URL) live
server-side only, read from environment variables, never sent to the
dashboard's client bundle (see §15).

---

## 7. Proposed AI workflow

Per-page pipeline, matching the brief's 12 reasoning steps but grounded in
what's actually crawlable here:

1. **Load page record** from `pages` (latest crawl) + its `data_record_ref`
   (which `src/data/*.ts` object, if any, backs this page).
2. **Classify intent** (informational/transactional/local) from URL pattern
   + heading structure — treatment pages are transactional/cost-intent,
   destination pages are local/comparison-intent, `/about` `/contact` are
   navigational.
3. **Pull keyword context**: existing GSC rows for this URL if available
   (Phase 10), else a seed query derived from the page's `<h1>`/title.
4. **Run SERP research** (Phase 6) for that seed query → top N organic
   results.
5. **Fetch/parse competitor pages** already returned by the SERP API
   response where possible (titles, headings, approximate word count) —
   avoid a second full crawl of competitor sites unless the SERP API
   doesn't already provide enough.
6. **Extract common topics/headings** across competitors → candidate
   "topics this page doesn't cover."
7. **Diff against the current page's own headings/word count/FAQ list**
   (already crawled in step 1).
8. **Generate recommendation(s)**, each scoped to exactly one of the change
   types in §4 (never a vague "improve content").
9. **Attach evidence** verbatim: which competitor URLs, which shared
   headings, which GSC numbers (position/impressions) drove the suggestion.
10. **Assign risk** using the fixed table in §10 (never inferred by the
    model — risk level is a lookup, not a guess).
11. **Assign confidence** as a function of evidence strength (e.g. how many
    of the top 5 competitors share the missing topic) — a documented
    formula, not a vibe.
12. **Write to `seo_recommendations`**, status `pending`, and stop. The
    agent's job ends at "propose" — it never calls the GitHub step itself
    for anything above LOW risk (§10), and even LOW-risk auto-changes still
    get logged and are always revertable.

Guardrails from §16 (no keyword stuffing, no spam pages, no scraped
competitor copy, no fake reviews, etc.) are enforced as a **post-generation
validator** the agent's own output must pass before it's allowed to reach
`seo_recommendations` at all — not just written guidance for the model to
follow on its own.

---

## 8. Security considerations

- **Secrets:** GitHub PAT/App key, AI provider key, SERP API key, DB
  connection string — server-side env vars only (dashboard backend / worker
  process), never exposed to the Next.js client bundle. Use
  `NEXT_PUBLIC_*` naming discipline in reverse: nothing SEO-bot-related
  should ever be prefixed that way.
- **GitHub App over PAT** where possible, scoped to exactly this one repo,
  with the minimum permission set: `contents: write`, `pull_requests: write`,
  nothing else (no `admin`, no org-wide scope, no `workflows` unless a CI
  file itself needs updating later).
- **Least privilege on the Astro repo side:** the bot's codemod layer
  should refuse to touch any path outside an explicit allow-list (§4), even
  if a bug in the AI step suggests otherwise — enforced in code, not just
  in the prompt.
- **Auth on the dashboard:** single admin session is enough for MVP, but
  still hash/salt if using local credentials, and rate-limit the
  approve/reject/create-pr endpoints (they trigger real external side
  effects — GitHub writes).
- **Audit log:** every `seo_changes` row already *is* an audit log entry
  (§5) — additionally log every dashboard action (who approved what, when)
  even though it's single-user today, so it's not a rework later.
- **Rate limiting on outbound calls:** SERP API and AI provider calls cost
  money per call — a bug that loops "research → recommend → research" needs
  a hard per-run cap, not just a best-effort one.
- **Never send the Hostinger MCP tools' credentials anywhere related to the
  SEO bot** — those are billing/marketing-email tools connected to *this*
  session for unrelated reasons; the SEO bot's GitHub/AI/SERP credentials
  must be entirely separate secrets, provisioned deliberately by you.

---

## 9. Deployment workflow (open questions, not decisions)

This is the one section I can't fully specify without your input, because
§0 established there's no existing pipeline to plug into. Two real options:

**Option A — Hostinger's own Git deployment feature** (hPanel → Git):
Hostinger can pull from a GitHub repo on push and run a build command
server-side. If this is set up (or gets set up), then "merge PR → deploy"
is just "merge PR" — Hostinger's own webhook does the rest, and Phase 9's
job is only to merge, not to deploy.

**Option B — manual/FTP deploy stays manual**: the bot's job stops at
"PR merged to `main`"; a person still runs `npm run build` and uploads
`dist/` (FTP/File Manager) themselves. In this case Phase 11
("re-crawl and verify") needs to crawl **after you say deploy happened**,
not immediately after merge — the bot should not assume merge == live.

Either way, the **recommended sequencing** stays:
recommendation → (approve) → branch → codemod edit → `astro build` locally
as validation (§11) → commit → PR → human review/merge → *(deploy per
whichever option above)* → re-crawl the production URL → mark `seo_changes`
row `verified` only if the live HTML actually reflects the change.

**Please tell me:** how do you currently push a change live today — do you
FTP the `dist/` folder up, use Hostinger's File Manager, or has Hostinger's
Git integration already been configured? That answer decides whether Phase
9 needs to build anything deploy-related at all, or can stop at "PR merged."

---

## 10. What I found / what needs to be built / what's reusable

**Found:**
- A clean, small Astro 7 static site, strict TypeScript, no framework
  bloat, genuinely well-organized `src/data/*.ts` as the content source of
  truth.
- A working, if manual, SEO baseline: centralized `Layout.astro`, a custom
  sitemap/robots generator already wired into the build, and a real prior
  SEO pass documented in `SEO-BOT-LOG.md`.
- **Zero git history, no GitHub remote, no CI/CD, no `gh` CLI available.**
  The full "branch → PR → merge → deploy" loop the brief describes cannot
  run today — it needs bootstrapping first (see §0, §9).
- No database, no dashboard, no SERP/AI provider credentials configured
  anywhere in this project yet — Phases 4–7 are fully greenfield.

**Needs to be built (in the order the brief itself proposes, §17):**
Phase 1 (this doc) → crawler → audit engine → DB → dashboard → research →
AI recommendations → GitHub integration → auto-PR → GSC → scheduled audits
→ controlled autonomous optimization. Nothing skipped, nothing reordered.

**Reusable as-is:**
- `scripts/generate-seo-files.mjs`'s route-discovery logic (§2) — the
  crawler's page list for Phase 2 should start here, not from scratch.
- `src/layouts/Layout.astro`'s prop contract (`title`, `description`,
  `ogImage`, `alternates`) as the schema for what a "change" to page
  metadata actually looks like.
- `SEO-BOT-LOG.md`'s format as the interim human-readable change log until
  the `seo_changes` table + dashboard exist.

**Proposed first MVP milestone (Phase 2+3 only):**
A crawler that runs against `astro preview` (local build, not production)
and produces the `pages` + `seo_issues` tables' worth of data as a JSON
report — no database yet, no dashboard yet, just proof that detection is
accurate against this specific site's real output (252 URLs, 9 locales,
the known existing issues from §2 as a validation set: it should re-find
the "Our Doctors → /doctors 404" and confirm the duplicate-description bug
is actually fixed). That's small enough to build and check in one sitting,
and it's the thing every later phase depends on being correct.

---

**Waiting for your go-ahead before Phase 2**, plus answers to:
1. Deployment: FTP/File Manager, or has Hostinger Git deploy been set up?
2. Do you want a GitHub repo created for this project now (I'd need you to
   create it / provide `gh` auth, since I don't have GitHub write access
   from here)?
3. Do you already have (or want to provision) a Supabase project, an AI
   provider key, and a SERP API key (e.g. SerpApi/DataForSEO), or should
   the MVP milestone above (crawler + JSON report, no DB) come first while
   those get sorted?
