import { site } from "@/lib/site";
import { Section } from "@/components/ui-bits";

export const metadata = {
  title: "IDES Disclaimer",
  description: "Illinois Job Tracker is an independent tool and is not affiliated with IDES.",
};

export default function DisclaimerPage() {
  return (
    <>
      <Section className="pt-16 pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-black tracking-tight text-primary sm:text-4xl font-heading">
            Not A Government Service
          </h1>
        </div>
      </Section>

      <Section className="py-8">
        <div className="mx-auto max-w-2xl space-y-5 text-muted-foreground">
          <p>
            <strong className="text-foreground">{site.name}</strong> is an
            independent, third-party software tool operated by {site.company}. It is
            not affiliated with, endorsed by, sponsored by, or in any way officially
            connected to the Illinois Department of Employment Security (IDES), the
            State of Illinois, or any federal, state, or local government agency.
          </p>
          <p>
            The names ADJ034F, IDES, and any related marks are used only to describe
            the government form and agency this tool helps you prepare records for.
            Their use does not imply any affiliation or endorsement.
          </p>
          <p>
            {site.name} does not submit anything to IDES on your behalf and does not
            file, manage, or influence your unemployment claim. The app helps you
            organize your own work-search records and prepare a form. You remain
            solely responsible for:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>The accuracy and completeness of the information you enter;</li>
            <li>Meeting all deadlines and requirements set by IDES;</li>
            <li>Submitting any required records or forms to IDES yourself;</li>
            <li>Understanding the rules that apply to your specific claim.</li>
          </ul>
          <p>
            Requirements set by IDES — including the number of weekly work-search
            contacts — can change. Always rely on your official IDES correspondence
            and the official IDES website for authoritative information.
          </p>
          <p>
            {site.name} does not provide legal advice. If you have questions about
            your benefits or eligibility, contact IDES or a qualified professional
            directly.
          </p>
        </div>
      </Section>
    </>
  );
}