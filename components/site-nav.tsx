"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ListIcon, MoonIcon, SunIcon } from "@phosphor-icons/react";
import { nav } from "@/lib/site";
import { Logo } from "@/components/logo";
import { AppLink } from "@/components/app-link";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  // Drive the toggle off resolvedTheme (what is actually on screen) rather
  // than `theme`, which can be the literal "system". `mounted` guards the
  // first client paint so the icon cannot disagree with the rendered colors.
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo href="/" size={32} className="font-semibold" />

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="grid h-9 w-9 place-items-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {isDark ? (
              <SunIcon size={16} weight="bold" />
            ) : (
              <MoonIcon size={16} weight="bold" />
            )}
          </button>
          <AppLink
            path="/login"
            className="hidden px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Sign In
          </AppLink>
          <AppLink
            path="/register"
            className="bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get Started
          </AppLink>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center border border-border text-muted-foreground transition-colors hover:text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <ListIcon size={16} weight="bold" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border px-4 py-3 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <AppLink
            path="/login"
            className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground sm:hidden"
          >
            Sign In
          </AppLink>
        </nav>
      )}
    </header>
  );
}
