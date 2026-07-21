import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Link from "next/link";
import { InstagramIcon, MailIcon } from "@/components/icons";

export const metadata = {
  title: "Bize Katılın - Cappadocia Run Club",
  description: "Cappadocia Run Club'a katılmak için başvurun",
};

export default function BizeKatilinPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 px-8 bg-gradient-to-br from-[rgb(229,32,52)] to-[rgb(180,20,40)] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 
              className="text-[60px] md:text-[90px] leading-[1.1] font-bold mb-6"
              style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}
            >
              Aramıza<br />Katıl!
            </h1>
            
            <p className="text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl mx-auto opacity-95">
              Kapadokya'nın büyüleyici manzarasında, her pazar birlikte koşmanın keyfini çıkar. 
              Her seviyeden koşucu aramızda!
            </p>
            
            <div className="flex gap-6 justify-center items-center text-base">
              <a 
                href="https://www.instagram.com/cappadociarunclub?igsh=dWtseHcwZ212YmRq" 
                target="_blank"
                className="flex items-center gap-2 text-white hover:scale-110 transition-all duration-300 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full"
              >
                <InstagramIcon className="w-5 h-5" />
                <span className="font-medium">Instagram</span>
              </a>
              <a 
                href="mailto:cappadociarunclub@gmail.com" 
                className="flex items-center gap-2 text-white hover:scale-110 transition-all duration-300 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full"
              >
                <MailIcon className="w-5 h-5" />
                <span className="font-medium">cappadociarunclub@gmail.com</span>
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-8 bg-white border-y border-[rgb(230,230,230)]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[rgb(229,32,52)] mb-2">1x</div>
              <div className="text-sm text-[rgb(81,81,81)] uppercase tracking-wider">Haftalık Koşu</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[rgb(229,32,52)] mb-2">∞</div>
              <div className="text-sm text-[rgb(81,81,81)] uppercase tracking-wider">Her Seviye</div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-8 bg-[rgb(250,250,250)]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-xs tracking-wider text-[rgb(81,81,81)] mb-4">
                NEDEN BİZE KATILMALISIN?
              </div>
              <h2 
                className="text-[50px] md:text-[70px] leading-[1.1] font-bold text-black"
                style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}
              >
                Seni Bekleyen<br />Deneyim
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🏔️</div>
                <h3 className="text-xl font-bold text-black mb-3">Eşsiz Manzara</h3>
                <p className="text-[rgb(81,81,81)] leading-relaxed">
                  Kapadokya'nın peri bacaları ve vadileri eşliğinde koşmanın tadını çıkar.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-black mb-3">Güçlü Topluluk</h3>
                <p className="text-[rgb(81,81,81)] leading-relaxed">
                  Aynı tutkuyu paylaşan insanlarla tanış, yeni dostluklar kur.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-black mb-3">Kişisel Gelişim</h3>
                <p className="text-[rgb(81,81,81)] leading-relaxed">
                  Kendi temponda ilerle, hedeflerine ulaş, sağlıklı yaşam sürdür.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-black mb-3">Esneklik</h3>
                <p className="text-[rgb(81,81,81)] leading-relaxed">
                  Haftada bir, pazar günleri. Yeni başlayan da deneyimli de memnun.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-black mb-3">Etkinlikler</h3>
                <p className="text-[rgb(81,81,81)] leading-relaxed">
                  Sosyal aktiviteler, özel koşular ve unutulmaz anlar seni bekliyor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[rgb(229,32,52)]/10 rounded-full text-xs tracking-wider text-[rgb(229,32,52)] font-bold mb-6">
                SON ADIM
              </div>
              <h2 
                className="text-[50px] md:text-[70px] leading-[1.1] font-bold text-black mb-6"
                style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}
              >
                Başvurunu<br />Tamamla
              </h2>
              <p className="text-lg text-[rgb(81,81,81)] leading-relaxed max-w-2xl mx-auto">
                Formu doldur, birkaç gün içinde seninle iletişime geçelim. 
                Hazırsan, koşmaya başlamak sadece birkaç adım uzağında!
              </p>
            </div>
            
            <ContactForm />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 bg-gradient-to-r from-black to-[rgb(40,40,40)] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-[40px] md:text-[60px] leading-[1.1] font-bold mb-6"
              style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}
            >
              Hala Tereddüt mü<br />Ediyorsun?
            </h2>
            <p className="text-xl leading-relaxed mb-8 max-w-2xl mx-auto opacity-90">
              Instagram'dan veya e-posta ile bize ulaş, sorularını sor. 
              Karar vermek için acele etmene gerek yok!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.instagram.com/cappadociarunclub?igsh=dWtseHcwZ212YmRq"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E4405F] text-white font-bold rounded-lg hover:bg-[#d13552] transition-all hover:scale-105"
              >
                <InstagramIcon className="w-5 h-5" />
                Instagram'dan Sor
              </a>
              <a 
                href="mailto:cappadociarunclub@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-[rgb(40,40,40)] transition-all hover:scale-105"
              >
                <MailIcon className="w-5 h-5" />
                cappadociarunclub@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
