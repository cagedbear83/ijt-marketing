import { site } from "@/lib/site";
import { LegalPage } from "@/components/legal";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="July 2026">
      <p>
        These Terms govern your use of {site.name} (the &quot;Service&quot;),
        operated by {site.company}. By creating an account or using the Service, you
        agree to these Terms.
      </p>

      <h2>The Service</h2>
      <p>
        {site.name} helps you record your job-search contacts and prepare the
        Illinois ADJ034F work-search record form. It is a tool to help you stay
        organized — not a substitute for your own responsibilities to IDES.
      </p>

      <h2>Not affiliated with IDES; no legal advice</h2>
      <p>
        The Service is independent and not affiliated with or endorsed by IDES or
        any government agency, and does not provide legal advice. You are solely
        responsible for the accuracy of your records and for meeting all IDES
        requirements. See our IDES Disclaimer for details.
      </p>

      <h2>Your account</h2>
      <ul>
        <li>You must be at least 18 and provide accurate information.</li>
        <li>You are responsible for keeping your password secure and for activity under your account.</li>
        <li>You may not misuse the Service, attempt to disrupt it, or use it unlawfully.</li>
      </ul>

      <h2>Subscriptions and billing</h2>
      <ul>
        <li>Paid plans are billed in advance through our payment processor on a recurring basis until canceled.</li>
        <li>You can cancel anytime; access continues until the end of the current billing period.</li>
        <li>Refunds are governed by our Refund Policy.</li>
      </ul>

      <h2>Your content</h2>
      <p>
        You keep ownership of the data you enter. You grant us permission to process
        it only to provide the Service to you.
      </p>

      <h2>Disclaimers</h2>
      <p>
        The Service is provided &quot;as is&quot; without warranties of any kind. We
        do not guarantee that using the Service will result in any particular
        outcome with IDES or that generated forms will be accepted.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {site.company} is not liable for any
        indirect or consequential damages, or for any loss of benefits, arising from
        your use of the Service. Our total liability is limited to the amount you
        paid us in the twelve months before the claim.
      </p>

      <h2>Termination</h2>
      <p>We may suspend or end accounts that violate these Terms. You may stop using the Service at any time.</p>

      <h2>Governing law</h2>
      <p>These Terms are governed by the laws of the State of Illinois.</p>

      <h2>Contact</h2>
      <p>
        Questions? Email{" "}
        <a href={`mailto:${site.supportEmail}`} className="text-foreground underline">
          {site.supportEmail}
        </a>
        .
      </p>
    </LegalPage>
  );
}
