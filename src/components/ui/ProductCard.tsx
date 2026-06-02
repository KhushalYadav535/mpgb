import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/content";

export function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;
  return (
    <Link
      href={product.href}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-200 hover:shadow-card"
    >
      {/* hover gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold-50/0 via-gold-50/0 to-gold-100/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-center justify-between">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink-900 text-gold-300 transition-all duration-500 group-hover:bg-gold-sheen group-hover:text-white">
          <Icon className="h-7 w-7" />
        </span>
        <ArrowUpRight className="h-5 w-5 -translate-x-2 translate-y-2 text-gold-500 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
      </div>

      <h3 className="relative mt-6 font-display text-xl font-bold text-ink-900">
        {product.title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-ink-500">
        {product.description}
      </p>

      <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition-colors group-hover:text-gold-600">
        Learn more
        <span className="h-px w-6 bg-current transition-all duration-500 group-hover:w-10" />
      </span>
    </Link>
  );
}
