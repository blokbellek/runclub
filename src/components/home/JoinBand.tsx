import { RouteButton } from "../map/RouteButton";
import { FootpathSymbol, RouteSymbol, SummitSymbol } from "../map/symbols";

const FACTS = [
  { symbol: FootpathSymbol, text: "Tüm seviyelere açık" },
  { symbol: RouteSymbol, text: "Her pazar bir koşu" },
  { symbol: SummitSymbol, text: "Yalnızca 3 kısa adım" },
];

export function JoinBand() {
  return (
    <section aria-labelledby="join-title" className="night">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-12 lg:items-end lg:px-10">
        <div className="lg:col-span-7">
          <h2 id="join-title" className="display text-[clamp(2.75rem,6vw,5.5rem)] text-night-ink">
            Aramıza katıl.
          </h2>
          <p className="mt-6 max-w-md text-lg text-night-soft">
            Birkaç kısa adımda seni tanıyalım — gerisini birlikte koşarken hallederiz.
          </p>
        </div>

        <div className="lg:col-span-5">
          <ul className="border-t border-night-soft/50">
            {FACTS.map(({ symbol: Symbol, text }) => (
              <li key={text} className="flex items-center gap-4 border-b border-night-soft/50 py-4 font-semibold text-night-ink">
                <Symbol className="size-9 text-night-soft" />
                {text}
              </li>
            ))}
          </ul>
          {/* The route arrives at the action. */}
          <div className="mt-8 flex items-center">
            <svg aria-hidden viewBox="0 0 160 24" preserveAspectRatio="none" className="hidden h-6 flex-1 sm:block">
              <path
                d="M2 16c18 0 22-12 40-12s22 16 42 16 24-12 40-12 22 8 34 8"
                stroke="var(--route-light)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <RouteButton href="/bize-katilin" tone="night" className="w-full sm:w-auto">
              Kayıt ol
            </RouteButton>
          </div>
        </div>
      </div>
    </section>
  );
}
