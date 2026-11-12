# Godwin Ojukwu · Portfolio

My personal portfolio: a one-page site with case-study pages, in English and German, with light and dark themes.
Built with **Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4**, together with Claude Code, an AI coding agent. The whole process is documented in [BUILD_LOG.md](BUILD_LOG.md).

## Run it locally

Requires Node.js 22 (see `.nvmrc`).

```bash
npm install
npm run dev
```

Open http://localhost:3000. Use `localhost`, not the "Network" address: Next.js blocks other origins in development.

## Checks

The same checks run in CI (GitHub Actions) on every push and pull request:

| Command | What it checks |
|---|---|
| `npm run lint` | Code style and common mistakes (ESLint) |
| `npm run typecheck` | TypeScript types |
| `npm run check:tokens` | No hard-coded colours in components (all colours come from the theme) |
| `npm test` | Unit tests (Vitest) |
| `npm run build` | The production build |

## Where things live

| What | Where |
|---|---|
| Pages (each folder becomes a URL) | `src/app/` — home, `/cv`, `/design-system` |
| Page sections (Hero, …) | `src/components/sections/` |
| Design system: reusable UI and media components | `src/components/ui/`, `src/components/media/` ([guide](src/components/README.md)) |
| Colours and theme (light and dark) | `src/styles/tokens.css` |
| Tailwind wiring, glass, animations | `src/styles/ui.css` |
| Text content, English and German | `src/content/` (e.g. `hero.ts`, `cv.ts`) |
| Name, email, links, nav sections | `src/lib/site.ts` |
| Projects | `src/lib/projects.ts` |
| Images and the CV PDF | `public/` |

## Project documents

| File | What's in it |
|---|---|
| [PLAN.md](PLAN.md) | The agreed plan: decisions, page structure, build order |
| [TASKS.md](TASKS.md) | Every remaining task, with progress |
| [POSITIONING.md](POSITIONING.md) | How I present myself: Software Developer who builds with AI |
| [BUILD_LOG.md](BUILD_LOG.md) | What happened, who decided what, problems and fixes |
