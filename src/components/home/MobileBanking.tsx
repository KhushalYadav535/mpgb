"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
  type MotionValue,
} from "framer-motion";
import {
  Send,
  Receipt,
  CreditCard,
  PiggyBank,
  Smartphone,
  QrCode,
  Apple,
  Play,
  Landmark,
  Wallet,
  TrendingUp,
  Shield,
  Zap,
  Star,
  ChevronRight,
  Wifi,
  Battery,
  Signal,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

/* ─────────────────────── Feature data ─────────────────────── */
const features = [
  {
    icon: Send,
    title: "Instant Transfers",
    desc: "UPI, IMPS & NEFT in milliseconds",
    tone: "blue" as const,
    side: "left" as const,
  },
  {
    icon: Receipt,
    title: "Smart Bill Pay",
    desc: "Electricity, mobile, DTH & more",
    tone: "green" as const,
    side: "left" as const,
  },
  {
    icon: PiggyBank,
    title: "Deposits & FD",
    desc: "Open FD/RD right from the app",
    tone: "blue" as const,
    side: "left" as const,
  },
  {
    icon: CreditCard,
    title: "Card Control",
    desc: "Block, set limits & track spends",
    tone: "green" as const,
    side: "right" as const,
  },
  {
    icon: QrCode,
    title: "Scan & Pay",
    desc: "Any UPI QR — instant & secure",
    tone: "blue" as const,
    side: "right" as const,
  },
  {
    icon: Smartphone,
    title: "Missed-Call Balance",
    desc: "Check balance on 8010968293",
    tone: "green" as const,
    side: "right" as const,
  },
];

/* ─────────────────────── Floating orbit cards ─────────────────────── */
type OrbitCard = {
  label: string;
  icon: typeof Send;
  x: string;
  y: string;
  depth: number;
  delay: number;
  tone: "blue" | "green";
};

const orbitCards: OrbitCard[] = [
  { label: "Send Money", icon: Send, x: "-2%", y: "12%", depth: 45, delay: 0.1, tone: "blue" },
  { label: "Bill Pay", icon: Receipt, x: "-6%", y: "48%", depth: 60, delay: 0.18, tone: "green" },
  { label: "Cards", icon: CreditCard, x: "71%", y: "8%", depth: 50, delay: 0.26, tone: "green" },
  { label: "Fixed Deposit", icon: PiggyBank, x: "74%", y: "46%", depth: 38, delay: 0.34, tone: "blue" },
  { label: "Kisan Credit", icon: Landmark, x: "-3%", y: "78%", depth: 30, delay: 0.42, tone: "green" },
  { label: "Scan & Pay", icon: QrCode, x: "73%", y: "78%", depth: 46, delay: 0.5, tone: "blue" },
];

/* ─────────────────────── Particle ─────────────────────── */
type Particle = {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
};

function useParticles(count: number): Particle[] {
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 8,
        duration: Math.random() * 6 + 6,
        color: Math.random() > 0.5 ? "rgba(32,118,230,0.7)" : "rgba(52,168,42,0.7)",
      }))
    );
  }, [count]);
  return particles;
}

