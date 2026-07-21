import Header from "@/components/Header";
import NewHeroSection from "@/components/NewHeroSection";
import StorySection from "@/components/StorySection";
import ExploreSection from "@/components/ExploreSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <NewHeroSection />
        <StorySection />
        <ExploreSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

