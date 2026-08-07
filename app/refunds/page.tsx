import { site } from "@/lib/site";
import { LegalPage } from "@/components/legal";

export const metadata = { title: "Refund Policy" };

export default function RefundsPage() {
  return (
    <LegalPage title="Refund Policy" updated="August 2026">
      <p>
        We want you to be happy with {site.name}. This policy explains how billing,
        trials, and cancellations work across all plans.
      </p>

      <h2>All Sales Are Final</h2>
      <p>
        All purchases, including subscriptions and microtransactions, are final and
        any charges are non-refundable. If you believe you were charged in error,
        please contact us at{" "}
        <a href={`mailto:${site.supportEmail}`} className="text-foreground underline">
          {site.supportEmail}
        </a>{" "}
        and we will review your case.
      </p>

      <h2>Free Plan</h2>
      <p>
        The Free plan lets you use core features at no cost. No billing, no charges.
      </p>

      <h2>Pro Plan — Free Trial</h2>
      <p>
        Pro includes a 14-day free trial. A credit card is required to start the
        trial. You will not be charged until the trial period ends. Cancel before
        day 14 and you will not be billed. Trials are limited to one per person —
        one per email address and payment method.
      </p>

      <h2>Cancellation</h2>
      <p>
        If you choose to cancel your subscription, you will retain access to your
        premium features until the end of your current billing period. Keep in mind,
        deleting a profile or the Illinois UI Job Search Tracker app will not
        automatically cancel any subscription — you&apos;ll need to cancel the
        subscription manually from your account settings.
      </p>

      <h2>Case Worker Seat Changes</h2>
      <p>
        Adding or removing seats on a Case Worker plan adjusts your bill
        automatically, prorated for the remainder of your billing period. Removing
        a seat does not automatically delete claimant data — data is retained per
        our data retention policy.
      </p>

      <h2>How to Cancel</h2>
      <p>
        Log in to your account, go to your account settings, and cancel your
        subscription from the billing section. For assistance, contact us at{" "}
        <a href={`mailto:${site.supportEmail}`} className="text-foreground underline">
          {site.supportEmail}
        </a>
        .
      </p>
    </LegalPage>
  );
}