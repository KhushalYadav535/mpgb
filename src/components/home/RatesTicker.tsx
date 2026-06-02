import { TrendingUp } from "lucide-react";
import { tickerRates } from "@/lib/content";

export function RatesTicker() {
  const items = [...tickerRates, ...tickerRates];
  return (
    <div className="relative border-y border-ink-100 bg-white">
      <div className="container-px flex items-center gap-6 py-4">
        <span className="hidden shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-600 sm:inline-flex">
          <TrendingUp className="h-4 w-4" /> Live Rates
        </span>
        <div className="group relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-10 group-hover:[animation-play-state:paused]">
            {items.map((rate, i) => (
              <span
                key={`${rate.label}-${i}`}
                className="inline-flex shrink-0 items-center gap-2 text-sm"
              >
                <span className="font-medium text-ink-500">{rate.label}</span>
                <span className="font-display text-base font-bold text-ink-900">
                  {rate.rate}
                </span>
                <span className="ml-2 h-1 w-1 rounded-full bg-gold-400" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
