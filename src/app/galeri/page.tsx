import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Galeri - Cappadocia Run Club",
  description: "Cappadocia Run Club etkinlik fotoğrafları",
};

export default function GaleriPage() {
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
              {/* Placeholder - Buraya galeri içeriği eklenecek */}
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Fotoğraf 1</p>
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Fotoğraf 2</p>
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Fotoğraf 3</p>
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Fotoğraf 4</p>
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Fotoğraf 5</p>
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Fotoğraf 6</p>
              </div>
            </div>
            
            <p className="text-center text-[rgb(81,81,81)] mt-12">
              Yakında daha fazla fotoğraf eklenecek...
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
