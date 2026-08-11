"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { Section } from "@/components/ui-bits";

const BACKEND_URL = "";  // uses Next.js proxy at /api/contact

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [refNumber, setRefNumber] = useState("");

  const normalizePhone = (value: string) => value.replace(/\D/g, "");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim()) e.lastName = "Last name is required.";
    if (!form.email.trim()) {
      e.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) {
      e.phone = "Phone number is required.";
    } else if (normalizePhone(form.phone).length !== 10) {
      e.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!form.reason) e.reason = "Please select a reason for reaching out.";
    if (!form.message.trim()) e.message = "Please enter a message.";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (serverError) setServerError("");
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          phone: form.phone,
          reason: form.reason,
          message: form.message,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.detail || "Something went wrong. Please try again.");
      }
      const data = await res.json();
      setRefNumber(data.ref || "");
      setSubmitted(true);
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary";
  const labelClass =
    "block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1";
  const errorClass = "mt-1 text-xs text-danger";

  return (
    <>
      <Section className="pt-16 pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-black tracking-tight text-primary sm:text-4xl font-heading">
            We&apos;re Here To Help
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Questions about your account, billing, or the app? Send us a note and
            we&apos;ll get back to you within 2 business days.
          </p>
        </div>
      </Section>

      <Section className="py-8">
        <div className="mx-auto max-w-xl">
          {submitted ? (
            <div className="border border-border bg-surface p-10 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h2 className="text-xl font-black text-primary font-heading mb-2">
                Thanks for reaching out!
              </h2>
              {refNumber && (
                <div className="my-4 border-l-4 border-primary bg-background px-4 py-3 text-left">
                  <p className="text-xs text-muted-foreground mb-1">Your reference number</p>
                  <p className="text-xl font-black tracking-widest text-primary font-heading">
                    {refNumber}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Include this in any follow-up so we can find your submission quickly.
                  </p>
                </div>
              )}
              <p className="text-sm text-muted-foreground">
                We&apos;ll get back to you within 2 business days. Check your inbox — we
                sent a confirmation with your reference number and a recap of what you submitted.
              </p>
            </div>
          ) : (
            <div className="border border-border p-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Jane"
                  />
                  {errors.firstName && <p className={errorClass}>{errors.firstName}</p>}
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Doe"
                  />
                  {errors.lastName && <p className={errorClass}>{errors.lastName}</p>}
                </div>
              </div>

              <div className="mt-4">
                <label className={labelClass}>Contact Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="jane@example.com"
                />
                {errors.email && <p className={errorClass}>{errors.email}</p>}
              </div>

              <div className="mt-4">
                <label className={labelClass}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="(123) 456-7890"
                />
                {errors.phone && <p className={errorClass}>{errors.phone}</p>}
                <p className="mt-1 text-xs text-muted-foreground">
                  Any format accepted — we&apos;ll read the 10 digits.
                </p>
              </div>

              <div className="mt-4">
                <label className={labelClass}>Reason For Reaching Out</label>
                <select
                  name="reason"
                  value={form.reason}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a reason...</option>
                  <option value="Billing">Billing</option>
                  <option value="Account">Account</option>
                  <option value="General Questions">General Questions</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Request a Feature">Request a Feature</option>
                  <option value="Other">Other</option>
                </select>
                {errors.reason && <p className={errorClass}>{errors.reason}</p>}
              </div>

              <div className="mt-4">
                <label className={labelClass}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  className={`${inputClass} resize-y`}
                  placeholder="Tell us how we can help..."
                />
                {errors.message && <p className={errorClass}>{errors.message}</p>}
              </div>

              {serverError && (
                <div className="mt-4 border border-danger/30 bg-danger/5 px-4 py-3 text-sm text-danger">
                  {serverError}
                </div>
              )}

              <div className="mt-6">
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="w-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </div>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                You can also reach us directly at{" "}
                <a
                  href={`mailto:${site.supportEmail}`}
                  className="underline hover:text-foreground"
                >
                  {site.supportEmail}
                </a>
              </p>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}