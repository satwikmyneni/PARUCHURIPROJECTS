import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSnapshotSection } from "@/components/sections/AboutSnapshotSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndiaMapSection } from "@/components/sections/IndiaMapSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSnapshotSection />
        <ServicesSection />
        <IndiaMapSection />
        <WhyChooseUsSection />
        <GallerySection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
