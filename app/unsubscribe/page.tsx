import Link from "next/link";
import { site } from "@/lib/site";
import { Section, Button } from "@/components/ui-bits";

export const metadata = {
  title: "Unsubscribe",
  description: "Manage your email preferences for Illinois Job Tracker.",
};

export default function UnsubscribePage() {
  return (
    <>
      <Section className="pt-16 pb-16">
        <div className="mx-auto max-w-lg text-center">

          {/* IL Logo mark */}
          <div className="mx-auto mb-6 grid h-16 w-16 place-items-center border-2 border-primary bg-primary">
            <span className="text-2xl font-black text-white font-heading">IL</span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-primary font-heading">
            You&apos;ve been unsubscribed
          </h1>

          <p className="mt-4 text-muted-foreground">
            We&apos;ve removed you from this mailing list. You won&apos;t receive
            any further emails from Illinois Job Tracker at this address.
          </p>

          {/* Info box */}
          <div className="mt-8 border border-border bg-surface p-6 text-left text-sm text-muted-foreground space-y-3">
            <p>
              <strong className="text-foreground">Still have an account?</strong>{" "}
              You can manage your notification preferences directly from your account
              settings after logging in. Unsubscribing here only affects marketing
              and reminder emails sent to this address.
            </p>
            <p>
              <strong className="text-foreground">Unsubscribed by mistake?</strong>{" "}
              Contact us at{" "}
              <a
                href={`mailto:${site.supportEmail}`}
                className="text-primary underline hover:opacity-80"
              >
                {site.supportEmail}
              </a>{" "}
              and we&apos;ll get you back on the list.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/">Back to Home</Button>
            <Button href="/contact" variant="outline">Contact Support</Button>
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            {site.name} is operated by {site.company}. This is not a government
            service and is not affiliated with IDES.
          </p>

        </div>
      </Section>
    </>
  );
}