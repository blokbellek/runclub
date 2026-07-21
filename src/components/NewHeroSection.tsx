import { InstagramIcon } from "./icons";

export default function NewHeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-8 py-20 bg-white">
      {/* Animated text marquee at the top */}
      <div className="absolute top-10 left-0 w-full overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-sm tracking-wider text-[rgb(81,81,81)]">
          <span>★ İYİ Kİ CAPPADOCIA ★ BE HAPPY ★ KAPADOKYA'NIN KALBINDE ★ HAFTANIN İKİ GÜNÜ ★ İYİ Kİ CAPPADOCIA ★ BE HAPPY ★ KAPADOKYA'NIN KALBINDE ★ HAFTANIN İKİ GÜNÜ ★</span>
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-8 text-sm tracking-[0.2em] text-[rgb(81,81,81)] uppercase">
          EST. 2026 — KAPADOKYA
        </div>
        
        <h1 
          className="text-[80px] md:text-[120px] leading-[0.9] font-bold text-black mb-8"
          style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}
        >
          İYİ Kİ<br />CAPPADOCIA
        </h1>
        
        <p className="text-xl md:text-2xl text-[rgb(81,81,81)] mb-12 max-w-3xl mx-auto leading-relaxed">
          Kapadokya'nın eşsiz manzarası eşliğinde haftanın iki günü buluşan koşu kulübü. 
          Tempon senin, yolculuk bizimle.
        </p>
        
        <div className="flex gap-4 justify-center items-center text-sm">
          <a 
            href="https://www.instagram.com/cappadociarunclub?igsh=dWtseHcwZ212YmRq" 
            target="_blank"
            className="flex items-center gap-2 text-[#E4405F] hover:opacity-70 transition-all duration-300 hover:scale-110"
          >
            <InstagramIcon className="w-6 h-6" />
            <span className="font-medium">Instagram</span>
          </a>
        </div>
        
        {/* Next run info */}
        <div className="mt-16 pt-8 border-t border-[rgb(200,200,200)] max-w-md mx-auto">
          <div className="text-xs tracking-wider text-[rgb(81,81,81)] mb-2">
            BİR SONRAKİ KOŞU
          </div>
          <div className="text-base font-bold text-black">
            Yakında duyurulacak
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="text-xs text-[rgb(81,81,81)] tracking-wider">
          01 / HAKKIMIZDA
        </div>
      </div>
    </section>
  );
}
