export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base deep gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,#16224a_0%,#0b1226_45%,#060a18_100%)]" />

      {/* Aurora blobs */}
      <div className="absolute -right-[12%] top-[-8%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(217,152,33,0.22),transparent_62%)] blur-3xl animate-aurora" />
      <div className="absolute -left-[15%] top-[18%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(58,82,144,0.45),transparent_60%)] blur-3xl animate-aurora-slow" />
      <div className="absolute bottom-[-20%] left-[35%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(26,163,122,0.18),transparent_60%)] blur-3xl animate-aurora" />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(120%_80%_at_50%_0%,#000_30%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* Noise grain */}
      <div className="absolute inset-0 bg-noise opacity-[0.035] mix-blend-overlay" />

      {/* Top vignette so the header reads cleanly */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-950 to-transparent" />
      {/* Bottom fade into ticker */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-950" />
    </div>
  );
}
