import Image from "next/image";
import { cn } from "@/lib/utils";

/** Club lockup: the logo illustration with the club name set in the site's type. */
export function Wordmark({ className, size = "sm" }: { className?: string; size?: "sm" | "lg" }) {
  return (
    <span className={cn("flex items-center", size === "sm" ? "gap-2 sm:gap-2.5" : "flex-col items-start gap-4", className)}>
      <Image
        src="/images/brand/logo-mark.png"
        alt=""
        width={994}
        height={580}
        sizes={size === "sm" ? "80px" : "220px"}
        className={cn("shrink-0", size === "sm" ? "h-8 w-auto sm:h-11" : "h-auto w-52")}
      />
      <span className="leading-none">
        <span
          lang="en"
          className={cn(
            "block font-extrabold uppercase tracking-[0.02em] [font-stretch:110%] sm:[font-stretch:125%]",
            size === "sm" ? "text-[0.85rem] sm:text-[0.95rem]" : "text-xl",
          )}
        >
          CAPPADOCIA
        </span>
        <span lang="en" className="map-label mt-1 block text-ink-soft">
          Run Club
        </span>
      </span>
    </span>
  );
}
