import Link from "next/link";
import { MapPin, Search, Navigation, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const cities = ["Indore", "Bhopal", "Ujjain", "Dewas", "Sehore", "Gwalior"];

export function BranchPreview() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-24 lg:pb-32">
      <div className="container-px relative z-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md lg:grid lg:grid-cols-2">
            {/* Left: search */}
            <div className="p-8 lg:p-12">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-400">
                <span className="h-px w-6 bg-brand-500" /> 500+ Branches
              </span>
              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Find a branch near you
              </h2>
              <p className="mt-4 text-ink-300">
                With over 500 branches and 700 ATMs across Madhya Pradesh, help is
                always close to home.
              </p>

              <div className="mt-8 flex items-center gap-2 rounded-full border border-white/10 bg-ink-950/50 p-2 shadow-inner focus-within:border-brand-500/50">
                <Search className="ml-4 h-5 w-5 text-ink-400" />
                <input
                  type="text"
                  placeholder="Enter city or PIN code"
                  className="flex-1 bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-ink-500"
                />
                <button className="rounded-full bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition-all hover:bg-brand-400 hover:scale-105">
                  Search
                </button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink-500">Popular:</span>
                {cities.map((c) => (
                  <button
                    key={c}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-ink-300 transition-all hover:border-brand-500/40 hover:bg-white/10 hover:text-white"
                  >
                    {c}
                  </button>
                ))}
              </div>

              <Link
                href="/customer-service/branch-locator"
                className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-brand-400 transition-colors hover:text-brand-300"
              >
                Open full branch locator <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right: stylised map */}
            <div className="relative min-h-[22rem] overflow-hidden bg-ink-900 border-l border-white/5">
              <div className="absolute inset-0 bg-ink-radial opacity-90" />
              {/* grid lines */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
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
                    className="absolute -inset-4 animate-ping rounded-full bg-brand-500/30"
                    style={{ animationDelay: pin.delay }}
                  />
                  <MapPin className="relative h-8 w-8 fill-brand-500/20 text-brand-400 drop-shadow-[0_0_10px_rgba(32,118,230,0.8)]" />
                </span>
              ))}
              <div className="absolute bottom-8 left-8 flex items-center gap-2 rounded-full border border-brand-500/30 bg-ink-900/90 px-5 py-2.5 text-xs font-semibold tracking-wide text-brand-300 backdrop-blur shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
                <Navigation className="h-4 w-4 text-brand-400" /> Madhya Pradesh
                · 500+ locations
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
