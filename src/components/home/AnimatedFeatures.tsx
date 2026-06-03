"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe2, Sparkles, MessageCircle } from "lucide-react";

export function AnimatedFeatures() {
  return (
    <section className="relative py-24 bg-[#050B14] overflow-hidden border-y border-white/5">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Banking, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Reimagined</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Experience the future of rural banking with our cutting-edge digital services, designed to bring the world to your fingertips.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Digital Assistant (Chat) */}
          <div className="relative h-[450px] rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden group p-6 flex flex-col">
            <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity">
              <MessageCircle className="w-8 h-8 text-blue-400" />
            </div>
            <div className="mb-auto z-10 relative">
              <h3 className="text-xl font-bold text-white mb-2">24/7 Digital Assistant</h3>
              <p className="text-slate-400 text-sm">Instant answers, quick transfers, and seamless support whenever you need it.</p>
            </div>
            
            {/* Animated Chat UI */}
            <div className="relative mt-8 flex-1 w-full flex flex-col justify-end gap-3 pb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, repeat: Infinity, repeatDelay: 5 }}
                className="self-end bg-blue-500/20 border border-blue-500/30 text-blue-100 p-3 rounded-2xl rounded-tr-sm text-sm max-w-[80%]"
              >
                Check my account balance
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatDelay: 5 }}
                className="self-start bg-white/5 border border-white/10 text-slate-200 p-3 rounded-2xl rounded-tl-sm text-sm max-w-[80%]"
              >
                Your current balance is <strong className="text-white">₹45,250.00</strong>. Need anything else?
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 3, repeat: Infinity, repeatDelay: 5 }}
                className="self-end bg-blue-500/20 border border-blue-500/30 text-blue-100 p-3 rounded-2xl rounded-tr-sm text-sm max-w-[80%]"
              >
                Transfer ₹5000 to Rahul
              </motion.div>
            </div>
          </div>

          {/* Card 2: Premium Debit Card */}
          <div className="relative h-[450px] rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden group p-6 flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="z-10 relative w-full mb-8">
              <h3 className="text-xl font-bold text-white mb-2">Premium Cards</h3>
              <p className="text-slate-400 text-sm">Tap, pay, and go with our globally accepted secure RuPay and Visa cards.</p>
            </div>

            {/* Floating Card Animation */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotateY: [0, 5, -5, 0],
                rotateX: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-64 h-96 rounded-2xl p-6 flex flex-col justify-between shadow-2xl backdrop-blur-md border border-white/20 overflow-hidden mt-auto"
              style={{
                background: "linear-gradient(135deg, rgba(32,118,230,0.8) 0%, rgba(52,168,42,0.6) 100%)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
              
              <div className="flex justify-between items-start relative z-10">
                <div className="w-12 h-10 rounded bg-white/20 border border-white/30" />
                <Sparkles className="w-6 h-6 text-white/80" />
              </div>
              
              <div className="relative z-10 space-y-4">
                <div className="flex gap-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-1.5 w-8 rounded-full bg-white/50" />
                  ))}
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-white/80 text-sm font-medium tracking-widest uppercase">
                    MPGB Client
                  </div>
                  <div className="text-white font-bold text-xl italic tracking-tighter">
                    RuPay
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 3: Digital Network */}
          <div className="relative h-[450px] rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden group p-6 flex flex-col">
            <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity">
              <Globe2 className="w-8 h-8 text-green-400" />
            </div>
            <div className="z-10 relative">
              <h3 className="text-xl font-bold text-white mb-2">Widespread Reach</h3>
              <p className="text-slate-400 text-sm">Connecting every corner of Madhya Pradesh to the global financial network.</p>
            </div>

            {/* Network Animation */}
            <div className="relative flex-1 w-full mt-8 flex items-center justify-center">
              {/* Central Hub */}
              <motion.div 
                className="absolute w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center z-20"
                animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 0 0 rgba(32,118,230,0.4)", "0 0 0 20px rgba(32,118,230,0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-500" />
              </motion.div>

              {/* Connecting Nodes */}
              {[
                { top: "10%", left: "15%", delay: 0 },
                { top: "20%", left: "80%", delay: 0.5 },
                { top: "80%", left: "20%", delay: 1 },
                { top: "70%", left: "75%", delay: 1.5 },
                { top: "45%", left: "10%", delay: 2 },
              ].map((pos, i) => (
                <React.Fragment key={i}>
                  <motion.div
                    className="absolute w-4 h-4 rounded-full bg-green-400/80 z-10"
                    style={{ top: pos.top, left: pos.left }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1, 0.5, 1], opacity: [0, 1, 0.8, 1] }}
                    transition={{ duration: 3, delay: pos.delay, repeat: Infinity, repeatType: "reverse" }}
                  />
                  {/* SVG Line */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ zIndex: 0 }}>
                    <motion.line
                      x1="50%" y1="50%"
                      x2={pos.left} y2={pos.top}
                      stroke="#34a82a"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: [0, 1, 1, 0] }}
                      transition={{ duration: 4, delay: pos.delay, repeat: Infinity }}
                    />
                  </svg>
                </React.Fragment>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
