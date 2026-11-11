# Portfolio plan

The agreed plan for the new portfolio. Decisions are explained in [BUILD_LOG.md](BUILD_LOG.md); positioning is in [POSITIONING.md](POSITIONING.md).
Visual reference: the design mockup (light, dark and About artboards) on claude.ai.

## Decisions

| Area | Decision |
|---|---|
| Stack | Next.js (App Router) · TypeScript · Tailwind CSS · MDX for case studies |
| Structure | Hybrid: one-page home plus case-study pages for major projects |
| Audience | Employers and recruiters in Germany (no freelance offer) |
| Title | **Software Developer** (DE: Softwareentwickler) |
| Tech line | Java · TypeScript · JavaScript · React · Next.js |
| Style | Simple, Apple-like, Liquid Glass. Calm, with a few signature moments. |
| Light theme | Apple off-white `#F5F5F7`, text `#1D1D1F`, accent green `#2A7F35` |
| Dark theme | Old-site greys `#4D4D4D` / `#585858`, text `#EEEEEE`, accent green `#45B649` |
| Brand gradient | Green to lime (`#45B649` → `#DCE35B`); orange `#F27121` only on the status dot and mosaic tile |
| Font | Inter |
| Languages | English and German; browser-language detection plus a Hello / Hallo switch |
| Contact | "Contact me" opens a pre-written email; copy-address fallback; CV download; LinkedIn; GitHub |
| Privacy | No data collected except AI-chat questions (Gemini). A one-line note and a privacy section in the footer. |
| Analytics | Maybe later: cookieless visitor counts only |
| Responsive | Phones, tablets, laptops, large monitors and TVs. Everything is sized in rem with a base size that grows on large screens (17px at 1680px+, 19px at 1920px+, 24px on 4K); fluid headings; a collapsible menu on small screens; tested at 375, 768, 1440 and 1920+ widths. |

## Home page, top to bottom

1. **Nav:** a glass bar with name, section links, language switch, theme toggle and Contact me
2. **Hero:**
   - Hello | Hallo switch and an "Open to roles" status pill
   - fluid morphing portrait with green splashes
   - "Hello, I'm Godwin." / Software Developer
   - five typed lines rotating in random order
   - tech line
   - "Ask me anything" AI chat with five quick tiles
   - Download CV · GitHub · LinkedIn
   - faint "Godwin" wordmark behind
3. **Featured: ComBridge,** presented like a product launch with a phone mockup
4. **Projects:**
   - featured case-study cards (ComBridge, water-pump ML, spelling game, app vault, each when ready)
   - an "Other projects" list
5. **Modern Software Engineering: Building with AI. Engineering with Intent.**
6. **Experience:** a timeline plus education
7. **Testimonials:** 2–3 quotes
8. **About:** the photo mosaic and "Designer's eye. Engineer's mind."
9. **Skills:** grouped, including Data & AI
10. **Contact:** a final call to action
11. **Footer:** privacy note

## Case-study template

Problem → Architecture → Building with AI agents → Review and validation → Challenges → Result → Competencies (evidence for each of the six competencies in `POSITIONING.md`)

## This portfolio as proof

This site is itself a case study, so it should show the six competencies too:

| Competency | Evidence in this project |
|---|---|
| Architecture | `PLAN.md`, a short architecture note (pages, components, data, AI chat flow) |
| Data and API | The chat Route Handler: input validation, rate limiting, typed request and response |
| Agent orchestration | `BUILD_LOG.md`: plans reviewed, proposals rejected, corrections made |
| Code quality | TypeScript strict mode, small components, lint passing |
| Testing | Unit tests (typed-line logic, contact link), API tests for the chat route, a responsive check per step |
| Production readiness | Vercel deploy, environment variables for the API key, error handling, Lighthouse performance check |

## Build order

1. ~~Design system and layout: tokens, themes, glass, nav, footer, page skeleton~~ ✅
2. ~~Hero (UI first; the chat answers are canned until step 5)~~ ✅
3. **ComBridge and Projects** ← *next*
4. Remaining sections
5. AI chat backend (Route Handler + Gemini, rate limit, streaming)
6. German version (i18n routes, detection, switch)
7. Deploy to Vercel and set up CD: preview per PR, production on merge to `main`, plus a rule that `main` only accepts PRs with passing CI. *Deferred until the site is ready to go live.* CI already runs on every push and PR.

## Open items

- Larger cut-out photo (1200px+ wide)
- Wordmark design
- Voice input in the chat (Deepgram)?
- How much Godwin writes himself vs. the agent
- Hosting: `.vercel.app` vs. a custom domain
- Update the CV and LinkedIn headline to "Software Developer"
