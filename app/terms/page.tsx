import Link from "next/link";
import { site } from "@/lib/site";
import { LegalPage } from "@/components/legal";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
	<LegalPage title="Terms of Service" updated="August 2026">
	
        <h2>1. Agreement to These Terms</h2>
        <p>
          These Terms of Service (&quot;Terms&quot;) are a legally binding agreement
          between you and {site.company} (&quot;Company,&quot; &quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;) governing your access to and use of
          {site.name}, including our website, applications, and related
          services (collectively, the &quot;Service&quot;).
        </p>
        <p>
          By accessing, creating an account for, purchasing, or using the
          Service, you agree to these Terms. If you do not agree, you may not
          use the Service.
        </p>

        <h2>2. Eligibility and Intended Users</h2>
        <p>
          The Service is intended for users in the State of Illinois, United
          States. You must be at least 16 years old to create or use an account.
          If you are under 18, you represent that you have permission from a
          parent or legal guardian to use the Service and enter into these Terms,
          to the extent required by applicable law.
        </p>
        <p>
          You represent that you have the legal capacity to enter into these
          Terms and that all information you provide in connection with the
          Service is accurate, current, and complete.
        </p>

        <h2>3. Purpose of the Service</h2>
        <p>
          {site.name} is a private software tool that helps users organize
          job-search contacts, benefit-week information, reminders, documents,
          and work-search records, including preparation of Illinois ADJ034F-
          related work-search record output. The Service is intended to help you
          stay organized; it is not a substitute for your own responsibilities
          to maintain records, submit information, or comply with any
          unemployment-insurance requirement.
        </p>

        <h2>4. No Government Affiliation or Advice</h2>
        <p>
          The Service is independent of and is not affiliated with, endorsed by,
          sponsored by, or operated by the Illinois Department of Employment
          Security (&quot;IDES&quot;), the State of Illinois, or any other government
          agency. The Service does not provide legal, unemployment-benefits, tax,
          employment, financial, or case-management advice.
        </p>
        <p>
          You are solely responsible for the accuracy, completeness, and timely
          submission of your records and for meeting all IDES and other legal
          requirements. You should review all records and generated output before
          using them. For additional information, see our{" "}
          <Link href="/disclaimer">Disclaimer</Link>.
        </p>

        <h2>5. Accounts and Account Security</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account
          credentials and for all activity occurring through your account. You
          must promptly notify us at{" "}
          <a href={`mailto:${site.termsEmail}`}>{site.termsEmail}</a>{" "}
          if you believe your account has been accessed without authorization.
        </p>
        <p>
          You may not share your account credentials, allow another person to use
          your personal account, or create accounts using false or misleading
          information. We may require you to verify account information and may
          suspend or restrict an account when reasonably necessary to protect the
          Service, users, or Company.
        </p>

        <h2>6. Permitted Use and Restrictions</h2>
        <p>You may use the Service only for lawful purposes and in accordance with these Terms. You may not:</p>
        <ul>
          <li>Use the Service in violation of any applicable law, regulation, or third-party right.</li>
          <li>Access, copy, scrape, crawl, probe, scan, test, or monitor the Service by automated means except as expressly authorized by us in writing.</li>
          <li>Attempt to gain unauthorized access to accounts, systems, networks, data, or features of the Service.</li>
          <li>Interfere with, disrupt, overload, or compromise the security, availability, or integrity of the Service.</li>
          <li>Upload malware, harmful code, unlawful content, or content that infringes another person&apos;s rights.</li>
          <li>Impersonate another person, misrepresent your identity or authority, or use the Service to commit fraud or deception.</li>
          <li>Reverse engineer, decompile, disassemble, or attempt to derive source code from the Service except where such restriction is prohibited by law.</li>
          <li>Use the Service to submit false work-search information, evade IDES requirements, or misrepresent job-search activity.</li>
        </ul>

        <h2>7. Your Content and Responsibility</h2>
        <p>
          You retain ownership of the information, documents, files, records, and
          other content you submit to the Service (&quot;User Content&quot;). You grant
          us a non-exclusive, worldwide, royalty-free license to host, store,
          reproduce, process, transmit, display, and otherwise use User Content
          only as reasonably necessary to provide, secure, support, maintain,
          and improve the Service, comply with law, and enforce these Terms.
        </p>
        <p>
          You are responsible for User Content and represent that you have all
          rights, permissions, and authority necessary to submit it and allow us
          to process it as described in these Terms and our Privacy Policy. You
          are solely responsible for reviewing and verifying the accuracy of all
          User Content and any records or forms generated from it.
        </p>

        <h2>8. Sensitive Information and Uploads</h2>
        <p>
          Do not enter or upload full Social Security numbers, biometric
          identifiers or biometric information, protected health information, or
          other information that you are not authorized to provide. The Service
          is not designed to collect or process biometric information.
        </p>
        <p>
          You are responsible for ensuring that any screenshot, document, CSV,
          or other file you upload is lawful, accurate, appropriate for the
          Service, and free of harmful code. We may reject, remove, or restrict
          content that violates these Terms or creates a security, legal, or
          operational risk.
        </p>

        <h2>9. Generated Records and Forms</h2>
        <p>
          The Service may generate, display, export, or help prepare work-search
          records and ADJ034F-related output based on information you provide.
          These features are provided for convenience only. We do not guarantee
          that any record, form, or output will be complete, accurate, accepted
          by IDES, sufficient for an audit, or result in eligibility for or
          receipt of unemployment-insurance benefits.
        </p>
        <p>
          You must independently review all generated output, retain any copies
          you need, and submit information directly through the appropriate
          official channels when required.
        </p>

        <h2>10. Case Worker Managed Accounts</h2>
        <p>
          Case Worker plans may permit an organization or authorized Case Worker
          to manage information for one or more claimants. A Case Worker,
          organization, or other managed-account user represents and warrants
          that it has obtained all permissions, consents, and legal authority
          needed to create, access, manage, upload, edit, export, and delete the
          claimant information it handles through the Service.
        </p>
        <p>
          Case Workers and organizations remain solely responsible for their own
          case-management decisions, claimant communications, confidentiality
          obligations, security practices, and compliance with applicable law.
          Before entering claimant information, the Case Worker or organization
          must obtain a completed Claimant Consent &amp; Liability Release provided
          by us or another legally sufficient consent approved for its use.
        </p>
        <p>
          We provide the software platform only and are not responsible for the
          acts, omissions, advice, services, employment decisions, or disputes of
          a Case Worker, organization, claimant, or other third party.
        </p>

        <h2>11. Plans, Paid Services, and Feature Limits</h2>
        <p>
          The Service may offer Free, Pro, Case Worker First Seat, and Case
          Worker Additional Seat plans. Plan descriptions, prices, included
          features, storage limits, usage limits, and billing intervals are shown
          through the Service or Stripe Checkout at the time of purchase.
        </p>
        <p>
          Certain features may be limited by plan, seat count, storage capacity,
          or monthly usage allowance. For example, some import, export, document
          storage, reminder, analytics, and Case Worker features may be available
          only on paid plans or may be subject to a stated quota. We may change
          plans, features, limits, or prices prospectively as permitted by law.
        </p>

        <h2>12. Pro Free Trial</h2>
        <p>
          Pro may include one 14-day free trial per person. A valid payment method
          is required to begin the trial. Unless you cancel before the end of the
          trial period, your paid Pro subscription will begin and your selected
          payment method will be charged in accordance with the checkout terms
          presented to you.
        </p>
        <p>
          Trial eligibility is limited to one trial per person. We may determine
          eligibility using your email address, payment method, and reasonably
          related account or billing information. If we determine that you are
          not eligible for another trial, we may deny trial access, require you
          to use your existing account, or require you to select a paid plan
          through Stripe Checkout. Any paid charge remains subject to your
          affirmative authorization in the applicable checkout flow.
        </p>
        <p>
          Case Worker First Seat and Case Worker Additional Seat plans do not
          include a free trial unless we expressly state otherwise in writing.
        </p>

        <h2>13. Billing, Renewals, and Cancellation</h2>
        <p>
          Paid subscriptions are processed through Stripe. By purchasing a paid
          plan, you authorize Stripe and us to charge the applicable fees, taxes,
          and other disclosed charges to your selected payment method on a
          recurring basis until you cancel, subject to the billing terms shown at
          checkout.
        </p>
        <p>
          Paid plans may be offered on monthly or annual billing intervals.
          Unless canceled before the end of the then-current billing period, a
          subscription may renew for a successive period of the same length at
          the then-current price, to the extent permitted by law and as disclosed
          at checkout.
        </p>
        <p>
          You may manage or cancel an eligible subscription through the Stripe
          customer portal available from your account&apos;s billing settings. If you
          cancel, you will retain paid access through the end of the already-paid
          billing period, unless otherwise required by law or these Terms.
          Deleting a profile, deleting the application, or ceasing to use the
          Service does not by itself cancel a subscription.
        </p>
        <p>
          Adding or removing Case Worker seats may adjust your charges on a
          prorated basis for the remainder of the billing period. Removing a seat
          does not automatically delete claimant data.
        </p>

        <h2>14. Refunds and Payment Disputes</h2>
        <p>
          Purchases, subscriptions, and other charges are generally final and
          non-refundable except as expressly stated in our{" "}
          <Link href="/refunds">Refund Policy</Link>, required by applicable
          law, or approved by us in our discretion after review of a documented
          billing error. Our Refund Policy is incorporated into these Terms by
          reference.
        </p>
        <p>
          If you believe you were charged in error, contact us promptly at{" "}
          <a href={`mailto:${site.termsEmail}`}>{site.termsEmail}</a>{" "}
          before initiating a payment dispute, if practicable. Nothing in these
          Terms limits any non-waivable rights you may have under applicable law.
        </p>

        <h2>15. Service Communications</h2>
        <p>
          You agree that we may send you transactional and service-related
          communications by email, through the Service, or, if you opt in, by
          SMS or MMS. These communications may include account verification,
          security notices, billing notices, work-search reminders, and other
          messages needed to provide the Service.
        </p>
        <p>
          You may change reminder preferences through the Service and may follow
          opt-out instructions in text messages where available. Opting out of
          certain communications may affect your ability to receive reminders or
          account notifications. You are responsible for keeping your email
          address and phone number current.
        </p>

        <h2>16. Retention and Account Deletion</h2>
        <p>
          We intend to make work-search records available for at least 53 weeks
          after the applicable benefit week. Availability may be affected by user
          deletion, account deletion, legal obligations, technical events, or
          changes we disclose in accordance with these Terms or our Privacy
          Policy. You are responsible for exporting or otherwise retaining copies
          of any records you may need.
        </p>
        <p>
          Documents you intentionally store in your profile remain available until
          you delete them, delete your account, or they are removed under our
          applicable retention practices. We may apply a 53-week retention period
          measured from a document&apos;s stated or received date when that retention
          process is implemented and disclosed. The Privacy Policy provides
          additional information about retention and backups.
        </p>
        <p>
          You may delete your account through the Service. Account access is
          revoked when deletion is requested, and account data is scheduled for
          permanent deletion after a 30-day recovery period, subject to the
          Privacy Policy and limited legal, security, fraud-prevention,
          accounting, backup, and dispute-resolution retention needs.
        </p>

        <h2>17. Suspension and Termination</h2>
        <p>
          We may suspend, restrict, or terminate your access to the Service if we
          reasonably believe that you have violated these Terms, failed to pay
          applicable fees, created a security or legal risk, engaged in fraud or
          abuse, harmed other users, or if suspension or termination is required
          by law. We may also take steps reasonably necessary to protect the
          Service and its users.
        </p>
        <p>
          You may stop using the Service at any time. Termination or suspension
          does not affect provisions that by their nature should survive,
          including payment obligations, disclaimers, limitations of liability,
          indemnification, dispute-resolution terms, and any rights or remedies
          accrued before termination.
        </p>

        <h2>18. Third-Party Services</h2>
        <p>
          The Service may rely on or integrate with third-party services,
          including Stripe for payment processing, Google for requested text
          extraction, and providers supporting infrastructure, authentication,
          email, SMS, security, and error monitoring. Your use of third-party
          services may be subject to their separate terms and privacy policies.
        </p>
        <p>
          We do not control and are not responsible for third-party services,
          their availability, content, policies, or acts or omissions, except to
          the extent responsibility cannot be excluded under applicable law.
        </p>

        <h2>19. Disclaimers</h2>
        <p>
          THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
          BASIS. TO THE FULLEST EXTENT PERMITTED BY LAW, {site.company} DISCLAIMS
          ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE,
          NON-INFRINGEMENT, ACCURACY, RELIABILITY, AND AVAILABILITY.
        </p>
        <p>
          WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE,
          SECURE, OR AVAILABLE AT ALL TIMES; THAT DATA WILL NEVER BE LOST,
          DELAYED, OR ALTERED; OR THAT USE OF THE SERVICE WILL RESULT IN A JOB,
          IDES APPROVAL, BENEFIT ELIGIBILITY, BENEFIT PAYMENT, FORM ACCEPTANCE,
          AUDIT SUCCESS, OR ANY OTHER PARTICULAR OUTCOME.
        </p>

        <h2>20. Limitation of Liability</h2>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, {site.company} AND ITS
          OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, AGENTS, AFFILIATES, AND
          SERVICE PROVIDERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
          SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY
          LOSS OF BENEFITS, PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS
          OPPORTUNITY, ARISING OUT OF OR RELATED TO THE SERVICE OR THESE TERMS,
          EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ALL
          CLAIMS ARISING OUT OF OR RELATED TO THE SERVICE OR THESE TERMS WILL NOT
          EXCEED THE AMOUNT YOU PAID TO US FOR THE SERVICE IN THE 12 MONTHS BEFORE
          THE EVENT GIVING RISE TO THE CLAIM. SOME JURISDICTIONS DO NOT ALLOW
          CERTAIN LIMITATIONS, SO SOME OF THESE LIMITATIONS MAY NOT APPLY TO YOU.
        </p>

        <h2>21. Indemnification</h2>
        <p>
          To the fullest extent permitted by law, you will defend, indemnify, and
          hold harmless {site.company} and its officers, directors, employees,
          contractors, agents, affiliates, and service providers from and against
          claims, liabilities, damages, losses, and expenses, including reasonable
          attorneys&apos; fees, arising out of or related to your User Content, your
          misuse of the Service, your violation of these Terms or applicable law,
          your infringement or violation of another person&apos;s rights, or your lack
          of authority to provide or manage information through the Service.
        </p>

        <h2>22. Informal Dispute Resolution</h2>
        <p>
          Before either party starts arbitration or a court proceeding, the party
          seeking to bring a dispute must send the other party a written notice
          describing the dispute and the requested relief. Notices to us must be
          sent to <a href={`mailto:${site.termsEmail}`}>{site.termsEmail}</a>.
          The parties will attempt in good faith to resolve the dispute informally
          for 30 days after receipt of the notice. Nothing in this section
          prevents either party from seeking emergency equitable relief where
          permitted by law.
        </p>

        <h2>23. Binding Individual Arbitration and Class-Action Waiver</h2>
        <p>
          Except for disputes that qualify for small-claims court, requests for
          temporary or preliminary equitable relief, or matters that applicable
          law requires to be heard by a court, you and {site.company} agree that
          any dispute arising out of or relating to these Terms or the Service
          will be resolved by binding individual arbitration rather than by a
          judge or jury.
        </p>
        <p>
          Arbitration will be administered by a neutral arbitration provider under
          its applicable consumer arbitration rules, unless the parties agree
          otherwise. The Federal Arbitration Act governs the interpretation and
          enforcement of this arbitration agreement. The arbitrator may award the
          same individual remedies that a court could award under applicable law,
          but may not award relief for or against anyone who is not a party to the
          arbitration.
        </p>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, YOU AND {site.company} AGREE
          THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN AN INDIVIDUAL
          CAPACITY AND NOT AS A PLAINTIFF, CLASS MEMBER, REPRESENTATIVE, PRIVATE
          ATTORNEY GENERAL, OR PARTICIPANT IN ANY CLASS, COLLECTIVE,
          CONSOLIDATED, OR REPRESENTATIVE PROCEEDING.
        </p>
        <p>
          You may opt out of this arbitration agreement by sending a written
          opt-out notice to <a href={`mailto:${site.termsEmail}`}>{site.termsEmail}</a>{" "}
          within 30 days after first accepting these Terms. Your notice must
          include your full name, the email address associated with your account,
          and a clear statement that you wish to opt out of arbitration. Opting
          out will not affect any other part of these Terms.
        </p>
        <p>
          If any portion of this arbitration section is found unenforceable, that
          portion will be severed, and the remaining portions will remain in
          effect to the maximum extent permitted by law. If the class-action
          waiver is found unenforceable as to a particular claim, that claim must
          proceed in a court of competent jurisdiction rather than arbitration.
        </p>

        <h2>24. Governing Law and Venue</h2>
        <p>
          These Terms are governed by the laws of the State of Illinois, without
          regard to conflict-of-law rules, except that the Federal Arbitration Act
          governs the arbitration agreement above. To the extent a dispute is not
          subject to arbitration, you and {site.company} consent to exclusive
          jurisdiction and venue in the state or federal courts located in Cook
          County, Illinois, except where applicable law requires otherwise.
        </p>

        <h2>25. Changes, Assignment, and General Terms</h2>
        <p>
          We may update these Terms from time to time. When we do, we will post
          the updated Terms and revise the &quot;Last updated&quot; date. If a change is
          material, we may provide additional notice as required by law or as
          appropriate for the change. Your continued use of the Service after the
          updated Terms become effective constitutes acceptance of the updated
          Terms.
        </p>
        <p>
          We may assign or transfer these Terms and our rights or obligations in
          connection with a merger, acquisition, financing, reorganization, sale
          of assets, or similar transaction. You may not assign or transfer your
          account or these Terms without our prior written consent.
        </p>
        <p>
          If any provision of these Terms is held unenforceable, the remaining
          provisions will remain in effect. Our failure to enforce a provision is
          not a waiver of our right to do so later. These Terms, together with
          the Privacy Policy, Refund Policy, Disclaimer, and any terms presented
          at checkout, form the entire agreement between you and us concerning
          the Service, except for any separate written agreement signed by an
          authorized representative of {site.company}.
        </p>

        <h2>26. Contact Us</h2>
        <p>
          Questions or notices regarding these Terms may be sent to{" "}
          <a href={`mailto:${site.termsEmail}`}>{site.termsEmail}</a>{" "}
          or submitted through our <Link href="/contact">contact page</Link>.
        </p>
	</LegalPage>
  );
}
