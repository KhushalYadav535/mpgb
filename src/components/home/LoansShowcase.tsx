import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { loanCategories } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function LoansShowcase() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-28 lg:py-36">
      {/* Dynamic Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(32,118,230,0.1),transparent_70%)]" />
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-brand-500/10 blur-[120px]" />
      
      <div className="container-px relative z-10">
        <SectionHeading
          eyebrow="Lending Solutions"
          title={<span className="text-white">Credit that grows with you</span>}
          subtitle={<span className="text-ink-300">Whether you're sowing a field, scaling a business or building a home, we have a loan shaped to your journey.</span>}
        />

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {loanCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-brand-500/40 hover:bg-white/10 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                
                {/* Glow behind icon */}
                <div className="absolute left-8 top-8 h-16 w-16 rounded-full bg-brand-500/20 blur-xl transition-all duration-500 group-hover:bg-brand-400/40" />

                <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-ink-800 to-ink-900 text-brand-300 shadow-inner ring-1 ring-white/10 transition-all duration-500 group-hover:scale-110 group-hover:from-brand-500 group-hover:to-brand-700 group-hover:text-white group-hover:ring-0">
                  <cat.icon className="h-8 w-8" strokeWidth={1.5} />
                </span>

                <h3 className="relative mt-8 font-display text-2xl font-bold text-white transition-colors duration-300 group-hover:text-brand-300">
                  {cat.title}
                </h3>
                
                <ul className="relative mt-6 flex-1 space-y-3.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-ink-300 transition-colors group-hover:text-ink-200"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-leaf-400 opacity-80" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={cat.href}
                  className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white transition-all group-hover:text-brand-300"
                >
                  View options 
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
