"use client";

// A client component: it reacts to clicks and reads browser state,
// which can't happen on the server.
import { useSyncExternalStore } from "react";
import { Button, Icon } from "@/components/ui";

type Theme = "light" | "dark";

// The theme lives on <html data-theme="…">, set before paint by the script in layout.tsx.
// useSyncExternalStore lets React read that attribute and re-render whenever it changes,
// without copying it into component state.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
const getTheme = (): Theme =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";
// The server can't know the visitor's theme, so it renders a neutral default.
const getServerTheme = (): Theme | null => null;

export default function ThemeToggle() {
  const theme = useSyncExternalStore<Theme | null>(subscribe, getTheme, getServerTheme);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next; // the observer re-renders this button
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked (private mode); the toggle still works for this visit.
    }
  }

  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <Button variant="soft" size="icon" onClick={toggle} aria-label={label} title={label}>
      <Icon name={theme === "dark" ? "sun" : "moon"} size={17} />
    </Button>
  );
}
