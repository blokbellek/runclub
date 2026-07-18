import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Aydınlatma Metni - Cappadocia Run Club",
  description: "KVKK Aydınlatma Metni",
};

export default function AydinlatmaMetni() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-4xl font-bold text-black mb-8"
            style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}
          >
            Kişisel Verilerin Korunması Aydınlatma Metni
          </h1>
          
          <div className="prose prose-sm max-w-none text-[rgb(81,81,81)] space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}>
                1. Veri Sorumlusu
              </h2>
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz; 
                veri sorumlusu olarak Cappadocia Run Club ("Kulüp") tarafından aşağıda açıklanan 
                kapsamda işlenebilecektir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}>
                2. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi
              </h2>
              <p>
                Kişisel verileriniz, Cappadocia Run Club tarafından sunulan hizmetlerden faydalandırılmanız 
                ve sizinle iletişime geçilebilmesi amacıyla web sitemiz üzerinden elektronik ortamda 
                toplanmaktadır.
              </p>
              <p>
                Toplanan kişisel veriler KVKK'nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme 
                şartları ve amaçları kapsamında işlenmektedir.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}>
                3. İşlenen Kişisel Veriler
              </h2>
              <p>
                Başvuru formumuz aracılığıyla toplanan kişisel verileriniz:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Ad-Soyad</li>
                <li>E-posta adresi</li>
                <li>Telefon numarası</li>
                <li>Instagram kullanıcı adı</li>
                <li>Koşu aktivite bilgileri</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}>
                4. Kişisel Verilerin İşlenme Amacı
              </h2>
              <p>
                Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Kulüp üyelik başvurularının değerlendirilmesi</li>
                <li>Kulüp faaliyetleri hakkında bilgilendirme yapılması</li>
                <li>Koşu programlarına katılım organizasyonunun sağlanması</li>
                <li>İletişim faaliyetlerinin yürütülmesi</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}>
                5. Kişisel Verilerin Aktarılması
              </h2>
              <p>
                Toplanan kişisel verileriniz, KVKK'nın 8. ve 9. maddelerinde belirtilen kişisel veri 
                işleme şartları ve amaçları çerçevesinde yurt içindeki üçüncü kişilerle paylaşılabilecektir. 
                Kişisel verileriniz yurt dışına aktarılmamaktadır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}>
                6. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi
              </h2>
              <p>
                Kişisel verileriniz, elektronik ortamda web sitemiz üzerindeki form aracılığıyla 
                ve açık rızanız ile toplanmaktadır.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}>
                7. KVKK Kapsamındaki Haklarınız
              </h2>
              <p>
                KVKK'nın 11. maddesi uyarınca, veri sorumlusuna başvurarak aşağıdaki haklarınızı 
                kullanabilirsiniz:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Kişisel veri işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
                <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</li>
                <li>Kişisel verilerin düzeltilmesi, silinmesi ya da yok edilmesi halinde bu işlemlerin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-4" style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', Times, serif" }}>
                8. İletişim
              </h2>
              <p>
                Yukarıda belirtilen haklarınızı kullanmak için Instagram hesabımız 
                (@cappadociarunclub) üzerinden bizimle iletişime geçebilirsiniz.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-300">
              <p className="text-sm text-[rgb(81,81,81)]">
                Son Güncelleme: Temmuz 2026
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/#contact-form"
              className="inline-block px-8 py-4 text-base font-black text-white bg-[rgb(229,32,52)] rounded-[10px] transition-opacity duration-300 hover:opacity-80"
            >
              Başvuru Formuna Dön
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
