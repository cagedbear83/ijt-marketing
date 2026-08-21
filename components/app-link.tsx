"use client";

import type { ReactNode } from "react";
import { useTheme } from "next-themes";
import { appUrl, appUrlWithTheme } from "@/lib/site";

/**
 * A link that crosses over to illinoisjobtracker.app.
 *
 * The rendered href is always the plain app URL, so crawlers, "copy link" and
 * open-in-new-tab all behave normally and server rendering stays stable. The
 * theme is appended only on a plain left-click, in the handler — that keeps an
 * explicit light/dark choice from being lost at the domain boundary without
 * putting client state into SSR output.
 */
export function AppLink({
  path,
  className,
  children,
  "data-testid": testId,
}: {
  path: string;
  className?: string;
  children: ReactNode;
  "data-testid"?: string;
}) {
  const { theme } = useTheme();

  return (
    <a
      href={appUrl(path)}
      className={className}
      data-testid={testId}
      onClick={(e) => {
        // Leave modified clicks alone — those open a new tab or window and
        // should get the unmodified href.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
          return;
        }
        const withTheme = appUrlWithTheme(path, theme);
        if (withTheme === appUrl(path)) return; // "system": nothing to hand off
        e.preventDefault();
        window.location.href = withTheme;
      }}
    >
      {children}
    </a>
  );
}
