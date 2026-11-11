"use client";

// Client component because of the mobile menu's open/closed state.
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { Button, Icon, Surface } from "@/components/ui";
import { contactHref, sections, site } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <Surface
        as="nav"
        aria-label="Main"
        padding="none"
        className="mx-auto max-w-6xl rounded-[1.75rem] px-3 py-2 sm:rounded-full sm:pl-6"
      >
        <div className="flex items-center justify-between gap-3">
          <a href="#top" onClick={close} className="font-semibold tracking-tight text-text">
            {site.name}
          </a>

          {/* Section links: tablet width and up */}
          <ul className="hidden items-center gap-1 md:flex">
            {sections.map((s) => (
              <li key={s.id}>
                <Button variant="ghost" size="sm" href={`#${s.id}`} className="font-medium">
                  {s.label}
                </Button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button href={contactHref} size="sm" className="hidden h-9 sm:inline-flex">
              Contact me
            </Button>
            {/* Menu button: phones and small tablets */}
            <Button
              variant="soft"
              size="icon"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="md:hidden"
            >
              <Icon name={open ? "close" : "menu"} />
            </Button>
          </div>
        </div>

        {open && (
          <div id="mobile-menu" className="border-t border-line px-1 pb-2 pt-2 md:hidden">
            <ul className="flex flex-col">
              {sections.map((s) => (
                <li key={s.id}>
                  <Button
                    variant="ghost"
                    size="lg"
                    href={`#${s.id}`}
                    onClick={close}
                    fullWidth
                    className="justify-start rounded-xl px-3 font-medium text-text"
                  >
                    {s.label}
                  </Button>
                </li>
              ))}
            </ul>
            <Button href={contactHref} onClick={close} size="lg" fullWidth className="mt-2">
              Contact me
            </Button>
          </div>
        )}
      </Surface>
    </header>
  );
}
