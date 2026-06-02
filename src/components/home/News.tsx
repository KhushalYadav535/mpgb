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
    <section className="bg-ink-50/40 py-24 lg:py-32">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Newsroom"
            title="Latest updates & announcements"
          />
          <Link
            href="#"
            className="btn-outline-ink shrink-0"
          >
            View all news <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Featured */}
          <Reveal>
            <article className="group relative flex h-full flex-col justify-end overflow-hidden rounded-3xl bg-ink-950 p-8 text-white shadow-card lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-ink-radial opacity-80" />
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-gold-sheen bg-[length:200%_auto] px-3 py-1 text-xs font-semibold text-ink-900">
                  {feature.category}
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold leading-snug sm:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-lg text-white/60">{feature.excerpt}</p>
                <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
                  <Calendar className="h-4 w-4 text-gold-400" />
                  {formatDate(feature.date)}
                </div>
              </div>
            </article>
          </Reveal>

          {/* List */}
          <div className="flex flex-col gap-4">
            {rest.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <article className="group flex items-start gap-5 rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:border-gold-200 hover:shadow-soft">
                  <div className="flex w-14 shrink-0 flex-col items-center rounded-xl bg-ink-900 py-3 text-white">
                    <span className="font-display text-xl font-bold leading-none">
                      {new Date(item.date).getDate()}
                    </span>
                    <span className="mt-1 text-[10px] uppercase tracking-wider text-gold-300">
                      {new Date(item.date).toLocaleDateString("en-IN", {
                        month: "short",
                      })}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                      {item.category}
                    </span>
                    <h4 className="mt-1 font-display text-lg font-bold text-ink-900 transition-colors group-hover:text-gold-700">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-ink-500">{item.excerpt}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-300 transition-all group-hover:-translate-y-0.5 group-hover:text-gold-500" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
