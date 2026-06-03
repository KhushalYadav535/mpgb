"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/content";

export function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };
  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };
  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <Link href={product.href} className="group relative block w-full h-full">
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 p-8 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/30 hover:bg-ink-800/80 hover:shadow-[0_20px_40px_-15px_rgba(32,118,230,0.3)]"
      >
        {/* Spotlight Effect */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.08), transparent 40%)`,
          }}
        />

        <div className="relative z-10 flex items-center justify-between">
          <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(32,118,230,0.6)]">
            <Icon className="h-6 w-6" strokeWidth={2} />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute inset-0 rounded-2xl bg-brand-400 mix-blend-screen"
            />
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-brand-300 transition-all duration-500 group-hover:bg-brand-500 group-hover:text-white">
            <ArrowUpRight className="h-5 w-5 -translate-x-1 translate-y-1 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
          </div>
        </div>

        <h3 className="relative z-10 mt-8 font-display text-2xl font-bold text-white transition-colors duration-300 group-hover:text-brand-300">
          {product.title}
        </h3>
        <p className="relative z-10 mt-3 text-sm leading-relaxed text-ink-300 group-hover:text-ink-200">
          {product.description}
        </p>

        <div className="relative z-10 mt-auto pt-8">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white transition-colors group-hover:text-brand-300">
            Explore Details
            <span className="h-px w-6 bg-brand-500 transition-all duration-500 group-hover:w-12 group-hover:bg-brand-300" />
          </span>
        </div>
      </div>
    </Link>
  );
}
