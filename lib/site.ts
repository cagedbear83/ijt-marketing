// Central place to edit copy, pricing, and links across the marketing site.
// Edit here — pages read from this file automatically.

export const site = {
  name: "Illinois Job Tracker",
  domain: "illinoisjobtracker.app",
  tagline: "Track your weekly work-search contacts and generate your ADJ034F — without the spreadsheet.",
  supportEmail: "support@illinoisjobtracker.com",
  privacyEmail: "privacy@illinoisjobtracker.com",
  termsEmail: "terms@illinoisjobtracker.com",
  company: "KMG123 Enterprises LLC",
  appUrl: "https://illinoisjobtracker.app",
} as const;

export const nav = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
] as const;

export type Plan = {
  id: string;
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  annualMonthly: string;   // annual price broken down per month for display
  cadence: string;
  blurb: string;
  cta: string;
  ctaHref: string;
  featured?: boolean;
  features: string[];
  seatNote?: string;       // Case Worker additional seat info
};

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    monthlyPrice: "$0",
    annualPrice: "$0",
    annualMonthly: "$0",
    cadence: "forever",
    blurb: "Get started logging your work-search contacts at no cost.",
    cta: "Get started free",
    ctaHref: "https://illinoisjobtracker.app/register",
    features: [
      "1 claimant profile (your own)",
      "Log work-search contacts",
      "Current benefit week access",
      "3 PDF exports per month",
      "Current week CSV export",
      "30-day audit log",
      "Light & dark mode",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: "$9.99",
    annualPrice: "$95.99",
    annualMonthly: "$8.00",
    cadence: "per month",
    blurb: "Everything you need to stay compliant and never miss a deadline.",
    cta: "Start Pro",
    ctaHref: "https://illinoisjobtracker.app/register?plan=pro",
    featured: true,
    features: [
      "1 claimant profile (your own)",
      "Full benefit week history access",
      "Unlimited ADJ034F PDF exports",
      "Full history CSV export",
      "SMS + full email reminder schedule",
      "AI screenshot import (10/month)",
      "AI resume review (3/month)",
      "Calendar events",
      "100MB document storage",
      "12-month audit log",
      "Advanced analytics dashboard",
    ],
  },
  {
    id: "caseworker",
    name: "Case Worker",
    monthlyPrice: "$19.99",
    annualPrice: "$199.99",
    annualMonthly: "$16.67",
    cadence: "per month · first seat",
    blurb: "For professionals managing work-search compliance for multiple claimants.",
    cta: "Start Case Worker",
    ctaHref: "https://illinoisjobtracker.app/register?plan=caseworker",
    featured: false,
    seatNote: "Additional seats $12.99/mo or $129.99/yr each",
    features: [
      "Unlimited claimant profiles per seat",
      "Full benefit week history access",
      "Unlimited ADJ034F PDF exports",
      "Full history CSV export",
      "SMS + full email reminder schedule",
      "Unlimited AI screenshot imports",
      "Unlimited AI resume reviews",
      "Calendar events",
      "1GB document storage per seat",
      "12-month audit log",
      "Advanced analytics dashboard",
      "Bulk invite + seat management",
      "Signed claimant authorization required",
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
    a: "It's the official Illinois work-search record form. Many claimants are required to document their weekly job-search contacts and be able to produce this record if IDES asks. The app generates this form automatically from the contacts you've logged.",
  },
  {
    q: "How many job contacts do I need each week?",
    a: "IDES sets the requirement, and it can change. Check your official IDES correspondence for the number that applies to you. The app lets you track your progress toward your weekly requirement.",
  },
  {
    q: "How long is my data kept?",
    a: "Work-search records are retained for 53 weeks from the end of each benefit week — consistent with IDES's own record-lookback period. You'll receive email reminders at 14 days, 7 days, and 24 hours before any records are due to be deleted, with a direct link to export your data first.",
  },
  {
    q: "How does the AI screenshot import work?",
    a: "On Pro and Case Worker plans, you can upload a screenshot of a job listing or application confirmation. The app reads the employer, position, and date and pre-fills the contact for you to review before saving.",
  },
  {
    q: "What is the Case Worker plan?",
    a: "The Case Worker plan is designed for social workers, nonprofits, and organizations managing work-search compliance on behalf of multiple unemployment claimants. Each seat gives one case worker their own login and unlimited claimant management. A signed claimant authorization is required before managing any individual's data.",
  },
  {
    q: "Can I try Pro before paying?",
    a: "Yes. Pro comes with a 14-day free trial. A card is required upfront and you won't be charged until the trial ends. Cancel anytime before day 15 and you won't be billed.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from your account settings and keep your plan's features until the end of your current billing period. See our Refund Policy for details.",
  },
  {
    q: "Is my data private?",
    a: "Your data is yours. We don't sell it. See our Privacy Policy for how information is stored and handled, including under Illinois privacy law.",
  },
];