import { site } from "@/lib/site";
import { Section, Button } from "@/components/ui-bits";

export const metadata = {
  title: "About",
  description: "Why Illinois UI Job Search Tracker exists and who is behind it.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-16 pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-black tracking-tight text-primary sm:text-4xl font-heading">
            Why We Built This
          </h1>
        </div>
      </Section>

      <Section className="py-8">
        <div className="mx-auto max-w-2xl space-y-5 text-muted-foreground">
          <p>
            The weekly work-search requirement is one of the most common reasons
            people run into trouble with their unemployment benefits — not because
            they aren&apos;t looking for work, but because keeping an accurate,
            organized record is genuinely tedious.
          </p>
          <p>
            {site.name} started as a simple idea: give Illinois claimants one clear
            place to log their contacts, see whether they&apos;ve met the week&apos;s
            requirement, and produce the official ADJ034F form without doing it by
            hand. No spreadsheets, no guesswork.
          </p>
          <p>
            The app is built and operated independently by {site.company}. We&apos;re
            focused on making one thing work really well. We&apos;re not a law firm,
            and we&apos;re not affiliated with any government agency — we just want
            the paperwork side of your job search to be the easy part.
          </p>
          <p>
            Have feedback or a feature request? We read everything. Reach us at{" "}
            <a
              href={`mailto:${site.supportEmail}`}
              className="text-foreground underline"
            >
              {site.supportEmail}
            </a>
            .
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <Button href="/">Try It Free</Button>
        </div>
      </Section>
    </>
  );
}