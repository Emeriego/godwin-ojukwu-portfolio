"use client";

import type { ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { Button, type buttonVariants } from "./Button";
import { Icon } from "./Icon";

/**
 * PrintButton: opens the browser's print dialog (which also offers "Save as PDF").
 * Pair it with print:hidden on page chrome so only the content prints.
 *
 * <PrintButton size="sm" />
 */
type PrintButtonProps = Pick<VariantProps<typeof buttonVariants>, "variant" | "size"> & {
  children?: ReactNode;
  className?: string;
};

export function PrintButton({ children = "Print", variant = "secondary", size, className }: PrintButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      icon={<Icon name="printer" size={17} />}
      onClick={() => window.print()}
    >
      {children}
    </Button>
  );
}
