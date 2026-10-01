import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Neatline } from "../map/Neatline";

const FRAMES = [
  {
    src: "/images/gallery/6.JPG",
    alt: "Üyeler koşu sonrası vadiye bakan pencerenin önünde uzun bir kahvaltı masasında",
    label: "Koşu sonrası kahvaltı",
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/gallery/2.JPG",
    alt: "Göğüs numaralı kulüp üyeleri yarış sonrası madalyalarını gösteriyor",
    label: "Yarış günü",
    span: "md:col-span-5 md:mt-24",
    aspect: "aspect-[4/5]",
  },
];

export function Frames() {
  return (
    <section aria-labelledby="frames-title" className="sheet-quiet border-b border-ink">
      <div className="mx-auto max-w-[90rem] px-4 py-20 sm:px-6 md:py-28 lg:px-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 id="frames-title" className="display text-[clamp(2.25rem,4.4vw,4rem)]">
            Vadiden kareler
          </h2>
          <Link
            href="/galeri"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.06em] text-route [font-stretch:115%]"
          >
            <span className="underline decoration-route/40 group-hover:decoration-route">Tüm galeri</span>
            <ArrowRight aria-hidden className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-8">
          {FRAMES.map((f) => (
            <Neatline key={f.src} className={f.span} bottomLeft={f.label}>
              <div className={cn("relative", f.aspect)}>
                <Image src={f.src} alt={f.alt} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
              </div>
            </Neatline>
          ))}
        </div>
      </div>
    </section>
  );
}
