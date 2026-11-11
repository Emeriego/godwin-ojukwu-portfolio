# Design system guide

Every visual element is a reusable component. This guide explains how they're built (Tailwind + `cva` + `cn`) and how to make or reuse one.

```
src/
├── styles/
│   ├── tokens.css   ← colours and effects for light/dark (change these to re-theme)
│   └── ui.css       ← Tailwind wiring: token colours, glass, gradient text, animations
├── lib/cn.ts        ← the cn() helper
└── components/
    ├── ui/          ← primitives: Button, Heading, Text, Surface, Chip, Icon, Layout…
    └── media/       ← image holders: FluidPortrait, FluidBlob, PhoneMockup, ImageFrame, PhotoMosaic
```

---

## 1. The three helpers in one minute

| Helper | What it does | Example |
|---|---|---|
| `clsx` | Joins class names and skips falsy ones | `clsx("a", isOpen && "b")` → `"a b"` or `"a"` |
| `tailwind-merge` | Removes conflicting Tailwind classes; the last one wins | `twMerge("px-4", "px-8")` → `"px-8"` |
| `cva` | Turns a table of variants into a function that returns the right classes | `button({ variant: "ghost", size: "sm" })` |

`cn()` (in `src/lib/cn.ts`) combines the first two. **Always use `cn()` when combining classes**, so a `className` passed from outside reliably overrides the defaults.

---

## 2. How `cva` works, step by step

```tsx
import { cva, type VariantProps } from "class-variance-authority";

const badge = cva(
  // ① Base classes: always applied
  "inline-flex items-center rounded-full font-medium",
  {
    // ② Variants: each key is a prop, each value maps an option to classes
    variants: {
      tone: {
        neutral: "bg-chip text-text",
        accent: "bg-accent text-on-accent",
      },
      size: {
        sm: "h-6 px-2.5 text-xs",
        md: "h-8 px-3.5 text-sm",
      },
    },
    // ③ Compound variants: extra classes only for a *combination*
    compoundVariants: [{ tone: "accent", size: "md", className: "shadow-md" }],
    // ④ Defaults: used when a prop isn't passed
    defaultVariants: { tone: "neutral", size: "md" },
  },
);

badge();                              // neutral + md (the defaults)
badge({ tone: "accent", size: "sm" }); // accent + sm
```

**`VariantProps`** reads the table and creates the TypeScript prop types for you:

```tsx
type BadgeProps = VariantProps<typeof badge>;
// → { tone?: "neutral" | "accent"; size?: "sm" | "md" }
```

So `<Badge tone="acent">` is a **compile error**, not a silent missing style.

---

## 3. The component recipe

Every component in `ui/` follows the same five steps:

```tsx
import type { ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

// 1. Describe the variants
export const badgeVariants = cva("…base…", { variants: { … }, defaultVariants: { … } });

// 2. Props = the native element's props + the variant props
type BadgeProps = ComponentPropsWithoutRef<"span"> & VariantProps<typeof badgeVariants>;

// 3. Pull the variant props out; the rest (onClick, id, aria-*, children…) passes through
export function Badge({ tone, size, className, ...rest }: BadgeProps) {
  // 4. cn(variant classes, then the caller's className) so the caller can override
  return <span className={cn(badgeVariants({ tone, size }), className)} {...rest} />;
}

// 5. Export it from ui/index.ts
```

Why each part matters:
- **`ComponentPropsWithoutRef<"span">`**: the component accepts everything a normal `<span>` accepts, so it never limits you.
- **`...rest`**: event handlers and accessibility attributes keep working.
- **`className` last in `cn()`**: one-off tweaks (`<Badge className="mt-4">`) always win.
- **Exporting `badgeVariants`**: you can put the button *look* on something that isn't a Button, e.g. `<label className={buttonVariants({ variant: "secondary" })}>`.

---

## 4. Using the components

