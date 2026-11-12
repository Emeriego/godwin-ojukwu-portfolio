"use client";

import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { LANG_FADE_MS, useLanguage } from "@/components/LanguageProvider";

/**
 * LangFade: wraps text that changes with the language, so it fades out,
 * swaps, and fades back in instead of changing abruptly.
 * Reuse it around any language-dependent block.
 *
 * <LangFade><Heading level={2}>{copy.title}</Heading></LangFade>
 * <LangFade as="span">{copy.label}</LangFade>
 */
export function LangFade({
  children,
  as: Tag = "div",
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}) {
  const { fading } = useLanguage();
  return (
    <Tag
      className={cn("transition-[opacity,filter] ease-out", fading ? "opacity-0 blur-[2px]" : "opacity-100", className)}
      style={{ transitionDuration: `${LANG_FADE_MS}ms` }}
    >
      {children}
    </Tag>
  );
}
