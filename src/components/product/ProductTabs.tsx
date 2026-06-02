"use client";

import { useState } from "react";
import { Check, FileText, HelpCircle, Percent, ListChecks } from "lucide-react";
import { cn } from "@/lib/utils";

export type TabKey = "features" | "rates" | "documents" | "faqs";

export type ProductTabData = {
  features: { eligibility: string[]; benefits: string[] };
  rates: { label: string; value: string }[];
  documents: string[];
  faqs: { q: string; a: string }[];
};

const tabs: { key: TabKey; label: string; icon: typeof Check }[] = [
  { key: "features", label: "Features", icon: ListChecks },
  { key: "rates", label: "Interest Rates", icon: Percent },
  { key: "documents", label: "Documents", icon: FileText },
  { key: "faqs", label: "FAQs", icon: HelpCircle },
];

export function ProductTabs({ data }: { data: ProductTabData }) {
  const [active, setActive] = useState<TabKey>("features");

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-ink-100">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={cn(
              "relative inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-colors",
              active === tab.key
                ? "text-ink-900"
                : "text-ink-400 hover:text-ink-700"
            )}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
            {active === tab.key && (
              <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-gold-sheen" />
            )}
          </button>
        ))}
      </div>

      <div className="py-8">
        {active === "features" && (
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h4 className="font-display text-lg font-bold text-ink-900">
                Eligibility
              </h4>
              <ul className="mt-4 space-y-3">
                {data.features.eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-ink-900">
                Key Benefits
              </h4>
              <ul className="mt-4 space-y-3">
                {data.features.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {active === "rates" && (
          <div className="overflow-hidden rounded-2xl border border-ink-100">
            <table className="w-full text-left text-sm">
              <thead className="bg-ink-50 text-ink-500">
                <tr>
                  <th className="px-6 py-4 font-semibold">Particulars</th>
                  <th className="px-6 py-4 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {data.rates.map((row) => (
                  <tr key={row.label} className="transition-colors hover:bg-ink-50/50">
                    <td className="px-6 py-4 text-ink-600">{row.label}</td>
                    <td className="px-6 py-4 font-semibold text-ink-900">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {active === "documents" && (
          <ul className="grid gap-3 sm:grid-cols-2">
            {data.documents.map((doc) => (
              <li
                key={doc}
                className="flex items-center gap-3 rounded-xl border border-ink-100 bg-white px-5 py-4 text-sm text-ink-700"
              >
                <FileText className="h-4 w-4 shrink-0 text-gold-500" />
                {doc}
              </li>
            ))}
          </ul>
        )}

        {active === "faqs" && (
          <div className="divide-y divide-ink-100">
            {data.faqs.map((faq, i) => (
              <FaqRow key={i} faq={faq} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FaqRow({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="font-semibold text-ink-900">{faq.q}</span>
        <span
          className={cn(
            "grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink-200 text-ink-500 transition-transform",
            open && "rotate-45 border-gold-400 text-gold-600"
          )}
        >
          +
        </span>
      </button>
      {open && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-500">{faq.a}</p>}
    </div>
  );
}
