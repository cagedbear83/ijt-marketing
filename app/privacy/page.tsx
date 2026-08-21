import Link from "next/link";
import { site } from "@/lib/site";
import { LegalPage } from "@/components/legal";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
	<LegalPage title="Privacy Policy" updated="August 2026">
		<p>
          This Privacy Policy explains how {site.company} (&quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;) collects, uses, stores, and shares personal
          information when you use {site.name}, including our website,
          applications, and related services (collectively, the
          &quot;Service&quot;). {site.name} is intended for users in the State of
          Illinois, United States.
        </p>

        <p>
          By using the Service, you understand the practices described in this
          Privacy Policy. If you do not agree with this Policy, please do not
          use the Service.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We collect information you provide directly, information generated through your use of the Service, and limited information from service providers that help us operate the Service.</p>

        <h3>Information you provide</h3>
        <p>Depending on how you use the Service, we may collect:</p>
        <ul>
          <li><strong>Account information</strong>, such as your name, email address, username, password, and account preferences.</li>
          <li><strong>Profile and claimant information</strong>, such as your phone number, mailing address, city, ZIP code, occupation, claimant identifier, reminder preferences, and certification-related information you choose to enter.</li>
          <li><strong>Job-search and work-search information</strong>, such as benefit-week dates, work-search contacts, employer and contact names, employer addresses, job titles or positions, contact methods, results, source URLs, notes, and other information you enter to organize your work-search activity.</li>
          <li><strong>Documents and import content</strong>, such as screenshots or documents you upload for text import and IDES UI documents you choose to store in your profile for future reference.</li>
          <li><strong>Communications</strong>, such as messages, questions, feedback, and requests you send through our contact form or by email.</li>
          <li><strong>SMS information</strong>, such as your mobile phone number, SMS opt-in status, verification status, and reminder preferences when you choose to receive text-message reminders or account notifications.</li>
          <li><strong>Subscription information</strong>, such as your plan, subscription status, billing period, and payment-related identifiers or records provided by Stripe. We do not receive or store full payment-card numbers.</li>
        </ul>

        <h3>Information collected automatically</h3>
        <p>When you use the Service, we and service providers acting on our behalf may collect limited technical and usage information, including:</p>
        <ul>
          <li>IP address, browser type, device information, operating system, language, and approximate technical location derived from IP address.</li>
          <li>Dates and times of access, pages or features used, login and security events, request information, and other service-activity logs.</li>
          <li>Error, diagnostic, and performance information used to identify, investigate, and fix technical problems.</li>
          <li>Essential cookies, secure authentication/session cookies, local storage, and similar technologies needed to operate the Service, remember settings, maintain sessions, protect accounts, and support functionality.</li>
        </ul>

        <h2>2. How We Use Information</h2>
        <p>We may use personal information to:</p>
        <ul>
          <li>Provide, operate, maintain, and improve the Service.</li>
          <li>Create, organize, display, export, and generate work-search records and requested ADJ034F-related output from information you enter.</li>
          <li>Create and manage accounts, authenticate users, maintain sessions, and secure the Service.</li>
          <li>Process subscriptions and payments, manage plan access, and prevent payment fraud or misuse.</li>
          <li>Send transactional or service-related emails and text messages, including account notices, verification messages, work-search reminders, and service updates.</li>
          <li>Respond to support requests, privacy requests, and other communications.</li>
          <li>Monitor performance, troubleshoot errors, protect against fraud, abuse, unauthorized access, and other security incidents.</li>
          <li>Comply with applicable law, enforce our legal terms, and protect the rights, safety, and property of {site.company}, our users, and others.</li>
        </ul>

        <h2>3. Screenshot Import and Text Extraction</h2>
        <p>
          If you choose to use screenshot or document import, you may upload an
          eligible image or document containing job-search information. We may
          transmit that content to Google solely to extract text needed to
          complete the import you requested. We use the resulting text to help
          populate or organize information within the Service.
        </p>
        <p>
          Temporary screenshots and documents uploaded solely for text import
          are deleted promptly after processing. This does not apply to IDES UI
          documents or other files that you intentionally upload to your profile
          for future reference; those documents are handled as described below.
        </p>
        <p>
          Do not upload photographs or other materials containing biometric
          identifiers or biometric information, including facial geometry,
          fingerprints, voiceprints, retina or iris scans, or similar
          identifiers. The Service is not designed to collect or process
          biometric information.
        </p>

        <h2>4. Documents Stored in Your Profile</h2>
        <p>
          If you choose to upload IDES UI documents or other permitted documents
          to your profile for future reference, those documents are stored as
          part of your account. They remain associated with your account until
          you delete them, delete your account, or they are removed under the
          retention and deletion practices described in this Privacy Policy.
        </p>

        <h2>5. How We Share Information</h2>
        <p>
          We do not sell, rent, share, or disclose personal information for
          targeted advertising. We share personal information only as reasonably
          necessary to operate the Service, comply with law, protect the Service
          and its users, or complete a transaction involving our business.
        </p>
        <p>We may share information with service providers that perform services for us, including:</p>
        <ul>
          <li><strong>Stripe</strong>, to process payments and manage subscription-related transactions.</li>
          <li><strong>Vercel</strong>, to host and deliver our frontend application.</li>
          <li><strong>MongoDB Atlas</strong>, to store and manage application data.</li>
          <li><strong>DigitalOcean</strong>, to host backend infrastructure and related services.</li>
          <li><strong>Doppler</strong>, to manage application secrets and configuration securely.</li>
          <li><strong>Mailgun</strong>, to send transactional and service-related email communications.</li>
          <li><strong>ClickSend</strong>, to send transactional and service-related SMS/MMS communications.</li>
          <li><strong>Google</strong>, to perform text extraction for screenshot or document imports you request.</li>
          <li><strong>Sentry</strong>, to monitor application errors and performance. We configure Sentry not to send default personally identifiable information, although diagnostic information may be processed to investigate errors and secure the Service.</li>
          <li><strong>Clerk</strong>, if and when enabled for the Service, to provide authentication and account-management services. During our authentication transition, we may use in-house authentication systems and Clerk as part of our account-management infrastructure.</li>
        </ul>
        <p>
          These providers may process information only for the purposes of
          providing services to us or as otherwise permitted or required by law.
          We may also disclose information to professional advisers, regulators,
          law enforcement, courts, or other parties when we reasonably believe
          disclosure is necessary to comply with law, respond to lawful process,
          protect rights or safety, investigate suspected wrongdoing, or enforce
          our agreements.
        </p>

        <h2>6. Payments and Subscriptions</h2>
        <p>
          Stripe processes payment information for subscriptions and purchases.
          We do not receive or store full debit-card or credit-card numbers.
          We may retain subscription, transaction, and payment-status
          information needed to administer your account, provide the Service,
          maintain financial records, address disputes, and comply with legal
          obligations. Your use of Stripe&apos;s payment services is also subject to
          Stripe&apos;s applicable privacy practices and terms.
        </p>

        <h2>7. SMS and MMS Communications</h2>
        <p>
          If you provide a mobile number and opt in within the Service, we may
          send transactional or service-related SMS and/or MMS messages,
          including work-search reminders, verification messages, account
          notifications, and other messages needed to provide the Service. We do
          not use these messages for marketing or promotional purposes.
        </p>
        <p>
          You may opt out of recurring text messages by following the opt-out
          instructions in the message, such as replying STOP where available, or
          by changing your preferences in the Service. Opting out may prevent you
          from receiving reminder or account-notification messages. Message and
          data rates may apply, depending on your mobile carrier and plan.
        </p>

        <h2>8. Retention of Information</h2>
        <p>
          We retain personal information for as long as reasonably necessary to
          provide the Service, meet the purposes described in this Policy,
          resolve disputes, enforce agreements, and comply with legal
          obligations.
        </p>
        <ul>
          <li><strong>Work-search records:</strong> We retain benefit-week and related work-search records for 53 weeks following the applicable benefit week. On the first day after the 53rd week, the applicable benefit-week records are scheduled for permanent deletion from our active database.</li>
          <li><strong>Account and profile data:</strong> We retain account, profile, and user-stored document data while your account remains active, unless you delete specific data earlier.</li>
          <li><strong>Temporary import uploads:</strong> Screenshots or documents uploaded solely for text import are deleted promptly after the import is processed.</li>
          <li><strong>Technical, security, and transaction records:</strong> We may retain limited logs, audit information, payment/subscription records, and similar information for an appropriate period to maintain security, investigate issues, prevent fraud, comply with law, and enforce our agreements.</li>
        </ul>

        <h2>9. Account Deletion and Backups</h2>
        <p>
          You may delete your account through the Service. When you request
          account deletion, access to the account is revoked and the account is
          scheduled for permanent deletion after a 30-day recovery period. This
          period allows you to change your mind or request your records before
          permanent removal.
        </p>
        <p>
          After the recovery period ends, we permanently delete applicable
          account data from our active systems, subject to limited information we
          may need to retain for legal, security, fraud-prevention, accounting,
          or dispute-resolution purposes. Data removed from active systems may
          remain in secure backups for up to 30 days before it is overwritten or
          removed through our ordinary backup cycle.
        </p>

        <h2>10. Your Privacy Choices and Requests</h2>
        <p>
          Subject to applicable law, you may request access to, correction of,
          export of, or deletion of personal information associated with your
          account. You may also update information, delete certain information,
          adjust reminder preferences, or delete your account through available
          Service controls.
        </p>
        <p>
          To make a privacy request, email us at{" "}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>{" "}
          or submit a request through our{" "}
          <Link href="/contact">contact page</Link>. We may take reasonable
          steps to verify your identity before completing a request. You may
          request an export of your data by contacting us; we may add self-service
          export tools in the future.
        </p>

        <h2>11. Security</h2>
        <p>
          We use reasonable administrative, technical, and organizational
          safeguards designed to protect personal information. These measures may
          include encrypted connections, password hashing, access controls,
          authentication and session protections, rate limiting, security
          monitoring, and audit logging. No method of transmission or storage is
          completely secure, and we cannot guarantee absolute security.
        </p>

        <h2>12. Children&apos;s Privacy</h2>
		<p>
			The Service is intended for users who are at least 16 years old. If 
			you are under 18, you may use the Service only with permission from a parent
			or legal guardian, to the extent required by applicable law.
		</p>
		<p>
			We do not knowingly collect personal information from children under 16.
			If you believe that a child under 16 has provided us personal information,
			please contact us at{" "}
			<a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>, and we
			will take appropriate steps to address the matter.
		</p>

        <h2>13. Illinois and Biometric Information</h2>
        <p>
          The Service is intended for users in Illinois. We handle personal
          information in accordance with applicable law. The Service is not
          designed to collect, capture, receive, purchase, obtain, or process
          biometric identifiers or biometric information. Users must not upload
          biometric information to the Service.
        </p>
        <p>
          If we ever introduce a feature that intentionally collects biometric
          identifiers or biometric information, we will implement any required
          notice, retention and destruction practices, and consent process before
          collecting that information.
        </p>

        <h2>14. Business Transfers and Legal Disclosures</h2>
        <p>
          We may disclose or transfer personal information in connection with a
          proposed or completed merger, acquisition, financing, reorganization,
          sale of assets, bankruptcy, or similar transaction. We may also
          disclose information when required by law or when we reasonably believe
          disclosure is necessary to protect the rights, property, safety, or
          security of {site.company}, our users, or others; investigate fraud or
          security incidents; enforce our legal terms; or respond to lawful
          requests by public authorities.
        </p>

        <h2>15. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we make
          changes, we will post the revised Policy and update the &quot;Last
          updated&quot; date above. If a change is material, we may provide
          additional notice as required by law or as appropriate for the change.
          Your continued use of the Service after the revised Policy becomes
          effective means that you acknowledge the updated Policy.
        </p>

        <h2>16. Contact Us</h2>
        <p>
          If you have questions, concerns, or requests about this Privacy Policy
          or our privacy practices, contact us at{" "}
          <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>{" "}
          or through our <Link href="/contact">contact page</Link>.
        </p>
	</LegalPage>
  );
}
