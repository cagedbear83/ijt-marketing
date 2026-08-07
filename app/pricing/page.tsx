"use client";

import Link from "next/link";
import { useState } from "react";
import { plans } from "@/lib/site";
import { Section, Check } from "@/components/ui-bits";

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <Section className="pt-16 pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-black tracking-tight text-primary sm:text-4xl font-heading">
            Simple, honest pricing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free. Upgrade only when you want the time-savers. Cancel anytime.
          </p>
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className={`text-sm font-medium ${!annual ? "text-foreground" : "text-muted-foreground"}`}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual((v) => !v)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${annual ? "bg-primary" : "bg-muted-foreground/30"}`}
            aria-label="Toggle annual billing"
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${annual ? "translate-x-6" : "translate-x-1"}`} />
          </button>
          <span className={`text-sm font-medium ${annual ? "text-foreground" : "text-muted-foreground"}`}>
            Annual
            <span className="ml-1.5 rounded-sm bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
              Save ~20%
            </span>
          </span>
        </div>
      </Section>

      <Section className="py-8">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col border p-8 ${plan.featured ? "border-primary border-2" : "border-border"}`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <div className="min-h-[4rem]">
                <h2 className="text-lg font-black tracking-tight font-heading">{plan.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{plan.blurb}</p>
              </div>
              <div className="mt-6 h-20">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tight font-heading text-foreground">
                    {annual ? plan.annualMonthly : plan.monthlyPrice}
                  </span>
                  {plan.id !== "free" && (
                    <span className="text-sm text-muted-foreground">/ mo</span>
                  )}
                </div>
                <p className="mt-1 text-xs text-muted-foreground min-h-[1rem]">
                  {plan.id === "free" && "forever, no credit card required"}
                  {plan.id !== "free" && annual && `Billed as ${plan.annualPrice}/year`}
                  {plan.id !== "free" && !annual && "\u00A0"}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground min-h-[1rem]">
                  {plan.id === "caseworker"
                    ? annual
                      ? "Additional seats $129.99/yr each"
                      : "Additional seats $12.99/mo each"
                    : "\u00A0"}
                </p>
              </div>
              <Link
                href={plan.ctaHref}
                className={`mt-4 block px-4 py-2.5 text-center text-sm font-semibold transition-colors ${plan.featured ? "bg-primary text-primary-foreground hover:bg-primary-hover" : "border border-border text-foreground hover:bg-surface"}`}
              >
                {plan.cta}
              </Link>
              <ul className="mt-6 flex-1 space-y-3">
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
          Prices in USD. Pro includes a 14-day free trial — card required, cancel
          before day 15 and you won&apos;t be charged. Cancel any paid plan from your
          account settings at any time. See our{" "}
          <Link href="/refunds" className="underline hover:text-foreground">
            Refund Policy
          </Link>
          .
        </p>
      </Section>
    </>
  );
}