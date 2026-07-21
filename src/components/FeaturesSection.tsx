export default function FeaturesSection() {
  const features = [
    {
      number: "01",
      title: "Haftalık Pazar Koşusu",
      description: "Koşularımız herkese açık. Her pazar günü buluşuyoruz. Profesyonel bir atlet olmana, hatta daha önce hiç koşmuş olmana bile gerek yok — tek ihtiyacın bir çift ayakkabı ve orada olma isteği."
    },
    {
      number: "02",
      title: "Kendi Temponla",
      description: "Kapadokya'nın eşsiz rotaları boyunca koşuyoruz; bitiş çizgisi yok, yarış yok. Herkes kendi temposunda, kendi enerjisiyle ilerliyor. İster yürü, ister koş — önemli olan hızın değil, o gün orada bizimle olman. Ritim senin."
    },
    {
      number: "03",
      title: "Koşudan Sonrası",
      description: "Koşumuzu tamamladıktan sonra dağılmıyoruz; sıcak bir içecek eşliğinde oturup günü birlikte kapatıyoruz. Çünkü asıl amacımız kilometre saymak değil, samimiyeti büyüten bir topluluk kurmak."
    }
  ];

  return (
    <section className="py-24 px-8 bg-[rgb(245,245,245)]">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-black mb-16 text-center"
          style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}>
          Neler yapıyoruz?
        </h3>
        
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div key={index} className="border-b border-[rgb(200,200,200)] pb-16 last:border-b-0">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="text-6xl font-bold text-[rgb(229,32,52)]" 
                    style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}>
                    {feature.number}
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <h4 className="text-2xl md:text-3xl font-bold text-black mb-4"
                    style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}>
                    {feature.title}
                  </h4>
                  
                  <p className="text-lg text-[rgb(81,81,81)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
