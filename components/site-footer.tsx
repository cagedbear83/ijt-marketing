import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "@/components/logo";
import { AppLink } from "@/components/app-link";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refunds" },
      { label: "IDES Disclaimer", href: "/disclaimer" },
    ],
  },
];

const linkClass =
  "text-sm text-muted-foreground transition-colors hover:text-foreground";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Logo href="/" size={32} className="text-sm" />
            <p className="mt-3 text-sm text-muted-foreground">{site.tagline}</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold font-heading">{col.title}</h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
                {/* The app half of the product, reachable from the footer of
                    every page — the same way the app footer links back here. */}
                {col.title === "Product" && (
                  <li>
                    <AppLink path="/login" className={linkClass}>
                      Sign In
                    </AppLink>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-border bg-background p-4 text-xs text-muted-foreground">
          <strong className="text-foreground">Not a government service.</strong>{" "}
          {site.name} is an independent tool operated by {site.company}. It is not
          affiliated with, endorsed by, or connected to the Illinois Department of
          Employment Security (IDES) or any government agency. You are solely
          responsible for the accuracy and timeliness of any information you submit
          to IDES.
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.company}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
