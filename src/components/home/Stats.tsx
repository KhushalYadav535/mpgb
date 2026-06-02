"use client";

import { motion } from "framer-motion";
import { inclusionStats } from "@/lib/content";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-ink-radial opacity-70" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

      <div className="container-px relative">
        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {inclusionStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-center lg:border-r lg:border-white/10 lg:last:border-0"
            >
              <p className="font-display text-4xl font-bold text-gold-gradient sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-wider text-white/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
