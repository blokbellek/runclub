import Header from "@/components/Header";
import ProgramsSection from "@/components/ProgramsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Program - Cappadocia Run Club",
  description: "Cappadocia Run Club programları hakkında bilgi alın",
};

export default function ProgramPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="pt-24">
          <ProgramsSection />
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
