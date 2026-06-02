"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Check,
  ShieldCheck,
} from "lucide-react";
import { heroSlides, heroQuickLinks, type HeroSlide } from "@/lib/content";
import { heroVisualMap } from "./HeroVisuals";
import { CinematicBackdrop } from "./CinematicBackdrop";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const DURATION = 6500;

const themes: Record<HeroSlide["theme"], { base: string; glow: string }> = {
  burgundy: {
    base: "bg-[radial-gradient(130%_130%_at_25%_-10%,#1a4790_0%,#102f63_50%,#070f2c_100%)]",
    glow: "bg-brand-500/30",
  },
  ink: {
    base: "bg-[radial-gradient(130%_130%_at_25%_-10%,#1a2a55_0%,#0b1226_50%,#04060f_100%)]",
    glow: "bg-brand-500/25",
  },
  emerald: {
    base: "bg-[radial-gradient(130%_130%_at_25%_-10%,#0f6048_0%,#06281f_52%,#03130e_100%)]",
    glow: "bg-leaf-500/25",
  },
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};
const lift: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } },
  exit: { opacity: 0, y: -14, filter: "blur(4px)", transition: { duration: 0.4, ease } },
};

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stageRef = useRef<HTMLElement>(null);

  const slide = heroSlides[index];
  const theme = themes[slide.theme];
  const Visual = heroVisualMap[slide.visual];

  // Whole-hero pointer parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  // depth layers move by different amounts
  const bgX = useTransform(sx, [-0.5, 0.5], [22, -22]);
  const bgY = useTransform(sy, [-0.5, 0.5], [16, -16]);
  const copyX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const copyY = useTransform(sy, [-0.5, 0.5], [-8, 8]);
  const visX = useTransform(sx, [-0.5, 0.5], [-34, 34]);
  const visY = useTransform(sy, [-0.5, 0.5], [-22, 22]);
  const visRotY = useTransform(sx, [-0.5, 0.5], [10, -10]);
  const visRotX = useTransform(sy, [-0.5, 0.5], [-8, 8]);

  function onMove(e: React.MouseEvent<HTMLElement>) {
    const r = stageRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  const go = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = setTimeout(() => go(index + 1), DURATION);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [index, paused, go]);

  return (
    <section
      ref={stageRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative overflow-hidden text-white [perspective:1600px]"
    >
      {/* Cinematic colour grade, parallaxed + push-in crossfade */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-[-4%]">
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease }}
            className={cn("absolute inset-0", theme.base)}
          />
        </AnimatePresence>

        {/* Per-slide key light */}
        <AnimatePresence initial={false}>
          <motion.div
            key={`${slide.id}-glow`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease }}
            className={cn(
              "absolute right-[4%] top-1/2 h-[40rem] w-[40rem] -translate-y-1/2 rounded-full blur-3xl",
              theme.glow
            )}
          />
        </AnimatePresence>
      </motion.div>

      {/* Cinematic atmosphere */}
      <CinematicBackdrop />

      {/* Letterbox top bar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-14 bg-gradient-to-b from-black/45 to-transparent" />

      <div className="container-px relative z-10 grid items-center gap-12 pb-16 pt-32 lg:grid-cols-2 lg:gap-10 lg:pb-24 lg:pt-40">
        {/* Copy column (mid-depth parallax) */}
        <motion.div style={{ x: copyX, y: copyY }} className="relative">
          <div className="relative min-h-[24rem] sm:min-h-[22rem]">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={slide.id}
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
                className="absolute inset-x-0 top-0"
              >
                <motion.span
                  variants={lift}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 backdrop-blur"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-leaf-400 shadow-[0_0_10px_2px_rgba(76,194,63,0.7)]" />
                  {slide.badge}
                </motion.span>

                <motion.h1
                  variants={lift}
                  className="mt-5 font-display text-[2.65rem] font-bold leading-[1.05] tracking-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.4)] sm:text-5xl lg:text-[3.7rem]"
                >
                  {slide.title}{" "}
                  <span className="text-gold-gradient animate-shimmer">{slide.highlight}</span>
                </motion.h1>

                <motion.p
                  variants={lift}
                  className="mt-5 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.ul variants={lift} className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
                  {slide.features.map((f) => (
                    <li
                      key={f}
                      className="inline-flex items-center gap-2 text-sm text-white/70"
                    >
                      <Check className="h-4 w-4 text-leaf-300" /> {f}
                    </li>
                  ))}
                </motion.ul>

                <motion.div variants={lift} className="mt-9 flex flex-wrap items-center gap-4">
                  <Link href={slide.cta.href} className="btn-gold group text-base">
                    {slide.cta.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  {slide.secondary && (
                    <Link href={slide.secondary.href} className="btn-ghost text-base">
                      {slide.secondary.label}
                    </Link>
                  )}
                </motion.div>

                <motion.p
                  variants={lift}
                  className="mt-6 inline-flex items-center gap-2 text-xs text-white/45"
                >
                  <ShieldCheck className="h-4 w-4 text-leaf-300" />
                  RBI regulated · DICGC insured up to ₹5,00,000
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide controls */}
          <div className="mt-6 flex items-center gap-5">
            <div className="flex items-center gap-2">
              {heroSlides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => go(i)}
                  aria-label={`Go to ${s.badge}`}
                  className="group relative h-1 overflow-hidden rounded-full bg-white/15 transition-all"
                  style={{ width: i === index ? 40 : 16 }}
                >
                  {i === index && !paused && (
                    <motion.span
                      key={`${slide.id}-bar`}
                      className="absolute inset-y-0 left-0 rounded-full bg-gold-sheen"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: DURATION / 1000, ease: "linear" }}
                    />
                  )}
                  {i === index && paused && (
                    <span className="absolute inset-0 rounded-full bg-gold-sheen" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => go(index - 1)}
                aria-label="Previous slide"
                className="grid h-9 w-9 place-items-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Play" : "Pause"}
                className="grid h-9 w-9 place-items-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
              >
                {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
              </button>
              <button
                onClick={() => go(index + 1)}
                aria-label="Next slide"
                className="grid h-9 w-9 place-items-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Visual column — foreground depth + 3D tilt */}
        <motion.div
          style={{
            x: visX,
            y: visY,
            rotateX: visRotX,
            rotateY: visRotY,
            transformStyle: "preserve-3d",
          }}
          className="relative hidden min-h-[24rem] items-center justify-center lg:flex"
        >
          {/* rotating conic halo behind the visual */}
          <div className="pointer-events-none absolute inset-0 grid place-items-center">
            <div className="h-[27rem] w-[27rem] rounded-full bg-[conic-gradient(from_0deg,rgba(32,118,230,0.2),rgba(76,194,63,0.18),transparent_60%)] blur-2xl animate-spin-slow" />
          </div>

          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 0.92, y: 22 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -12 }}
              transition={{ duration: 0.9, ease }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Visual />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Quick product links */}
      <div className="relative z-10 border-t border-white/10 bg-white/[0.02] backdrop-blur-sm">
        <div className="container-px flex flex-col gap-3 py-4 lg:flex-row lg:items-center lg:gap-6">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            Quick Access
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {heroQuickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-1.5 text-sm font-medium text-white/70 transition-all hover:border-leaf-400/40 hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}
                <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-leaf-300 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
