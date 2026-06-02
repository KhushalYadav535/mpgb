import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { loanCategories } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function LoansShowcase() {
  return (
    <section className="bg-ink-50/40 py-24 lg:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Lending Solutions"
          title="Credit that grows with you"
          subtitle="Whether you're sowing a field, scaling a business or building a home, we have a loan shaped to your journey."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {loanCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.07}>
              <div className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-50 text-gold-600 ring-1 ring-gold-100 transition-all duration-500 group-hover:bg-gold-sheen group-hover:text-ink-900 group-hover:ring-0">
                  <cat.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-ink-900">
                  {cat.title}
                </h3>
                <ul className="mt-4 flex-1 space-y-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-ink-500"
                    >
                      <Check className="h-4 w-4 shrink-0 text-emerald" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={cat.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition-colors group-hover:text-gold-600"
                >
                  View options <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
