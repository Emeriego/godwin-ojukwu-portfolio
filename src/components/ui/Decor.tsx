import { cn } from "@/lib/cn";

/**
 * Decorative background pieces. Both are aria-hidden and ignore the pointer.
 * Place them inside a `relative overflow-hidden` section.
 */

/** Wordmark: a giant, very faint word behind the content. */
export function Wordmark({ text, className }: { text: string; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-extrabold leading-none tracking-[-0.05em] text-[var(--wordmark)]",
        "text-[clamp(7rem,24vw,18.75rem)]",
        className,
      )}
    >
      {text}
    </div>
  );
}

/** GlowBackdrop: two soft brand-coloured glows, left and right. */
export function GlowBackdrop({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
      <div className="absolute -left-32 top-24 aspect-square w-[min(35rem,70vw)] rounded-full bg-[radial-gradient(circle,var(--glow),transparent_70%)] opacity-90 blur-2xl" />
      <div className="absolute -right-24 top-72 aspect-square w-[min(32rem,65vw)] rounded-full bg-[radial-gradient(circle,var(--glow-2),transparent_70%)] blur-2xl" />
    </div>
  );
}
