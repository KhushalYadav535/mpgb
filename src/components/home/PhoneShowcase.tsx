"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import {
  Send,
  Receipt,
  CreditCard,
  PiggyBank,
  Landmark,
  Smartphone,
  Wallet,
  TrendingUp,
  QrCode,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

type FloatCard = {
  label: string;
  icon: typeof Send;
  /** position around the phone, in % of the stage */
  x: string;
  y: string;
  depth: number; // higher = moves more with the mouse
  delay: number;
  tone: "blue" | "green";
};

const cards: FloatCard[] = [
  { label: "Send Money", icon: Send, x: "2%", y: "14%", depth: 40, delay: 0.1, tone: "blue" },
  { label: "Bill Payments", icon: Receipt, x: "-4%", y: "46%", depth: 60, delay: 0.18, tone: "green" },
  { label: "Manage Cards", icon: CreditCard, x: "70%", y: "10%", depth: 50, delay: 0.26, tone: "green" },
  { label: "Fixed Deposits", icon: PiggyBank, x: "74%", y: "44%", depth: 38, delay: 0.34, tone: "blue" },
  { label: "Kisan Credit", icon: Landmark, x: "0%", y: "76%", depth: 30, delay: 0.42, tone: "green" },
  { label: "Scan & Pay", icon: QrCode, x: "72%", y: "76%", depth: 46, delay: 0.5, tone: "blue" },
];

export function PhoneShowcase() {
  const stageRef = useRef<HTMLDivElement>(null);

  // Pointer position (-0.5 .. 0.5)
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const rx = useSpring(useTransform(py, [-0.5, 0.5], [10, -10]), {
    stiffness: 120,
    damping: 18,
  });
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-12, 12]), {
    stiffness: 120,
    damping: 18,
  });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <div
      ref={stageRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto aspect-square w-full max-w-[34rem] [perspective:1600px]"
    >
      {/* soft brand halo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-brand-500/25 to-leaf-500/20 blur-3xl" />

      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="absolute inset-0"
      >
        {/* Floating feature cards */}
        {cards.map((c) => (
          <FloatingCard key={c.label} card={c} px={px} py={py} />
        ))}

        {/* The phone — sits forward in Z */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ transform: "translateZ(80px)" }}
        >
          <PhoneFrame />
        </div>
      </motion.div>
    </div>
  );
}

function FloatingCard({
  card,
  px,
  py,
}: {
  card: FloatCard;
  px: MotionValue<number>;
  py: MotionValue<number>;
}) {
  const tx = useSpring(useTransform(px, [-0.5, 0.5], [-card.depth, card.depth]), {
    stiffness: 90,
    damping: 20,
  });
  const ty = useSpring(useTransform(py, [-0.5, 0.5], [-card.depth, card.depth]), {
    stiffness: 90,
    damping: 20,
  });

  const Icon = card.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: card.delay, ease }}
      style={{ left: card.x, top: card.y, x: tx, y: ty, transform: "translateZ(30px)" }}
      className="absolute"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4 + card.depth / 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: card.delay,
        }}
        className={cn(
          "flex items-center gap-2.5 rounded-2xl border px-3.5 py-2.5 shadow-lift backdrop-blur-xl",
          card.tone === "blue"
            ? "border-brand-200/40 bg-white/85"
            : "border-leaf-200/50 bg-white/85"
        )}
      >
        <span
          className={cn(
            "grid h-9 w-9 place-items-center rounded-xl text-white shadow",
            card.tone === "blue" ? "bg-brand-sheen" : "bg-gradient-to-br from-leaf-400 to-leaf-600"
          )}
        >
          <Icon className="h-4 w-4" strokeWidth={2} />
        </span>
        <span className="pr-1 text-sm font-semibold text-brand-800">{card.label}</span>
      </motion.div>
    </motion.div>
  );
}

/* The phone with an animated MPGB banking UI inside */
function PhoneFrame() {
  return (
    <div className="relative h-[27rem] w-[13.5rem] rounded-[2.6rem] border-[10px] border-ink-900 bg-ink-900 shadow-[0_40px_80px_-20px_rgba(10,31,71,0.6)]">
      {/* notch */}
      <div className="absolute left-1/2 top-0 z-20 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-ink-900" />

      {/* screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-gradient-to-b from-brand-700 via-brand-600 to-brand-800">
        {/* decorative leaf glow */}
        <div className="pointer-events-none absolute -right-8 -top-6 h-32 w-32 rounded-full bg-leaf-400/40 blur-2xl" />

        <div className="relative px-4 pt-9">
          <div className="flex items-center justify-between text-white/80">
            <span className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="grid h-6 w-6 place-items-center rounded-lg bg-white">
                <Smartphone className="h-3.5 w-3.5 text-brand-600" />
              </span>
              MPGB Pay
            </span>
            <span className="text-[10px] text-white/60">9:41</span>
          </div>

          {/* balance card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 rounded-2xl bg-white/15 p-3.5 backdrop-blur"
          >
            <p className="text-[10px] uppercase tracking-wider text-white/70">
              Available Balance
            </p>
            <p className="mt-1 font-display text-2xl font-bold text-white">₹2,84,520</p>
            <div className="mt-1 flex items-center gap-1 text-[10px] text-leaf-200">
              <TrendingUp className="h-3 w-3" /> +4.2% this month
            </div>
          </motion.div>

          {/* quick actions */}
          <div className="mt-4 grid grid-cols-4 gap-2">
            {[
              { i: Send, l: "Send" },
              { i: QrCode, l: "Scan" },
              { i: Wallet, l: "Pay" },
              { i: Receipt, l: "Bills" },
            ].map((a, idx) => (
              <motion.div
                key={a.l}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.08 }}
                className="flex flex-col items-center gap-1"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 text-white">
                  <a.i className="h-4 w-4" />
                </span>
                <span className="text-[9px] text-white/70">{a.l}</span>
              </motion.div>
            ))}
          </div>

          {/* mini transactions */}
          <div className="mt-4 rounded-2xl bg-white/95 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-400">
              Recent
            </p>
            {[
              { l: "Salary Credit", a: "+ ₹38,500", g: true },
              { l: "UPI · Kirana", a: "− ₹640", g: false },
              { l: "FD Interest", a: "+ ₹212", g: true },
            ].map((t, idx) => (
              <motion.div
                key={t.l}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                className="mt-2 flex items-center justify-between"
              >
                <span className="text-[11px] font-medium text-ink-700">{t.l}</span>
                <span
                  className={cn(
                    "text-[11px] font-bold",
                    t.g ? "text-leaf-600" : "text-ink-500"
                  )}
                >
                  {t.a}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* bottom nav */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-around bg-white/95 py-3">
          {[CreditCard, PiggyBank, Landmark].map((Ic, i) => (
            <Ic
              key={i}
              className={cn("h-4 w-4", i === 0 ? "text-brand-600" : "text-ink-300")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
