import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { EmiCalculator } from "@/components/home/EmiCalculator";

export const metadata: Metadata = {
  title: "EMI Calculator",
  description:
    "Calculate your monthly loan EMI instantly. Adjust amount, interest rate and tenure to plan your repayments.",
};

export default function EmiCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Calculators"
        title="EMI Calculator"
        subtitle="Plan your borrowing with confidence. Adjust the sliders to see your monthly instalment, total interest and payable amount."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Digital Services", href: "/digital-services" },
          { label: "Calculators", href: "/digital-services/calculators/emi-calculator" },
          { label: "EMI Calculator" },
        ]}
      />
      <EmiCalculator />
    </>
  );
}
