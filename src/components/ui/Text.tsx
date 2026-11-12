import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

/**
 * Text: body copy in a few fixed sizes and tones.
 *
 * <Text>Default paragraph</Text>
 * <Text size="lead" tone="muted">Intro under a heading</Text>
 * <Text as="span" size="caption" tone="faint">Small print</Text>
 */
export const textVariants = cva("text-pretty", {
  variants: {
    size: {
      lead: "text-[clamp(1.0625rem,1.6vw,1.25rem)] leading-relaxed",
      body: "text-base leading-relaxed",
      small: "text-sm leading-relaxed",
      caption: "text-xs leading-normal",
    },
    tone: {
      default: "text-text",
      muted: "text-sec",
      faint: "text-faint",
      accent: "text-accent",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    },
  },
  defaultVariants: { size: "body", tone: "default", weight: "regular" },
});

type TextProps = Omit<ComponentPropsWithoutRef<"p">, "children"> &
  VariantProps<typeof textVariants> & {
    as?: ElementType;
    children: ReactNode;
  };

export function Text({ as: Tag = "p", size, tone, weight, className, children, ...rest }: TextProps) {
  return (
    <Tag className={cn(textVariants({ size, tone, weight }), className)} {...rest}>
      {children}
    </Tag>
  );
}

/** Wraps words in the brand green-to-lime gradient: <GradientText>Hello</GradientText> */
export function GradientText({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("text-gradient", className)}>{children}</span>;
}
