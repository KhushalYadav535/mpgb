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
    <section className="bg-white pb-24 lg:pb-32">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 via-ink-900 to-brand-950 px-8 py-16 text-center shadow-lift sm:px-16 lg:py-20">
          <div className="pointer-events-none absolute inset-0 bg-brand-radial opacity-80" />
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-leaf-500/15 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/70">{subtitle}</p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link href={primaryHref} className="btn-gold">
                {primaryLabel} <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:18001233313" className="btn-ghost">
                <Phone className="h-4 w-4" /> 1800 123 3313
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
