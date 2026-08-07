import { Section, PageHeader, Button } from "@/components/ui-bits";

export const metadata = {
  title: "Features",
  description:
    "Everything Illinois UI Job Search Tracker does to help you log work-search contacts, stay compliant, and generate your ADJ034F.",
};

const groups = [
  {
    title: "Compliance & Records",
    items: [
      {
        title: "Full benefit week history access",
        body: "View, edit, and manage every benefit week you've logged — no cutoff, no hidden history. Your complete compliance record in one place.",
      },
      {
        title: "Unlimited PDF work-search exports",
        body: "Generate the official Illinois ADJ034F work-search record form instantly from your logged contacts — as many times as you need.",
      },
      {
        title: "Full history CSV export",
        body: "Export your complete contact history as a spreadsheet for your own records, your attorney, or anyone else who needs it.",
      },
      {
        title: "Complete audit log",
        body: "Every action in your account is logged with a timestamp — logins, edits, exports, and more. A full 12-month trail on paid plans.",
      },
    ],
  },
  {
    title: "Reminders & Notifications",
    items: [
      {
        title: "SMS + email reminders",
        body: "Get nudged by text and email before your weekly work-search deadline. Set your own schedule so nothing slips.",
      },
    ],
  },
  {
    title: "AI-Powered Tools",
    items: [
      {
        title: "AI screenshot import",
        body: "Upload or paste a screenshot of a job listing or application confirmation. The app reads the employer, position, and date and pre-fills the contact for you to confirm.",
      },
      {
        title: "AI resume review",
        body: "Get instant AI-powered feedback on your resume to strengthen your job search. Generated automatically — not stored, not shared.",
      },
    ],
  },
  {
    title: "Organization & Planning",
    items: [
      {
        title: "Interactive calendar",
        body: "Log interviews, follow-ups, and application deadlines directly in the app. See your entire job search timeline at a glance.",
      },
      {
        title: "Document storage",
        body: "Keep your resumes, cover letters, and supporting documents alongside your work-search records. 100MB on Pro, 1GB on Case Worker.",
      },
      {
        title: "Advanced analytics dashboard",
        body: "See your compliance rate over time, weekly contact streaks, and weeks at risk — so you always know where you stand before IDES asks.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Section className="pt-16 pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-black tracking-tight text-primary sm:text-4xl font-heading">
            Everything you need to stay compliant
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            From logging a single contact to producing your official form — it&apos;s all in one place.
          </p>
        </div>
      </Section>

      {groups.map((group) => (
        <Section key={group.title} className="py-8">
          <h2 className="text-xl font-bold tracking-tight font-heading border-b border-border pb-3 mb-6">
            {group.title}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {group.items.map((item) => (
              <div key={item.title} className="border border-border p-6">
                <h3 className="font-semibold font-heading">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </Section>
      ))}

      <Section className="py-16 text-center">
        <h2 className="text-2xl font-black tracking-tight text-primary font-heading">
          Ready to see the plans?
        </h2>
        <p className="mt-2 text-muted-foreground">
          Start free, or unlock everything with a 14-day Pro trial.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href="/pricing">View pricing</Button>
          <Button href="https://illinoisjobtracker.app/register" variant="outline">
            Get started free
          </Button>
        </div>
      </Section>
    </>
  );
}