/* ═══════════════════════ MAIN SECTION ═══════════════════════ */
export function MobileBanking() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const particles = useParticles(28);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-ink-950 py-28 lg:py-36"
    >
      {/* ── Deep space background ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Base radial glow — blue */}
        <div className="absolute left-1/4 top-0 h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />
        {/* Green accent glow */}
        <div className="absolute right-1/4 bottom-0 h-[500px] w-[600px] translate-x-1/2 rounded-full bg-leaf-500/15 blur-[100px]" />
        {/* Aurora layer 1 */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.55, 0.3], x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-gradient-to-br from-brand-500/30 to-transparent blur-3xl"
        />
        {/* Aurora layer 2 */}
        <motion.div
          animate={{ scale: [1.05, 0.95, 1.05], opacity: [0.2, 0.45, 0.2], x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute right-[8%] top-[30%] h-[350px] w-[350px] rounded-full bg-gradient-to-bl from-leaf-400/25 to-transparent blur-3xl"
        />
        {/* Spotlight sweep */}
        <motion.div
          animate={{ x: ["-30%", "130%"], opacity: [0, 0.5, 0.5, 0] }}
          transition={{ duration: 9, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
          className="absolute top-0 h-full w-[30%] rotate-12 bg-gradient-to-r from-transparent via-white/4 to-transparent"
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Rising particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bottom-0 rounded-full"
            style={{ left: `${p.x}%`, width: p.size, height: p.size, background: p.color }}
            animate={{ y: [0, -800], opacity: [0, 0.8, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeOut" }}
          />
        ))}
      </div>

      <div className="container-px relative">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            <Zap className="h-3.5 w-3.5 text-brand-400" />
            MPGB Mobile Banking
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Bank smarter.{" "}
            <span className="bg-gradient-to-r from-brand-400 via-blue-300 to-leaf-400 bg-clip-text text-transparent">
              Anywhere, anytime.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-300">
            The MPGB app delivers a premium banking experience — built for every Indian, from the city to the village.
          </p>
        </motion.div>

        {/* ── Main 3-column grid ── */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-[1fr_1.2fr_1fr]">
          {/* Left features */}
          <div className="order-2 flex flex-col gap-6 lg:order-1">
            {features.filter((f) => f.side === "left").map((f, i) => (
              <FeaturePill key={f.title} feature={f} index={i} isInView={isInView} side="left" />
            ))}
          </div>

          {/* Center phone */}
          <div className="order-1 lg:order-2">
            <CinematicPhone isInView={isInView} />
          </div>

          {/* Right features */}
          <div className="order-3 flex flex-col gap-6">
            {features.filter((f) => f.side === "right").map((f, i) => (
              <FeaturePill key={f.title} feature={f} index={i} isInView={isInView} side="right" />
            ))}
          </div>
        </div>

        {/* ── Store buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.7, ease }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
        >
          <StoreBtn icon={<Apple className="h-6 w-6" />} top="Download on the" bottom="App Store" />
          <StoreBtn icon={<Play className="h-5 w-5 fill-white" />} top="Get it on" bottom="Google Play" />
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
            <div className="flex -space-x-2">
              {["bg-brand-400", "bg-leaf-400", "bg-purple-400"].map((c, i) => (
                <div key={i} className={`h-8 w-8 rounded-full border-2 border-ink-900 ${c} grid place-items-center`}>
                  <Star className="h-3 w-3 fill-white text-white" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-xs font-bold text-white">4.8 / 5 Stars</p>
              <p className="text-[10px] text-ink-400">50,000+ Reviews</p>
            </div>
          </div>
        </motion.div>

        {/* ── Trust badges ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-ink-500"
        >
          {[
            { icon: Shield, text: "RBI Regulated & Secure" },
            { icon: Zap, text: "256-bit SSL Encryption" },
            { icon: Star, text: "Award-Winning UX" },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2 text-xs font-medium">
              <b.icon className="h-3.5 w-3.5 text-brand-500" />
              {b.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════ FEATURE PILL ═══════════════════════ */
function FeaturePill({
  feature,
  index,
  isInView,
  side,
}: {
  feature: (typeof features)[number];
  index: number;
  isInView: boolean;
  side: "left" | "right";
}) {
  const Icon = feature.icon;
  const fromX = side === "left" ? -50 : 50;

  return (
    <motion.div
      initial={{ opacity: 0, x: fromX }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.3 + index * 0.12, ease }}
      className="group relative"
    >
      {/* Hover glow */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100",
          feature.tone === "blue" ? "bg-brand-500/20" : "bg-leaf-500/20"
        )}
      />
      <div
        className={cn(
          "relative flex items-center gap-4 rounded-2xl border bg-white/5 p-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/8 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)]",
          feature.tone === "blue" ? "border-brand-500/20 hover:border-brand-400/40" : "border-leaf-500/20 hover:border-leaf-400/40",
          side === "right" ? "flex-row-reverse text-right" : ""
        )}
      >
        {/* Icon */}
        <div
          className={cn(
            "relative grid h-12 w-12 shrink-0 place-items-center rounded-xl",
            feature.tone === "blue"
              ? "bg-gradient-to-br from-brand-500 to-brand-700"
              : "bg-gradient-to-br from-leaf-400 to-leaf-700"
          )}
        >
          <Icon className="h-5 w-5 text-white" strokeWidth={2} />
          {/* Pulse ring */}
          <motion.div
            animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.5 }}
            className={cn(
              "absolute inset-0 rounded-xl",
              feature.tone === "blue" ? "bg-brand-500" : "bg-leaf-400"
            )}
          />
        </div>
        <div>
          <h3 className="font-semibold text-white">{feature.title}</h3>
          <p className="mt-0.5 text-sm text-ink-400">{feature.desc}</p>
        </div>
        <ChevronRight
          className={cn(
            "absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-600 opacity-0 transition-all duration-300 group-hover:opacity-100",
            side === "right" ? "left-4 right-auto rotate-180" : ""
          )}
        />
      </div>
    </motion.div>
  );
}

/* ═══════════════════════ CINEMATIC PHONE ═══════════════════════ */
function CinematicPhone({ isInView }: { isInView: boolean }) {
  const stageRef = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const rx = useSpring(useTransform(py, [-0.5, 0.5], [14, -14]), { stiffness: 100, damping: 20 });
  const ry = useSpring(useTransform(px, [-0.5, 0.5], [-16, 16]), { stiffness: 100, damping: 20 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = stageRef.current?.getBoundingClientRect();
    if (!r) return;
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() { px.set(0); py.set(0); }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1.0, ease, delay: 0.2 }}
      ref={stageRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto aspect-square w-full max-w-[34rem] [perspective:1800px]"
    >
      {/* Outer halo rings */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {[1, 2, 3].map((n) => (
          <motion.div
            key={n}
            animate={{ scale: [1, 1.05 + n * 0.03, 1], opacity: [0.15, 0.08, 0.15] }}
            transition={{ duration: 6 + n * 2, repeat: Infinity, ease: "easeInOut", delay: n * 1.2 }}
            className="absolute rounded-full border border-brand-500/20"
            style={{
              width: `${180 + n * 80}px`,
              height: `${180 + n * 80}px`,
              left: `${-(90 + n * 40)}px`,
              top: `${-(90 + n * 40)}px`,
            }}
          />
        ))}
      </div>

      {/* Central glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-brand-500/30 to-leaf-400/20 blur-[80px]" />

      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="absolute inset-0"
      >
        {/* Floating orbit cards */}
        {orbitCards.map((c) => (
          <OrbitCard key={c.label} card={c} px={px} py={py} isInView={isInView} />
        ))}

        {/* The phone itself */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ transform: "translateX(-50%) translateY(-50%) translateZ(100px)" }}
        >
          <PhoneBody />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════ ORBIT CARD ═══════════════════════ */
function OrbitCard({
  card,
  px,
  py,
  isInView,
}: {
  card: OrbitCard;
  px: MotionValue<number>;
  py: MotionValue<number>;
  isInView: boolean;
}) {
  const tx = useSpring(useTransform(px, [-0.5, 0.5], [-card.depth, card.depth]), { stiffness: 80, damping: 22 });
  const ty = useSpring(useTransform(py, [-0.5, 0.5], [-card.depth, card.depth]), { stiffness: 80, damping: 22 });
  const Icon = card.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: card.delay + 0.4, ease }}
      style={{ left: card.x, top: card.y, x: tx, y: ty, translateZ: "40px", position: "absolute" }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4 + card.depth / 20, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
        className={cn(
          "flex items-center gap-2.5 rounded-2xl border px-3.5 py-2.5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] backdrop-blur-xl",
          card.tone === "blue"
            ? "border-brand-400/30 bg-ink-900/80"
            : "border-leaf-400/30 bg-ink-900/80"
        )}
      >
        <span
          className={cn(
            "grid h-9 w-9 place-items-center rounded-xl text-white shadow",
            card.tone === "blue"
              ? "bg-gradient-to-br from-brand-400 to-brand-700"
              : "bg-gradient-to-br from-leaf-400 to-leaf-700"
          )}
        >
          <Icon className="h-4 w-4" strokeWidth={2} />
        </span>
        <span
          className={cn(
            "pr-1 text-xs font-semibold",
            card.tone === "blue" ? "text-brand-300" : "text-leaf-300"
          )}
        >
          {card.label}
        </span>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════ PHONE BODY ═══════════════════════ */
function PhoneBody() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Home", "Pay", "Cards", "More"];

  return (
    <div className="relative h-[30rem] w-[15rem] rounded-[2.8rem] border-[9px] border-ink-800 bg-ink-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)]">
      {/* Side button */}
      <div className="absolute -right-[11px] top-24 h-16 w-1.5 rounded-r-full bg-ink-700" />
      <div className="absolute -left-[11px] top-20 h-10 w-1.5 rounded-l-full bg-ink-700" />
      <div className="absolute -left-[11px] top-32 h-10 w-1.5 rounded-l-full bg-ink-700" />

      {/* Dynamic Island */}
      <div className="absolute left-1/2 top-2 z-20 h-7 w-28 -translate-x-1/2 rounded-full bg-ink-950" />

      {/* Screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-gradient-to-b from-[#0a1628] via-[#0d1e3a] to-[#071020]">
        {/* Screen glow */}
        <div className="pointer-events-none absolute -right-4 top-0 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-4 bottom-20 h-32 w-32 rounded-full bg-leaf-500/15 blur-3xl" />

        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-10 text-[9px] text-white/50">
          <span className="font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <Signal className="h-2.5 w-2.5" />
            <Wifi className="h-2.5 w-2.5" />
            <Battery className="h-2.5 w-2.5" />
          </div>
        </div>

        {/* Greeting */}
        <div className="px-4 pt-3">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-[10px] text-brand-300">Good Morning 🌿</p>
            <p className="mt-0.5 text-sm font-bold text-white">Ramesh Kumar</p>
          </motion.div>

          {/* Balance card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative mt-3 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-4 shadow-[0_10px_30px_-10px_rgba(32,118,230,0.6)]"
          >
            {/* Card shine */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
              className="absolute inset-y-0 w-16 -skew-x-12 bg-white/10"
            />
            <p className="text-[9px] uppercase tracking-wider text-white/60">Available Balance</p>
            <p className="mt-1 font-display text-2xl font-bold text-white">₹2,84,520</p>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-1 text-[9px] text-leaf-200">
                <TrendingUp className="h-2.5 w-2.5" /> +4.2% this month
              </div>
              <div className="rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-medium text-white">
                A/C: ••••4521
              </div>
            </div>
          </motion.div>

          {/* Quick action grid */}
          <div className="mt-4 grid grid-cols-4 gap-1.5">
            {[
              { i: Send, l: "Send", c: "from-brand-500 to-brand-700" },
              { i: QrCode, l: "Scan", c: "from-leaf-500 to-leaf-700" },
              { i: Wallet, l: "Pay", c: "from-purple-500 to-purple-700" },
              { i: Receipt, l: "Bills", c: "from-orange-500 to-orange-700" },
            ].map((a, idx) => (
              <motion.div
                key={a.l}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + idx * 0.08 }}
                className="flex flex-col items-center gap-1"
              >
                <span className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${a.c} shadow`}>
                  <a.i className="h-4 w-4 text-white" strokeWidth={2} />
                </span>
                <span className="text-[8px] font-medium text-white/60">{a.l}</span>
              </motion.div>
            ))}
          </div>

          {/* Transactions */}
          <div className="mt-4 rounded-2xl bg-white/5 p-3 backdrop-blur">
            <p className="text-[9px] font-semibold uppercase tracking-wider text-brand-400">Recent</p>
            {[
              { l: "Salary Credit", a: "+₹38,500", g: true, delay: 0.85 },
              { l: "UPI · Kirana", a: "−₹640", g: false, delay: 0.95 },
              { l: "FD Interest", a: "+₹212", g: true, delay: 1.05 },
            ].map((t) => (
              <motion.div
                key={t.l}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: t.delay }}
                className="mt-2 flex items-center justify-between"
              >
                <span className="text-[10px] font-medium text-white/70">{t.l}</span>
                <span className={cn("text-[10px] font-bold", t.g ? "text-leaf-400" : "text-red-400")}>
                  {t.a}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom nav */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-white/5 bg-ink-950/90 py-3 backdrop-blur">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={cn(
                "flex flex-col items-center gap-0.5 text-[8px] font-medium transition-colors",
                activeTab === i ? "text-brand-400" : "text-white/30"
              )}
            >
              {[Smartphone, Send, CreditCard, PiggyBank][i] &&
                (() => {
                  const Ic = [Smartphone, Send, CreditCard, PiggyBank][i];
                  return <Ic className="h-3.5 w-3.5" />;
                })()}
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════ STORE BUTTON ═══════════════════════ */
function StoreBtn({
  icon,
  top,
  bottom,
}: {
  icon: React.ReactNode;
  top: string;
  bottom: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/8 px-6 py-3.5 text-white backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/12"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      {icon}
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wider text-white/50">{top}</span>
        <span className="block font-display text-base font-semibold">{bottom}</span>
      </span>
    </motion.button>
  );
}
