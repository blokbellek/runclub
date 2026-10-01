import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Neatline } from "@/components/map/Neatline";
import { PageHead } from "@/components/map/PageHead";
import { RouteButton } from "@/components/map/RouteButton";

export const metadata = {
  title: "Hakkımızda - Cappadocia Run Club",
  description: "Cappadocia Run Club hakkında bilgi edinin",
};

const PRINCIPLES = [
  {
    title: "Haftalık pazar koşusu",
    text: "Koşularımız herkese açık. Her pazar günü buluşuyoruz. Profesyonel bir atlet olmana, hatta daha önce hiç koşmuş olmana bile gerek yok — tek ihtiyacın bir çift ayakkabı ve orada olma isteği.",
  },
  {
    title: "Kendi temponla",
    text: "Kapadokya'nın eşsiz rotaları boyunca koşuyoruz; bitiş çizgisi yok, yarış yok. Herkes kendi temposunda, kendi enerjisiyle ilerliyor. İster yürü, ister koş — önemli olan hızın değil, o gün orada bizimle olman. Ritim senin.",
  },
  {
    title: "Koşudan sonrası",
    text: "Koşumuzu tamamladıktan sonra dağılmıyoruz; sıcak bir içecek eşliğinde oturup günü birlikte kapatıyoruz. Çünkü asıl amacımız kilometre saymak değil, samimiyeti büyüten bir topluluk kurmak.",
  },
];

const ACTIVITIES = [
  "Sosyal koşular",
  "Trekking",
  "Koşu sonrası sosyal etkinlikler",
  "Workshoplar",
  "Yarış hazırlıkları ve destek",
  "Marka iş birlikleri",
  "Gün doğumu ve gün batımı etkinlikleri",
  "Kapadokya'nın eşsiz rotalarını birlikte keşfetme",
  "Doğa odaklı spor etkinlikleri",
  "Her seviyeye uygun etkinlikler",
];

export default function HakkimizdaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHead
          sheet="Hakkımızda"
          size="md"
          title="Koşu bir araç, amacımız birlikte hareket etmek."
          lead="Cappadocia Run Club olarak biz, Kapadokya'da koşuyu tek başına yapılan bir spor olmaktan çıkardık. 2026'da, benzersiz manzaralar eşliğinde buluşulacak bir kulüp yokken yola çıktık — bölgenin ilk koşu kulübü olarak."
        />

        <section className="border-b border-ink">
          <div className="mx-auto grid max-w-[90rem] gap-14 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-12 lg:gap-8 lg:px-10">
            <div className="lg:col-span-5">
              <Neatline topLeft={<span className="place normal-case tracking-normal text-[0.8rem]">Avanos</span>} topRight="Kulüp ziyareti">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/gallery/8.JPG"
                    alt="Kulüp tişörtlü üyeler Avanos'ta bir çömlek atölyesinde ev sahipleriyle birlikte"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover object-[50%_60%]"
                  />
                </div>
              </Neatline>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="max-w-[40ch] text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-snug text-ink">
                Bizim için koşu; nabız yükseltmenin ötesinde, bir araya gelmenin, yeni insanlar tanımanın ve
                Kapadokya&rsquo;nın doğal güzelliğini birlikte paylaşmanın en güzel bahanesi.
              </p>

              <div className="mt-14 grid gap-10 border-t border-ink pt-10 sm:grid-cols-2">
                <div>
                  <h2 className="text-xl font-extrabold uppercase [font-stretch:120%]">Vizyonumuz</h2>
                  <p className="mt-4 text-ink-soft">Sadece bir koşu kulübü olmak değil;</p>
                  <ul className="mt-3 space-y-1.5 font-semibold">
                    {["Trekking", "Yoga", "Pilates", "Yüzme", "Outdoor etkinlikleri"].map((x) => (
                      <li key={x} className="flex items-center gap-3">
                        <span aria-hidden className="h-0.5 w-4 bg-contour" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-ink-soft">
                    ve gelecekte farklı spor deneyimlerini aynı çatı altında buluşturan bir topluluk olmak.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-extrabold uppercase [font-stretch:120%]">Misyonumuz</h2>
                  <ul className="mt-4 space-y-3 text-ink-soft">
                    <li>İnsanları hareket etmeye teşvik etmek.</li>
                    <li>Her seviyeden insanı sporda buluşturmak.</li>
                    <li>Kapadokya&rsquo;nın doğal güzelliklerini sporla keşfetmek.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="what-title" className="border-b border-ink bg-sheet-deep/40">
          <div className="mx-auto max-w-[90rem] px-4 py-16 sm:px-6 md:py-24 lg:px-10">
            <h2 id="what-title" className="display text-[clamp(2.25rem,4.4vw,4rem)]">
              Neler yapıyoruz?
            </h2>
            <div className="mt-12 border-t border-ink">
              {PRINCIPLES.map((p) => (
                <article key={p.title} className="grid gap-4 border-b border-ink py-8 md:grid-cols-12 md:gap-8">
                  <h3 className="text-2xl font-extrabold uppercase leading-tight [font-stretch:120%] md:col-span-4">
                    {p.title}
                  </h3>
                  <p className="max-w-[65ch] text-lg leading-relaxed text-ink-soft md:col-span-7 md:col-start-6">{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="calendar-title" className="sheet border-b border-ink">
          <div className="mx-auto grid max-w-[90rem] gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-12 lg:gap-8 lg:px-10">
            <div className="lg:col-span-5">
              <h2 id="calendar-title" className="display text-[clamp(2rem,3.6vw,3.25rem)]">
                Etkinlik takvimimizde seni bekleyenler
              </h2>
              <p className="mt-6 max-w-md text-lg text-ink-soft">
                Sadece koşu değil; Kapadokya&rsquo;yı hareketle keşfeden, bir topluluğun içinde kendine yer bulan bir
                deneyim.
              </p>
              <RouteButton href="/bize-katilin" className="mt-8">
                Aramıza katıl
              </RouteButton>
            </div>
            <ul className="grid self-start border-t border-ink bg-sheet sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
              {ACTIVITIES.map((a) => (
                <li key={a} className="flex min-h-16 items-center gap-4 border-b border-ink px-1 py-3 font-semibold sm:odd:border-r sm:odd:pr-4 sm:even:pl-4">
                  <svg aria-hidden viewBox="0 0 12 12" className="size-3 shrink-0 text-contour">
                    <path d="M6 1 11 10H1L6 1Z" fill="currentColor" />
                  </svg>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
