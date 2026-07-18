export default function ContactSection() {
  return (
    <section id="iletisim" className="py-24 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-xs tracking-wider text-[rgb(81,81,81)] mb-4">
          04 / İLETİŞİM
        </div>
        
        <h2 
          className="text-[50px] md:text-[70px] leading-[1.1] font-bold text-black mb-12"
          style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}
        >
          Bize yazın.
        </h2>
        
        <p className="text-lg text-[rgb(81,81,81)] leading-relaxed mb-12 max-w-2xl">
          Sorun, öneriniz veya iş birliği talebiniz için bize buradan ulaşabilirsiniz. 
          Mesajınızı en kısa sürede yanıtlıyoruz.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="text-xs font-bold tracking-wider text-[rgb(81,81,81)] mb-2">
              INSTAGRAM
            </div>
            <a 
              href="https://www.instagram.com/cappadociarunclub?igsh=dWtseHcwZ212YmRq"
              target="_blank"
              className="text-lg text-[rgb(229,32,52)] hover:underline"
            >
              @cappadociarunclub
            </a>
          </div>
          
          <div>
            <div className="text-xs font-bold tracking-wider text-[rgb(81,81,81)] mb-2">
              WHATSAPP KANALI
            </div>
            <a 
              href="https://chat.whatsapp.com/IQtWQjP9HnG0PHgkPCiIVW?s=cl&p=i&ilr=4"
              target="_blank"
              className="text-lg text-[rgb(229,32,52)] hover:underline"
            >
              Duyuru kanalımıza katıl
            </a>
          </div>
          
          <div>
            <div className="text-xs font-bold tracking-wider text-[rgb(81,81,81)] mb-2">
              LOKASYON
            </div>
            <p className="text-lg text-black">
              Kapadokya — Nevşehir
            </p>
          </div>
          
          <div>
            <div className="text-xs font-bold tracking-wider text-[rgb(81,81,81)] mb-2">
              KAYIT
            </div>
            <a 
              href="/program#contact-form"
              className="text-lg text-[rgb(229,32,52)] hover:underline"
            >
              Başvuru formuna git →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
