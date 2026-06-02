import { featuredProducts } from "@/lib/content";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Products() {
  return (
    <section className="relative bg-ink-50/40 py-24 lg:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything you need, beautifully simple"
          subtitle="A complete suite of banking products crafted for farmers, families, businesses and the digitally savvy."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, i) => (
            <Reveal key={product.title} delay={i * 0.06}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
