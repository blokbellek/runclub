export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs tracking-wider text-[rgb(81,81,81)] mb-4">
          01 / HAKKIMIZDA
        </div>
        
        <h2 
          className="text-[50px] md:text-[70px] leading-[1.1] font-bold text-black mb-12"
          style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}
        >
          Koşu bir araç,<br />
          amacımız birlikte<br />
          hareket etmek.
        </h2>
        
        <div className="max-w-3xl">
          <p className="text-lg text-[rgb(81,81,81)] leading-relaxed mb-6">
            Cappadocia Run Club olarak biz, Kapadokya'da koşuyu tek başına yapılan bir spor 
            olmaktan çıkardık. 2026'da, benzersiz manzaralar eşliğinde buluşulacak bir kulüp 
            yokken yola çıktık — bölgenin ilk koşu kulübü olarak.
          </p>
          
          <p className="text-lg text-[rgb(81,81,81)] leading-relaxed">
            Bizim için koşu; nabız yükseltmenin ötesinde, bir araya gelmenin, yeni 
            insanlar tanımanın ve Kapadokya'nın doğal güzelliğini birlikte paylaşmanın 
            en güzel bahanesi.
          </p>
        </div>
      </div>
    </section>
  );
}
