import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Bize Katılın - Cappadocia Run Club",
  description: "Cappadocia Run Club'a katılmak için başvurun",
};

export default function BizeKatilinPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="pt-16">
          <ContactSection />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
