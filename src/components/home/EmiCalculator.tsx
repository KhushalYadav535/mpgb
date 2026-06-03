"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, IndianRupee } from "lucide-react";
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
    <section className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 top-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-500/10 blur-[100px]" />

      <div className="container-px relative z-10">
        <SectionHeading
          eyebrow="Plan Ahead"
          title={<span className="text-white">Estimate your EMI in seconds</span>}
          subtitle={<span className="text-ink-300">Move the sliders to see exactly what your monthly repayment looks like. No sign-up, no surprises.</span>}
        />

        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-ink-900/60 shadow-2xl backdrop-blur-xl lg:grid lg:grid-cols-[1.3fr_1fr]">
          {/* Controls Panel */}
          <div className="p-8 lg:p-12">
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
            <div className="mt-10">
              <div className="flex h-4 overflow-hidden rounded-full bg-ink-950 shadow-inner">
                <motion.div
                  className="bg-brand-500 transition-all duration-500"
                  style={{ width: `${principalPct}%` }}
                />
                <motion.div
                  className="flex-1 bg-purple-500 transition-all duration-500"
                />
              </div>
              <div className="mt-4 flex justify-between text-xs text-ink-300">
                <span className="inline-flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-brand-500 shadow-[0_0_10px_rgba(32,118,230,0.6)]" /> Principal
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]" /> Interest
                </span>
              </div>
            </div>
          </div>

          {/* Result Panel */}
          <div className="relative overflow-hidden border-l border-white/5 bg-gradient-to-br from-ink-800 to-ink-950 p-8 text-white lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/20 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/20 blur-[80px]" />
            
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-300 backdrop-blur-md">
              <Calculator className="h-4 w-4" /> Monthly EMI
            </span>

            <motion.div
              key={emi}
              initial={{ opacity: 0.4, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-6 flex items-baseline gap-1 font-display"
            >
              <IndianRupee className="h-8 w-8 text-white/50" />
              <span className="bg-gradient-to-r from-brand-300 to-purple-300 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
                {emi.toLocaleString("en-IN")}
              </span>
            </motion.div>

            <div className="mt-10 space-y-5 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-md">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">Principal</span>
                <span className="font-semibold">{formatINR(amount)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60">Total Interest</span>
                <span className="font-semibold text-purple-300">
                  {formatINR(totalInterest)}
                </span>
              </div>
              <div className="my-2 h-px w-full bg-white/10" />
              <div className="flex items-center justify-between text-base">
                <span className="font-medium text-white/80">Total Payable</span>
                <span className="font-bold text-brand-300">{formatINR(totalPayable)}</span>
              </div>
            </div>

            <Link
              href="/apply/personal-loan"
              className="group relative mt-10 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-6 py-4 text-sm font-semibold text-ink-900 transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Apply for this Loan <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
    <div className="mb-8 last:mb-0">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-ink-300">{label}</label>
        <div className="rounded-lg bg-ink-950 px-3 py-1 font-display text-lg font-bold text-white shadow-inner">
          {value}
        </div>
      </div>
      <div className="relative mt-5">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={raw}
          onChange={(e) => onChange(Number(e.target.value))}
          className="relative z-10 h-2 w-full cursor-pointer appearance-none rounded-full bg-transparent outline-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-brand-400 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(32,118,230,0.8)] [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-brand-400 [&::-moz-range-thumb]:bg-white"
        />
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-brand-600 to-brand-400"
          style={{ width: `${pct}%` }}
        />
        <div className="absolute inset-y-0 left-0 right-0 -z-10 rounded-full bg-ink-950 shadow-inner" />
      </div>
    </div>
  );
}
