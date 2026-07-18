import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 px-8 bg-[rgb(245,245,245)]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-xs tracking-wider text-[rgb(81,81,81)] mb-4">
          03 / KAYIT OL
        </div>
        
        <h2 
          className="text-[50px] md:text-[70px] leading-[1.1] font-bold text-black mb-8"
          style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}
        >
          Aramıza katıl.
        </h2>
        
        <p className="text-lg text-[rgb(81,81,81)] leading-relaxed mb-8 max-w-2xl mx-auto">
          Üyelik tamamen ücretsiz ve taahhütsüz. Birkaç kısa adımda seni tanıyalım — 
          gerisini birlikte koşarken hallederiz.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="flex items-center gap-2">
            <span className="text-2xl">→</span>
            <span className="text-sm text-[rgb(81,81,81)]">Tüm seviyelere açık, ücretsiz</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">→</span>
            <span className="text-sm text-[rgb(81,81,81)]">Haftanın iki günü koşu</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">→</span>
            <span className="text-sm text-[rgb(81,81,81)]">Yalnızca 3 kısa adım</span>
          </div>
        </div>
        
        <Link 
          href="/program#contact-form"
          className="inline-block px-12 py-5 text-lg font-black text-white bg-[rgb(229,32,52)] rounded-[10px] transition-all duration-300 hover:bg-black hover:scale-105"
        >
          KAYIT OL →
        </Link>
      </div>
    </section>
  );
}
