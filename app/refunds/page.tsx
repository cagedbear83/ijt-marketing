import { site } from "@/lib/site";
import { LegalPage } from "@/components/legal";

export const metadata = { title: "Refund Policy" };

export default function RefundsPage() {
  return (
    <LegalPage title="Refund Policy" updated="July 2026">
      <p>
        We want you to be happy with {site.name}. This policy explains how billing,
        cancellations, and refunds work.
      </p>

      <h2>Free plan</h2>
      <p>
        The free plan lets you try core features at no cost, so you can decide
        whether Pro is right for you before paying.
      </p>

      <h2>Cancellation</h2>
      <p>
        You can cancel your Pro subscription anytime from your account settings.
        When you cancel, you keep Pro features until the end of the billing period
        you&apos;ve already paid for. We do not automatically charge you after you
        cancel.
      </p>

      <h2>Refunds</h2>
      <ul>
        <li>Monthly charges are generally non-refundable once the billing period has begun, since you retain access for that period.</li>
        <li>If you were charged in error, or something went wrong on our end, email us and we&apos;ll make it right.</li>
        <li>We review refund requests in good faith and may issue refunds at our discretion.</li>
      </ul>

      <h2>How to request a refund</h2>
      <p>
        Email{" "}
        <a href={`mailto:${site.supportEmail}`} className="text-foreground underline">
          {site.supportEmail}
        </a>{" "}
        from the address on your account, and tell us what happened. We aim to
        respond within a few business days.
      </p>
    </LegalPage>
  );
}
