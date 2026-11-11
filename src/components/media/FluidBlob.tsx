import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * FluidBlob: an organic shape that slowly morphs (and optionally floats).
 * Use it empty as a decorative splash, or put an image inside — content is clipped to the shape.
 * Pure CSS animation (see ui.css), so it costs almost nothing and respects reduced motion.
 *
 * <FluidBlob className="w-48" />                         → green splash
 * <FluidBlob className="w-64" fill="patch" />            → soft shadow patch
 * <FluidBlob className="w-56"><Image … /></FluidBlob>     → image inside the shape
 */
type FluidBlobProps = {
  /** Size comes from the width class (e.g. "w-48"); the blob is always square */
  className?: string;
  /** Fill: brand gradient, the subtle shadow patch, or none (for image-only) */
  fill?: "brand" | "patch" | "none";
  /** Morph speed in seconds (lower = livelier). Default 14 */
  duration?: number;
  /** Start offset in seconds, so several blobs don't move in sync */
  delay?: number;
  /** Gentle up-and-down drift */
  float?: boolean;
  /** Fade (0–1) */
  opacity?: number;
  /** Extra soft shadow under the shape */
  shadow?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
};

export function FluidBlob({
  className,
  fill = "brand",
  duration = 14,
  delay = 0,
  float = false,
  opacity,
  shadow = false,
  children,
  style,
}: FluidBlobProps) {
  const fillClass = { brand: "bg-[image:var(--blob)]", patch: "bg-[var(--patch)]", none: "" }[fill];
  const shape = (
    <div
      aria-hidden={children ? undefined : true}
      className={cn(
        "relative aspect-square w-full animate-morph overflow-hidden",
        fillClass,
        shadow && "shadow-[0_1.5rem_3.75rem_var(--blob-shadow)]",
      )}
      style={{ animationDuration: `${duration}s`, animationDelay: `-${delay}s`, opacity }}
    >
      {children}
    </div>
  );

  return (
    <div
      className={cn("aspect-square", float && "animate-float", className)}
      style={{ animationDuration: float ? `${duration / 2}s` : undefined, animationDelay: `-${delay}s`, ...style }}
    >
      {shape}
    </div>
  );
}
