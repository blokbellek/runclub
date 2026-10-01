import { cn } from "@/lib/utils";

type NeatlineProps = {
  children: React.ReactNode;
  className?: string;
  /** Collar labels printed outside the frame, like a map inset. */
  topLeft?: React.ReactNode;
  topRight?: React.ReactNode;
  bottomLeft?: React.ReactNode;
  bottomRight?: React.ReactNode;
  tone?: "sheet" | "night";
};

/**
 * A map inset: a hairline frame with graticule ticks on each edge and
 * collar labels just outside it.
 */
export function Neatline({
  children,
  className,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  tone = "sheet",
}: NeatlineProps) {
  const line = tone === "night" ? "bg-night-soft" : "bg-ink";
  const text = tone === "night" ? "text-night-soft" : "text-ink-soft";
  const hasTop = topLeft || topRight;
  const hasBottom = bottomLeft || bottomRight;

  return (
    <figure className={cn("relative", className)}>
      {hasTop && (
        <figcaption className={cn("map-label mb-2 flex justify-between gap-4", text)}>
          <span>{topLeft}</span>
          <span className="text-right">{topRight}</span>
        </figcaption>
      )}
      <div className={cn("relative border p-1.5", tone === "night" ? "border-night-soft" : "border-ink")}>
        {/* graticule ticks */}
        {["left-1/4", "left-1/2", "left-3/4"].map((x) => (
          <span key={`t-${x}`} aria-hidden className={cn("absolute -top-2 h-2 w-px", x, line)} />
        ))}
        {["left-1/4", "left-1/2", "left-3/4"].map((x) => (
          <span key={`b-${x}`} aria-hidden className={cn("absolute -bottom-2 h-2 w-px", x, line)} />
        ))}
        {["top-1/3", "top-2/3"].map((y) => (
          <span key={`l-${y}`} aria-hidden className={cn("absolute -left-2 h-px w-2", y, line)} />
        ))}
        {["top-1/3", "top-2/3"].map((y) => (
          <span key={`r-${y}`} aria-hidden className={cn("absolute -right-2 h-px w-2", y, line)} />
        ))}
        <div className="relative overflow-hidden">{children}</div>
      </div>
      {hasBottom && (
        <div className={cn("map-label mt-2 flex justify-between gap-4", text)}>
          <span>{bottomLeft}</span>
          <span className="text-right">{bottomRight}</span>
        </div>
      )}
    </figure>
  );
}
