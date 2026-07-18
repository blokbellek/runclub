import Link from "next/link";

export default function ExploreSection() {
  const links = [
    {
      title: "PROGRAM",
      subtitle: "Haftalık program.",
      description: "Tüm seviyelere açık, tamamen ücretsiz koşularımızın detayları.",
      cta: "ANTRENMANLAR",
      href: "/program"
    },
    {
      title: "GALERİ",
      subtitle: "Kareler.",
      description: "Kapadokya'daki koşularımızdan ve kulüp anlarımızdan kareler.",
      cta: "GALERİ",
      href: "#gallery"
    },
    {
      title: "KVKK",
      subtitle: "Gizlilik.",
      description: "Kişisel verilerinizin korunması hakkında aydınlatma metni.",
      cta: "AYDINLATMA METNİ",
      href: "/aydinlatma-metni"
    }
  ];

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs tracking-wider text-[rgb(81,81,81)] mb-4">
          02 / KEŞFET
        </div>
        
        <h2 
          className="text-[50px] md:text-[70px] leading-[1.1] font-bold text-black mb-16"
          style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}
        >
          Kulübü gez.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <Link 
              key={index}
              href={link.href}
              className="group border border-[rgb(200,200,200)] p-8 rounded-lg hover:border-black transition-colors"
            >
              <div className="mb-4">
                <div className="text-sm font-bold tracking-wider text-[rgb(81,81,81)] mb-2">
                  {link.title}
                </div>
                <div className="text-lg font-bold text-black mb-2">
                  {link.subtitle}
                </div>
                <p className="text-sm text-[rgb(81,81,81)] leading-relaxed mb-4">
                  {link.description}
                </p>
              </div>
              
              <div className="text-xs font-bold tracking-wider text-[rgb(229,32,52)] group-hover:underline">
                {link.cta} →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
