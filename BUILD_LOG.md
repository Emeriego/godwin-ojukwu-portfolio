# Build log: Portfolio

How this portfolio is being built: decisions, who did what, what was reviewed or changed, and what went wrong.
Built by Godwin Ojukwu with Claude Code (an AI coding agent). Godwin sets direction, makes decisions and reviews; the agent researches, drafts and implements.

Each entry: **What happened** · **Decisions** · **Ownership** (my direction vs. agent work, what I reviewed or rejected) · **Problems and fixes** · **LinkedIn angle**

---

## 2026-11-09 · Choosing the stack

**What happened:** Started a new portfolio. Compared Astro, Next.js, plain React (Vite) and plain HTML.

**Decisions:**
- The agent recommended Astro (fastest for content sites). I rejected it: Astro is less common in industry, and I want every build to grow skills employers look for.
- Chose **Next.js + TypeScript + Tailwind**: React-based, widely used, and still sends real HTML on first load (fast, SEO-friendly), unlike a plain React SPA.

**Ownership:** I pushed back on the agent's first recommendation and on its "plain React is slower" framing, which led to a better comparison (load speed vs. interaction speed).

**LinkedIn angle:** "My AI agent recommended Astro. I picked Next.js. Here's why tool choice should follow career goals, not just benchmarks."

---

## 2026-11-09 · Scaffold, then a course correction

**What happened:** The agent scaffolded the Next.js app on a branch (`setup/site-structure`) and, without being asked, built placeholder pages and imported content from my old portfolio.

**Decisions:** Stopped the build. Nothing had been decided about the site yet. Set a rule for all future work: **plan first, agree decisions, build only on my go-ahead.**

**Ownership:** I caught the agent moving too fast and redirected it to a planning phase. The scaffold stays uncommitted on its branch until the plan is final.

**Problems and fixes:** Next.js 16 refused to prerender `new Date()` in the footer (a new rule in this version). Fixed by making the year a fixed value.

**LinkedIn angle:** "AI agents are fast. That's the problem. The most important thing I did on day one was tell mine to stop and plan."

---

## 2026-11-10 · Planning the site

**What happened:** Worked through the decisions one at a time. The agent read my old portfolio (live site) and six CVs/cover letters to collect content.

**Decisions:**
- **Audience:** employers and recruiters in Germany (no freelance offer).
- **Structure:** hybrid: one-page home plus case-study pages for major projects (ComBridge, water-pump ML, and two upcoming apps).
- **Title:** started as "fullstack + design", narrowed to one clear title to avoid looking like a jack of all trades.
- **Contact:** a button that opens a pre-written email, with a copy-address fallback. No contact form, so no data collected.
- **Languages:** English and German, detected from the visitor's browser.
- **Content source:** `CV_Godwin.pdf` as the single source of truth.

**Ownership:** The agent found inconsistencies across my CVs (job titles, a start date of 2017 vs. 2022, the tech stack of one project). I chose the source of truth. I decided to show spoken languages without levels, include data/ML projects, and keep my phone number on the downloadable CV only.

**LinkedIn angle:** "I gave an AI agent all my old CVs. It found 4 inconsistencies a recruiter would have spotted. Lesson: your CV, site and LinkedIn must tell one story."

---

## 2026-11-11 · Design direction and mockup

**What happened:** Reviewed layout patterns (stacked, sticky split, bento, editorial). Rejected most portfolio galleries as "childish and show-off". Chose **simple, Apple-like, with Liquid Glass** after sharing a reference screenshot. The agent built an interactive design mockup (light and dark).

**Decisions:**
- **Hero:** an "Ask me anything" AI chat (Gemini, server-side route so the API key stays secret), with suggested-question tiles.
- **Dark mode:** I rejected the agent's near-black dark mode as generic and kept my old site's distinctive grey (`#4D4D4D` / `#585858`) with green `#45B649`.
- **Greeting:** the agent proposed cycling "Hello · Hallo · Ndewo". I cut it to **Hello | Hallo** and turned it into the language switch: clicking "Hallo" switches the whole site to German.
- **Privacy:** a one-line note in the footer about the AI chat, not in the visitor's face.
- **Old site:** stays live; I'm not replacing or redirecting it.

