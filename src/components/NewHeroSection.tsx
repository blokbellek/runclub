import { InstagramIcon, MailIcon } from "./icons";

export default function NewHeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-8 py-20 bg-white overflow-hidden">
      {/* Background image with blur effect */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(/images/hero-background.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          filter: 'blur(8px)',
          transform: 'scale(1.1)' // Prevents blur edge artifacts
        }}
      />
      
      {/* Animated text marquee at the top */}
      <div className="absolute top-10 left-0 w-full overflow-hidden z-10">
        <div className="animate-marquee whitespace-nowrap text-sm tracking-wider text-[rgb(81,81,81)]">
          <span>★ İYİ Kİ CAPPADOCIA ★ BE HAPPY ★ KAPADOKYA'NIN KALBINDE ★ HER PAZAR ★ İYİ Kİ CAPPADOCIA ★ BE HAPPY ★ KAPADOKYA'NIN KALBINDE ★ HER PAZAR ★</span>
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-8 text-sm tracking-[0.2em] text-[rgb(81,81,81)] uppercase">
          EST. 2026 — KAPADOKYA
        </div>
        
        <h1 
          className="text-[42px] sm:text-[64px] md:text-[90px] lg:text-[120px] leading-[0.95] lg:leading-[0.9] font-bold text-black mb-8"
          style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}
        >
          İYİ Kİ<br />CAPPADOCIA
        </h1>
        
        <p className="text-base sm:text-xl md:text-2xl text-[rgb(81,81,81)] mb-12 max-w-3xl mx-auto leading-relaxed">
          Kapadokya'nın eşsiz manzarası eşliğinde her pazar buluşan koşu topluluğu. 
          Tempon senin, yolculuk bizimle.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
          <a 
            href="https://www.instagram.com/cappadociarunclub?igsh=dWtseHcwZ212YmRq" 
            target="_blank"
            className="flex items-center gap-2 text-[#E4405F] hover:opacity-70 transition-all duration-300 hover:scale-110"
          >
            <InstagramIcon className="w-6 h-6" />
            <span className="font-medium">Instagram</span>
          </a>
          <span className="hidden sm:inline text-[rgb(200,200,200)]">|</span>
          <a 
            href="mailto:cappadociarunclub@gmail.com" 
            className="flex items-center gap-2 text-[rgb(81,81,81)] hover:opacity-70 transition-all duration-300 hover:scale-110 break-all"
          >
            <MailIcon className="w-6 h-6 shrink-0" />
            <span className="font-medium">cappadociarunclub@gmail.com</span>
          </a>
        </div>
        
        {/* Activity 3 image */}
        <div className="mt-16 max-w-2xl mx-auto">
          <img 
            src="/images/activities/act3.jpeg" 
            alt="Cappadocia Run Club Activity"
            className="w-full h-auto rounded-2xl shadow-2xl object-cover"
          />
        </div>
        
        {/* Location Map */}
        <div className="mt-8 max-w-xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="p-3 border-b border-gray-200">
              <h3 className="text-base font-semibold text-black flex items-center gap-2">
                <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Buluşma Noktası
              </h3>
              <p className="text-xs text-[rgb(81,81,81)] mt-1">Kapadokya - Rose Valley</p>
            </div>
            <div className="relative w-full h-[150px] md:h-[200px]">
              <iframe
                src="https://www.google.com/maps?q=38.651405334472656,34.836097717285156&z=17&hl=tr&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Buluşma Noktası - Rose Valley"
              />
            </div>
            <div className="p-3 bg-gray-50">
              <a 
                href="https://www.google.com/maps?q=38.651405334472656,34.836097717285156&z=17&hl=tr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-red-600 hover:text-red-700 transition-colors"
              >
                <span>Yol tarifi al</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
