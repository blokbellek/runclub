import Header from "@/components/Header";
import NewHeroSection from "@/components/NewHeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ExploreSection from "@/components/ExploreSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <NewHeroSection />
        <AboutSection />
        <FeaturesSection />
        <ExploreSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

