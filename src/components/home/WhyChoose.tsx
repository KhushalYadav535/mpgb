import { whyChooseUs } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(32,118,230,0.1),transparent_50%)]" />

      <div className="container-px relative z-10">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Why MPGB"
            title={<span className="text-white">The trusted name in rural & retail banking</span>}
            subtitle={<span className="text-ink-300">We pair the personal touch of a community bank with the technology, security and rates of a modern financial institution.</span>}
            className="lg:sticky lg:top-32"
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {whyChooseUs.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.1}>
                <div
                  className={cn(
                    "group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]",
                    i === 0 ? "sm:col-span-2 sm:p-10" : "" // Bento stretch for first item
                  )}
                >
                  {/* Spotlight Hover */}
                  <div className="pointer-events-none absolute -inset-full opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                       style={{ background: "radial-gradient(circle at 50% 50%, rgba(32,118,230,0.1) 0%, transparent 60%)" }} />

                  <span className={cn(
                    "relative grid place-items-center rounded-2xl bg-gradient-to-br from-ink-800 to-ink-900 text-brand-300 shadow-inner ring-1 ring-white/10 transition-all duration-500 group-hover:scale-110 group-hover:from-brand-500 group-hover:to-brand-700 group-hover:text-white group-hover:ring-0",
                    i === 0 ? "h-16 w-16" : "h-14 w-14"
                  )}>
                    <feature.icon className={cn(i === 0 ? "h-8 w-8" : "h-6 w-6")} strokeWidth={1.5} />
                  </span>
                  <h3 className={cn("relative mt-6 font-display font-bold text-white transition-colors group-hover:text-brand-300",
                    i === 0 ? "text-2xl" : "text-xl"
                  )}>
                    {feature.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-ink-300 group-hover:text-ink-200">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
