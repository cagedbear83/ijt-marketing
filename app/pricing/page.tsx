import Link from "next/link";
import { plans } from "@/lib/site";
import { Section, PageHeader, Check } from "@/components/ui-bits";

export const metadata = {
  title: "Pricing",
  description: "Simple pricing for Illinois Job Tracker. Start free, upgrade to Pro anytime.",
};

export default function PricingPage() {
  return (
    <>
      <Section className="pt-16 pb-8">
        <PageHeader
          eyebrow="Pricing"
          title="Simple, honest pricing"
          subtitle="Start free. Upgrade only when you want the time-savers. Cancel anytime."
        />
      </Section>

      <Section className="py-8">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl border p-8 ${
                plan.featured
                  ? "border-primary shadow-lg"
                  : "border-border"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h2 className="text-lg font-bold">{plan.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{plan.blurb}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                <span className="text-sm text-muted-foreground">/ {plan.cadence}</span>
              </div>
              <Link
                href="/signup"
                className={`mt-6 block rounded-md px-4 py-2.5 text-center text-sm font-medium transition ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-border hover:bg-muted"
                }`}
              >
                {plan.cta}
              </Link>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-muted-foreground">
          Prices in USD. You can cancel from your account settings at any time and
          keep Pro features until the end of your billing period. See our{" "}
          <Link href="/refunds" className="underline hover:text-foreground">
            Refund Policy
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
