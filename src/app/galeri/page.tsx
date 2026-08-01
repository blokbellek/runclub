import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Galeri - Cappadocia Run Club",
  description: "Cappadocia Run Club etkinlik fotoğrafları",
};

export default function GaleriPage() {
  const images = [
    { id: 1, src: '/images/gallery/1.JPG', alt: 'Koşu etkinliği 1' },
    { id: 2, src: '/images/gallery/2.JPG', alt: 'Koşu etkinliği 2' },
    { id: 3, src: '/images/gallery/3.JPG', alt: 'Koşu etkinliği 3' },
    { id: 4, src: '/images/gallery/4.JPG', alt: 'Koşu etkinliği 4' },
    { id: 5, src: '/images/gallery/5.JPG', alt: 'Koşu etkinliği 5' },
    { id: 6, src: '/images/gallery/6.JPG', alt: 'Koşu etkinliği 6' },
    { id: 7, src: '/images/gallery/7.JPG', alt: 'Koşu etkinliği 7' },
    { id: 8, src: '/images/gallery/8.JPG', alt: 'Koşu etkinliği 8' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-24 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-xs tracking-wider text-[rgb(81,81,81)] mb-4">
              GALERI
            </div>
            
            <h1 className="text-[50px] md:text-[70px] leading-[1.1] font-bold text-black mb-12">
              Etkinliklerimizden<br />Kareler
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => (
                <div key={image.id} className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            
            <p className="text-center text-[rgb(81,81,81)] mt-12">
              Daha fazla fotoğraf için Instagram hesabımızı ziyaret edin!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
