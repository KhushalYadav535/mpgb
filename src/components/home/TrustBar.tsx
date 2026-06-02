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
    <section className="border-b border-ink-100 bg-white">
      <div className="container-px">
        <div className="grid grid-cols-2 divide-x divide-ink-100 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center justify-center gap-3 px-4 py-7 ${
                i === items.length - 1 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink-50 text-gold-600">
                <item.icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-display text-lg font-bold leading-none text-ink-900">
                  {item.value}
                </span>
                <span className="mt-1 block text-xs font-medium uppercase tracking-wide text-ink-400">
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
