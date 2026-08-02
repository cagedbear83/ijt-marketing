import { Section, PageHeader, Button } from "@/components/ui-bits";

export const metadata = {
  title: "How it works",
  description:
    "See how Illinois Job Tracker helps you log contacts and generate your ADJ034F in four steps.",
};

const steps = [
  {
    n: 1,
    title: "Set your weekly requirement",
    body: "Tell the app how many work-search contacts you're required to make each week. Not sure? Check your official IDES correspondence — the number that applies to you is set by IDES.",
  },
  {
    n: 2,
    title: "Log contacts as you go",
    body: "After each application, add the employer, position, method, and date. On Pro, paste a screenshot of the listing and the app pre-fills the details for you to confirm.",
  },
  {
    n: 3,
    title: "Track your progress",
    body: "Your dashboard shows how many contacts you've made this week versus your target, so you always know where you stand.",
  },
  {
    n: 4,
    title: "Generate your ADJ034F",
    body: "When you need proof, generate the official Illinois work-search record form filled with your logged contacts — ready to keep or provide if IDES asks.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Section className="pt-16 pb-8">
        <PageHeader
          eyebrow="How it works"
          title="From first contact to finished form"
          subtitle="A simple flow designed to fit into the week you're already having."
        />
      </Section>

      <Section className="py-8">
        <ol className="mx-auto max-w-2xl space-y-6">
          {steps.map((s) => (
            <li key={s.n} className="flex gap-5 rounded-xl border border-border p-6">
              <div className="grid h-10 w-10 flex-none place-items-center rounded-full bg-primary font-bold text-primary-foreground">
                {s.n}
              </div>
              <div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <Button href="/signup">Start free</Button>
        </div>
      </Section>
    </>
  );
}
