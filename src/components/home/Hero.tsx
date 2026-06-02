"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Pause,
  Play,
  Check,
} from "lucide-react";
import { heroSlides, heroQuickLinks, type HeroSlide } from "@/lib/content";
import { heroVisualMap } from "./HeroVisuals";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const DURATION = 6500;

const themes: Record<
  HeroSlide["theme"],
  { base: string; glowA: string; glowB: string; chip: string }
> = {
  burgundy: {
    base: "bg-[radial-gradient(125%_125%_at_15%_0%,#7d1142_0%,#420a24_45%,#2a0517_100%)]",
    glowA: "bg-gold-500/20",
    glowB: "bg-burgundy-400/30",
    chip: "from-gold-300 to-gold-500",
  },
  ink: {
    base: "bg-[radial-gradient(125%_125%_at_15%_0%,#1e2c57_0%,#0b1226_45%,#060a18_100%)]",
    glowA: "bg-gold-500/20",
    glowB: "bg-ink-500/40",
    chip: "from-gold-300 to-gold-500",
  },
  emerald: {
    base: "bg-[radial-gradient(125%_125%_at_15%_0%,#0f5a44_0%,#08372a_45%,#04211a_100%)]",
    glowA: "bg-gold-400/20",
    glowB: "bg-emerald/30",
    chip: "from-gold-300 to-gold-500",
  },
};

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const slide = heroSlides[index];
  const theme = themes[slide.theme];
  const Visual = heroVisualMap[slide.visual];

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
    <section className="relative overflow-hidden text-white">
      {/* Animated background that swaps per slide */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease }}
          className={cn("absolute inset-0", theme.base)}
        />
      </AnimatePresence>

      {/* Decorative layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className={cn("absolute -right-[10%] top-[-10%] h-[42rem] w-[42rem] rounded-full blur-3xl animate-aurora", theme.glowA)} />
        <div className={cn("absolute -left-[14%] top-[20%] h-[36rem] w-[36rem] rounded-full blur-3xl animate-aurora-slow", theme.glowB)} />
        <div
          className="absolute inset-0 opacity-[0.15] [mask-image:radial-gradient(120%_80%_at_50%_0%,#000_30%,transparent_75%)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute inset-0 bg-noise opacity-[0.035] mix-blend-overlay" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-950/80 to-transparent" />
      </div>

      <div className="container-px relative grid items-center gap-12 pb-16 pt-28 lg:grid-cols-[1.06fr_0.94fr] lg:gap-8 lg:pb-24 lg:pt-36">
        {/* Copy column with animated slide content */}
        <div className="relative">
          {/* Crossfading slide content (stacked absolutely) */}
          <div className="relative min-h-[24rem] sm:min-h-[22rem]">
            <AnimatePresence initial={false}>
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.7, ease }}
                className="absolute inset-x-0 top-0"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-200 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                  {slide.badge}
                </span>

                <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tightest sm:text-5xl lg:text-[3.9rem]">
                  {slide.title}
                  <span className="mt-1 block text-gold-gradient animate-shimmer">
                    {slide.highlight}
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                  {slide.subtitle}
                </p>

                {/* Feature ticks */}
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  {slide.features.map((f) => (
                    <li key={f} className="inline-flex items-center gap-2 text-sm text-white/75">
                      <Check className="h-4 w-4 text-gold-400" /> {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link href={slide.cta.href} className="btn-gold group text-base">
                    {slide.cta.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  {slide.secondary && (
                    <Link href={slide.secondary.href} className="btn-ghost text-base">
                      {slide.secondary.label}
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls: progress dots + arrows */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center gap-2">
              {heroSlides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => go(i)}
                  aria-label={`Go to ${s.badge}`}
                  className="group relative h-1.5 overflow-hidden rounded-full bg-white/15 transition-all"
                  style={{ width: i === index ? 44 : 18 }}
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

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => go(index - 1)}
                aria-label="Previous slide"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Play" : "Pause"}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
              </button>
              <button
                onClick={() => go(index + 1)}
                aria-label="Next slide"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Visual column: crossfades with each slide */}
        <div className="relative min-h-[24rem]">
          <AnimatePresence initial={false}>
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.7, ease }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Visual />
            </motion.div>
          </AnimatePresence>

          {/* Rate spotlight tied to the active slide */}
          <AnimatePresence initial={false}>
            {slide.rate && (
              <motion.div
                key={`${slide.id}-rate`}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.6, ease }}
                className="absolute -right-1 -top-2 z-20 hidden rounded-2xl border border-white/15 bg-ink-950/85 px-5 py-4 text-center shadow-lift backdrop-blur-xl lg:block"
              >
                <p className="font-display text-3xl font-bold text-gold-gradient">
                  {slide.rate}
                </p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wider text-white/55">
                  {slide.rateLabel}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Quick product links — Axis-style "guiding you" row */}
      <div className="relative border-t border-white/10 bg-ink-950/40 backdrop-blur-xl">
        <div className="container-px flex flex-col gap-3 py-4 lg:flex-row lg:items-center lg:gap-6">
          <span className="flex shrink-0 items-center gap-2 text-sm font-semibold text-white/80">
            <ShieldCheck className="h-4 w-4 text-gold-400" />
            Guiding your financial journey
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {heroQuickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition-all hover:border-gold-400/40 hover:bg-gold-500/10 hover:text-white"
              >
                {link.label}
                <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-gold-300 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
