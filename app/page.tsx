import { site } from "@/lib/site";
import { Section, Button, Check } from "@/components/ui-bits";

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
    title: "Generate your work-search log",
    body: "One click fills the official Illinois work-search record so you're ready when IDES asks.",
  },
];

const benefits = [
  {
    title: "Built for the ADJ034F",
    body: "Generates the official Illinois fillable form from the contacts you log — one click, no hand-filling.",
  },
  {
    title: "AI screenshot import",
    body: "Paste a job listing screenshot and let the app pull out the employer, position, and date for you.",
  },
  {
    title: "AI resume review",
    body: "Get AI-powered feedback on your resume to strengthen your job search — available on Pro and Case Worker plans.",
  },
  {
    title: "SMS & email reminders",
    body: "Get nudged before your weekly deadline so nothing slips. Full reminder schedules on paid plans.",
  },
  {
    title: "Calendar events",
    body: "Log interviews, follow-ups, and deadlines directly in the app to keep your job search organized.",
  },
  {
    title: "Document storage",
    body: "Store resumes, cover letters, and supporting documents alongside your work-search records. 100MB on Pro, 1GB on Case Worker.",
  },
  {
    title: "Never lose your record",
    body: "Every contact is saved, searchable, and exportable. You'll receive advance notice before any records are deleted.",
  },
  {
    title: "Case Worker plan",
    body: "Managing compliance for multiple claimants? The Case Worker plan gives you unlimited claimant profiles, bulk management tools, and seat-based pricing for your team.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-20 pb-12 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="mt-4 text-4xl font-black tracking-tighter text-primary sm:text-5xl font-heading">
            Stay on top of your weekly{" "}
            <br className="hidden sm:block" />
            work-search requirement
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            {site.tagline}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button appPath="/register">
              Get started free
            </Button>
            <Button href="/how-it-works" variant="outline">
              See how it works
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Free to start. Pro includes a 14-day free trial — no charge until day 15.
          </p>
        </div>
      </Section>

      {/* Problem */}
      <Section className="py-12">
        <div className="border border-border bg-surface p-8 sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight font-heading">
            The weekly job-search log shouldn&apos;t be the stressful part
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Missing or losing your work-search record can put your benefits at risk. Most people track it in their head or a messy spreadsheet.
          </p>
        </div>
      </Section>

      {/* How it works */}
      <Section className="py-12">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight text-primary font-heading">
            Three steps, done in minutes
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="border border-border p-6">
              <div className="grid h-9 w-9 place-items-center bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </div>
              <h3 className="mt-4 font-semibold font-heading">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits — all paid features shown */}
      <Section className="py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black tracking-tight text-primary font-heading">
            Everything in one place
          </h2>
          <p className="mt-3 text-muted-foreground">
            From logging a single contact to staying compliant all week long.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map(({ title, body }) => (
            <div key={title} className="flex gap-3 border border-border p-6">
              <Check />
              <div>
                <h3 className="font-semibold font-heading">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Plans snapshot */}
      <Section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black tracking-tight text-primary font-heading">
            Pick the plan that fits
          </h2>
          <p className="mt-3 text-muted-foreground">
            Start free. Upgrade to Pro for $9.99/mo or $95.99/yr. Case Worker plans start at $19.99/mo.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="border border-border p-6 w-64">
            <div className="font-black text-lg font-heading">Free</div>
            <div className="text-3xl font-black mt-2 font-heading">$0</div>
            <p className="text-xs text-muted-foreground mt-1">forever</p>
            <p className="text-sm text-muted-foreground mt-3">Log contacts and track your weekly requirement.</p>
          </div>
          <div className="border-2 border-primary p-6 w-64">
            <div className="font-black text-lg font-heading text-primary">Pro</div>
            <div className="text-3xl font-black mt-2 font-heading">$9.99<span className="text-base font-normal text-muted-foreground">/mo</span></div>
            <p className="text-xs text-muted-foreground mt-1">or $95.99/yr — 14-day free trial</p>
            <p className="text-sm text-muted-foreground mt-3">Full history, exports, AI tools, reminders, and more.</p>
          </div>
          <div className="border border-border p-6 w-64">
            <div className="font-black text-lg font-heading">Case Worker</div>
            <div className="text-3xl font-black mt-2 font-heading">$19.99<span className="text-base font-normal text-muted-foreground">/mo</span></div>
            <p className="text-xs text-muted-foreground mt-1">first seat · additional seats $12.99/mo</p>
            <p className="text-sm text-muted-foreground mt-3">Manage unlimited claimants across your team.</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button href="/pricing">See full pricing</Button>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-16">
        <div className="bg-primary px-8 py-12 text-center text-primary-foreground">
          <h2 className="text-3xl font-black tracking-tight font-heading">
            Ready to take the stress out of work-search reporting?
          </h2>
          <p className="mx-auto mt-3 max-w-xl opacity-90">
            Start free today. Pro includes a 14-day free trial — upgrade whenever you're ready.
          </p>
          <div className="mt-6">
            <Button appPath="/register" variant="white">
              Create your free account
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}