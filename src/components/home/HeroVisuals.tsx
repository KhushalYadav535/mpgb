"use client";

import { motion } from "framer-motion";
import {
  Send,
  ArrowDownLeft,
  ArrowUpRight,
  Smartphone,
  Wifi,
  TrendingUp,
  ShieldCheck,
  Sprout,
  Sun,
  Droplets,
  Home,
  KeyRound,
  IndianRupee,
  Percent,
  Wallet,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* Shared shell: glow + floating chips around a central panel */
function VisualShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-md [perspective:1600px]">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-gold-500/10 via-transparent to-white/10 blur-2xl" />
      <motion.div
        initial={{ opacity: 0, y: 36, rotateX: 8, rotateY: -6 }}
        animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
        transition={{ duration: 0.9, ease }}
        className="relative"
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ---------- 1. DIGITAL BANKING (phone app) ---------- */
export function DigitalVisual() {
  const txns = [
    { icon: ArrowDownLeft, label: "Salary Credit", amt: "+ ₹38,500", credit: true },
    { icon: ArrowUpRight, label: "UPI · Kirana Store", amt: "− ₹640", credit: false },
    { icon: ArrowDownLeft, label: "Interest", amt: "+ ₹212", credit: true },
  ];
  return (
    <VisualShell>
      <div className="relative mx-auto w-[17rem] overflow-hidden rounded-[2.2rem] border-[6px] border-ink-800 bg-gradient-to-b from-ink-800 to-ink-950 p-4 shadow-glow">
        <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/20" />
        <div className="mt-4 flex items-center justify-between text-white/60">
          <span className="text-[11px] font-medium">9:41</span>
          <span className="flex items-center gap-1">
            <Wifi className="h-3 w-3" /> <span className="text-[11px]">5G</span>
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gold-sheen text-ink-900">
            <Smartphone className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[10px] leading-none text-white/50">Good morning</p>
            <p className="text-xs font-semibold text-white">Rajesh Kumar</p>
          </div>
        </div>

        <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-3">
          <p className="text-[10px] uppercase tracking-wider text-white/45">Total Balance</p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-display text-2xl font-bold text-white"
          >
            ₹2,84,520
          </motion.p>
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {[Send, ArrowDownLeft, Wallet].map((Icon, i) => (
              <div key={i} className="flex flex-col items-center gap-1 rounded-lg bg-white/5 py-1.5">
                <Icon className="h-3.5 w-3.5 text-gold-300" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 space-y-1.5">
          {txns.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.12 }}
              className="flex items-center gap-2 rounded-xl border border-white/6 bg-white/[0.03] px-2.5 py-2"
            >
              <span className={`grid h-7 w-7 place-items-center rounded-lg ${t.credit ? "bg-emerald/15 text-emerald-soft" : "bg-white/8 text-white/70"}`}>
                <t.icon className="h-3.5 w-3.5" />
              </span>
              <span className="flex-1 text-[11px] font-medium text-white">{t.label}</span>
              <span className={`text-[11px] font-semibold ${t.credit ? "text-emerald-soft" : "text-white/80"}`}>
                {t.amt}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <FloatChip className="-left-6 top-16" delay={0.9}>
        <Send className="h-4 w-4 text-emerald-soft" />
        <span>
          <b className="block text-xs text-white">UPI sent</b>
          <span className="text-[10px] text-white/50">in 2 seconds</span>
        </span>
      </FloatChip>
      <FloatChip className="-right-4 bottom-20" delay={1.1}>
        <ShieldCheck className="h-4 w-4 text-gold-300" />
        <span className="text-xs font-semibold text-white">Secure login</span>
      </FloatChip>
    </VisualShell>
  );
}

/* ---------- 2. FIXED DEPOSIT (growth chart) ---------- */
export function DepositVisual() {
  const bars = [40, 52, 48, 66, 74, 88, 100];
  return (
    <VisualShell>
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-gradient-to-b from-ink-800/90 to-ink-950/95 p-6 shadow-glow">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-white/45">Fixed Deposit</p>
            <p className="font-display text-lg font-semibold text-white">Maturity Value</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald/15 px-2.5 py-1 text-[11px] font-semibold text-emerald-soft">
            <TrendingUp className="h-3 w-3" /> 7.25%
          </span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 font-display text-4xl font-bold text-gold-gradient"
        >
          ₹1,44,920
        </motion.p>
        <p className="mt-1 text-xs text-white/50">on ₹1,00,000 over 5 years</p>

        {/* Bar chart */}
        <div className="mt-6 flex h-28 items-end justify-between gap-2">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.6, ease }}
              className="w-full origin-bottom rounded-t-md bg-gradient-to-t from-gold-600/40 to-gold-400"
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[10px] text-white/40">
          {["Y1", "Y2", "Y3", "Y4", "Y5", "Y6", "Y7"].map((y) => (
            <span key={y}>{y}</span>
          ))}
        </div>
      </div>

      <FloatChip className="-left-6 top-10" delay={0.9}>
        <Percent className="h-4 w-4 text-gold-300" />
        <span>
          <b className="block text-xs text-white">+0.50%</b>
          <span className="text-[10px] text-white/50">senior bonus</span>
        </span>
      </FloatChip>
      <FloatChip className="-right-4 bottom-12" delay={1.1}>
        <ShieldCheck className="h-4 w-4 text-emerald-soft" />
        <span className="text-xs font-semibold text-white">Assured returns</span>
      </FloatChip>
    </VisualShell>
  );
}

/* ---------- 3. KISAN CREDIT CARD ---------- */
export function KccVisual() {
  return (
    <VisualShell>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-[1.6rem] border border-white/15 bg-gradient-to-br from-[#0f5a44] via-[#0c4a39] to-[#04211a] p-6 shadow-glow"
      >
        <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gold-400/25 blur-3xl" />
        {/* field rows decoration */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 opacity-30">
          {[0, 1, 2].map((r) => (
            <div
              key={r}
              className="absolute inset-x-0 border-t border-emerald-soft/40"
              style={{ bottom: `${r * 22}px` }}
            />
          ))}
        </div>

        <div className="relative flex items-start justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/55">Kisan Credit Card</p>
            <p className="mt-1 font-display text-lg font-semibold text-white">RuPay · MPGB</p>
          </div>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-sheen text-ink-900">
            <Sprout className="h-5 w-5" />
          </span>
        </div>

        <div className="relative mt-6 h-9 w-12 rounded-md bg-gradient-to-br from-gold-200 to-gold-500" />
        <p className="relative mt-4 font-mono text-lg tracking-[0.18em] text-white/90">
          6072 •••• •••• 1976
        </p>
        <div className="relative mt-4 flex items-end justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-widest text-white/45">Farmer</p>
            <p className="text-xs font-medium text-white">RAMESH PATEL</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-widest text-white/45">Limit</p>
            <p className="text-xs font-semibold text-gold-300">₹3,00,000</p>
          </div>
          <span className="font-display text-sm font-bold italic text-gold-300">mpgb</span>
        </div>
      </motion.div>

      <FloatChip className="-left-6 top-8" delay={0.9}>
        <Sun className="h-4 w-4 text-gold-300" />
        <span>
          <b className="block text-xs text-white">Repay</b>
          <span className="text-[10px] text-white/50">after harvest</span>
        </span>
      </FloatChip>
      <FloatChip className="-right-5 bottom-10" delay={1.1}>
        <Droplets className="h-4 w-4 text-emerald-soft" />
        <span>
          <b className="block text-xs text-white">7% p.a.</b>
          <span className="text-[10px] text-white/50">subvention</span>
        </span>
      </FloatChip>
    </VisualShell>
  );
}

/* ---------- 4. HOME LOAN ---------- */
export function HomeVisual() {
  return (
    <VisualShell>
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-gradient-to-b from-ink-800/90 to-ink-950/95 p-6 shadow-glow">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-500/20 blur-3xl" />

        {/* House illustration */}
        <div className="relative mx-auto flex h-40 items-end justify-center">
          <motion.svg
            viewBox="0 0 200 150"
            className="h-40 w-full"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M30 80 L100 30 L170 80"
              fill="none"
              stroke="#e6b23a"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
              transition={{ duration: 1, ease }}
            />
            <motion.rect
              x="48" y="78" width="104" height="60" rx="3"
              fill="rgba(255,255,255,0.04)"
              stroke="#e6b23a"
              strokeWidth="2.5"
              variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
              transition={{ duration: 1, delay: 0.3, ease }}
            />
            <motion.rect
              x="88" y="104" width="24" height="34" rx="2"
              fill="rgba(217,152,33,0.25)"
              stroke="#e6b23a"
              strokeWidth="2"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ delay: 1 }}
            />
            <motion.circle
              cx="100" cy="64" r="6"
              fill="#e6b23a"
              variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
              transition={{ delay: 1.1, type: "spring" }}
            />
          </motion.svg>
        </div>

        <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-sm text-white/70">
              <Home className="h-4 w-4 text-gold-300" /> Home Loan EMI
            </span>
            <span className="font-display text-lg font-bold text-white">₹38,420</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "72%" }}
              transition={{ delay: 0.6, duration: 1, ease }}
              className="h-full rounded-full bg-gold-sheen"
            />
          </div>
          <p className="mt-2 text-[11px] text-white/45">₹50,00,000 · 20 years · 8.70% p.a.</p>
        </div>
      </div>

      <FloatChip className="-left-6 top-10" delay={1}>
        <KeyRound className="h-4 w-4 text-gold-300" />
        <span className="text-xs font-semibold text-white">Quick approval</span>
      </FloatChip>
      <FloatChip className="-right-4 bottom-14" delay={1.2}>
        <IndianRupee className="h-4 w-4 text-emerald-soft" />
        <span>
          <b className="block text-xs text-white">8.70%</b>
          <span className="text-[10px] text-white/50">low rate</span>
        </span>
      </FloatChip>
    </VisualShell>
  );
}

function FloatChip({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -9, 0] }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale: { delay, duration: 0.5 },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`absolute z-10 hidden items-center gap-2.5 rounded-2xl border border-white/12 bg-ink-950/85 px-4 py-3 shadow-lift backdrop-blur-xl sm:flex ${className}`}
    >
      {children}
    </motion.div>
  );
}

export const heroVisualMap = {
  savings: DigitalVisual,
  deposit: DepositVisual,
  kcc: KccVisual,
  home: HomeVisual,
} as const;
