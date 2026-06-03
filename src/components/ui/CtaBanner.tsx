import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export function CtaBanner({
  title = "Banking made for your tomorrow",
  subtitle = "Join over 5 million Indians who trust MPGB with their financial future. Open an account today — it only takes a few minutes.",
  primaryLabel = "Open an Account",
  primaryHref = "/apply/account-opening",
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="bg-ink-950 pb-24 lg:pb-32">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-900 via-ink-900 to-brand-950 px-8 py-16 text-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 sm:px-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-80" />
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-leaf-500/15 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink-200">{subtitle}</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href={primaryHref} className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]">
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                {primaryLabel} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="tel:18001233313" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 hover:border-white/30 backdrop-blur-md">
                <Phone className="h-4 w-4" /> 1800 123 3313
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
