"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Sprout,
  Home,
  Wifi,
  Battery,
  Signal,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Tilt3D — a premium, interactive 3D stage.
 * Tracks the pointer to tilt the whole scene, keeps a gentle idle float,
 * and exposes a moving light sheen. Children can use `translateZ` (via the
 * `Layer` helper) to float at different depths for real parallax.
 */
function Tilt3D({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0); // -0.5 .. 0.5
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), {
    stiffness: 120,
    damping: 16,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), {
    stiffness: 120,
    damping: 16,
  });

  // Sheen follows the pointer across the surface
  const sheenX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto w-full max-w-sm [perspective:1300px]"
    >
      {/* soft brand halo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-brand-500/15 to-leaf-500/12 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 28, rotateX: 12 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.9, ease }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* gentle idle float wraps the depth content */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}

          {/* moving light sheen */}
          <motion.div
            style={{ left: sheenX, transform: "translateZ(60px)" }}
            className="pointer-events-none absolute -top-10 bottom-[-10%] w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/12 to-transparent blur-md"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

/** A depth layer — lifts its content toward the viewer in 3D. */
function Layer({
  z = 0,
  className,
  children,
}: {
  z?: number;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={className}
      style={{ transform: `translateZ(${z}px)`, transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

/* ---------- 1. DIGITAL BANKING (phone with depth) ---------- */
export function DigitalVisual() {
  const txns = [
    { icon: ArrowDownLeft, label: "Salary Credit", amt: "+ ₹38,500", credit: true },
    { icon: ArrowUpRight, label: "UPI · Kirana Store", amt: "− ₹640", credit: false },
    { icon: ArrowDownLeft, label: "Interest", amt: "+ ₹212", credit: true },
  ];
  return (
    <Tilt3D>
      <Layer
        z={20}
        className="relative mx-auto w-[16.5rem] overflow-hidden rounded-[2.4rem] border border-white/10 bg-gradient-to-b from-white/[0.1] to-white/[0.02] p-3 shadow-glow backdrop-blur-xl"
      >
        <div className="flex items-center justify-between px-4 pt-2 text-white/50">
          <span className="text-[11px] font-medium">9:41</span>
          <span className="flex items-center gap-1.5">
            <Signal className="h-3 w-3" />
            <Wifi className="h-3 w-3" />
            <Battery className="h-3 w-3" />
          </span>
        </div>

        <div className="px-4 pb-4 pt-5">
          <p className="text-[11px] text-white/45">Good morning,</p>
          <p className="font-display text-lg font-semibold text-white">Rajesh Kumar</p>

          <Layer z={45} className="mt-4 rounded-2xl bg-gold-sheen bg-[length:200%_auto] p-4 text-white shadow-gold">
            <p className="text-[11px] font-medium uppercase tracking-wider text-white/75">
              Available Balance
            </p>
            <p className="mt-1 font-display text-2xl font-bold">₹2,84,520</p>
          </Layer>

          <div className="mt-4 space-y-2">
            {txns.map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                <span
                  className={`grid h-8 w-8 place-items-center rounded-full ${
                    t.credit ? "bg-leaf-500/15 text-leaf-300" : "bg-white/8 text-white/70"
                  }`}
                >
                  <t.icon className="h-3.5 w-3.5" />
                </span>
                <span className="flex-1 text-[12px] font-medium text-white/90">{t.label}</span>
                <span
                  className={`text-[12px] font-semibold ${
                    t.credit ? "text-leaf-300" : "text-white/70"
                  }`}
                >
                  {t.amt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Layer>
    </Tilt3D>
  );
}

/* ---------- 2. FIXED DEPOSIT (growth card with depth) ---------- */
export function DepositVisual() {
  const bars = [44, 56, 52, 70, 78, 92, 100];
  return (
    <Tilt3D>
      <Layer
        z={20}
        className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.1] to-white/[0.02] p-7 shadow-glow backdrop-blur-xl"
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/45">Fixed Deposit</p>
        <p className="mt-2 font-display text-3xl font-bold text-white">₹1,44,920</p>
        <p className="mt-1 text-xs text-white/45">Maturity on ₹1,00,000 · 5 years</p>

        <Layer z={40} className="mt-7 flex h-28 items-end justify-between gap-2.5">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.7, ease }}
              className="w-full origin-bottom rounded-full bg-gradient-to-t from-brand-600/40 to-leaf-400"
            />
          ))}
        </Layer>
      </Layer>
    </Tilt3D>
  );
}

/* ---------- 3. KISAN CREDIT CARD (floating 3D card) ---------- */
export function KccVisual() {
  return (
    <Tilt3D>
      <Layer
        z={30}
        className="relative aspect-[1.6/1] overflow-hidden rounded-[1.5rem] border border-white/15 bg-gradient-to-br from-[#10674e] via-[#0c4a39] to-[#062b21] p-6 shadow-glow"
      >
        <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-leaf-400/25 blur-3xl" />

        <div className="relative flex items-start justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/55">
              Kisan Credit Card
            </p>
            <p className="mt-1 font-display text-base font-semibold text-white">RuPay · MPGB</p>
          </div>
          <Sprout className="h-6 w-6 text-leaf-300" />
        </div>

        <Layer z={30} className="relative mt-5 h-8 w-11 rounded-md bg-gradient-to-br from-leaf-200 to-leaf-500" />
        <p className="relative mt-4 font-mono text-base tracking-[0.2em] text-white/90">
          6072 •••• •••• 1976
        </p>
        <div className="relative mt-3 flex items-end justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-widest text-white/45">Farmer</p>
            <p className="text-xs font-medium text-white">RAMESH PATEL</p>
          </div>
          <span className="font-display text-sm font-bold italic text-leaf-200">mpgb</span>
        </div>
      </Layer>
    </Tilt3D>
  );
}

/* ---------- 4. HOME LOAN (minimal house with depth) ---------- */
export function HomeVisual() {
  return (
    <Tilt3D>
      <Layer
        z={20}
        className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.1] to-white/[0.02] p-7 shadow-glow backdrop-blur-xl"
      >
        <Layer z={40} className="relative mx-auto flex h-36 items-end justify-center">
          <motion.svg
            viewBox="0 0 200 150"
            className="h-36 w-full"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M30 80 L100 30 L170 80"
              fill="none"
              stroke="#4cc23f"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
              transition={{ duration: 1, ease }}
            />
            <motion.rect
              x="48" y="78" width="104" height="60" rx="3"
              fill="rgba(255,255,255,0.03)"
              stroke="#2076e6"
              strokeWidth="2.5"
              variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
              transition={{ duration: 1, delay: 0.3, ease }}
            />
            <motion.rect
              x="88" y="104" width="24" height="34" rx="2"
              fill="rgba(32,118,230,0.25)"
              stroke="#4f9bf5"
              strokeWidth="2"
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              transition={{ delay: 1 }}
            />
          </motion.svg>
        </Layer>

        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="inline-flex items-center gap-2 text-sm text-white/70">
            <Home className="h-4 w-4 text-leaf-300" /> Home Loan EMI
          </span>
          <span className="font-display text-xl font-bold text-white">₹38,420</span>
        </div>
        <p className="mt-2 text-[11px] text-white/45">₹50,00,000 · 20 years · 8.70% p.a.</p>
      </Layer>
    </Tilt3D>
  );
}

export const heroVisualMap = {
  savings: DigitalVisual,
  deposit: DepositVisual,
  kcc: KccVisual,
  home: HomeVisual,
} as const;
