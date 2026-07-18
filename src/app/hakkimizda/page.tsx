import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hakkımızda - Cappadocia Run Club",
  description: "Cappadocia Run Club hakkında bilgi edinin",
};

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AboutSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
