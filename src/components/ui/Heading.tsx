import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

/**
 * Heading: semantic level and visual size are separate, so the outline stays
 * correct for screen readers while the look fits the design.
 *
 * <Heading level={1} size="display">Hello, I'm Godwin.</Heading>
 * <Heading level={2}>Projects</Heading>           → size defaults to "h2"
 * <Heading level={3} size="h4">Small card title</Heading>
 *
 * All sizes are fluid (clamp), so they scale from phone to TV.
 */
export const headingVariants = cva("font-bold tracking-tight text-balance text-text", {
  variants: {
    size: {
      display: "text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.02] tracking-[-0.045em]",
      h1: "text-[clamp(2.25rem,5.5vw,3.25rem)] leading-[1.05] tracking-[-0.04em]",
      h2: "text-[clamp(1.875rem,4.5vw,2.75rem)] leading-[1.08] tracking-[-0.035em]",
      h3: "text-[clamp(1.375rem,2.8vw,1.75rem)] leading-[1.2] tracking-[-0.02em] font-semibold",
      h4: "text-[1.125rem] leading-snug font-semibold tracking-[-0.01em]",
      eyebrow: "text-sm font-semibold tracking-[0.02em] text-sec",
    },
  },
  defaultVariants: { size: "h2" },
});

const defaultSize = { 1: "h1", 2: "h2", 3: "h3", 4: "h4", 5: "h4", 6: "h4" } as const;

type HeadingProps = Omit<ComponentPropsWithoutRef<"h2">, "children"> &
  VariantProps<typeof headingVariants> & {
    /** Semantic level: h1–h6 */
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
  };

export function Heading({ level, size, className, children, ...rest }: HeadingProps) {
  const Tag = `h${level}` as const;
  return (
    <Tag className={cn(headingVariants({ size: size ?? defaultSize[level] }), className)} {...rest}>
      {children}
    </Tag>
  );
}
