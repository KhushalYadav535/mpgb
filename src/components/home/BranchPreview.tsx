import Link from "next/link";
import { MapPin, Search, Navigation, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const cities = ["Indore", "Bhopal", "Ujjain", "Dewas", "Sehore", "Gwalior"];

export function BranchPreview() {
  return (
    <section className="bg-ink-50/40 pb-24 lg:pb-32">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card lg:grid lg:grid-cols-2">
            {/* Left: search */}
            <div className="p-8 lg:p-12">
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold-400" /> 500+ Branches
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                Find a branch near you
              </h2>
              <p className="mt-3 text-ink-500">
                With over 500 branches and 700 ATMs across Madhya Pradesh, help is
                always close to home.
              </p>

              <div className="mt-7 flex items-center gap-2 rounded-full border border-ink-200 bg-white p-1.5 shadow-soft focus-within:border-gold-400">
                <Search className="ml-3 h-5 w-5 text-ink-400" />
                <input
                  type="text"
                  placeholder="Enter city or PIN code"
                  className="flex-1 bg-transparent px-2 py-2 text-sm text-ink-900 outline-none placeholder:text-ink-400"
                />
                <button className="rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink-800">
                  Search
                </button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-ink-400">Popular:</span>
                {cities.map((c) => (
                  <button
                    key={c}
                    className="rounded-full border border-ink-100 bg-ink-50 px-3 py-1 text-xs font-medium text-ink-600 transition-colors hover:border-gold-200 hover:bg-gold-50 hover:text-gold-700"
                  >
                    {c}
                  </button>
                ))}
              </div>

              <Link
                href="/customer-service/branch-locator"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition-colors hover:text-gold-600"
              >
                Open full branch locator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right: stylised map */}
            <div className="relative min-h-[20rem] overflow-hidden bg-ink-950">
              <div className="absolute inset-0 bg-ink-radial opacity-70" />
              {/* grid lines */}
              <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                }}
              />
              {/* pins */}
              {[
                { top: "28%", left: "32%", delay: "0s" },
                { top: "52%", left: "58%", delay: "0.4s" },
                { top: "40%", left: "72%", delay: "0.8s" },
                { top: "66%", left: "30%", delay: "1.2s" },
              ].map((pin, i) => (
                <span
                  key={i}
                  className="absolute"
                  style={{ top: pin.top, left: pin.left }}
                >
                  <span
                    className="absolute -inset-3 animate-ping rounded-full bg-gold-400/30"
                    style={{ animationDelay: pin.delay }}
                  />
                  <MapPin className="relative h-7 w-7 fill-gold-400/20 text-gold-400" />
                </span>
              ))}
              <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-white/10 bg-ink-900/80 px-4 py-2 text-xs text-white/80 backdrop-blur">
                <Navigation className="h-3.5 w-3.5 text-gold-400" /> Madhya Pradesh
                · 500+ locations
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
