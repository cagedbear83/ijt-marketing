import { site } from "@/lib/site";
import { LegalPage } from "@/components/legal";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="August 2026">
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
        <li>Accounts are for individual use. Sharing login credentials is not permitted.</li>
        <li>You may not misuse the Service, attempt to disrupt it, or use it unlawfully.</li>
      </ul>

      <h2>Subscriptions and billing</h2>
      <ul>
        <li><strong>Free plan:</strong> available at no cost with limited features.</li>
        <li><strong>Pro plan:</strong> $9.99/month or $95.99/year. Includes a 14-day free trial. A credit card is required upfront; you will not be charged until the trial ends.</li>
        <li><strong>Case Worker plan:</strong> $19.99/month for the first seat ($199.99/year), plus $12.99/month ($129.99/year) per additional seat. Multi-seat plans require a signed claimant authorization for each claimant managed.</li>
        <li>Paid plans are billed in advance on a recurring basis until canceled.</li>
        <li>You can cancel anytime; access continues until the end of the current billing period.</li>
        <li>Refunds are governed by our Refund Policy.</li>
      </ul>

      <h2>Free trial</h2>
      <p>
        Pro includes one 14-day free trial per person. Trials are limited to one per
        email address and payment method. Attempting to start a second trial will
        result in immediate conversion to a paid Pro subscription.
      </p>

      <h2>Data retention</h2>
      <p>
        Work-search records are retained for 53 weeks from the end of each benefit
        week. You will receive advance email notices before any records are deleted.
        On account deletion, data is held for 30 days before permanent removal.
      </p>

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

      <h2>SMS text messaging terms</h2>
      <p>
        By providing your mobile phone number and opting in within the Service,
        you agree that {site.company} may send you periodic SMS and/or MMS
        messages related to your work-search reminders and account
        notifications.
      </p>
      <ul>
        <li>Message frequency varies.</li>
        <li>Message and data rates may apply.</li>
        <li>
          You may opt out at any time by replying STOP to any message. You may
          receive a subsequent message confirming your opt-out.
        </li>
        <li>
          For help, reply HELP to any message or contact us at{" "}
          {site.supportEmail}. See our Privacy Policy for how we handle
          information collected in connection with SMS messaging.
        </li>
        <li>Carriers are not liable for delayed or undelivered messages.</li>
        <li>You agree to notify us of any change to your mobile number.</li>
      </ul>

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