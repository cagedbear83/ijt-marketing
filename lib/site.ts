// Central place to edit copy, pricing, and links across the marketing site.

export const site = {
  name: "Illinois Job Tracker",
  domain: "illinoisjobtracker.app",
  tagline: "Track your weekly work-search contacts and generate your ADJ034F — without the spreadsheet.",
  supportEmail: "support@illinoisjobtracker.app",
  // Company/legal entity behind the product
  company: "KMG123 Enterprises LLC",
} as const;

export const nav = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
] as const;

export type Plan = {
  id: string;
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  cta: string;
  featured?: boolean;
  features: string[];
};

// Edit these to match your real Stripe products/prices.
export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    cadence: "forever",
    blurb: "Log contacts by hand and stay organized.",
    cta: "Get started",
    features: [
      "Log up to 5 contacts per week",
      "Weekly requirement tracker",
      "Basic contact history",
      "Light & dark mode",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$5",
    cadence: "per month",
    blurb: "Everything you need to stay compliant, automatically.",
    cta: "Start Pro",
    featured: true,
    features: [
      "Unlimited weekly contacts",
      "One-click ADJ034F form generation",
      "AI screenshot import (paste a job listing, we fill the fields)",
      "Full searchable history & export",
      "Email reminders before your deadline",
      "Priority support",
    ],
  },
];

export const faqs = [
  {
    q: "Is this affiliated with IDES or the State of Illinois?",
    a: "No. Illinois Job Tracker is an independent, third-party tool. It is not affiliated with, endorsed by, or connected to the Illinois Department of Employment Security (IDES) or any government agency. You are always responsible for the accuracy of what you submit to IDES.",
  },
  {
    q: "What is the ADJ034F form?",
    a: "It's the official Illinois work-search record form. Many claimants are required to document their weekly job-search contacts and be able to produce this record. The app fills the official fillable PDF from the contacts you've logged.",
  },
  {
    q: "How many job contacts do I need each week?",
    a: "IDES sets the requirement, and it can change. Check your official IDES correspondence for the number that applies to you. The app lets you set your weekly target and tracks your progress toward it.",
  },
  {
    q: "How does the screenshot import work?",
    a: "On Pro, you can paste or upload a screenshot of a job listing or application confirmation. The app reads the employer, position, and date and pre-fills the contact for you to review before saving.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel from your account settings and keep Pro features until the end of your current billing period. See our Refund Policy for details.",
  },
  {
    q: "Is my data private?",
    a: "Your data is yours. We don't sell it. See our Privacy Policy for how information is stored and handled, including under Illinois privacy law.",
  },
];
