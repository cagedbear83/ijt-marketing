import { faqs } from "@/lib/site";
import { Section, PageHeader } from "@/components/ui-bits";

export const metadata = {
  title: "FAQ",
  description: "Common questions about Illinois Job Tracker, the ADJ034F, and how the app works.",
};

export default function FaqPage() {
  return (
    <>
      <Section className="pt-16 pb-8">
        <PageHeader eyebrow="FAQ" title="Questions, answered" />
      </Section>

      <Section className="py-8">
        <div className="mx-auto max-w-2xl divide-y divide-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                {f.q}
                <span className="ml-4 text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