**Ownership:** Three design proposals from the agent were changed by me (dark palette, greeting, privacy note placement). The agent flagged that the chat sends visitor questions to Google, which changed the privacy decision.

**LinkedIn angle:** "My AI agent designed a dark mode. I said no: it looked like every other site. Taste is still the engineer's job."

---

## 2026-11-11 · Positioning: Software Engineer who builds with AI

**What happened:** Wrote a positioning brief: I'm a Software Engineer who uses AI coding agents with engineering ownership, not a prompt engineer.

**Decisions:**
- **Title:** Software Engineer (DE: Softwareentwickler), the same on the CV, website and LinkedIn. *(Later changed to Software Developer; see round 10 of the hero work.)*
- **New section:** "Modern Software Engineering: Building with AI. Engineering with Intent." It comes after Projects, so proof comes before philosophy.
- **Case-study template:** Problem → Architecture → Building with AI agents → Review and validation → Challenges → Result.
- **This build log:** kept for every project and every change from now on, as material for case studies and LinkedIn posts.

**Ownership:** The positioning brief and the build-log idea are mine. The agent suggested section placement and the case-study structure.

**LinkedIn angle:** "I don't just write code, and I don't just prompt. I engineer software with AI agents, and I keep a log to prove it."

---

## 2026-11-11 · Hero line: five lines, typed live

**What happened:** "Hello, I'm Godwin." alone said who, not why. I described myself to the agent: I design, I code, I love solving problems, and I'd sit at my computer all day building. It's more hobby than job. The agent drafted seven one-liners in three tones and recommended one.

**Decisions:**
- Instead of picking one, **five lines rotate in random order**. Each is typed out character by character, stays about four seconds, is erased, and the next one is typed. It's the one moving element in the hero, so it draws the eye.
- All five lines are translated into German, and switching language restarts the typing in the new language.
- The title became **Software Engineer** across the mockup.
- The AI-workflow line moved from the hero to the "Building with AI" section, so the hero stays about me.

**Ownership:** The agent offered a single recommended line. I turned the options into a rotating, typed sequence, which shows more of my personality than any one line.

**Problems and fixes:** The agent built in accessibility from the start. Screen readers get one static line, people with "reduce motion" turned on see a still line instead of the animation, and space for two lines is reserved so the page doesn't jump while typing.

**Review:** After seeing it live, I found the typed line too loud. Turned it down: smaller (22px → 18px), regular weight instead of medium, dimmed to the secondary text color, and a thinner cursor. It now supports the headline instead of competing with it. Still too loud on a second look, so I took it down again: 15.5px, narrower, and a fainter grey. The agent stopped at the faintest grey that still meets the 4.5:1 text-contrast rule, so it stays readable.

**LinkedIn angle:** "My AI agent gave me one tagline. I asked: why choose? Now my portfolio types out five versions of who I am."

---

## 2026-11-11 · Portrait: breaking the frame

**What happened:** I didn't want my photo just sitting in a circle. I described the idea: put me in a shape, but let my head come out of the top of it. I also pointed the agent to the tile mosaic I designed for my old portfolio. I supplied a professional headshot plus a background-removed cut-out.

**Decisions:**
- **Hero: pop-out portrait.** A green-to-lime circle sits behind me. My body is inside the circle and my head rises above its edge, with a small orange tile as an accent, carried over from my old site.
- **About section: the mosaic, refined.** The full photo is split into rounded tiles like on my old site. On hover the tiles drift together, so the photo becomes whole. A new About headline: "Designer's eye. Engineer's mind."

**Ownership:** The pop-out concept and the mosaic were my ideas. The agent worked out the technique and recommended using one in each place.

