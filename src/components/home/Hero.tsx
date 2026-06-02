"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Check,
} from "lucide-react";
import { heroSlides, heroQuickLinks, type HeroSlide } from "@/lib/content";
import { heroVisualMap } from "./HeroVisuals";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
const DURATION = 6500;

const themes: Record<HeroSlide["theme"], { base: string; glow: string }> = {
  burgundy: {
    base: "bg-[radial-gradient(130%_130%_at_20%_0%,#5f0e33_0%,#2a0517_55%,#1a0410_100%)]",
    glow: "bg-burgundy-500/20",
  },
  ink: {
    base: "bg-[radial-gradient(130%_130%_at_20%_0%,#1a2647_0%,#0b1226_55%,#060a18_100%)]",
    glow: "bg-ink-500/25",
  },
  emerald: {
    base: "bg-[radial-gradient(130%_130%_at_20%_0%,#0d5440_0%,#06281f_55%,#041a14_100%)]",
    glow: "bg-emerald/20",
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
      {/* Calm background that crossfades per slide */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease }}
          className={cn("absolute inset-0", theme.base)}
        />
      </AnimatePresence>

      {/* A single soft glow + gentle top fade — minimal, no grid/noise clutter */}
      <div className="pointer-events-none absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={`${slide.id}-glow`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease }}
            className={cn(
              "absolute right-[6%] top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full blur-3xl",
              theme.glow
            )}
          />
        </AnimatePresence>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink-950/70 to-transparent" />
      </div>

      <div className="container-px relative grid items-center gap-12 pb-16 pt-32 lg:grid-cols-2 lg:gap-10 lg:pb-24 lg:pt-40">
        {/* Copy column */}
        <div className="relative">
          <div className="relative min-h-[23rem] sm:min-h-[21rem]">
            <AnimatePresence initial={false}>
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.7, ease }}
                className="absolute inset-x-0 top-0"
              >
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
                  <span className="h-px w-7 bg-gold-400/70" />
                  {slide.badge}
                </span>

                <h1 className="mt-5 font-display text-[2.65rem] font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.6rem]">
                  {slide.title}{" "}
                  <span className="text-gold-gradient">{slide.highlight}</span>
                </h1>

                <p className="mt-5 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
                  {slide.subtitle}
                </p>

                <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
                  {slide.features.map((f) => (
                    <li
                      key={f}
                      className="inline-flex items-center gap-2 text-sm text-white/70"
                    >
                      <Check className="h-4 w-4 text-gold-400" /> {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-wrap items-center gap-4">
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
        </div>

        {/* Visual column — single calm centerpiece, crossfades per slide */}
        <div className="relative hidden min-h-[24rem] items-center justify-center lg:flex">
          <AnimatePresence initial={false}>
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.8, ease }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Visual />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Quick product links */}
      <div className="relative border-t border-white/10">
        <div className="container-px flex flex-col gap-3 py-4 lg:flex-row lg:items-center lg:gap-6">
          <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            Quick Access
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {heroQuickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-1.5 text-sm font-medium text-white/70 transition-all hover:border-gold-400/40 hover:text-white"
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
