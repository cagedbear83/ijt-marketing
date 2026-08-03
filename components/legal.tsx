import type { ReactNode } from "react";
import { Section, PageHeader } from "@/components/ui-bits";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Section className="pt-16 pb-4">
        <PageHeader title={title} />
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Last updated: {updated}
        </p>
      </Section>
      <Section className="py-8">
        <div className="mx-auto max-w-2xl space-y-6 text-sm leading-relaxed text-muted-foreground [&_h2]:mt-8 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
          <div className="rounded-lg border border-border bg-muted/40 p-4 text-xs">
            This is a starting template, not legal advice. Have it reviewed by a
            qualified attorney before relying on it — especially given Illinois
            privacy law (PIPA/BIPA) and payment processing.
          </div>
          {children}
        </div>
      </Section>
    </>
  );
}
