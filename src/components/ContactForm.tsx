"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          industry: data.get("industry"),
          message: data.get("message"),
          botField: data.get("bot-field"),
        }),
      });

      const result = (await response.json()) as { success?: boolean; error?: string };

      if (response.ok && result.success) {
        setStatus("success");
        form.reset();
        return;
      }

      setErrorMessage(result.error ?? "Something went wrong.");
    } catch {
      setErrorMessage("Something went wrong.");
    }

    setStatus("error");
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-4">
      <p className="hidden" aria-hidden="true">
        <label>
          Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div>
        <h3 className="text-lg font-semibold">Consultation request</h3>
        <p className="mt-1 text-sm text-charcoal-muted">
          All fields marked * are required. We treat plant details as confidential.
        </p>
      </div>

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Name *
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="w-full rounded-sm border border-[var(--border)] bg-white px-3 py-2 text-sm"
        />
      </div>

      <div>
        <label htmlFor="company" className="mb-1 block text-sm font-medium">
          Company / Mill Name *
        </label>
        <input
          id="company"
          name="company"
          required
          autoComplete="organization"
          className="w-full rounded-sm border border-[var(--border)] bg-white px-3 py-2 text-sm"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-sm border border-[var(--border)] bg-white px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-sm border border-[var(--border)] bg-white px-3 py-2 text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="industry" className="mb-1 block text-sm font-medium">
          Plant Type *
        </label>
        <select
          id="industry"
          name="industry"
          required
          className="w-full rounded-sm border border-[var(--border)] bg-white px-3 py-2 text-sm"
        >
          <option value="">Select operation type</option>
          <option value="rice">Rice mill</option>
          <option value="wheat">Wheat / flour mill</option>
          <option value="parboiling">Parboiling unit</option>
          <option value="cleaning">Grain cleaning & grading</option>
          <option value="packaging">Packaging / dispatch line</option>
          <option value="modernization">Modernization or expansion</option>
          <option value="other">Other grain processing</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Plant details & challenge *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="e.g. 15 TPH rice mill, basmati, head rice dropped 3% after polisher upgrade."
          className="w-full rounded-sm border border-[var(--border)] bg-white px-3 py-2 text-sm"
        />
      </div>

      <button type="submit" className="btn btn-primary w-full" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Submit Consultation Request"}
      </button>

      {status === "success" && (
        <p className="text-sm text-olive" role="status">
          Thank you — we&apos;ll respond within one business day.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-700" role="status">
          {errorMessage} Email us directly at{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
