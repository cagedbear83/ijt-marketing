import { site } from "@/lib/site";
import { Section, PageHeader } from "@/components/ui-bits";

export const metadata = {
  title: "Contact",
  description: "Get in touch with the Illinois Job Tracker team.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="pt-16 pb-8">
        <PageHeader
          eyebrow="Contact"
          title="We're here to help"
          subtitle="Questions about your account, billing, or the app? Send us a note."
        />
      </Section>

      <Section className="py-8">
        <div className="mx-auto max-w-xl rounded-2xl border border-border p-8 text-center">
          <p className="text-muted-foreground">Email us and we&apos;ll get back to you:</p>
          <a
            href={`mailto:${site.supportEmail}`}
            className="mt-2 block text-lg font-semibold text-primary underline"
          >
            {site.supportEmail}
          </a>
          <p className="mt-6 text-sm text-muted-foreground">
            For account-specific issues, please email from the address on your
            account so we can help you faster.
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-xl text-center text-xs text-muted-foreground">
          Please note: we can help with the app, but we can&apos;t answer questions
          about your specific IDES claim or benefits. For those, contact IDES
          directly.
        </p>
      </Section>
    </>
  );
}
