import { site } from "@/lib/site";
import { LegalPage } from "@/components/legal";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="August 2026">
      <p>
        This Privacy Policy explains how {site.company} (&quot;we&quot;) collects,
        uses, and protects information when you use {site.name} (the
        &quot;Service&quot;).
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li><strong>Account information:</strong> your email address and password (stored securely, never in plain text).</li>
        <li><strong>Work-search data:</strong> the employers, positions, dates, and notes you enter to track your contacts.</li>
        <li><strong>Uploaded content:</strong> screenshots you provide for the AI import feature. These are processed in memory and immediately discarded — never stored.</li>
        <li><strong>Resume content:</strong> resumes submitted for AI review are transmitted for analysis and immediately discarded. We do not store resume files.</li>
        <li><strong>Documents:</strong> files you upload to your document storage (Pro: 100MB, Case Worker: 1GB per seat).</li>
        <li><strong>Payment information:</strong> handled by Stripe. We do not store your full card details. A card fingerprint is retained solely to enforce our one-trial-per-person policy.</li>
        <li><strong>Usage data:</strong> basic technical information such as device and browser type, used to keep the Service working and secure.</li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To provide the Service — logging contacts, generating your ADJ034F form, reminders, and document storage.</li>
        <li>To process payments and manage your subscription (Free, Pro, or Case Worker).</li>
        <li>To enforce our one-trial-per-person policy.</li>
        <li>To respond to support requests.</li>
        <li>To protect the Service against fraud and abuse.</li>
      </ul>

      <h2>How we share information</h2>
      <p>
        We do not sell your personal information. We share it only with service
        providers who help us operate the Service (including hosting, email and SMS
        delivery, AI processing for screenshot import and resume review, and payment
        processing via Stripe), and only as needed to provide the Service, or when
        required by law.
      </p>

      <h2>Case Worker accounts</h2>
      <p>
        If you are a claimant managed under a Case Worker account, your work-search
        data is accessible to the case worker and organization managing your account.
        A signed claimant authorization is required before a case worker may manage
        your data. You may revoke this authorization at any time by contacting us.
      </p>

      <h2>Your Illinois privacy rights</h2>
      <p>
        We handle personal information consistent with the Illinois Personal
        Information Protection Act (PIPA). You may request access to or deletion of
        your account data by contacting us or using the account deletion feature in
        your settings.
      </p>

      <h2>Data retention</h2>
      <p>
        Work-search records are retained for 53 weeks from the end of each benefit
        week, consistent with IDES&apos;s own record-lookback period. You will receive
        email reminders before any records are due to be deleted. On account deletion,
        data is retained for 30 days before permanent removal. GDPR/CCPA erasure
        requests are processed within 72 hours.
      </p>

      <h2>Security</h2>
      <p>
        We use industry-standard safeguards including encrypted connections, secure
        password storage, single-session enforcement, and account-protection measures.
        No system is perfectly secure, but we work to protect your information.
      </p>

      <h2>Children</h2>
      <p>The Service is not directed to anyone under 18, and we do not knowingly collect their information.</p>

      <h2>Changes</h2>
      <p>We may update this policy and will change the date above when we do.</p>

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