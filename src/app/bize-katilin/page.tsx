import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { InstagramIcon, MailIcon } from "@/components/icons";
import { PageHead } from "@/components/map/PageHead";
import { PinSymbol } from "@/components/map/symbols";

export const metadata = {
  title: "Bize Katılın - Cappadocia Run Club",
  description: "Cappadocia Run Club'a katılmak için başvurun",
};

const REASONS = [
  { term: "Eşsiz manzara", text: "Kapadokya'nın peri bacaları ve vadileri eşliğinde koşmanın tadını çıkar." },
  { term: "Güçlü topluluk", text: "Aynı tutkuyu paylaşan insanlarla tanış, yeni dostluklar kur." },
  { term: "Kişisel gelişim", text: "Kendi temponda ilerle, hedeflerine ulaş, sağlıklı yaşam sürdür." },
  { term: "Esneklik", text: "Haftada bir, pazar günleri. Yeni başlayan da deneyimli de memnun." },
  { term: "Etkinlikler", text: "Sosyal aktiviteler, özel koşular ve unutulmaz anlar seni bekliyor." },
  {
    term: "Kapadokya'nın ilki",
    text: "Kapadokya'nın ilk koşu kulübü olarak başladık ve bu topluluğu birlikte büyütüyoruz.",
  },
];

export default function BizeKatilinPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHead
          sheet="Kayıt"
          title="Aramıza katıl."
          lead="Kapadokya'nın büyüleyici manzarasında, her pazar birlikte koşmanın keyfini çıkar. Her seviyeden koşucu aramızda!"
        />

        <section aria-labelledby="form-title" className="border-b border-ink">
          <div className="mx-auto grid max-w-[90rem] gap-14 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-12 lg:gap-8 lg:px-10">
            <div className="lg:col-span-7 lg:order-2">
              <div className="mb-3 flex items-end gap-3">
                <PinSymbol className="size-12 shrink-0 sm:size-14" />
                <h2 id="form-title" className="display text-[clamp(2rem,3.6vw,3.25rem)]">
                  Başvurunu tamamla
                </h2>
              </div>
              <p className="mb-10 max-w-xl text-lg text-ink-soft">
                Formu doldur, birkaç gün içinde seninle iletişime geçelim. Hazırsan, koşmaya başlamak sadece birkaç adım
                uzağında!
              </p>
              <ContactForm />
            </div>

            <div className="lg:col-span-4 lg:order-1">
              <h2 className="text-xl font-extrabold uppercase [font-stretch:120%]">Seni bekleyen deneyim</h2>
              <dl className="mt-6 border-t border-ink">
                {REASONS.map((r) => (
                  <div key={r.term} className="border-b border-ink py-5">
                    <dt className="font-bold">{r.term}</dt>
                    <dd className="mt-1 text-ink-soft">{r.text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section aria-labelledby="ask-title" className="night">
          <div className="mx-auto grid max-w-[90rem] gap-10 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-12 lg:items-end lg:px-10">
            <div className="lg:col-span-7">
              <h2 id="ask-title" className="display text-[clamp(2.25rem,4.6vw,4.25rem)] text-night-ink">
                Hâlâ tereddüt mü ediyorsun?
              </h2>
              <p className="mt-6 max-w-lg text-lg text-night-soft">
                Instagram&apos;dan veya e-posta ile bize ulaş, sorularını sor. Karar vermek için acele etmene gerek yok!
              </p>
            </div>
            <ul className="border-t border-night-soft/50 lg:col-span-5">
              <li className="border-b border-night-soft/50">
                <a
                  href="https://www.instagram.com/cappadociarunclub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-16 items-center gap-4 font-semibold text-night-ink hover:text-route-light"
                >
                  <InstagramIcon className="size-5" />
                  Instagram&apos;dan sor
                </a>
              </li>
              <li className="border-b border-night-soft/50">
                <a
                  href="mailto:cappadociarunclub@gmail.com"
                  className="flex min-h-16 items-center gap-4 break-all font-semibold text-night-ink hover:text-route-light"
                >
                  <MailIcon className="size-5 shrink-0" />
                  cappadociarunclub@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
