# Task list: remaining work

Everything left to build, broken into small tasks. We tick them off as we go, so this file shows **what's done, what's next, and how fast we're moving.**
The *why* behind decisions lives in [PLAN.md](PLAN.md) and [BUILD_LOG.md](BUILD_LOG.md); this file is only the *what*.

**How to read it**

- `[ ]` to do · `[x]` done · `[~]` in progress · `[-]` dropped (say why)
- **Size:** **S** under 1 hour · **M** a session · **L** more than one session
- **Owner:** **G** = Godwin (content, decisions, review) · **A** = agent (build) · **G+A** = together
- 🔒 = blocked until a decision or content from Godwin arrives
- When a task is done, add the date: `[x] 3.2 … ✅ 2026-11-14`. Counting dated ticks per week gives our speed.

**Already done:** design system and layout (step 1), hero (step 2), `/cv` page, GitHub repo, CI. See the build log.

---

## Progress

| Phase | Tasks | Done |
|---|---|---|
| 0 · Finish open work and housekeeping | 9 | 8 |
| 1 · Decisions to make | 12 | 12 ✅ |
| 2 · Content from Godwin | 13 | 0 |
| 3 · Projects and ComBridge (build step 3) | 14 | 0 |
| 4 · Remaining home sections (build step 4) | 13 | 0 |
| 5 · AI chat backend (build step 5) | 11 (+1 dropped) | 0 |
| 6 · German version (build step 6) | 10 | 0 |
| 7 · Quality, SEO, accessibility, performance | 16 | 0 |
| 8 · Launch (build step 7) | 11 | 0 |
| 9 · After launch: brand and outreach | 10 | 0 |
| **Total** | **119** | **20** |

---

## Phase 0 · Finish open work and housekeeping

- [x] **0.1** Finish the language-switch-in-nav work (`LanguageProvider`, `FadeText`, `LangFade`, nav switch): run lint, types, theme rule, tests, build; check in Chrome and Safari · S · A → passes all checks; checked in Chrome at desktop, tablet and phone. *Safari still to check by Godwin.* ✅ 2026-11-12
- [x] **0.2** Commit that work to Git (local) and push it to GitHub, at the end of the session, with Godwin's OK · S · G+A ✅ 2026-11-12
- [x] **0.3** Rewrite `README.md`: the roadmap and "where things live" table are from the old scaffold (e.g. colours are in `src/styles/tokens.css`, not `globals.css`) · S · A ✅ 2026-11-12
- [x] **0.4** Confirm the exact LinkedIn URL (the `TODO` in `src/lib/site.ts`) · S · G → `linkedin.com/in/ojukwugc` confirmed ✅ 2026-11-12
- [x] **0.5** Clean up the stale "Open items" list at the end of `BUILD_LOG.md` (it still says "write PLAN.md") · S · A → replaced by a pointer to this file ✅ 2026-11-12
- [x] **0.6** Allow `.env.example` through `.gitignore` (today `.env*` hides it; needed in phase 5) · S · A ✅ 2026-11-12
- [x] **0.7** Add a test for `src/content/cv.ts` ↔ PDF consistency, or decide it's checked by hand · S · G+A → **the PDF will be printed from `/cv`**, so `cv.ts` is the only source (done in 9.1) ✅ 2026-11-12
- [x] **0.9** Nav: first name only on phones, so it fits on one line (found while testing 0.1) · S · A ✅ 2026-11-12
- [ ] **0.8** Open a pull request `setup/site-structure` → `main`, review and merge (after 0.1–0.2, with OK); then start `feat/projects` for step 3 · S · G+A

## Phase 1 · Decisions to make

Each one is a short conversation; the agent brings options and a recommendation, Godwin decides.

