"use client";

import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote: "The Kisan Credit Card transformed how I fund each season. Repayment after harvest means I never feel the pressure during sowing.",
    name: "Ramesh Patel",
    role: "Farmer · Dewas",
    initials: "RP",
  },
  {
    quote: "I opened my shop with a MUDRA loan from MPGB. The process was quick and the staff treated me like family.",
    name: "Sunita Verma",
    role: "Shop Owner · Ujjain",
    initials: "SV",
  },
  {
    quote: "Mobile banking and UPI work flawlessly even in my village. I haven't visited a branch in months — everything is on my phone.",
    name: "Arjun Yadav",
    role: "Teacher · Sehore",
    initials: "AY",
  },
  {
    quote: "Securing a home loan was surprisingly simple. The interest rates were the best I could find, and the support was stellar.",
    name: "Priya Sharma",
    role: "Architect · Indore",
    initials: "PS",
  },
];

// Duplicate for infinite scroll
const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

export function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax scroll effect for the marquee
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const smoothX = useSpring(xTransform, { stiffness: 50, damping: 20 });

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-ink-950 py-28 lg:py-36">
      {/* Glows */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-brand-500/10 blur-[120px]" />
      
      <div className="container-px relative z-10 text-center">
        <SectionHeading
          eyebrow="Voices of MPGB"
          title={<span className="text-white">Trusted by communities across the heartland</span>}
        />
      </div>

      <div className="relative mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
        {/* Left & Right Fade Overlays */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-32 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-32 bg-gradient-to-l from-ink-950 to-transparent" />

        <motion.div
          style={{ x: smoothX }}
          className="flex gap-6 px-10"
        >
          {marqueeItems.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="group relative flex w-[22rem] shrink-0 flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] lg:w-[26rem]"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/20 blur-[50px] transition-opacity duration-500 group-hover:bg-brand-500/40" />
              
              <Quote className="h-10 w-10 text-brand-400" />
              
              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-ink-300 transition-colors group-hover:text-ink-200">
                “{t.quote}”
              </blockquote>
              
              <div className="mt-8 flex items-center gap-1 text-brand-400">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              
              <figcaption className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-ink-800 to-ink-900 font-display text-sm font-bold text-brand-300 shadow-inner ring-1 ring-white/10 transition-transform group-hover:scale-110">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-bold text-white">
                    {t.name}
                  </span>
                  <span className="block text-xs font-medium text-ink-500 uppercase tracking-wider mt-0.5">
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
