"use client";

// Shares the visitor's chosen language (English or German) across the page,
// so the switch in the nav can change text in the hero and, later, every section.
// (Build step 6 adds proper /en and /de routes and browser-language detection.)
//
// Switching is soft: old words dissolve out, the language swaps, new words dissolve in
// one by one. Render language-dependent strings with <FadeText> (word by word), or wrap
// whole blocks in <LangFade> (block fade).
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import type { Lang } from "@/content/hero";

/** How long the text takes to fade out before the language swaps (ms) */
export const LANG_FADE_MS = 230;

type LanguageContextValue = {
  /** The language the text is currently shown in */
  lang: Lang;
  /** The language just chosen (switches immediately, e.g. for the switch's own state) */
  targetLang: Lang;
  /** True while text is fading out before the swap */
  fading: boolean;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setShownLang] = useState<Lang>("en");
  const [targetLang, setTargetLang] = useState<Lang>("en");
  const [fading, setFading] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function setLang(next: Lang) {
    if (next === targetLang) return;
    setTargetLang(next);
    setFading(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setShownLang(next);
      setFading(false);
    }, LANG_FADE_MS);
  }

  // Keep <html lang> correct so screen readers pronounce the text in the right language
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, targetLang, fading, setLang }}>{children}</LanguageContext.Provider>
  );
}

/** Like useLanguage, but returns null outside a provider (for components that work with or without one) */
export function useOptionalLanguage() {
  return useContext(LanguageContext);
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
