import { Hero } from "@/components/home/Hero";
import { AnimatedFeatures } from "@/components/home/AnimatedFeatures";
import { RatesTicker } from "@/components/home/RatesTicker";
import { TrustBar } from "@/components/home/TrustBar";
import { Products } from "@/components/home/Products";
import { WhyChoose } from "@/components/home/WhyChoose";
import { MobileBanking } from "@/components/home/MobileBanking";
import { Stats } from "@/components/home/Stats";
import { LoansShowcase } from "@/components/home/LoansShowcase";
import { EmiCalculator } from "@/components/home/EmiCalculator";
import { News } from "@/components/home/News";
import { Testimonials } from "@/components/home/Testimonials";
import { BranchPreview } from "@/components/home/BranchPreview";
import { CtaBanner } from "@/components/ui/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <AnimatedFeatures />
      <RatesTicker />
      <TrustBar />
      <Products />
      <WhyChoose />
      <MobileBanking />
      <Stats />
      <LoansShowcase />
      <EmiCalculator />
      <News />
      <Testimonials />
      <BranchPreview />
      <CtaBanner />
    </>
  );
}
