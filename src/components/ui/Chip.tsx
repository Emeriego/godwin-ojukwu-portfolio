import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

/**
 * Chip: small labels for tags, tech stacks and filters.
 * <Chip>Java 21</Chip>  <Chip variant="accent">New</Chip>  <Chip variant="glass" size="md">…</Chip>
 */
export const chipVariants = cva("inline-flex items-center gap-1.5 rounded-full font-medium whitespace-nowrap", {
  variants: {
    variant: {
      neutral: "bg-chip text-text",
      glass: "glass text-text",
      accent: "bg-accent text-on-accent",
      outline: "border border-line text-sec",
    },
    size: { sm: "h-6 px-2.5 text-xs", md: "h-8 px-3.5 text-[0.8125rem]" },
  },
  defaultVariants: { variant: "neutral", size: "md" },
});

type ChipProps = ComponentPropsWithoutRef<"span"> & VariantProps<typeof chipVariants> & { children: ReactNode };

export function Chip({ variant, size, className, ...rest }: ChipProps) {
  return <span className={cn(chipVariants({ variant, size }), className)} {...rest} />;
}

/**
 * StatusPill: a glass pill with a coloured status dot.
 * <StatusPill>Open to software developer roles in Germany</StatusPill>
 */
export function StatusPill({
  children,
  dot = "highlight",
  className,
}: {
  children: ReactNode;
  /** Dot colour, from the theme: highlight (orange), brand (green) or neutral */
  dot?: "highlight" | "brand" | "neutral";
  className?: string;
}) {
  const dotColor = {
    highlight: "bg-highlight ring-highlight/15",
    brand: "bg-brand ring-brand/15",
    neutral: "bg-faint ring-faint/15",
  }[dot];
  return (
    <span className={cn(chipVariants({ variant: "glass", size: "md" }), "h-auto py-1.5 pl-3 pr-4 text-left", className)}>
      <span aria-hidden="true" className={cn("size-2 shrink-0 rounded-full ring-4", dotColor)} />
      {children}
    </span>
  );
}
