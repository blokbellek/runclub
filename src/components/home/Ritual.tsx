import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Neatline } from "../map/Neatline";
import { FootpathSymbol, PinSymbol, RouteSymbol, TeaSymbol } from "../map/symbols";

const MAPS_URL = "https://www.google.com/maps?q=38.651405334472656,34.836097717285156&z=17&hl=tr";

const LEGEND = [
  {
    symbol: PinSymbol,
    term: "Buluşma",
    text: "Her pazar buluşuyoruz. Haftanın rotasını ve saatini Instagram'dan duyuruyoruz.",
    link: { href: MAPS_URL, label: "Rose Valley buluşma noktası" },
  },
  {
    symbol: RouteSymbol,
    term: "Koşu",
    text: "Kapadokya'nın eşsiz rotaları boyunca koşuyoruz; bitiş çizgisi yok, yarış yok. Herkes kendi temposunda.",
  },
  {
    symbol: FootpathSymbol,
    term: "Yürüyüş de olur",
    text: "İster yürü, ister koş. Önemli olan hızın değil, o gün orada bizimle olman. Tek ihtiyacın bir çift ayakkabı.",
  },
  {
    symbol: TeaSymbol,
    term: "Sonrası",
    text: "Koşudan sonra dağılmıyoruz; sıcak bir içecek eşliğinde oturup günü birlikte kapatıyoruz.",
  },
];

export function Ritual() {
  return (
    <section aria-labelledby="ritual-title" className="sheet-quiet border-b border-ink">
      <div className="mx-auto grid max-w-[90rem] gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <div className="lg:col-span-6 xl:col-span-6">
          <h2 id="ritual-title" className="display text-[clamp(2.25rem,4.4vw,4rem)]">
            Pazar sabahının lejantı
          </h2>
          <p className="mt-5 max-w-lg text-lg text-ink-soft">
            Profesyonel atlet olmana, hatta daha önce hiç koşmuş olmana gerek yok. Pazarımız dört işaretten oluşuyor.
          </p>

          <dl className="mt-12 border-t border-ink">
            {LEGEND.map(({ symbol: Symbol, term, text, link }) => (
              <div key={term} className="grid grid-cols-[3.5rem_1fr] gap-x-5 border-b border-ink py-6 sm:grid-cols-[4rem_10rem_1fr]">
                <Symbol className="row-span-2 size-12 text-ink sm:row-span-1 sm:size-14" />
                <dt className="self-center text-base font-extrabold uppercase tracking-[0.02em] [font-stretch:120%]">
                  {term}
                </dt>
                <dd className="col-start-2 mt-1 text-ink-soft sm:col-start-3 sm:mt-0 sm:self-center">
                  {text}
                  {link && (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex w-fit items-center gap-1 font-semibold text-route underline decoration-route/40 hover:decoration-route"
                    >
                      {link.label}
                      <ArrowUpRight aria-hidden className="size-4" />
                    </a>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5 lg:col-start-8 lg:pt-28">
          <Neatline topLeft="Koşu sonrası" topRight="Kapadokya">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/gallery/1.JPG"
                alt="Koşu sonrası üyeler asma gölgesindeki bahçede sandalyelerde dinleniyor"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover object-[35%_50%]"
              />
            </div>
          </Neatline>
        </div>
      </div>
    </section>
  );
}
