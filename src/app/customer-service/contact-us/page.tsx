import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MPGB Bank. Reach our 24x7 customer care, email support or visit our head office.",
};

const channels = [
  {
    icon: Phone,
    title: "Call us",
    lines: ["Toll Free: 1800-200-1976", "Landline: 0731-420-1976"],
  },
  {
    icon: Mail,
    title: "Email us",
    lines: ["care@mpgb.bank.in", "grievance@mpgb.bank.in"],
  },
  {
    icon: MapPin,
    title: "Head office",
    lines: ["MPGB Bhavan, AB Road", "Indore, MP — 452001"],
  },
  {
    icon: Clock,
    title: "Working hours",
    lines: ["Mon–Sat: 10 AM – 4 PM", "Customer care: 24 × 7"],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer Service"
        title="We're here to help"
        subtitle="Reach out with questions, feedback or support requests. Our team responds within one business day."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Customer Service", href: "/customer-service" },
          { label: "Contact Us" },
        ]}
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container-px grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Channels */}
          <div>
            <span className="eyebrow">
              <span className="h-px w-6 bg-gold-400" /> Ways to reach us
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900">
              Talk to a real person
            </h2>
            <p className="mt-3 text-ink-500">
              Whether it&apos;s a quick question or detailed assistance, choose the
              channel that suits you best.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {channels.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-ink-100 bg-ink-50/40 p-6 transition-all duration-500 hover:bg-white hover:shadow-card">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink-900 text-gold-300">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                      {c.title}
                    </h3>
                    <div className="mt-2 space-y-1">
                      {c.lines.map((line) => (
                        <p key={line} className="text-sm text-ink-500">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-ink-100 bg-white p-8 shadow-card lg:p-10">
              <h2 className="font-display text-2xl font-bold text-ink-900">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-ink-500">
                Fill in the form and we&apos;ll get back to you shortly.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
