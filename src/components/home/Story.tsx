import Image from "next/image";
import { Neatline } from "../map/Neatline";

export function Story() {
  return (
    <section id="hikayemiz" aria-labelledby="story-title" className="scroll-mt-20 border-b border-ink bg-sheet-deep/40">
      <div className="mx-auto grid max-w-[90rem] gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Neatline topLeft={<span className="place normal-case tracking-normal text-[0.8rem]">Avanos</span>} topRight="Kızılırmak kıyısı">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/gallery/5.JPG"
                  alt="Kulüp üyeleri Avanos tabelasının önünde, ırmak kıyısında toplu fotoğraf veriyor"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Neatline>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <h2 id="story-title" className="display text-[clamp(2.25rem,4.4vw,4rem)]">
            Hikayemiz
          </h2>

          <div className="mt-10 max-w-[65ch] space-y-6 text-lg leading-relaxed text-ink-soft">
            <p>
              Cappadocia Run Club&rsquo;ın hikâyesi, çocukluk yıllarında atletizm pistlerinde başladı. Aynı sporu yaparken
              tanıştık, birlikte antrenman yaptık, yarışlara hazırlandık ve sporun hayatımıza kattığı disiplini, dostluğu ve
              paylaşımı birlikte yaşadık.
            </p>
            <p>
              Üniversite yıllarında eğitimimiz nedeniyle farklı şehirlerde olsak da spordan hiç kopmadık. Zaman geçtikçe
              yollarımız yeniden kesişti ve yıllara dayanan arkadaşlığımız daha da güçlendi. Atletizmin içinde edindiğimiz
              deneyimleri artık sadece kendimiz için değil, başkalarıyla da paylaşmak istediğimizi fark ettik.
            </p>
          </div>

          <p className="my-12 max-w-[22ch] text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.08] text-ink [font-stretch:115%]">
            İşte Cappadocia Run Club bu fikirle doğdu.
          </p>

          <div className="max-w-[65ch] space-y-6 text-lg leading-relaxed text-ink-soft">
            <p>
              Amacımız yalnızca birlikte koşmak değil; insanların kendilerini ait hissedebileceği, yeni dostluklar
              kurabileceği ve hareketli bir yaşamın parçası olabileceği bir topluluk oluşturmaktı.
            </p>
            <p>
              Kapadokya&rsquo;nın eşsiz doğasını sporla buluşturuyor, her seviyeden katılımcıyı aynı başlangıç çizgisinde bir
              araya getiriyoruz. Çünkü bizim için önemli olan hız değil; birlikte hareket etmek, keşfetmek ve bu yolculuğu
              paylaşmak.
            </p>
            <p className="border-t border-ink pt-6 font-semibold text-ink">
              Bu daha yolun başı. Cappadocia Run Club, bugün koşuyla başlayan; gelecekte farklı spor branşlarını, doğa
              aktivitelerini ve sosyal etkinlikleri bir araya getiren güçlü bir topluluğa dönüşmeyi hedefliyor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
