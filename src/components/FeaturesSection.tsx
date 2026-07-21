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

  const activities = [
    { icon: "🏃", label: "Sosyal koşular" },
    { icon: "🥾", label: "Trekking" },
    { icon: "🎉", label: "Koşu sonrası sosyal etkinlikler" },
    { icon: "📚", label: "Workshoplar" },
    { icon: "🏆", label: "Yarış hazırlıkları ve destek" },
    { icon: "🤝", label: "Marka iş birlikleri" },
    { icon: "🌅", label: "Gün doğumu ve gün batımı etkinlikleri" },
    { icon: "🗺️", label: "Kapadokya'nın eşsiz rotalarını birlikte keşfetme" },
    { icon: "🌿", label: "Doğa odaklı spor etkinlikleri" },
    { icon: "🎯", label: "Her seviyeye uygun etkinlikler" },
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

        <div className="mt-20 text-center">
          <div className="inline-block px-4 py-2 bg-[rgb(229,32,52)]/10 rounded-full text-xs tracking-wider text-[rgb(229,32,52)] font-bold mb-6">
            KAÇIRMAYA GELMEZ
          </div>
          <h4 className="text-2xl md:text-3xl font-bold text-black mb-4"
            style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}>
            Etkinlik Takvimimizde Seni Bekleyenler
          </h4>
          <p className="text-lg text-[rgb(81,81,81)] leading-relaxed max-w-2xl mx-auto mb-12">
            Sadece koşu değil; Kapadokya'yı hareketle keşfeden, bir topluluğun içinde 
            kendine yer bulan bir deneyim. Bunları kesinlikle görmen lazım.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-3"
            >
              <span className="text-3xl">{activity.icon}</span>
              <span className="text-sm font-bold text-black leading-snug">{activity.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
