import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center px-8 py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-background.webp')" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/80 z-[1]" />
      
      {/* Content */}
      <div className="relative z-[2] max-w-[600px] text-center">
        <h1 className="text-[50px] leading-[65px] font-bold tracking-[0.1px] text-black mb-5"
          style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}
        >
          Welcome to Cappadocia Run Club
        </h1>
        
        <p className="text-sm leading-[16.8px] tracking-[0.1px] text-[rgb(81,81,81)] mb-8 max-w-[425px] mx-auto">
          İlk kez koşmaya başlayacaklardan yeni başlayanlara ve deneyimli koşuculara kadar herkese uygun bir kulüp içindesiniz. Profesyonel koşucularımız eşliğinde, sağlıklı ve programlı bir koşu hayatına hoş geldiniz.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="#contact-form"
            className="inline-block px-8 py-4 text-base font-black leading-4 tracking-[0.1px] text-black border-[0.8px] border-black rounded-[10px] bg-transparent transition-all duration-[400ms] hover:bg-black hover:text-white no-underline"
          >
            Kayıt Ol
          </Link>
          
          <Link
            href="#program"
            className="inline-block px-8 py-4 text-base font-black leading-4 tracking-[0.1px] text-[rgb(49,49,49)] border-[0.8px] border-[rgb(49,49,49)] rounded-[10px] bg-transparent transition-all duration-[400ms] hover:bg-[rgb(49,49,49)] hover:text-white no-underline"
          >
            Programlarımız
          </Link>
        </div>
      </div>
    </section>
  );
}
