import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InstagramIcon } from "@/components/icons";
import { JoinBand } from "@/components/home/JoinBand";
import { PageHead } from "@/components/map/PageHead";
import { PhotoViewer } from "@/components/map/PhotoViewer";

export const metadata = {
  title: "Program - Cappadocia Run Club",
  description: "Cappadocia Run Club programları hakkında bilgi alın",
};

const POSTERS = [
  {
    src: "/images/activities/act3.jpeg",
    alt: "Etkinlik afişi: 2 Ağustos, Rose Valley sabah koşusu ve kahvaltı",
    label: "2 Ağustos · Rose Valley",
  },
  {
    src: "/images/activities/act2.jpeg",
    alt: "Etkinlik afişi: 26 Temmuz pazar, koşu ve kahve",
    label: "26 Temmuz · Koşu & kahve",
  },
  {
    src: "/images/activities/act1.jpeg",
    alt: "Etkinlik afişi: 19 Temmuz pazar, koşu sonrası kahvaltı etkinliği",
    label: "19 Temmuz · Koşu sonrası kahvaltı",
  },
];

export default function ProgramPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHead
          sheet="Program"
          size="md"
          title="Programlarımız"
          lead="Cappadocia Run Club olarak her seviyeden koşucu için programlar hazırlıyoruz. Her haftanın rotasını, saatini ve buluşma noktasını afişle duyuruyoruz."
        >
          <a
            href="https://www.instagram.com/cappadociarunclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-ink/40 hover:text-route hover:decoration-route"
          >
            <InstagramIcon className="size-4" />
            Güncel afişler Instagram&apos;da
          </a>
        </PageHead>

        <section aria-labelledby="posters-title" className="border-b border-ink">
          <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 md:py-24 lg:px-10">
            <h2 id="posters-title" className="text-xl font-extrabold uppercase [font-stretch:120%]">
              Son etkinlikler
            </h2>
            <PhotoViewer
              photos={POSTERS}
              fit="contain"
              sizes="(min-width: 768px) 33vw, 100vw"
              className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8"
            />
          </div>
        </section>

        <JoinBand />
      </main>
      <Footer />
    </div>
  );
}
