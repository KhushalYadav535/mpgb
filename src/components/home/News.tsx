import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { newsItems } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function News() {
  const [feature, ...rest] = newsItems;
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="pointer-events-none absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[100px]" />
      
      <div className="container-px relative z-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Newsroom"
            title={<span className="text-white">Latest updates & announcements</span>}
          />
          <Link
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-brand-400 shrink-0"
          >
            View all news <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-400" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Featured */}
          <Reveal>
            <article className="group relative flex h-full flex-col justify-end overflow-hidden rounded-[2.5rem] bg-ink-900 p-8 shadow-2xl lg:p-12 border border-white/10 transition-all duration-500 hover:border-brand-500/40 hover:shadow-[0_20px_40px_-15px_rgba(32,118,230,0.3)]">
              <div className="pointer-events-none absolute inset-0 bg-ink-radial opacity-80" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl transition-transform duration-700 group-hover:scale-125 group-hover:bg-brand-400/30" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-300">
                  {feature.category}
                </span>
                <h3 className="mt-6 font-display text-3xl font-bold leading-snug text-white sm:text-4xl transition-colors group-hover:text-brand-300">
                  {feature.title}
                </h3>
                <p className="mt-4 max-w-lg text-lg text-ink-300">{feature.excerpt}</p>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/50">
                  <Calendar className="h-4 w-4 text-brand-400" />
                  {formatDate(feature.date)}
                </div>
              </div>
            </article>
          </Reveal>

          {/* List */}
          <div className="flex flex-col gap-5">
            {rest.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <article className="group flex items-start gap-6 rounded-3xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] hover:border-white/10 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
                  <div className="flex w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-ink-800 to-ink-900 py-3 text-white shadow-inner ring-1 ring-white/10 transition-all duration-300 group-hover:from-brand-600 group-hover:to-brand-800 group-hover:ring-brand-400/50">
                    <span className="font-display text-2xl font-bold leading-none">
                      {new Date(item.date).getDate()}
                    </span>
                    <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-brand-300 group-hover:text-white">
                      {new Date(item.date).toLocaleDateString("en-IN", {
                        month: "short",
                      })}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-400">
                      {item.category}
                    </span>
                    <h4 className="mt-2 font-display text-xl font-bold text-white transition-colors group-hover:text-brand-300">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-300">{item.excerpt}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-white/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-400" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
