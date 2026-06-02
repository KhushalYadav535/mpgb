import { whyChooseUs } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhyChoose() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-px">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Why MPGB"
            title="The trusted name in rural & retail banking"
            subtitle="We pair the personal touch of a community bank with the technology, security and rates of a modern financial institution."
            className="lg:sticky lg:top-32"
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {whyChooseUs.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-500 hover:border-gold-200 hover:shadow-card">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink-900 text-gold-300 transition-all duration-500 group-hover:bg-gold-sheen group-hover:text-white">
                    <feature.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
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
