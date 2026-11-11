"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";
import { nextRandomIndex } from "@/lib/random";

/**
 * TypedLine: types out one of several lines, holds it, erases it, then types another
 * (random order, never the same twice in a row).
 *
 * - Screen readers get the first line as stable text, not letters appearing and vanishing.
 * - With "reduce motion" on, it shows the first line still.
 * - Reserve space with a min-height class so the page doesn't jump while typing.
 *
 * <TypedLine lines={["First…", "Second…"]} className="min-h-12" />
 */
type TypedLineProps = {
  lines: string[];
  className?: string;
  /** ms per typed character (default 38) */
  typeSpeed?: number;
  /** ms per erased character (default 14) */
  eraseSpeed?: number;
  /** ms a full line stays visible (default 4200) */
  hold?: number;
};

const subscribeMotion = (cb: () => void) => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const getReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const getServerReducedMotion = () => true; // server renders the still version

export function TypedLine({ lines, className, typeSpeed = 38, eraseSpeed = 14, hold = 4200 }: TypedLineProps) {
  const reduced = useSyncExternalStore(subscribeMotion, getReducedMotion, getServerReducedMotion);
  // Start with the first line fully shown: it matches the server-rendered HTML (no flash),
  // then the cycle continues — hold, erase, type a random next line.
  const [state, setState] = useState({ index: 0, chars: lines[0]?.length ?? 0, phase: "typing" as "typing" | "erasing" });

  // Restart when the set of lines changes (e.g. language switch)
  const [prevLines, setPrevLines] = useState(lines);
  if (prevLines !== lines) {
    setPrevLines(lines);
    setState({ index: 0, chars: 0, phase: "typing" });
  }

  useEffect(() => {
    if (reduced) return;
    const full = lines[state.index] ?? "";
    let delay: number;
    let next: typeof state;

    if (state.phase === "typing") {
      if (state.chars < full.length) {
        delay = typeSpeed;
        next = { ...state, chars: state.chars + 1 };
      } else {
        delay = hold;
        next = { ...state, phase: "erasing" };
      }
    } else {
      if (state.chars > 0) {
        delay = eraseSpeed;
        next = { ...state, chars: state.chars - 1 };
      } else {
        delay = 450;
        next = { index: nextRandomIndex(lines.length, state.index), chars: 0, phase: "typing" };
      }
    }

    const t = setTimeout(() => setState(next), delay);
    return () => clearTimeout(t);
  }, [state, lines, reduced, typeSpeed, eraseSpeed, hold]);

  const text = reduced ? lines[0] : (lines[state.index] ?? "").slice(0, state.chars);
  const holding = state.phase === "erasing" && state.chars === (lines[state.index]?.length ?? 0);

  return (
    <p className={cn("text-pretty", className)}>
      <span className="sr-only">{lines[0]}</span>
      <span aria-hidden="true">
        {text}
        {!reduced && (
          <span
            className={cn(
              "ml-[3px] inline-block h-[1em] w-[1.5px] translate-y-[0.12em] rounded-[1px] bg-accent",
              holding && "animate-pulse",
            )}
          />
        )}
      </span>
    </p>
  );
}
