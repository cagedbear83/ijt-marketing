import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Chivo, IBM_Plex_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { site, THEME_STORAGE_KEY } from "@/lib/site";
import "./globals.css";

const chivo = Chivo({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-chivo",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  // 700 matters: the app loads it, so without it every `font-bold` on body
  // copy here would render as synthetic bold and look different across domains.
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s — ${site.name}`,
  },
  description: site.tagline,
  metadataBase: new URL(`https://${site.domain}`),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/logo-mark.svg", type: "image/svg+xml" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    siteName: site.name,
    type: "website",
    title: site.name,
    description: site.tagline,
    url: "/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0033A0",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // The next/font variables must live on <html>, not <body>: the shared
    // --font-body / --font-heading tokens are declared on :root and reference
    // them, and a var() that is undefined at :root makes the whole token
    // invalid — which silently dropped both faces back to system sans.
    <html
      lang="en"
      className={`${chivo.variable} ${ibmPlexSans.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey={THEME_STORAGE_KEY}
        >
          <div className="flex min-h-screen flex-col bg-background text-foreground">
            {/* The Illinois stripe that opens every page on both domains.
                Outside the sticky nav so it scrolls away naturally. */}
            <div className="brand-bar" />
            <SiteNav />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
