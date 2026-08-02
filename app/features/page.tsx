import { Section, PageHeader, Check, Button } from "@/components/ui-bits";

export const metadata = {
  title: "Features",
  description:
    "Everything Illinois Job Tracker does to help you log work-search contacts and generate your ADJ034F.",
};

const groups = [
  {
    title: "Tracking",
    items: [
      ["Weekly requirement tracker", "Set your required number of contacts and watch your progress fill in as you log them."],
      ["Contact log", "Record employer, position, contact method, date, and notes for every job search contact."],
      ["Searchable history", "Find any past contact instantly. Filter by week, employer, or method."],
      ["Export anytime", "Download your full history so your records are always in your hands."],
    ],
  },
  {
    title: "Forms & automation",
    items: [
      ["ADJ034F generation", "Fill the official Illinois work-search record form in one click from your logged contacts."],
      ["AI screenshot import", "Paste or upload a screenshot of a listing and the app pre-fills the contact for review."],
      ["Deadline reminders", "Email nudges before your weekly cutoff so you never miss the requirement."],
    ],
  },
  {
    title: "Everyday quality",
    items: [
      ["Light & dark mode", "A comfortable interface that follows your system or your preference."],
      ["Works on your phone", "Log a contact right after you apply, from any device."],
      ["Private by design", "Your data is yours. We don't sell it. Strong password and account protections built in."],
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Section className="pt-16 pb-8">
        <PageHeader
          eyebrow="Features"
          title="Everything you need to stay compliant"
          subtitle="From logging a single contact to producing your official form, it's all in one place."
        />
      </Section>

      {groups.map((group) => (
        <Section key={group.title} className="py-8">
          <h2 className="text-xl font-bold tracking-tight">{group.title}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {group.items.map(([title, body]) => (
              <div key={title} className="flex gap-3 rounded-xl border border-border p-6">
                <Check />
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      ))}

      <Section className="py-16 text-center">
        <h2 className="text-2xl font-bold tracking-tight">See the plans</h2>
        <p className="mt-2 text-muted-foreground">
          Start free, or unlock one-click forms and unlimited contacts with Pro.
        </p>
        <div className="mt-6">
          <Button href="/pricing">View pricing</Button>
        </div>
      </Section>
    </>
  );
}
