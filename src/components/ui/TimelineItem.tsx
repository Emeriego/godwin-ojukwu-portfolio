import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Chip } from "./Chip";

/**
 * TimelineItem: one entry in a CV-style list (a job, a degree, a project).
 * Title and organisation on the left, period on the right (stacks on phones),
 * then optional bullet points and a tech stack.
 *
 * <TimelineItem title="Frontend Developer" org="Intplus" location="Lagos" period="2023 – 2025" points={[…]} />
 */
type TimelineItemProps = {
  title: string;
  org?: string;
  location?: string;
  period?: string;
  points?: string[];
  stack?: string[];
  children?: ReactNode;
  className?: string;
};

export function TimelineItem({ title, org, location, period, points, stack, children, className }: TimelineItemProps) {
  return (
    <article className={cn("relative border-l border-line pl-5 sm:pl-6", className)}>
      <span aria-hidden="true" className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-accent ring-4 ring-bg print:ring-0" />
      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="text-[1.0625rem] font-semibold leading-snug text-text">{title}</h3>
        {period && <p className="shrink-0 text-sm tabular-nums text-sec">{period}</p>}
      </div>
      {(org || location) && (
        <p className="mt-0.5 text-sm text-sec">{[org, location].filter(Boolean).join(" · ")}</p>
      )}
      {points && points.length > 0 && (
        <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-4 text-[0.9375rem] leading-relaxed text-text marker:text-faint">
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
      {stack && stack.length > 0 && (
        <ul aria-label="Tech stack" className="mt-3 flex flex-wrap gap-1.5">
          {stack.map((s) => (
            <li key={s}>
              <Chip size="sm" variant="outline">{s}</Chip>
            </li>
          ))}
        </ul>
      )}
      {children}
    </article>
  );
}