**Problems and fixes:** The pop-out needed one clipping shape that's a circle at the bottom but opens upward only for the head. Clipping to a plain circle cuts the head off, and clipping to a rectangle leaves the shoulders hard-edged. Solved with a single SVG `clip-path` outline: a narrow column for the head joined to a circle for the body.

**Review, round 2:** I rejected both first versions.
- *Hero:* the circle "cage" didn't look good. New direction (mine): no frame around me at all. I sit on top of two soft, irregular painted shapes, a green-to-lime blob plus a faint darker patch offset behind it like a shadow. Only the bottom of the photo gets an irregular, wavy edge, so I'm anchored to the shapes rather than boxed in.
- *About mosaic:* the agent's version was misaligned, and the hover effect pulled the tiles apart. I pointed it back to my original design. The agent measured my old mosaic tile by tile and found the rule that made it work: **the inner edges of each column line up, and only the outer edges are ragged.** It rebuilt the grid with the exact proportions, and hovering now just lifts the single tile under the cursor.

**Review, round 3 (hero):** I had the photo cropped from the chest up so the hands no longer show, and asked for the shapes behind to be scattered irregular blobs instead of one round shape. Now there are five organic shapes: a large green-to-lime blob, two small accent blobs in green and lime, and two faint shadow patches, placed off-center.

**Review, round 4 (hero), new concept:** The scattered shapes still didn't work. My new direction: put me inside a **fluid, living shape**, cropped chest up, that slowly changes form as if it's floating. The agent built it as a green-to-lime blob that holds the photo and morphs between five organic outlines every few seconds, with a smooth transition so it never stops moving. It also drifts up and down gently. A soft shadow blob behind it morphs out of step, and the orange tile floats on its own rhythm. Visitors with "reduce motion" turned on see a still shape.

**Round 5 (hero):** I added seven smaller "splashes" around the portrait: the same fluid shape in the same green-to-lime, without the photo, in sizes from tiny to medium. Each one morphs and drifts at its own speed, so the group never moves in sync. The agent first built them in the orange accent color. I corrected it to match the main shape, and the single orange tile was removed.

**Review, round 6 (first real visual check):** Until now the agent had been designing without seeing the result, because the preview needed a sign-in it couldn't do. I installed the Claude in Chrome extension so it could look at the mockup in my own signed-in browser. Its honest review: professional and distinctive, but **the chat box, the hero's best feature, sat about 950px down, below the fold on most laptops.** Fixes:
- Compacted the hero: the Hello | Hallo toggle moved up beside the status pill, the portrait and headline got smaller, and spacing got tighter. The chat now sits at about 690px, visible on a normal laptop screen.
- Trimmed the splashes from 7 to 5.
- Fixed a blank strip at the bottom of the dark preview.

**Review, round 7:** After compacting, I found the hero too clustered. Added breathing room: more space at the top, wider gaps between elements, and a clear pause between "who I am" (headline, title, typed line) and "talk to me" (chat and tiles). Tradeoff, checked in Chrome: the chat moved from about 690px to about 775px from the top, still visible on most laptop screens but close to the edge on small ones.

**Review, round 8:** I spotted that the agent was reserving a large empty area at the bottom of the hero just so the giant faint "Godwin" wordmark had room. It's a background effect, so content can sit on top of it. Cut the bottom padding from 160px to 72px and moved the wordmark up so it now sits behind the tiles and the Download CV row. The hero ends cleanly, with no dead space before ComBridge.

**Review, round 9:** The five quick-question tiles (Me, Projects, Skills, Experience, Contact) took too much space, and the headline was too big. Tiles are now compact chips: smaller icons and text, tighter padding, and a narrower row that sits neatly under the chat box. The headline went from 62px to 52px. Checked in Chrome: the hero is noticeably lighter, and the chat and tiles now read as one unit.

