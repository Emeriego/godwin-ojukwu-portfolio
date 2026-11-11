# Portfolio

My personal portfolio site, built with Next.js (App Router), TypeScript and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things live

| What | Where |
|---|---|
| Name, role, email, social links | `src/lib/site.ts` |
| Projects | `src/lib/projects.ts` |
| Pages (each folder becomes a URL) | `src/app/` |
| Reusable UI pieces | `src/components/` |
| Images, resume PDF | `public/` |
| Global styles and colors | `src/app/globals.css` |

## Roadmap

- [x] Base layout, header, footer
- [x] Home, Projects, Project detail, About, Contact pages
- [ ] Fill in real content
- [ ] Dark mode toggle (client component with `useState`)
- [ ] Project filter by tag
- [ ] Move projects to Markdown files
- [ ] Deploy to Vercel
