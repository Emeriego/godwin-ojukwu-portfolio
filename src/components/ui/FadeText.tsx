"use client";

import { useState, type ElementType } from "react";
import { cn } from "@/lib/cn";
import { useOptionalLanguage } from "@/components/LanguageProvider";

/**
 * FadeText: when its text changes, the words dissolve in one by one, in a gentle
 * wave from left to right with a little random variation — the page seems to quietly
 * re-write itself instead of blinking. Inside a LanguageProvider, the old words also
 * dissolve out (staggered) before a language switch.
 *
 * The first render is never animated (no flash on page load), and reduced-motion
 * visitors get an instant change.
 *
 * <Heading level={2}><FadeText text={copy.title} /></Heading>
 * <FadeText text={copy.hello} wordClassName="text-gradient" />
 */
type FadeTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  /** Classes for every word (e.g. "text-gradient") */
  wordClassName?: string;
  /** Pause between words in ms; shrinks automatically for long texts (default 95) */
  stagger?: number;
};

/** Small, repeatable "random" offset per word (same on server and client).
 *  The first word gets none, so new text starts appearing right away. */
const jitter = (i: number) => (i === 0 ? 0 : ((i * 37 + 11) % 7) * 22);

export function FadeText({ text, as: Tag = "span", className, wordClassName, stagger = 95 }: FadeTextProps) {
  const language = useOptionalLanguage();
  const fadingOut = language?.fading ?? false;

  // Count text changes; version 0 (first render) isn't animated
  const [prev, setPrev] = useState(text);
  const [version, setVersion] = useState(0);
  if (prev !== text) {
    setPrev(text);
    setVersion((v) => v + 1);
  }

  const words = text.split(" ");
  // Keep long texts snappy: the whole wave finishes in about 1.2s at most
  const step = Math.min(stagger, 1200 / Math.max(words.length, 1));
  const outStep = Math.min(30, 140 / Math.max(words.length, 1));

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={`${version}-${i}`}>
          <span
            className={cn(
              "inline-block",
              // Out: an animation (not a transition), so it always starts from fully visible,
              // even if the word is still finishing its own fade-in
              fadingOut ? "animate-word-out" : version > 0 && "animate-word-in",
              wordClassName,
            )}
            style={
              fadingOut
                ? { animationDelay: `${Math.round(i * outStep)}ms` }
                : version > 0
                  ? { animationDelay: `${Math.round(i * step + jitter(i))}ms` }
                  : undefined
            }
          >
            {word}
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
