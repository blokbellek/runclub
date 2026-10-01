import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { PageHead } from "@/components/map/PageHead";

export const metadata = {
  title: "Aydınlatma Metni - Cappadocia Run Club",
  description: "KVKK Aydınlatma Metni",
};

export default function AydinlatmaMetni() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHead sheet="KVKK" title="Aydınlatma metni" lead="Kişisel Verilerin Korunması Aydınlatma Metni" />
        <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 md:py-20 lg:px-10">
          <div className="max-w-[70ch]">
          
          <div className="space-y-10 leading-relaxed text-ink-soft [&_p+p]:mt-3">
            <section>
              <h2 className="mb-4 border-t border-ink pt-6 text-xl font-extrabold uppercase text-ink [font-stretch:115%]">
                1. Veri Sorumlusu
              </h2>
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, kişisel verileriniz; 
                veri sorumlusu olarak Cappadocia Run Club (“Kulüp”) tarafından aşağıda açıklanan 
                kapsamda işlenebilecektir.
              </p>
            </section>

            <section>
              <h2 className="mb-4 border-t border-ink pt-6 text-xl font-extrabold uppercase text-ink [font-stretch:115%]">
                2. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi
              </h2>
              <p>
                Kişisel verileriniz, Cappadocia Run Club tarafından sunulan hizmetlerden faydalandırılmanız 
                ve sizinle iletişime geçilebilmesi amacıyla web sitemiz üzerinden elektronik ortamda 
                toplanmaktadır.
              </p>
              <p>
                Toplanan kişisel veriler KVKK’nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme 
                şartları ve amaçları kapsamında işlenmektedir.
              </p>
            </section>

            <section>
              <h2 className="mb-4 border-t border-ink pt-6 text-xl font-extrabold uppercase text-ink [font-stretch:115%]">
                3. İşlenen Kişisel Veriler
              </h2>
              <p>
                Başvuru formumuz aracılığıyla toplanan kişisel verileriniz:
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-route">
                <li>Ad-Soyad</li>
                <li>E-posta adresi</li>
                <li>Telefon numarası</li>
                <li>Instagram kullanıcı adı</li>
                <li>Koşu aktivite bilgileri</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 border-t border-ink pt-6 text-xl font-extrabold uppercase text-ink [font-stretch:115%]">
                4. Kişisel Verilerin İşlenme Amacı
              </h2>
              <p>
                Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-route">
                <li>Kulüp üyelik başvurularının değerlendirilmesi</li>
                <li>Kulüp faaliyetleri hakkında bilgilendirme yapılması</li>
                <li>Koşu programlarına katılım organizasyonunun sağlanması</li>
                <li>İletişim faaliyetlerinin yürütülmesi</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 border-t border-ink pt-6 text-xl font-extrabold uppercase text-ink [font-stretch:115%]">
                5. Kişisel Verilerin Aktarılması
              </h2>
              <p>
                Toplanan kişisel verileriniz, KVKK’nın 8. ve 9. maddelerinde belirtilen kişisel veri 
                işleme şartları ve amaçları çerçevesinde yurt içindeki üçüncü kişilerle paylaşılabilecektir. 
                Kişisel verileriniz yurt dışına aktarılmamaktadır.
              </p>
            </section>

            <section>
              <h2 className="mb-4 border-t border-ink pt-6 text-xl font-extrabold uppercase text-ink [font-stretch:115%]">
                6. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi
              </h2>
              <p>
                Kişisel verileriniz, elektronik ortamda web sitemiz üzerindeki form aracılığıyla 
                ve açık rızanız ile toplanmaktadır.
              </p>
            </section>

            <section>
              <h2 className="mb-4 border-t border-ink pt-6 text-xl font-extrabold uppercase text-ink [font-stretch:115%]">
                7. KVKK Kapsamındaki Haklarınız
              </h2>
              <p>
                KVKK’nın 11. maddesi uyarınca, veri sorumlusuna başvurarak aşağıdaki haklarınızı 
                kullanabilirsiniz:
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-route">
                <li>Kişisel veri işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
                <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                <li>KVKK’nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</li>
                <li>Kişisel verilerin düzeltilmesi, silinmesi ya da yok edilmesi halinde bu işlemlerin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 border-t border-ink pt-6 text-xl font-extrabold uppercase text-ink [font-stretch:115%]">
                8. İletişim
              </h2>
              <p>
                Yukarıda belirtilen haklarınızı kullanmak için Instagram hesabımız 
                (@cappadociarunclub) üzerinden bizimle iletişime geçebilirsiniz.
              </p>
            </section>

            <div className="mt-12 border-t border-ink pt-8">
              <p className="map-label text-ink-soft">
                Son Güncelleme: Temmuz 2026
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link 
              href="/bize-katilin#contact-form"
              className="inline-flex min-h-14 items-center bg-route px-6 text-sm font-bold uppercase tracking-[0.06em] text-sheet [font-stretch:115%] hover:bg-route-deep"
            >
              Başvuru Formuna Dön
            </Link>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
