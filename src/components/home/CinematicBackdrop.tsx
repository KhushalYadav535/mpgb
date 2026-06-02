"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * CinematicBackdrop — layered, film-like atmosphere for the hero.
 * Sits behind the content (pointer-events: none). Includes volumetric
 * god-rays, drifting light beams, a slow spotlight sweep, floating
 * particles, a fine grid, grain and an edge vignette for depth.
 */
export function CinematicBackdrop() {
  const particles = useMemo(
    () =>
      Array.from({ length: 26 }).map((_, i) => {
        const seed = (i * 137.5) % 100;
        return {
          left: `${(seed * 1.7) % 100}%`,
          size: 1.5 + ((i * 7) % 5),
          delay: (i % 11) * 0.9,
          duration: 9 + ((i * 3) % 9),
          green: i % 3 === 0,
        };
      }),
    []
  );

  const rays = useMemo(
    () => [
      { left: "8%", w: "8rem", rot: "-12deg", delay: "0s", c: "rgba(255,255,255,0.10)" },
      { left: "24%", w: "12rem", rot: "-8deg", delay: "2s", c: "rgba(132,193,255,0.12)" },
      { left: "44%", w: "7rem", rot: "-4deg", delay: "4s", c: "rgba(121,220,110,0.10)" },
      { left: "62%", w: "14rem", rot: "0deg", delay: "1s", c: "rgba(255,255,255,0.08)" },
      { left: "82%", w: "9rem", rot: "4deg", delay: "3s", c: "rgba(132,193,255,0.10)" },
    ],
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Volumetric god-rays falling from above */}
      <div className="absolute inset-x-0 -top-1/3 h-[150%]">
        {rays.map((r, i) => (
          <div
            key={i}
            className="absolute top-0 h-full origin-top animate-god-ray blur-2xl"
            style={
              {
                left: r.left,
                width: r.w,
                ["--ray-rot" as string]: r.rot,
                transform: `rotate(${r.rot})`,
                background: `linear-gradient(to bottom, ${r.c} 0%, transparent 72%)`,
                animationDelay: r.delay,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Slow cinematic spotlight sweep */}
      <div className="absolute inset-y-0 left-0 w-1/2">
        <div className="absolute inset-y-[-20%] left-0 w-40 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl animate-spotlight-sweep" />
      </div>

      {/* Fine moving grid, masked toward the top */}
      <div
        className="absolute inset-0 opacity-[0.12] [mask-image:radial-gradient(120%_90%_at_50%_0%,#000_25%,transparent_72%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
        }}
      />

      {/* Floating particles (dust / bokeh) */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className={`absolute bottom-0 rounded-full ${
            p.green ? "bg-leaf-300/50" : "bg-brand-200/50"
          }`}
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            filter: "blur(0.5px)",
          }}
          animate={{ y: [-10, -170], opacity: [0, 0.75, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Soft floor reflection glow */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-brand-500/12 to-transparent" />

      {/* Top + bottom cinematic fades */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink-950/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-950/60 to-transparent" />

      {/* Edge vignette for that film-frame depth */}
      <div className="absolute inset-0 shadow-[inset_0_0_240px_70px_rgba(3,7,18,0.8)]" />

      {/* Subtle film grain */}
      <div className="absolute inset-0 bg-noise opacity-[0.045] mix-blend-overlay" />
    </div>
  );
}