**Review, round 10:** Shrank the portrait and its splashes by about 15% to free up space in the hero. Changed the title back from "Software Engineer" to **"Software Developer"** (status pill, chat answers and About text updated to match; German stays "Softwareentwickler"). Checked in Chrome: the hero now fits comfortably, with the chat and tiles well above the fold.

**Decision note:** This reverses the earlier "Software Engineer" choice. I confirmed "Software Developer" as final, and the positioning brief is saved in the repo as `POSITIONING.md` with the new title. The CV and LinkedIn headline still need updating to match.

**Lesson:** Designing blind only gets you so far. Once the agent could actually see the page, it found the most important problem in one look.

**How it works:** CSS can round each corner of a box with two different radii. Changing those eight values smoothly turns a box into a wobbling organic blob. No video, no canvas, and almost no performance cost.

**Lesson:** The agent's "creative" version of my design was worse than my original. Measuring the original beat reinventing it.

**Still to improve:** The cut-out photo is only 553px wide, so it will look soft on high-resolution screens. It needs a larger version (1200px+) for the real site.

**LinkedIn angle:** "My old portfolio had a tile mosaic I designed by hand. My new one keeps it, and adds a portrait that breaks out of its frame. Some ideas are worth carrying forward."

---

## 2026-11-11 · Build step 1: design system and layout

**What happened:** Design phase done. I gave the go-ahead to start the real build in Next.js. The agent first wrote `PLAN.md` (all agreed decisions plus the build order), then built the foundation. Mid-build I added a requirement: **the site must be highly responsive, on phones, tablets, laptops and TVs.**

**What was built:**
- **Design tokens** in `globals.css`: light (Apple off-white) and dark (my old-site greys), exposed as Tailwind colors (`bg-bg`, `text-sec`, `bg-accent`…), plus reusable `glass` and `text-gradient` utilities.
- **Theme toggle with no flash:** a tiny script in `<head>` sets the theme before the first paint (saved choice, else the system setting). The toggle uses React's `useSyncExternalStore` to follow the `<html data-theme>` attribute.
- **Glass nav:** sticky, with section links, the theme toggle, and a "Contact me" button that opens a pre-written email. On small screens it collapses into a menu button that expands inside the glass bar.
- **Footer** with the privacy note, and a **page skeleton** with every section anchored for the nav.
- **Responsive foundation:** everything in rem with a base size that grows on big screens (16px, 17px at 1680px+, 19px at 1920px+, 24px on 4K), and fluid headings with `clamp()`.
- Removed the outdated placeholder pages from the first scaffold.

**Ownership:** The responsive requirement (including TVs) was mine. I let the agent choose how to implement it.

