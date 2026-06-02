"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const categories = ["General Inquiry", "Complaint", "Feedback", "Loan Support"];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="mt-8 flex flex-col items-center rounded-2xl bg-emerald/5 px-6 py-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-emerald" />
        <h3 className="mt-4 font-display text-xl font-bold text-ink-900">
          Message received
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink-500">
          Thank you for reaching out. A member of our team will respond within one
          business day.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-semibold text-gold-600 hover:text-gold-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className="mt-8 space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" id="name">
          <input
            id="name"
            required
            placeholder="Rajesh Kumar"
            className="form-input"
          />
        </Field>
        <Field label="Phone" id="phone">
          <input
            id="phone"
            type="tel"
            required
            placeholder="+91 98765 43210"
            className="form-input"
          />
        </Field>
      </div>

      <Field label="Email" id="email">
        <input
          id="email"
          type="email"
          required
          placeholder="you@example.com"
          className="form-input"
        />
      </Field>

      <Field label="Category" id="category">
        <select id="category" className="form-input" defaultValue={categories[0]}>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </Field>

      <Field label="Message" id="message">
        <textarea
          id="message"
          required
          rows={4}
          placeholder="How can we help you?"
          className="form-input resize-none"
        />
      </Field>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-ink-800 hover:shadow-lift"
      >
        Send Message <Send className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-700">
        {label}
      </label>
      {children}
    </div>
  );
}
