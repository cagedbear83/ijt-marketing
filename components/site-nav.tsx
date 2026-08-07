"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { site, nav } from "@/lib/site";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center border-2 border-white bg-primary text-primary-foreground text-sm font-black font-heading">
            IL
          </span>
          <span className="hidden sm:inline font-heading font-black">{site.name}</span>
        </Link>

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
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="grid h-9 w-9 place-items-center border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="dark:hidden">☀</span>
            <span className="hidden dark:inline">☾</span>
          </button>
          <Link
            href={`${site.appUrl}/login`}
            className="hidden px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            Sign In
          </Link>
          <Link
            href={`${site.appUrl}/register`}
            className="bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
          <button
            aria-label="Menu"
            className="grid h-9 w-9 place-items-center border border-border md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
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
        </nav>
      )}
    </header>
  );
}