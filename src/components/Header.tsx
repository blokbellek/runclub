"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { RouteButton } from "./map/RouteButton";
import { Wordmark } from "./map/Wordmark";

const NAV = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/program", label: "Program" },
  { href: "/galeri", label: "Galeri" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-sheet">
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Link href="/" aria-label="Cappadocia Run Club ana sayfa" className="text-ink">
          <Wordmark />
        </Link>

        <nav aria-label="Ana menü" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm font-semibold uppercase tracking-[0.06em] [font-stretch:110%] transition-colors",
                  active
                    ? "text-ink underline decoration-route decoration-2 underline-offset-[0.5em]"
                    : "text-ink-soft hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <RouteButton href="/bize-katilin" size="md" className="gap-3 hover:gap-4">
            Katıl
          </RouteButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            className="grid size-11 place-items-center border border-ink text-ink md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobil menü"
        hidden={!open}
        className="animate-fadeIn border-t border-ink bg-sheet md:hidden"
      >
        <ul className="divide-y divide-ink/25 px-4">
          {[{ href: "/", label: "Ana sayfa" }, ...NAV].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center justify-between text-lg font-bold uppercase [font-stretch:115%] aria-[current=page]:text-route"
              >
                {item.label}
                <ArrowRight aria-hidden className="size-4 text-ink-soft" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
