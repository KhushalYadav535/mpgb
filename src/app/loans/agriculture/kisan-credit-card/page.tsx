import type { Metadata } from "next";
import Link from "next/link";
import { Check, Download, ArrowRight, Sprout, Percent, Clock, IndianRupee } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ProductTabs, type ProductTabData } from "@/components/product/ProductTabs";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Kisan Credit Card",
  description:
    "Flexible credit for farmers — loans up to ₹3 Lakhs at 7% interest with repayment aligned to your harvest cycle.",
};

const highlights = [
  { icon: IndianRupee, label: "Loan up to", value: "₹3 Lakhs" },
  { icon: Percent, label: "Interest from", value: "7.00% p.a." },
  { icon: Clock, label: "Repayment", value: "After Harvest" },
];

const tabData: ProductTabData = {
  features: {
    eligibility: [
      "All farmers — individual or joint borrowers who are owner cultivators",
      "Tenant farmers, oral lessees and share croppers",
      "Self Help Groups or Joint Liability Groups of farmers",
      "Aged between 18 and 75 years",
    ],
    benefits: [
      "Single credit facility for all agricultural needs",
      "Interest subvention of up to 3% on prompt repayment",
      "Flexible withdrawal through ATM / RuPay KCC card",
      "Built-in crop insurance and personal accident cover",
    ],
  },
  rates: [
    { label: "Rate of Interest", value: "7.00% p.a. (with subvention 4%)" },
    { label: "Loan Limit", value: "Up to ₹3,00,000" },
    { label: "Processing Fee", value: "Nil up to ₹3 Lakhs" },
    { label: "Repayment", value: "Aligned to harvesting & marketing period" },
    { label: "Security", value: "Hypothecation of crops up to ₹1.6 Lakhs" },
  ],
  documents: [
    "Duly filled application form",
    "Identity proof (Aadhaar / Voter ID)",
    "Address proof",
    "Land ownership documents",
    "Passport-size photographs",
    "Recent crop / cultivation details",
  ],
  faqs: [
    {
      q: "What is the validity of a Kisan Credit Card?",
      a: "The KCC is valid for 5 years, subject to annual review. The limit may be enhanced each year based on cropping pattern and scale of finance.",
    },
    {
      q: "Can I withdraw cash using my KCC?",
      a: "Yes. The KCC comes with a RuPay debit card that lets you withdraw at any ATM and make purchases at agri-input dealers.",
    },
    {
      q: "Is collateral required?",
      a: "No collateral is required for loans up to ₹1.6 Lakhs. Above that, hypothecation of crops and other security may apply.",
    },
    {
      q: "How does interest subvention work?",
      a: "On prompt repayment within the due date, you receive an interest subvention that effectively reduces your rate to as low as 4% per annum.",
    },
  ],
};

export default function KisanCreditCardPage() {
  return (
    <>
      <PageHero
        eyebrow="Agriculture Loans"
        title="Kisan Credit Card"
        subtitle="Flexible, dignified credit designed around the rhythm of your farm — borrow when you sow, repay when you harvest."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Loans", href: "/loans" },
          { label: "Agriculture", href: "/loans/agriculture/kisan-credit-card" },
          { label: "Kisan Credit Card" },
        ]}
      />

      {/* Highlights + intro */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container-px grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-800 to-ink-950 p-8 text-white shadow-card lg:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-500/20 blur-3xl" />
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-sheen bg-[length:200%_auto] text-ink-900">
                <Sprout className="h-7 w-7" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-bold">
                Credit that respects your season
              </h2>
              <p className="mt-3 text-white/70">
                Over 12 lakh farmers across Madhya Pradesh fund their cultivation
                with the MPGB Kisan Credit Card.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                  >
                    <h.icon className="mx-auto h-5 w-5 text-gold-400" />
                    <p className="mt-2 text-[11px] uppercase tracking-wider text-white/50">
                      {h.label}
                    </p>
                    <p className="mt-1 font-display text-base font-bold text-gold-300">
                      {h.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/apply/kcc" className="btn-gold">
                  Apply Online <ArrowRight className="h-4 w-4" />
                </Link>
                <button className="btn-ghost">
                  <Download className="h-4 w-4" /> Download Form
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold-400" /> Overview
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900">
                Everything your farm needs, in one card
              </h2>
              <p className="mt-4 leading-relaxed text-ink-500">
                The Kisan Credit Card simplifies agricultural finance into a single,
                flexible credit line. Draw funds for seeds, fertilisers, labour and
                equipment, and repay comfortably once your produce reaches the market.
                With interest subvention on timely repayment, it is among the most
                affordable ways to fund cultivation.
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "No collateral up to ₹1.6 Lakhs",
                  "RuPay ATM & debit access",
                  "Crop & accident insurance",
                  "Interest as low as 4%",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-ink-50/60 px-4 py-3 text-sm font-medium text-ink-700"
                  >
                    <Check className="h-4 w-4 shrink-0 text-emerald" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-ink-50/40 py-16 lg:py-24">
        <div className="container-px">
          <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-soft sm:p-10">
            <ProductTabs data={tabData} />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Apply for your Kisan Credit Card"
        subtitle="Visit your nearest branch or start your application online. Our agriculture officers will guide you every step of the way."
        primaryLabel="Start Application"
        primaryHref="/apply/kcc"
      />
    </>
  );
}
