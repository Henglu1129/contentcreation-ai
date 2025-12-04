import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import InspirationSection from "@/components/InspirationSection";
import SectionTitle from "@/components/SectionTitle";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <InspirationSection />
        <SectionTitle />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
