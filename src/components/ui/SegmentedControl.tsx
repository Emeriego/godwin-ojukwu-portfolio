"use client";

import { cn } from "@/lib/cn";

/**
 * SegmentedControl: pick one of a few options (Apple-style pill switch).
 * A coloured "thumb" slides smoothly to the selected option, and the labels fade
 * between colours, so switching never feels abrupt. Controlled: the parent owns the value.
 * Options get equal widths, which is what lets the thumb slide with pure CSS.
 *
 * <SegmentedControl
 *   label="Language"
 *   options={[{ value: "en", label: "EN" }, { value: "de", label: "DE" }]}
 *   value={lang}
 *   onChange={setLang}
 * />
 */
type Option<T extends string> = { value: T; label: string };

type Props<T extends string> = {
  label: string;
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
  size?: "sm" | "md";
  className?: string;
};

export function SegmentedControl<T extends string>({ label, options, value, onChange, size = "sm", className }: Props<T>) {
  const count = options.length;
  const index = Math.max(0, options.findIndex((o) => o.value === value));

  return (
    <div
      role="group"
      aria-label={label}
      className={cn("glass relative inline-grid rounded-full p-1", className)}
      style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
    >
      {/* The sliding thumb: one option wide, moved by whole option widths */}
      <span
        aria-hidden="true"
        className="absolute inset-y-1 left-1 rounded-full bg-accent shadow-[0_2px_8px_var(--blob-shadow)] transition-transform duration-[350ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
        style={{ width: `calc((100% - 0.5rem) / ${count})`, transform: `translateX(${index * 100}%)` }}
      />
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(o.value)}
            className={cn(
              "relative z-10 rounded-full font-semibold transition-colors duration-[350ms]",
              "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
              size === "sm" ? "h-7 px-3.5 text-[0.8125rem]" : "h-9 px-4 text-sm",
              active ? "text-on-accent" : "text-sec hover:text-text",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
