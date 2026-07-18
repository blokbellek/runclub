import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Yarış Programımız - Cappadocia Run Club",
  description: "İlk kez koşmaya başlayacaklardan yeni başlayanlara ve deneyimli koşuculara kadar herkese uygun bir kulüp.",
};

export default function ProgramPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProgramsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
