import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Hero } from "@/components/home/Hero";
import { Ritual } from "@/components/home/Ritual";
import { Story } from "@/components/home/Story";
import { Frames } from "@/components/home/Frames";
import { JoinBand } from "@/components/home/JoinBand";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Ritual />
        <Story />
        <Frames />
        <JoinBand />
      </main>
      <Footer />
    </div>
  );
}
