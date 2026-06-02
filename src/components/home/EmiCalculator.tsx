"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight } from "lucide-react";
import Link from "next/link";
import { formatINR } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";

function calcEmi(principal: number, annualRate: number, months: number) {
  const r = annualRate / 12 / 100;
  if (r === 0) return principal / months;
  const factor = Math.pow(1 + r, months);
  return (principal * r * factor) / (factor - 1);
}

export function EmiCalculator() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(8.4);
  const [years, setYears] = useState(10);

  const { emi, totalInterest, totalPayable } = useMemo(() => {
    const months = years * 12;
    const e = calcEmi(amount, rate, months);
    const total = e * months;
    return {
      emi: Math.round(e),
      totalInterest: Math.round(total - amount),
      totalPayable: Math.round(total),
    };
  }, [amount, rate, years]);

  const principalPct = (amount / totalPayable) * 100;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Plan Ahead"
          title="Estimate your EMI in seconds"
          subtitle="Move the sliders to see exactly what your monthly repayment looks like. No sign-up, no surprises."
        />

        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card lg:grid lg:grid-cols-[1.2fr_1fr]">
          {/* Controls */}
          <div className="p-8 lg:p-10">
            <SliderRow
              label="Loan Amount"
              value={formatINR(amount)}
              min={50000}
              max={5000000}
              step={50000}
              raw={amount}
              onChange={setAmount}
            />
            <SliderRow
              label="Interest Rate"
              value={`${rate.toFixed(2)} %`}
              min={6}
              max={18}
              step={0.05}
              raw={rate}
              onChange={setRate}
            />
            <SliderRow
              label="Tenure"
              value={`${years} ${years === 1 ? "year" : "years"}`}
              min={1}
              max={30}
              step={1}
              raw={years}
              onChange={setYears}
            />

            {/* Split bar */}
            <div className="mt-8">
              <div className="flex h-3 overflow-hidden rounded-full bg-ink-100">
                <div
                  className="bg-ink-900 transition-all duration-500"
                  style={{ width: `${principalPct}%` }}
                />
                <div className="flex-1 bg-gold-sheen bg-[length:200%_auto]" />
              </div>
              <div className="mt-3 flex justify-between text-xs text-ink-500">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-ink-900" /> Principal
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-gold-400" /> Interest
                </span>
              </div>
            </div>
          </div>

          {/* Result panel */}
          <div className="relative overflow-hidden bg-ink-950 p-8 text-white lg:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-500/20 blur-3xl" />
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
              <Calculator className="h-3.5 w-3.5 text-gold-400" /> Monthly EMI
            </span>

            <motion.p
              key={emi}
              initial={{ opacity: 0.4, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 font-display text-4xl font-bold text-gold-gradient sm:text-5xl"
            >
              {formatINR(emi)}
            </motion.p>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-white/60">Principal</span>
                <span className="font-semibold">{formatINR(amount)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">Total Interest</span>
                <span className="font-semibold text-gold-300">
                  {formatINR(totalInterest)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">Total Payable</span>
                <span className="font-semibold">{formatINR(totalPayable)}</span>
              </div>
            </div>

            <Link
              href="/apply/personal-loan"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-sheen bg-[length:200%_auto] px-6 py-3.5 text-sm font-semibold text-ink-900 shadow-gold transition-all duration-300 hover:bg-right"
            >
              Apply for this Loan <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  raw,
  onChange,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  raw: number;
  onChange: (v: number) => void;
}) {
  const pct = ((raw - min) / (max - min)) * 100;
  return (
    <div className="mb-7 last:mb-0">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-ink-500">{label}</label>
        <span className="font-display text-lg font-bold text-ink-900">
          {value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={raw}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full outline-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold-500 [&::-webkit-slider-thumb]:shadow-gold [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-gold-500"
        style={{
          background: `linear-gradient(to right, #0b1226 0%, #0b1226 ${pct}%, #e6ebf5 ${pct}%, #e6ebf5 100%)`,
        }}
      />
    </div>
  );
}
