import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

/**
 * Container: centred, width-limited content with responsive side padding.
 * <Container size="md">…</Container>
 */
export const containerVariants = cva("mx-auto w-full px-4 sm:px-6", {
  variants: {
    size: {
      sm: "max-w-2xl",
      md: "max-w-3xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      full: "max-w-none",
    },
  },
  defaultVariants: { size: "lg" },
});

type ContainerProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof containerVariants> & { as?: ElementType };

export function Container({ as: Tag = "div", size, className, ...rest }: ContainerProps) {
  return <Tag className={cn(containerVariants({ size }), className)} {...rest} />;
}

/**
 * Section: a full-width page band with vertical rhythm and an optional
 * alternate background, so sections can alternate like on apple.com.
 * <Section id="projects" tone="alt">…</Section>
 */
export const sectionVariants = cva("relative w-full", {
  variants: {
    tone: { default: "bg-bg", alt: "bg-bg-2", none: "" },
    spacing: {
      none: "",
      sm: "py-12 sm:py-16",
      md: "py-16 sm:py-24",
      lg: "py-20 sm:py-32",
    },
  },
  defaultVariants: { tone: "none", spacing: "md" },
});

type SectionProps = ComponentPropsWithoutRef<"section"> & VariantProps<typeof sectionVariants>;

export function Section({ tone, spacing, className, ...rest }: SectionProps) {
  return <section className={cn(sectionVariants({ tone, spacing }), className)} {...rest} />;
}

/**
 * Stack: vertical or horizontal flex layout with consistent gaps.
 * <Stack gap="md">…</Stack>  <Stack direction="row" wrap align="center">…</Stack>
 */
export const stackVariants = cva("flex", {
  variants: {
    direction: { col: "flex-col", row: "flex-row" },
    gap: { none: "gap-0", xs: "gap-1.5", sm: "gap-3", md: "gap-5", lg: "gap-8", xl: "gap-12" },
    align: { start: "items-start", center: "items-center", end: "items-end", stretch: "items-stretch" },
    justify: { start: "justify-start", center: "justify-center", end: "justify-end", between: "justify-between" },
    wrap: { true: "flex-wrap" },
  },
  defaultVariants: { direction: "col", gap: "md" },
});

type StackProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof stackVariants> & { as?: ElementType; children?: ReactNode };

export function Stack({ as: Tag = "div", direction, gap, align, justify, wrap, className, ...rest }: StackProps) {
  return <Tag className={cn(stackVariants({ direction, gap, align, justify, wrap }), className)} {...rest} />;
}
