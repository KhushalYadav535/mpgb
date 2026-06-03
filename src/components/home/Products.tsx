"use client";

import { featuredProducts } from "@/lib/content";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Products() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-28 lg:py-36">
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-leaf-500/15 blur-[120px]" />

      <div className="container-px relative z-10">
        <SectionHeading
          eyebrow="Our Services"
          title={<span className="text-white">Everything you need, beautifully simple</span>}
          subtitle={<span className="text-ink-300">A complete suite of banking products crafted for farmers, families, businesses and the digitally savvy.</span>}
        />

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, i) => (
            <Reveal key={product.title} delay={i * 0.1}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
