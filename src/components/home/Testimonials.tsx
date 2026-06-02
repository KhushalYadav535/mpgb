import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const testimonials = [
  {
    quote:
      "The Kisan Credit Card transformed how I fund each season. Repayment after harvest means I never feel the pressure during sowing.",
    name: "Ramesh Patel",
    role: "Farmer · Dewas",
    initials: "RP",
  },
  {
    quote:
      "I opened my shop with a MUDRA loan from MPGB. The process was quick and the staff treated me like family.",
    name: "Sunita Verma",
    role: "Shop Owner · Ujjain",
    initials: "SV",
  },
  {
    quote:
      "Mobile banking and UPI work flawlessly even in my village. I haven't visited a branch in months — everything is on my phone.",
    name: "Arjun Yadav",
    role: "Teacher · Sehore",
    initials: "AY",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Voices of MPGB"
          title="Trusted by communities across the heartland"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-ink-100 bg-ink-50/40 p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-card">
                <Quote className="h-9 w-9 text-gold-300" />
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-ink-700">
                  “{t.quote}”
                </blockquote>
                <div className="mt-6 flex items-center gap-1 text-gold-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink-900 font-display text-sm font-bold text-gold-300">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-ink-900">
                      {t.name}
                    </span>
                    <span className="block text-xs text-ink-500">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
