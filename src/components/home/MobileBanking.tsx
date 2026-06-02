import {
  Send,
  Receipt,
  CreditCard,
  PiggyBank,
  Smartphone,
  QrCode,
  Apple,
  Play,
} from "lucide-react";
import { PhoneShowcase } from "./PhoneShowcase";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const leftFeatures = [
  { icon: Send, title: "Instant money transfer", desc: "UPI, IMPS & NEFT in seconds" },
  { icon: Receipt, title: "One-stop bill pay", desc: "Electricity, mobile, DTH & more" },
  { icon: PiggyBank, title: "Deposits & investments", desc: "Open FD/RD right from the app" },
];

const rightFeatures = [
  { icon: CreditCard, title: "Manage your cards", desc: "Block, set limits & track spends" },
  { icon: QrCode, title: "Scan & pay anywhere", desc: "Any UPI QR, merchant or person" },
  { icon: Smartphone, title: "Missed-call banking", desc: "Check balance on 8010968293" },
];

export function MobileBanking() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* soft brand wash */}
      <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-50" />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="MPGB Mobile Banking"
          title="The best of digital banking, now open"
          subtitle="Get the MPGB app for a superior banking experience — built for every Indian, from the city to the village."
        />

        <div className="mt-16 grid items-center gap-8 lg:grid-cols-[1fr_1.15fr_1fr]">
          {/* Left features */}
          <div className="order-2 flex flex-col gap-8 lg:order-1">
            {leftFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <FeatureRow {...f} align="left" />
              </Reveal>
            ))}
          </div>

          {/* Phone showcase */}
          <div className="order-1 lg:order-2">
            <PhoneShowcase />
          </div>

          {/* Right features */}
          <div className="order-3 flex flex-col gap-8">
            {rightFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <FeatureRow {...f} align="right" />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Store buttons */}
        <Reveal>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <StoreButton
              icon={<Apple className="h-6 w-6" />}
              top="Download on the"
              bottom="App Store"
            />
            <StoreButton
              icon={<Play className="h-5 w-5 fill-white" />}
              top="Get it on"
              bottom="Google Play"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FeatureRow({
  icon: Icon,
  title,
  desc,
  align,
}: {
  icon: typeof Send;
  title: string;
  desc: string;
  align: "left" | "right";
}) {
  return (
    <div
      className={`group flex items-start gap-4 ${
        align === "right" ? "lg:flex-row-reverse lg:text-right" : ""
      }`}
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-all duration-500 group-hover:bg-brand-sheen group-hover:text-white group-hover:ring-0">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h3 className="font-display text-base font-bold text-ink-900">{title}</h3>
        <p className="mt-1 text-sm text-ink-500">{desc}</p>
      </div>
    </div>
  );
}

function StoreButton({
  icon,
  top,
  bottom,
}: {
  icon: React.ReactNode;
  top: string;
  bottom: string;
}) {
  return (
    <button className="inline-flex items-center gap-3 rounded-2xl bg-ink-900 px-5 py-3 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-800 hover:shadow-lift">
      {icon}
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wider text-white/60">
          {top}
        </span>
        <span className="block font-display text-base font-semibold">{bottom}</span>
      </span>
    </button>
  );
}
