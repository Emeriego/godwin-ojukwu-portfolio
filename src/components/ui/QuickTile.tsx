import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

/**
 * QuickTile: a compact glass chip with an icon above a label,
 * used for suggested questions, shortcuts or filters.
 *
 * <QuickTile icon="briefcase" label="Projects" iconClassName="text-[var(--tile-green)]" onClick={…} />
 */
type QuickTileProps = Omit<ComponentPropsWithoutRef<"button">, "children"> & {
  icon: IconName;
  label: string;
  /** Icon colour class (use a theme token) */
  iconClassName?: string;
  active?: boolean;
};

export function QuickTile({ icon, label, iconClassName, active = false, className, ...rest }: QuickTileProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "glass flex min-w-0 flex-col items-center gap-1.5 rounded-2xl px-1.5 py-3 text-[0.8125rem] font-medium text-text transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        active && "ring-2 ring-accent/50",
        className,
      )}
      {...rest}
    >
      <Icon name={icon} size={18} className={iconClassName} />
      <span className="max-w-full truncate">{label}</span>
    </button>
  );
}
