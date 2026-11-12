import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

/**
 * Surface: the base for cards, panels and bars.
 *
 * <Surface>Glass card</Surface>
 * <Surface variant="solid" radius="md" padding="lg">Solid card</Surface>
 * <Surface as="article" interactive>Hover lifts it</Surface>
 */
export const surfaceVariants = cva("", {
  variants: {
    variant: {
      glass: "glass",
      solid: "bg-bg-2 border border-line shadow-[var(--glass-shadow)]",
      soft: "bg-chip",
      outline: "border border-line",
    },
    radius: { sm: "rounded-xl", md: "rounded-2xl", lg: "rounded-3xl", full: "rounded-full" },
    padding: { none: "p-0", sm: "p-3", md: "p-5", lg: "p-6 sm:p-8" },
    interactive: { true: "transition duration-200 hover:-translate-y-0.5 hover:brightness-[1.03]" },
  },
  defaultVariants: { variant: "glass", radius: "lg", padding: "md" },
});

type SurfaceProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof surfaceVariants> & { as?: ElementType };

export function Surface({ as: Tag = "div", variant, radius, padding, interactive, className, ...rest }: SurfaceProps) {
  return <Tag className={cn(surfaceVariants({ variant, radius, padding, interactive }), className)} {...rest} />;
}