```tsx
import { Button, Heading, Text, Surface, Chip, Icon } from "@/components/ui";
import { FluidPortrait, PhoneMockup } from "@/components/media";

<Heading level={2}>Projects</Heading>                     {/* semantic h2, h2 size */}
<Heading level={1} size="display">Hello</Heading>         {/* h1 that looks huge */}
<Text size="lead" tone="muted">Intro text</Text>

<Button>Primary</Button>
<Button variant="secondary" icon={<Icon name="download" />} href="/cv.pdf">Download CV</Button>
<Button variant="ghost" size="icon" aria-label="Menu"><Icon name="menu" /></Button>

<Surface padding="lg" interactive>A glass card</Surface>
<Chip>Java 21</Chip>
```

**Variants at a glance**

| Component | Variants |
|---|---|
| `Button` | variant: primary · secondary · outline · ghost · soft · link — size: sm · md · lg · icon · icon-lg — fullWidth |
| `Heading` | level 1–6 (semantic) — size: display · h1 · h2 · h3 · h4 · eyebrow (visual) |
| `Text` | size: lead · body · small · caption — tone: default · muted · faint · accent — weight |
| `Surface` | variant: glass · solid · soft · outline — radius — padding — interactive |
| `Chip` | variant: neutral · glass · accent · outline — size: sm · md |
| `Container` | size: sm · md · lg · xl · full |
| `Section` | tone: default · alt · none — spacing: none · sm · md · lg |
| `Stack` | direction · gap · align · justify · wrap |
| `TypedLine` | lines · typeSpeed · eraseSpeed · hold (random order, reduced-motion safe) |
| `ChatInput` | label · placeholder · onSubmit · extraAction |
| `QuickTile` | icon · label · iconClassName · active |
| `AnswerCard` | question · answer |
| `Wordmark` / `GlowBackdrop` | decorative backgrounds for a `relative overflow-hidden` section |

---

## 5. The theme system: change colours in one place

All colours live in **`src/styles/tokens.css`**, in two layers:

```
1. Brand palette        --brand-primary, --brand-primary-deep, --brand-secondary, --brand-highlight, neutrals, device colours
        │  (referenced by)
2. Semantic tokens      --bg, --text, --sec, --accent, --glass, --gradient, --blob, --glow…   (one set for light, one for dark)
        │  (exposed to Tailwind in ui.css)
3. Tailwind classes     bg-bg, text-sec, bg-accent, text-on-accent, bg-highlight, border-line…
        │  (used by)
4. Components           never contain a hex code
```

- **New brand colour?** Change `--brand-primary` (and its partners) in layer 1, and buttons, gradients, blobs, glows and both themes all update.
- **Tweak only dark mode?** Change the token in the `[data-theme="dark"]` block.
- **Need a new colour?** Add it to layer 1, give it a semantic token in layer 2, expose it in `ui.css` (`--color-name: var(--token)`), then use `bg-name` / `text-name`.
- Transparent variants are calculated with `color-mix()` from the palette, so they follow brand changes automatically.
- The `/design-system` page shows every token as a swatch, so it's a quick visual check after a change.

Tested: changing three lines (`--brand-primary`, `--brand-primary-deep`, `--brand-secondary`) to blue turned the whole site blue.

## 6. Rules of the design system

1. **Colours come from tokens only** (`bg-accent`, `text-sec`, `border-line`), never hex codes in components. That's what makes light/dark and re-theming work. Check with: `grep -rnE '#[0-9a-fA-F]{3,8}' src --include='*.tsx'` (should print nothing).
2. **Sizes in rem, headings with `clamp()`**, so everything scales from phone to TV.
3. **Semantic HTML first:** a Button is a `<button>` or `<a>`, a Heading is a real `h1`–`h6`.
4. **Accessible by default:** icon-only buttons need `aria-label`; decorative icons are hidden from screen readers.
5. **Server components by default.** Only add `"use client"` when a component needs state or browser APIs (e.g. `SegmentedControl`).

---

## 7. Reusing in another project

Copy `src/styles/`, `src/lib/cn.ts` and the component folders you need, then:

```bash
npm install class-variance-authority clsx tailwind-merge
```

```css
/* the other project's globals.css */
@import "tailwindcss";
@import "./styles/tokens.css";
@import "./styles/ui.css";
```

Change the colours in `tokens.css` and the whole system takes on the new brand. The `media/` components also use `next/image`, so they need Next.js. The `ui/` components work in any React + Tailwind v4 project (`Button` uses `next/link` for internal links; swap it for a plain `<a>` outside Next.js).
