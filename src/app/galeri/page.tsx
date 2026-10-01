import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InstagramIcon } from "@/components/icons";
import { PageHead } from "@/components/map/PageHead";
import { PhotoViewer, type Photo } from "@/components/map/PhotoViewer";

export const metadata = {
  title: "Galeri - Cappadocia Run Club",
  description: "Cappadocia Run Club etkinlik fotoğrafları",
};

const PHOTOS: Photo[] = [
  { src: "/images/gallery/3.JPG", alt: "İki üye Güllüdere Vadisi'nde tüf kayalıkların önünde zıplıyor" },
  { src: "/images/gallery/5.JPG", alt: "Kulüp üyeleri Avanos tabelasının önünde toplu fotoğrafta" },
  { src: "/images/gallery/6.JPG", alt: "Koşu sonrası vadiye bakan masada uzun kahvaltı" },
  { src: "/images/gallery/2.JPG", alt: "Göğüs numaralı üyeler madalyalarını gösteriyor" },
  { src: "/images/gallery/8.JPG", alt: "Kulüp tişörtlü üyeler Avanos'ta bir çömlek atölyesinde" },
  { src: "/images/gallery/4.JPG", alt: "Gün doğumunda Göreme yolu ve gökyüzündeki sıcak hava balonları" },
  { src: "/images/gallery/1.JPG", alt: "Üyeler koşu sonrası asma gölgesindeki bahçede dinleniyor" },
  { src: "/images/gallery/7.JPG", alt: "Üç kişi çini tabaklarla süslü bir atölye duvarının önünde" },
];

export default function GaleriPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHead
          sheet="Galeri"
          size="md"
          title={
            <>
              <span className="sm:hidden">{"Etkinlikleri­mizden kareler"}</span>
              <span className="hidden sm:inline">Etkinliklerimizden kareler</span>
            </>
          }
        />

        <section aria-label="Fotoğraflar" className="border-b border-ink">
          <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 md:py-20 lg:px-10">
            <PhotoViewer
              photos={PHOTOS}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:[&>li:nth-child(even)]:mt-16"
            />

            <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-ink pt-8 sm:flex-row sm:items-center">
              <p className="text-lg text-ink-soft">Daha fazla fotoğraf için Instagram hesabımızı ziyaret et.</p>
              <a
                href="https://www.instagram.com/cappadociarunclub/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center gap-3 bg-route px-6 text-sm font-bold uppercase tracking-[0.06em] text-sheet [font-stretch:115%] hover:bg-route-deep"
              >
                <InstagramIcon className="size-5" />
                <span lang="en">@cappadociarunclub</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
