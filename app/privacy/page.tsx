import { site } from "@/lib/site";
import { LegalPage } from "@/components/legal";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 2026">
      <p>
        This Privacy Policy explains how {site.company} (&quot;we&quot;) collects,
        uses, and protects information when you use {site.name} (the
        &quot;Service&quot;).
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li><strong>Account information:</strong> your email address and password (stored securely, never in plain text).</li>
        <li><strong>Work-search data:</strong> the employers, positions, dates, and notes you enter to track your contacts.</li>
        <li><strong>Uploaded content:</strong> screenshots you provide for the import feature.</li>
        <li><strong>Payment information:</strong> handled by our payment processor (Stripe). We do not store your full card details.</li>
        <li><strong>Usage data:</strong> basic technical information such as device and browser type, used to keep the Service working and secure.</li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To provide the Service — logging contacts, generating your form, and reminders.</li>
        <li>To process payments and manage your subscription.</li>
        <li>To respond to support requests.</li>
        <li>To protect the Service against fraud and abuse.</li>
      </ul>

      <h2>How we share information</h2>
      <p>
        We do not sell your personal information. We share it only with service
        providers who help us operate the Service (such as hosting, email delivery,
        AI processing for screenshot import, and payment processing), and only as
        needed to provide the Service, or when required by law.
      </p>

      <h2>Your Illinois privacy rights</h2>
      <p>
        We handle personal information in a manner consistent with the Illinois
        Personal Information Protection Act (PIPA). If the screenshot import feature
        ever processes biometric identifiers, we will handle them consistent with
        the Illinois Biometric Information Privacy Act (BIPA), including obtaining
        consent where required. You may request access to or deletion of your
        account data by contacting us.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep your data while your account is active. You can export or delete
        your data, and we delete account data within a reasonable period after you
        close your account, unless we must keep it to comply with law.
      </p>

      <h2>Security</h2>
      <p>
        We use industry-standard safeguards including encrypted connections, secure
        password storage, and account-protection measures. No system is perfectly
        secure, but we work to protect your information.
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