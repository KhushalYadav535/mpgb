import { Breadcrumb, type Crumb } from "./Breadcrumb";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-16 pt-36 text-white lg:pb-20 lg:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-ink-radial" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" />
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container-px relative">
        <Breadcrumb items={crumbs} />
        {eyebrow && (
          <span className="eyebrow mt-6">
            <span className="h-px w-6 bg-gold-400" /> {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
