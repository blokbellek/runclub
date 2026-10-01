import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type RouteButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: "sheet" | "night";
  size?: "md" | "lg";
};

/** The single action control: ultramarine, like the route line on the sheet. */
export function RouteButton({ href, children, className, tone = "sheet", size = "lg" }: RouteButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-between gap-6 font-bold uppercase tracking-[0.06em] [font-stretch:115%]",
        "transition-[background-color,color,gap] duration-300 ease-out-expo hover:gap-8 active:translate-y-px",
        size === "lg" ? "min-h-14 px-6 text-sm" : "min-h-11 px-4 text-xs",
        tone === "sheet"
          ? "bg-route text-sheet hover:bg-route-deep"
          : "bg-route-light text-night hover:bg-night-ink",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden className="size-4 shrink-0" strokeWidth={2.4} />
    </Link>
  );
}