**Problems and fixes:**
- The linter (React's new hooks rules) rejected the first theme toggle, which called `setState` inside `useEffect`. Rewrote it with `useSyncExternalStore`, which is the correct pattern for reading external browser state.
- The agent's dev server failed to start: one was already running for this project on port 3000. It used that one instead of killing it.
- Chrome won't shrink a window to phone width, so the agent tested phone (375px), tablet (768px) and TV (1920px) sizes by loading the site inside sized frames in my browser. It also confirmed the theme choice persists across pages.

**Verified:** lint and production build pass; light and dark mode, the mobile menu, tablet layout and TV scaling all checked in Chrome.

**LinkedIn angle:** "Halfway through the build, I added a requirement: it has to work on a TV. Here's how one CSS decision (everything in rem) made that a 10-line change."

---

## 2026-11-11 · A real design system: every element a reusable component

**What happened:** Reviewing the step 1 code, I noticed there were only three components. My rule from now on: **every element is a reusable component I could lift into another project**, with variants (buttons, heading levels, text, cards, image holders, the phone mockup…).

**Decisions:**
- **Tailwind + `cva` + `cn()`** for variants. The agent installed three small helpers (`class-variance-authority`, `clsx`, `tailwind-merge`). I questioned why, and it first showed an unfair "before" example that wasn't how I write React. I called that out. It then compared honestly with my real style (CSS classes / CSS Modules) and gave both options. I chose Tailwind + cva **to learn it**, since it's the industry pattern (shadcn/ui).
- **Portable structure:** tokens in `styles/tokens.css`, Tailwind wiring in `styles/ui.css`, primitives in `components/ui/`, image holders in `components/media/`, plus a guide in `components/README.md` (how cva works, the component recipe, rules, how to reuse in another project).
- **A `/design-system` showcase page** (hidden from search engines) shows every component and variant, for testing in both themes and all screen sizes.

**Built:**
- `ui/`: Button (6 variants × 5 sizes, renders a link when given `href`), Heading (semantic level separate from visual size, fluid), Text and GradientText, Container/Section/Stack, Surface (glass/solid/soft/outline), Chip and StatusPill, SegmentedControl, Icon (17 icons).
- `media/`: FluidBlob (pure-CSS morph, no JavaScript timer anymore), FluidPortrait, PhoneMockup, ImageFrame (with a placeholder state), PhotoMosaic (fully responsive with % maths).
- Nav, Footer, ThemeToggle and the page refactored onto the components.

**Problems and fixes:** Checking the showcase in Chrome, content scrolling under the nav showed through sharply. Investigation: the compiled CSS had **silently dropped the `backdrop-filter` line** from the `glass` utility, so the frosted blur never worked, not even in step 1. Fixed by using Tailwind's own `backdrop-blur-xl backdrop-saturate-150` inside the utility. Verified in the browser that the computed style now has the blur.

**Lesson:** "It builds" isn't "it works". Only a visual check plus inspecting the computed CSS caught that the core glass effect had never been rendering.

**Verified:** lint and build pass; the showcase was checked in light and dark, at desktop and phone widths.

**LinkedIn angle:** "My AI agent showed me a 'before' code example to justify a library. It wasn't how I write code. I pushed back, got an honest comparison, and then chose the library anyway, to learn it."

---

## 2026-11-11 · Build step 2: the hero

**What happened:** Built the hero in Next.js from the approved mockup, using design-system components only. Every new piece is reusable on its own.

**Built:**
- New reusable components: **TypedLine** (typed rotating lines), **ChatInput** (glass pill with send), **QuickTile** (icon chip), **AnswerCard**, **Wordmark** and **GlowBackdrop** (decorative backgrounds).
- **Hero section** assembled from them: Hello | Hallo switch, status pill, fluid portrait with splashes, headline, title, typed lines, tech line, chat box with five quick topics, Download CV / GitHub / LinkedIn, and the faint "Godwin" wordmark behind.
- **Content separated from layout:** all hero copy (English and German) lives in `src/content/hero.ts`.
- New theme tokens for tile icon colours and the second glow, so no colours went into components.
- **First tests:** Vitest with 11 unit tests (random line order never repeats, the contact email link is encoded correctly, English and German content are complete). Tests now run in CI.

**Decisions made by the agent (open for my review):**
- Typed questions show a "coming soon" note until the real AI chat (step 5); the five topic tiles give real answers now.
- The **voice button is left out** until I decide on voice input.
- TypedLine starts with the first line fully shown (it matches the server-rendered HTML, so there's no flash), then continues in random order.

**Problems and fixes:** On the first visit, React shows the server version of a page before taking over in the browser. A typing animation that starts from zero would make the line flash full, then empty, then type. Solved by starting with the full first line, which is also what screen readers and reduced-motion visitors get.

**Verified:** lint, type check, theme rule, 11 tests and the build pass. Checked in Chrome: desktop light/dark, the German switch, a quick-topic answer, typing in random order, phone (375px) and tablet (768px).

**LinkedIn angle:** "My hero section is 100% reusable components. The typing effect is a component, the chat box is a component, and even the faint background wordmark is a component I can drop into my next project."

---

## 2026-11-11 · GitHub repo, commits and CI/CD

**What happened:** I asked for a GitHub repo, and to be walked through how the commits are made. Mid-way I added CI/CD: every change should be checked automatically, and the live site should update as we keep changing it.

**Decisions:**
- Repo: **public**, `godwin-ojukwu-portfolio`, so recruiters can read the code and this log. CVs stay out (`reference/` is git-ignored).
- **Workflow:** work on a branch, open a **pull request**, review, merge to `main`.
- **Commits:** 8 small, logical commits following the **Conventional Commits** style (`feat:`, `docs:`, `build:`, `chore:`), each one a single idea with a clear message, instead of one giant "initial" commit.
- **CI (GitHub Actions):** on every push and pull request, run lint → type check → the theme rule (no hard-coded colours in components) → production build.
- **CD (Vercel):** preview deploy for every pull request, production deploy when `main` changes. **Deferred:** I decided to hold off on going live; CD gets set up when the site is ready to launch.

**Ownership:** The repo, PR workflow and CI/CD requirement were mine. The agent chose the commit breakdown and the CI steps, and turned the "no hex codes" design rule into an automated check, so the theme system can't silently break again.

**LinkedIn angle:** "My portfolio now has CI/CD. Every change is linted, type-checked, rule-checked and built before it can reach the live site, including a custom check that keeps my design system honest."

---

## 2026-11-11 · A central theme system

**What happened:** I asked for colours to be managed centrally, so changing a colour once updates every component, with no hunting through files.

**Audit:** The tokens were already central for most things, but the agent found **8 hard-coded colours** that had slipped into components: the phone mockup's frame, screen and glow, the portrait's shadow, the orange in the status dot and mosaic tile, and two in the showcase. A design system with leaks isn't central.

**Decisions:**
- `tokens.css` restructured into **two layers**: a **brand palette** (`--brand-primary`, `--brand-primary-deep`, `--brand-secondary`, `--brand-highlight`, neutrals, device colours) and **semantic tokens** per theme (`--bg`, `--text`, `--accent`, `--glow`…) built from the palette. Transparent shades use `color-mix()`, so they follow brand changes too.
- Every component now uses tokens only. Colour names became purpose names (`orange` → `highlight`, `green` → `brand`).
- Removed the browser `themeColor` meta: it would have needed hex values copied out of the theme file.
- The `/design-system` page now has a **Theme colours** panel showing every token as a live swatch.

**Proof:** The agent changed three lines in the palette to blue and checked in Chrome: buttons, the nav button, gradients, blobs and the glow all turned blue. Then it restored the green. A grep confirms no hex codes remain in any component.

**LinkedIn angle:** "I asked my AI agent to centralise my colours. It found 8 places where it had broken its own rule. Then it proved the fix by turning my whole site blue with three lines."

---

## 2026-11-11 · Six engineering competencies

**What happened:** I defined six competencies every AI-built project must make visible: system design and architecture, data and API engineering, AI agent orchestration, code quality, testing and QA, and production readiness. Together they show I understand the whole software lifecycle, not just code generation.

**Decisions:**
- Added them to `POSITIONING.md` as a short table.
- The case-study template gets a final **Competencies** block linking each one to concrete evidence.
- `PLAN.md` now maps all six to evidence in **this portfolio**, so the site practices what it claims. That means adding tests (none yet), a short architecture note, and production checks before launch.

**Ownership:** The competency framework is mine. The agent mapped it to this project and pointed out that the portfolio currently has no tests.

**LinkedIn angle:** "Using AI to write code isn't a skill. These six things are. Here's how I prove each one in every project."

---

## Open items
- Chat: voice input (Deepgram)? (Rotating example questions in the chat box: probably skip, since the hero already has one moving element.)
- Photo (headshot) and wordmark from Godwin.
- Remaining plan items: build order, how much I write myself vs. the agent, hosting/domain.
- Then: write `PLAN.md`, get sign-off, start building.
