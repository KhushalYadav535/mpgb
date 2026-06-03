"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function BankProfileCinematicPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress for the entire page to drive cinematic effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hero Parallax & Zoom (Ken Burns effect driven by scroll)
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "20%"]);

  // History Section Reveal
  const historyOpacity = useTransform(scrollYProgress, [0.1, 0.25, 0.4], [0, 1, 0]);
  const historyY = useTransform(scrollYProgress, [0.1, 0.25, 0.4], [100, 0, -100]);
  const historyScale = useTransform(scrollYProgress, [0.1, 0.25, 0.4], [0.9, 1, 1.1]);

  // Mission Reveal
  const missionOpacity = useTransform(scrollYProgress, [0.35, 0.5, 0.7], [0, 1, 0]);
  const missionY = useTransform(scrollYProgress, [0.35, 0.5, 0.7], [100, 0, -100]);

  // Vision Reveal
  const visionOpacity = useTransform(scrollYProgress, [0.65, 0.8, 1], [0, 1, 1]);
  const visionY = useTransform(scrollYProgress, [0.65, 0.8, 1], [100, 0, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-black text-white selection:bg-blue-500/30">

      {/* 
        FIXED BACKGROUND VIDEO/IMAGE LAYER 
        This stays pinned to the back and transforms based on scroll.
      */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ scale: heroScale }}
          className="absolute inset-0 w-full h-full"
        >
          {/* We use a stunning high-res cinematic image with a slow CSS animation to simulate video */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-c5a4d40716d2?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />

          {/* Heavy gradient overlays to make text readable and feel dramatic */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </motion.div>
      </div>

      {/* 
        SCROLLING CONTENT 
      */}
      <div className="relative z-10 w-full h-full">

        {/* SCENE 1: HERO */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="h-screen sticky top-0 flex flex-col items-center justify-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0, 1] }}
            className="text-center space-y-6 max-w-5xl"
          >
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
              The Heartbeat <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                Of Rural India
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 font-light tracking-wide max-w-2xl mx-auto">
              Scroll down to discover our legacy.
            </p>
          </motion.div>

          {/* Cinematic scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full h-1/2 bg-white"
                animate={{ top: ["-50%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* SCENE 2: HISTORY */}
        <div className="h-screen pointer-events-none flex items-center justify-center px-4 md:px-20">
          <motion.div
            style={{ opacity: historyOpacity, y: historyY, scale: historyScale }}
            className="max-w-4xl text-center md:text-left space-y-8"
          >
            <h2 className="text-2xl md:text-4xl text-blue-400 font-semibold tracking-widest uppercase mb-4">Our History</h2>
            <p className="text-3xl md:text-6xl font-light leading-tight">
              Forged by the amalgamation of rural banks, <strong className="font-bold text-white">Madhya Pradesh Gramin Bank</strong> was born from a singular vision:
            </p>
            <p className="text-2xl md:text-5xl font-medium text-slate-400 leading-tight">
              To bring world-class banking to the most unreached corners of our state.
            </p>
          </motion.div>
        </div>

        {/* SCENE 3: MISSION */}
        <div className="h-screen pointer-events-none flex items-center justify-center px-4 md:px-20">
          <motion.div
            style={{ opacity: missionOpacity, y: missionY }}
            className="max-w-5xl relative"
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-blue-600/10 blur-[100px] rounded-full" />
            <div className="relative z-10 text-center space-y-8">
              <h2 className="text-2xl md:text-4xl text-green-400 font-semibold tracking-widest uppercase">The Mission</h2>
              <h3 className="text-4xl md:text-7xl font-bold leading-tight tracking-tight">
                Empowering the rural populace through <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400">technology-driven</span> financial solutions.
              </h3>
            </div>
          </motion.div>
        </div>

        {/* SCENE 4: VISION */}
        <div className="h-screen pointer-events-none flex items-center justify-center px-4 md:px-20">
          <motion.div
            style={{ opacity: visionOpacity, y: visionY }}
            className="max-w-5xl relative"
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-indigo-600/10 blur-[100px] rounded-full" />
            <div className="relative z-10 text-center space-y-12">
              <h2 className="text-2xl md:text-4xl text-indigo-400 font-semibold tracking-widest uppercase">The Vision</h2>
              <h3 className="text-3xl md:text-6xl font-light leading-tight">
                To be the most trusted banking partner in rural Madhya Pradesh, leading the way in <strong className="font-bold">inclusive growth</strong> through innovation, integrity, and unparalleled service.
              </h3>

              <div className="pt-12 pointer-events-auto">
                <button className="px-8 py-4 bg-white text-black font-bold tracking-widest uppercase rounded-full hover:scale-105 transition-transform duration-300">
                  Join Our Journey
                </button>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
