import { ShieldCheck, Award, Users, Building2, Clock } from "lucide-react";

const items = [
  { icon: Users, value: "50 Lakh+", label: "Customers" },
  { icon: Building2, value: "500+", label: "Branches" },
  { icon: ShieldCheck, value: "₹5 Lakh", label: "DICGC Insured" },
  { icon: Award, value: "48 Years", label: "Of Trust" },
  { icon: Clock, value: "24 × 7", label: "Support" },
];

export function TrustBar() {
  return (
    <section className="border-b border-white/5 bg-ink-950">
      <div className="container-px">
        <div className="grid grid-cols-2 divide-x divide-white/5 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`group flex items-center justify-center gap-4 px-4 py-8 transition-colors hover:bg-white/[0.02] ${
                i === items.length - 1 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink-900 text-brand-400 ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-500/10 group-hover:text-brand-300 group-hover:ring-brand-500/30">
                <div className="absolute inset-0 rounded-xl bg-brand-500/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <item.icon className="relative z-10 h-5 w-5" />
              </span>
              <span>
                <span className="block font-display text-lg font-bold leading-none text-white transition-colors group-hover:text-brand-300">
                  {item.value}
                </span>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-widest text-ink-400">
                  {item.label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
