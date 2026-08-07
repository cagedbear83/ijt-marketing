import { Section, Button } from "@/components/ui-bits";

export const metadata = {
  title: "How It Works",
  description:
    "See how Illinois UI Job Search Tracker helps you log contacts and generate your ADJ034F in four steps.",
};

const steps = [
  {
    n: 1,
    title: "Log contacts as you go",
    body: "After each application, add the employer, position, method, and date. On Pro, paste a screenshot of the listing and the app pre-fills the details for you to confirm.",
  },
  {
    n: 2,
    title: "Track your weekly progress",
    body: "Your dashboard shows how many contacts you've made this week so you always know where you stand against your IDES requirement.",
  },
  {
    n: 3,
    title: "Stay on top of deadlines",
    body: "SMS and email reminders keep you on track throughout the week so nothing slips. Set your schedule and let the app handle the nudges.",
  },
  {
    n: 4,
    title: "Generate your work-search record",
    body: "When you need proof, generate the official Illinois ADJ034F work-search record form filled with your logged contacts — ready to keep or provide when IDES asks.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Section className="pt-16 pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-black tracking-tight text-primary sm:text-4xl font-heading">
            From first contact to finished form
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A simple flow designed to fit into the week you&apos;re already having.
          </p>
        </div>
      </Section>

      <Section className="py-8">
        <ol className="mx-auto max-w-2xl space-y-6">
          {steps.map((s) => (
            <li key={s.n} className="flex gap-5 border border-border p-6">
              <div className="grid h-10 w-10 flex-none place-items-center bg-primary font-black text-primary-foreground font-heading">
                {s.n}
              </div>
              <div>
                <h3 className="font-semibold font-heading">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <Button href="https://illinoisjobtracker.app/register">Start Free</Button>
        </div>
      </Section>
    </>
  );
}