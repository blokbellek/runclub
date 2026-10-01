import { cn } from "@/lib/utils";
import { NorthArrow } from "./symbols";

type PageHeadProps = {
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Sheet name printed in the collar, e.g. the page's place in the club. */
  sheet: string;
  /** "md" for sentence-length titles that would stack into a tall wall at full size. */
  size?: "lg" | "md";
  children?: React.ReactNode;
};

/** Opening of an inner page: a fresh sheet with its own collar line. */
export function PageHead({ title, lead, sheet, size = "lg", children }: PageHeadProps) {
  return (
    <section className="sheet border-b border-ink">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 py-16 md:py-24 lg:grid-cols-12 lg:items-end">
          <div className={cn("min-w-0", children ? "lg:col-span-9" : "lg:col-span-12")}>
            <h1
              className={cn(
                "display",
                size === "lg" ? "text-[clamp(2.25rem,6.4vw,6rem)]" : "max-w-[18ch] text-[clamp(2rem,4.8vw,4.5rem)] leading-[1.1]",
              )}
            >
              {title}
            </h1>
            {lead && <div className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">{lead}</div>}
          </div>
          {children && <div className="lg:col-span-3 lg:justify-self-end">{children}</div>}
        </div>
        <div className="map-label flex items-center justify-between gap-6 border-t border-ink py-4 text-ink-soft">
          <span>Pafta · {sheet}</span>
          <span className="flex items-center gap-3">
            <span className="hidden sm:inline">Kapadokya · Nevşehir</span>
            <NorthArrow className="h-7 w-4 text-ink" />
          </span>
        </div>
      </div>
    </section>
  );
}
