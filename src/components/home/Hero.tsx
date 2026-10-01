import Image from "next/image";
import { InstagramIcon } from "../icons";
import { Neatline } from "../map/Neatline";
import { RouteButton } from "../map/RouteButton";
import { NorthArrow, PinSymbol } from "../map/symbols";
import { RouteLine } from "../map/RouteLine";

export function Hero() {
  return (
    <section className="sheet relative isolate overflow-hidden border-b border-ink">
      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-[90rem] grid-rows-[1fr_auto] px-4 sm:px-6 lg:px-10">
        <div className="relative grid items-center gap-10 py-8 sm:py-12 lg:grid-cols-12 lg:gap-8 lg:py-14">
          {/* The Sunday route, drawn across the sheet to the meeting point. */}
          <RouteLine
            className="z-10 hidden lg:block"
            points={[
              [-4, 97],
              [9, 90],
              [20, 95],
              [33, 92],
              [43, 80],
              [52, 88],
              [61, 84],
            ]}
          />

          <div className="relative order-2 lg:order-1 lg:col-span-6">
            <h1 className="display text-[clamp(2.75rem,5vw,5.5rem)] text-ink">
              İYİ Kİ
              <br />
              <span lang="en" className="whitespace-nowrap">
                CAPPADOCIA
              </span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft sm:text-xl">
              Kapadokya&rsquo;nın vadilerinde her pazar buluşan koşu topluluğu.{" "}
              <span className="font-semibold text-ink">Tempon senin, yolculuk bizimle.</span>
            </p>
            <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
              <RouteButton href="/bize-katilin">Pazar koşusuna katıl</RouteButton>
              <a
                href="https://www.instagram.com/cappadociarunclub/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-ink/40 hover:decoration-route hover:text-route"
              >
                <InstagramIcon className="size-4" />
                @cappadociarunclub
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <Neatline
              topLeft={<span className="place normal-case tracking-normal text-[0.8rem]">Güllüdere Vadisi</span>}
              topRight="Rose Valley · Göreme"
              bottomLeft="38°39′05″ K"
              bottomRight="34°50′10″ D"
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-[min(68svh,40rem)]">
                <Image
                  src="/images/hero-background.jpg"
                  alt="İki kulüp üyesi Güllüdere Vadisi'nin pembe tüf kayalıklarının önünde havaya zıplıyor"
                  fill
                  fetchPriority="high"
                  loading="eager"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[50%_42%]"
                />
                {/* Phones: the route runs across the valley floor to the meeting point. */}
                <RouteLine
                  className="lg:hidden"
                  points={[
                    [-4, 95],
                    [8, 88],
                    [20, 92],
                  ]}
                />
                <div className="pointer-events-none absolute left-[20%] top-[92%] -translate-x-1/2 -translate-y-full lg:hidden">
                  <div className="pin-drop flex flex-col items-center">
                    <span className="map-label mb-1 whitespace-nowrap bg-sheet px-2 py-1 text-ink">Buluşma</span>
                    <PinSymbol className="size-9" />
                  </div>
                </div>
              </div>
            </Neatline>
          </div>

          {/* Meeting point pin, where the route ends. */}
          <div className="pointer-events-none absolute left-[61%] top-[84%] z-20 hidden -translate-x-1/2 -translate-y-full lg:block">
            <div className="pin-drop flex flex-col items-center">
              <span className="map-label mb-1 whitespace-nowrap border border-ink bg-sheet px-2 py-1 text-ink">
                Buluşma
              </span>
              <PinSymbol className="size-10" />
            </div>
          </div>
        </div>

        {/* Sheet collar */}
        <div className="map-label flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-ink py-4 text-ink-soft">
          <span className="flex items-center gap-3">
            <svg aria-hidden viewBox="0 0 120 10" className="h-2.5 w-28">
              <rect x="0.5" y="2" width="29.5" height="5" fill="var(--ink)" />
              <rect x="30" y="2" width="30" height="5" fill="none" stroke="var(--ink)" />
              <rect x="60" y="2" width="30" height="5" fill="var(--ink)" />
              <rect x="90" y="2" width="29.5" height="5" fill="none" stroke="var(--ink)" />
            </svg>
            Ölçek 1:25 000
          </span>
          <span className="hidden sm:inline">Kapadokya · Nevşehir</span>
          <span className="flex items-center gap-3">
            Her pazar · Her seviye
            <NorthArrow className="h-7 w-4 text-ink" />
          </span>
        </div>
      </div>
    </section>
  );
}