- [x] **1.1** Branch and PR rhythm: one PR per build step, or one big PR at launch → **PR for the current branch now, then a new branch and one PR per build step** · S · G ✅ 2026-11-12
- [x] **1.2** Case-study format: MDX files (as in the plan) vs. typed data in `.ts` files → **MDX files**, one per case study and language · S · G ✅ 2026-11-12
- [x] **1.3** Which projects get a full case study, and in what order (ComBridge, water-pump ML, spelling game, app vault…) → **ComBridge first, then Water-pump ML**; spelling game and app vault come after launch (9.8) · S · G ✅ 2026-11-12
- [x] **1.4** Which old projects in `src/lib/projects.ts` stay in "Other projects", and which are dropped → **keep 3: Laundbot, Driveby, HNG Express boilerplate**; drop the other 9 · S · G ✅ 2026-11-12
- [x] **1.5** AI chat: provider and model (Gemini per plan), free-tier limits, what the bot may and may not answer → **Gemini Flash** · S · G ✅ 2026-11-12
- [x] **1.6** AI chat: rate-limit storage (e.g. Upstash Redis vs. in-memory) and per-visitor limits → **Upstash Redis**, e.g. 10 questions per visitor per hour plus a daily site-wide cap · S · G ✅ 2026-11-12
- [x] **1.7** Voice input in the chat (Deepgram): yes, later, or no → **No voice input** · S · G ✅ 2026-11-12
- [x] **1.8** i18n approach: `/en` and `/de` routes (plan) vs. switch only; is the CV page translated too? → **`/en` and `/de` routes, and a German CV page** · S · G ✅ 2026-11-12
- [x] **1.9** Testing tools beyond Vitest: React Testing Library for components? Playwright for end-to-end smoke tests? → **both: React Testing Library and Playwright**, run in CI · S · G ✅ 2026-11-12
- [x] **1.10** Hosting: `.vercel.app` vs. a custom domain (which one) → **start on `.vercel.app`, add a custom domain later** (with redirects) · S · G ✅ 2026-11-12
- [x] **1.11** Analytics: none vs. cookieless counts (e.g. Vercel Analytics) → **cookieless counts** (Vercel Web Analytics), no cookie banner needed · S · G ✅ 2026-11-12
- [x] **1.12** Keep `/design-system` public (it's good proof of skill) or hide it from search engines → **public, linked from the portfolio case study, kept out of search results** · S · G ✅ 2026-11-12

## Phase 2 · Content from Godwin

The building phases wait on these, so they're worth starting early.

- [ ] **2.1** ComBridge: one-line pitch, problem, key features, tech stack, links (store / repo / demo) · M · G
- [ ] **2.2** ComBridge: app screenshots for the phone mockup (portrait, high resolution) · S · G
- [ ] **2.3** ComBridge case-study material: architecture, how agents were used, review and testing, challenges, result (from its build log) · M · G+A
- [ ] **2.4** Same material for Water-pump ML (details, screenshots or charts, process notes) · M · G+A
- [ ] **2.5** Testimonials: 2–3 quotes, with name, role, company and permission to publish · M · G
- [ ] **2.6** About text, and photos for the mosaic · M · G
- [ ] **2.7** Skills list grouped (languages, frontend, backend, data & AI, AI-augmented development, tools) · S · G+A
- [ ] **2.8** Confirm experience and education in `src/content/cv.ts` are current (the timeline reuses them) · S · G
- [ ] **2.9** "Modern Software Engineering" section text (draft by agent, rewritten in Godwin's voice) · M · G+A
- [ ] **2.10** Larger cut-out portrait (1200px+ wide) · S · G
- [ ] **2.11** Wordmark design (final, or keep the current text wordmark) · S · G
- [ ] **2.12** Privacy text for the footer (chat questions go to Gemini; cookieless visit counts; nothing else collected) · S · G+A
- [ ] **2.13** Decide how much Godwin writes himself vs. the agent (applies to all copy) · S · G

## Phase 3 · Projects and ComBridge (build step 3) ← *next build step*

- [ ] **3.1** Read the Next.js 16 docs in `node_modules/next/dist/docs/` for dynamic routes, `generateStaticParams`, metadata and MDX · S · A
- [ ] **3.2** Extend the `Project` type: case-study fields, images, status, competencies evidence; add the new projects · M · A 🔒 *2.1*
- [ ] **3.3** Set up MDX with styled components for headings, code, images · M · A
- [ ] **3.4** **ComBridge featured section:** product-launch layout with `PhoneMockup` and screenshots · M · A 🔒 *2.1, 2.2*
- [ ] **3.5** `ProjectCard` component (featured case-study cards) · M · A
- [ ] **3.6** "Other projects" compact list (Laundbot, Driveby, HNG boilerplate); remove the other 9 from `projects.ts` · S · A
- [ ] **3.7** Projects section on the home page from the components above · S · A
- [ ] **3.8** Case-study page `/projects/[slug]` with the template: Problem → Architecture → Building with AI agents → Review and validation → Challenges → Result → Competencies · L · A
- [ ] **3.9** `CompetenciesBlock` component (each of the six competencies → link to evidence) · M · A
- [ ] **3.10** Write the ComBridge case study into the template · M · G+A 🔒 *2.3*
- [ ] **3.10b** Write the Water-pump ML case study into the template · M · G+A 🔒 *2.4*
- [ ] **3.11** Tests: project data is valid (unique slugs, featured projects have a case study, links well-formed) · S · A
- [ ] **3.12** Responsive check at 375, 768, 1440, 1920+; light and dark · S · A
- [ ] **3.13** Build-log entry, Godwin's review, then commit, push and open a PR into `main` (with OK) · S · G+A

## Phase 4 · Remaining home sections (build step 4)

- [ ] **4.1** **Modern Software Engineering** section ("Building with AI. Engineering with Intent.") · M · A 🔒 *2.9*
- [ ] **4.2** **Experience** timeline and education, from `cv.ts` with `TimelineItem` · M · A
- [ ] **4.3** **Testimonials** section (2–3 quote cards) · M · A 🔒 *2.5*
- [ ] **4.4** **About** section: `PhotoMosaic` and "Designer's eye. Engineer's mind." · M · A 🔒 *2.6*
- [ ] **4.5** **Skills** section, grouped, including Data & AI and AI-Augmented Development · M · A 🔒 *2.7*
- [ ] **4.6** **Contact** call to action: Contact me (pre-written email), copy-address fallback with a "Copied" confirmation, CV, LinkedIn, GitHub · M · A
- [ ] **4.7** **Footer** privacy note and privacy section · S · A 🔒 *2.12*
- [ ] **4.8** Remove the placeholder loop in `src/app/page.tsx`; update the nav's section list in `src/lib/site.ts` · S · A
- [ ] **4.9** Nav: highlight the section currently on screen (scroll spy) · S · A
- [ ] **4.10** Hero quick-topic answers link to the matching sections · S · A
- [ ] **4.11** Signature moments: gentle reveal-on-scroll for sections, with reduced-motion respected · M · A
- [ ] **4.12** Responsive check (all sizes, both themes) · S · A
- [ ] **4.13** Build-log entry, Godwin's review, then commit, push and open a PR into `main` (with OK) · S · G+A

## Phase 5 · AI chat backend (build step 5)

- [ ] **5.1** Read the Next.js 16 docs on Route Handlers and streaming · S · A
- [ ] **5.2** Knowledge source for the bot, generated from the site's content files (one source of truth, no copy-paste) · M · A
- [ ] **5.3** System prompt and guardrails: answers only about Godwin, says so when it doesn't know, short answers · M · G+A
- [ ] **5.4** Route Handler `/api/chat`: typed request and response, input validation (length, format) · M · A
- [ ] **5.5** Streaming answers from Gemini · M · A
- [ ] **5.6** Rate limiting, plus max question length and max answer length to cap cost (Upstash Redis) · M · A
- [ ] **5.7** API key in environment variables, server-only; `.env.example` documented · S · A
- [ ] **5.8** Wire the hero `ChatInput` to the API: streaming text, loading, error and "limit reached" states, cancel · M · A
- [ ] **5.9** Privacy note next to the chat box · S · A
- [ ] **5.10** API tests (model mocked): valid question, invalid input, rate limit hit, provider error · M · A
- [-] **5.11** Voice input · dropped: decision 1.7
- [ ] **5.12** Build-log entry, Godwin's review, then commit, push and open a PR into `main` (with OK) · S · G+A

## Phase 6 · German version (build step 6)

- [ ] **6.1** Read the Next.js 16 docs on internationalisation and the request proxy/middleware · S · A
- [ ] **6.2** `/en` and `/de` routes; `<html lang>` set on the server · M · A
- [ ] **6.3** Browser-language detection on first visit (with the visitor's choice remembered) · M · A
- [ ] **6.4** The nav switch changes the URL, keeping the soft text cross-fade · S · A
- [ ] **6.5** Move all remaining text (sections, projects, case studies, footer) into per-language content files · L · A
- [ ] **6.6** German translations (agent drafts, Godwin reviews every line) · L · G+A
- [ ] **6.7** German CV page and PDF · M · G+A
- [ ] **6.8** `hreflang` links so search engines know both versions exist · S · A
- [ ] **6.9** Tests: every English key has a German one, in every content file · S · A
- [ ] **6.10** Build-log entry, Godwin's review, then commit, push and open a PR into `main` (with OK) · S · G+A

## Phase 7 · Quality, SEO, accessibility, performance

- [ ] **7.1** Page titles and descriptions for every page; Open Graph image for link previews (LinkedIn, Slack…) · M · A
- [ ] **7.2** `sitemap.xml` and `robots.txt`; `/design-system` set to noindex · S · A
- [ ] **7.3** Structured data (JSON-LD `Person`) so Google understands who the site is about · S · A
- [ ] **7.4** Favicon and app icons from the brand (replace the default `favicon.ico`) · S · G+A
- [ ] **7.5** Custom 404 page and error page · S · A
- [ ] **7.6** Accessibility pass: keyboard-only use, visible focus, skip link, alt text, contrast in both themes, screen-reader check · M · A
- [ ] **7.7** Reduced-motion pass across every animation · S · A
- [ ] **7.8** Images through `next/image`, correct sizes, no layout shift · S · A
- [ ] **7.9** Lighthouse: performance, accessibility, best practices, SEO, each 90+ (record the scores) · M · A
- [ ] **7.10** Cross-browser check: Chrome, Safari, Firefox, iPhone Safari, Android Chrome · M · G+A
- [ ] **7.11** Large-screen check: 1920, 2560 and 4K/TV sizing · S · A
- [ ] **7.12** Security headers (Content Security Policy etc.) in `next.config.ts` · M · A
- [ ] **7.13** React Testing Library component tests and Playwright smoke tests (Chrome, Safari, Firefox); add both to CI · L · A
- [ ] **7.14** Dependabot (automatic dependency update PRs) · S · A
- [ ] **7.15** `docs/ARCHITECTURE.md`: pages, components, content, chat flow, with a diagram (competency evidence) · M · A
- [ ] **7.16** Final content proofread, English and German · M · G

## Phase 8 · Launch (build step 7)

- [ ] **8.1** Choose the `.vercel.app` project name (e.g. `godwin-ojukwu`) · S · G
- [ ] **8.2** Connect the GitHub repo to Vercel · S · G+A
- [ ] **8.3** Environment variables in Vercel (Gemini key, rate-limit store) · S · G
- [ ] **8.4** CD: a preview deploy for every pull request, production on merge to `main` · S · A
- [ ] **8.5** Protect `main`: changes only through PRs with passing CI · S · G+A
- [ ] **8.6** Confirm every step's PR is merged and `main` is what goes live · S · G
- [ ] **8.7** Live smoke test: every page, both languages, both themes, chat, CV download, contact link · S · A
- [ ] **8.8** Lighthouse on the live site; record the scores in the build log · S · A
- [ ] **8.9** Vercel Web Analytics (cookieless) · S · A
- [ ] **8.10** Google Search Console: verify the site, submit the sitemap · S · G
- [ ] **8.11** Launch entry in the build log · S · A

## Phase 9 · After launch: brand and outreach

- [ ] **9.1** CV: headline "Software Developer", add the "AI-Augmented Development" subsection; update `cv.ts`, then make the PDF by printing the `/cv` page (one source, no drift) · M · G+A
- [ ] **9.2** LinkedIn: headline "Software Developer", portfolio link in the profile · S · G
- [ ] **9.3** GitHub profile: README, pinned repos, portfolio link · S · G+A
- [ ] **9.4** Case study of **this portfolio**, written from the build log (the site as proof of the six competencies) · M · G+A
- [ ] **9.5** Short walkthrough videos for case studies · L · G
- [ ] **9.6** LinkedIn posts drafted from the build log's "LinkedIn angle" notes · M · G+A
- [ ] **9.7** Check `POSITIONING.md`'s consistency checklist: site, CV, LinkedIn all say the same thing · S · G
- [ ] **9.8** Add more case studies as projects finish (spelling game, app vault…; repeat phase 3 tasks 3.10–3.13) · L · G+A
- [ ] **9.9** Custom domain: buy it, connect it in Vercel, redirect the `.vercel.app` address to it; update CV and LinkedIn links · S · G+A
- [ ] **9.10** Retrospective: what worked, what to change for the next project · S · G+A
