import { site } from "@/lib/site";
import { Section, Eyebrow, Button, Check } from "@/components/ui-bits";

const problems = [
  "Forgetting how many contacts you've logged this week",
  "Scrambling to rebuild your list if IDES asks for proof",
  "Filling out the ADJ034F by hand, field by field",
];

const steps = [
  {
    title: "Log each contact",
    body: "Add the employer, position, method, and date as you apply. Or paste a screenshot and let the app fill it in.",
  },
  {
    title: "Watch your weekly progress",
    body: "A clear tracker shows how many contacts you've made against your required number for the week.",
  },
  {
    title: "Generate your ADJ034F",
    body: "One click fills the official Illinois work-search record so you're ready if IDES asks.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20 pb-12 text-center">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>For Illinois unemployment claimants</Eyebrow>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Stay on top of your weekly work-search requirement
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            {site.tagline}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/signup">Get started free</Button>
            <Button href="/how-it-works" variant="outline">
              See how it works
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Free to start. No credit card required.
          </p>
        </div>
      </Section>

      {/* Problem */}
      <Section className="py-12">
        <div className="rounded-2xl border border-border bg-muted/30 p-8 sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight">
            The weekly job-search log shouldn&apos;t be the stressful part
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Missing or losing your work-search record can put your benefits at
            risk. Most people track it in their head or a messy spreadsheet.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {problems.map((p) => (
              <li
                key={p}
                className="rounded-lg border border-border bg-background p-4 text-sm text-muted-foreground"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* How it works */}
      <Section className="py-12">
        <div className="text-center">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">
            Three steps, done in minutes
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-xl border border-border p-6">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Value points */}
      <Section className="py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            ["Built for the ADJ034F", "Generates the official Illinois fillable form from the contacts you log."],
            ["AI screenshot import", "Paste a job listing and let the app pull out the details for you."],
            ["Never lose your record", "Every contact is saved, searchable, and exportable whenever you need it."],
            ["Reminders that matter", "Get a nudge before your weekly deadline so nothing slips."],
          ].map(([title, body]) => (
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

      {/* CTA */}
      <Section className="py-16">
        <div className="rounded-2xl bg-primary px-8 py-12 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to take the stress out of work-search reporting?
          </h2>
          <p className="mx-auto mt-3 max-w-xl opacity-90">
            Start free today. Upgrade whenever you want one-click forms and
            unlimited contacts.
          </p>
          <div className="mt-6">
            <Button href="/signup" variant="outline">
              Create your free account
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
