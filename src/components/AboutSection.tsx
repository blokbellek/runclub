export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-8 bg-white scroll-mt-24">
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

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-[rgb(250,250,250)] p-8 rounded-2xl">
            <h3 
              className="text-2xl font-bold text-[rgb(229,32,52)] mb-4"
              style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}
            >
              Vizyonumuz
            </h3>
            <p className="text-lg text-[rgb(81,81,81)] leading-relaxed mb-4">
              Sadece bir koşu kulübü olmak değil;
            </p>
            <ul className="list-disc list-inside text-lg text-[rgb(81,81,81)] leading-relaxed space-y-1 mb-4">
              <li>Trekking</li>
              <li>Yoga</li>
              <li>Pilates</li>
              <li>Yüzme</li>
              <li>Outdoor etkinlikleri</li>
            </ul>
            <p className="text-lg text-[rgb(81,81,81)] leading-relaxed">
              ve gelecekte farklı spor deneyimlerini aynı çatı altında buluşturan bir 
              topluluk olmak.
            </p>
          </div>

          <div className="bg-[rgb(250,250,250)] p-8 rounded-2xl">
            <h3 
              className="text-2xl font-bold text-[rgb(229,32,52)] mb-4"
              style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}
            >
              Misyonumuz
            </h3>
            <ul className="list-disc list-inside text-lg text-[rgb(81,81,81)] leading-relaxed space-y-2">
              <li>İnsanları hareket etmeye teşvik etmek.</li>
              <li>Her seviyeden insanı sporda buluşturmak.</li>
              <li>Kapadokya'nın doğal güzelliklerini sporla keşfetmek.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
