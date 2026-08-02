# Illinois Job Tracker — Marketing & Legal Pages

Drop-in Next.js App Router pages for illinoisjobtracker.app.
Uses your existing Tailwind semantic tokens + next-themes (bg-background,
text-foreground, text-muted-foreground, border-border, bg-primary, etc.).

## Install
Copy these into your Next.js project root, preserving structure:

  app/            -> your app/ directory (page.tsx is the new landing page)
  components/     -> your components/ directory
  lib/site.ts     -> your lib/ directory

The @/ import alias must point to project root (standard Next.js setup).

## Wire up nav + footer
Add SiteNav and SiteFooter to your app/layout.tsx so every page gets them:

  import { SiteNav } from "@/components/site-nav";
  import { SiteFooter } from "@/components/site-footer";
  // inside <body>:
  //   <SiteNav />
  //   {children}
  //   <SiteFooter />

## Edit copy in ONE place
lib/site.ts holds the tagline, support email, plans/pricing, and FAQ.
Change pricing + Stripe details there; the pages read from it.

## Pages included
  /               Landing
  /features       Features
  /pricing        Pricing (2 plans, edit in lib/site.ts)
  /how-it-works   4-step walkthrough
  /faq            Accordion FAQ
  /about          About / trust
  /contact        Support contact
  /privacy        Privacy Policy   (template — get reviewed)
  /terms          Terms of Service (template — get reviewed)
  /refunds        Refund Policy    (template — get reviewed)
  /disclaimer     IDES non-affiliation notice

## Still to add yourself
  /login, /signup   -> your existing auth pages
  app/not-found.tsx -> 404 (Next.js convention)
  Cookie/consent banner if you add analytics

## LEGAL WARNING
The privacy/terms/refunds pages are STARTING TEMPLATES, not legal advice.
Given Illinois PIPA/BIPA and Stripe billing, have an attorney review before launch.
