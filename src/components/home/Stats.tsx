"use client";

import { motion } from "framer-motion";
import { inclusionStats } from "@/lib/content";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-ink-radial opacity-90" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[100px]" />

      <div className="container-px relative z-10">
        <div className="grid grid-cols-2 gap-y-16 lg:grid-cols-4">
          {inclusionStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative text-center lg:border-r lg:border-white/10 lg:last:border-0"
            >
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-[50px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <p className="relative font-display text-4xl font-bold sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-200 to-white animate-shimmer bg-[length:200%_auto]">
                {stat.value}
              </p>
              <p className="relative mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/50 transition-colors duration-500 group-hover:text-brand-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
