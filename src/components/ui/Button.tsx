import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

/**
 * Button: one component for every clickable action.
 * Renders a <button>, or a link when `href` is given (internal links use next/link).
 *
 * <Button>Save</Button>
 * <Button variant="secondary" href="/cv.pdf" icon={<Icon name="download" />}>Download CV</Button>
 * <Button variant="ghost" size="icon" aria-label="Menu"><Icon name="menu" /></Button>
 */
export const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition duration-200 select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        /** Main action: solid accent */
        primary: "bg-accent text-on-accent hover:brightness-110 active:scale-[0.98]",
        /** Secondary action: frosted glass */
        secondary: "glass text-text hover:brightness-105 active:scale-[0.98]",
        /** Quiet action: thin outline */
        outline: "border border-line text-text hover:bg-chip active:scale-[0.98]",
        /** Lowest emphasis: text only, background on hover */
        ghost: "text-sec hover:bg-chip hover:text-text",
        /** Subtle filled chip-style button */
        soft: "bg-chip text-text hover:brightness-95 active:scale-[0.98]",
        /** Inline text link style */
        link: "rounded-none px-0 text-text underline underline-offset-4 hover:text-accent",
      },
      size: {
        sm: "h-8 px-3.5 text-[0.8125rem]",
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "size-9 p-0",
        "icon-lg": "size-12 p-0",
      },
      fullWidth: { true: "w-full" },
    },
    compoundVariants: [{ variant: "link", className: "h-auto" }],
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Common = VariantProps<typeof buttonVariants> & {
  /** Optional icon shown before the label */
  icon?: ReactNode;
  /** Optional icon shown after the label */
  iconRight?: ReactNode;
  children?: ReactNode;
  className?: string;
};

type AsButton = Common & Omit<ComponentPropsWithoutRef<"button">, keyof Common> & { href?: undefined };
type AsLink = Common & Omit<ComponentPropsWithoutRef<"a">, keyof Common> & { href: string };
export type ButtonProps = AsButton | AsLink;

export function Button(props: ButtonProps) {
  const { variant, size, fullWidth, icon, iconRight, children, className, ...rest } = props;
  const classes = cn(buttonVariants({ variant, size, fullWidth }), className);
  const content = (
    <>
      {icon}
      {children}
      {iconRight}
    </>
  );

  if (rest.href !== undefined) {
    const { href, ...anchor } = rest as AsLink;
    // Same-site pages get client-side navigation; everything else (mailto:, https:, #, files) is a plain <a>.
    if (href.startsWith("/") && !/\.\w+$/.test(href)) {
      return (
        <Link href={href} className={classes} {...anchor}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...anchor}>
        {content}
      </a>
    );
  }

  const { type = "button", ...button } = rest as AsButton;
  return (
    <button type={type} className={classes} {...button}>
      {content}
    </button>
  );
}
