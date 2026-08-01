export default function ProgramsSection() {
  const activities = [
    { id: 1, src: '/images/activities/act1.jpeg', title: 'Etkinlik 1' },
    { id: 2, src: '/images/activities/act2.jpeg', title: 'Etkinlik 2' },
    { id: 3, src: '/images/activities/act3.jpeg', title: 'Etkinlik 3' },
  ];

  return (
    <section id="program" className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="text-[40px] font-bold text-black mb-6"
            style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}
          >
            Programlarımız
          </h2>
          
          <p className="text-base text-[rgb(81,81,81)] leading-relaxed max-w-2xl mx-auto">
            Cappadocia Run Club olarak her seviyeden koşucu için özel programlar hazırlıyoruz. 
            Detaylı bilgi ve katılım için aşağıdaki formu doldurabilirsiniz.
          </p>
        </div>

        {/* Etkinlik Fotoğrafları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={activity.src} 
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-[rgb(81,81,81)] font-semibold text-lg text-center">{activity.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
