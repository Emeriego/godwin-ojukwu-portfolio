"use client";

import { cn } from "@/lib/cn";

/**
 * SegmentedControl: pick one of a few options (Apple-style pill switch).
 * Controlled: the parent owns the value.
 *
 * <SegmentedControl
 *   label="Language"
 *   options={[{ value: "en", label: "Hello" }, { value: "de", label: "Hallo" }]}
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
  return (
    <div role="group" aria-label={label} className={cn("glass inline-flex gap-1 rounded-full p-1", className)}>
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(o.value)}
            className={cn(
              "rounded-full font-semibold transition",
              size === "sm" ? "h-7 px-3.5 text-[0.8125rem]" : "h-9 px-4 text-sm",
              active ? "bg-accent text-on-accent" : "text-sec hover:text-text",
            )}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
