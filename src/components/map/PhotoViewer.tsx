"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type Photo = {
  src: string;
  alt: string;
  label?: string;
  /** Tailwind classes for this tile's frame (span, aspect). */
  tile?: string;
};

type PhotoViewerProps = {
  photos: Photo[];
  className?: string;
  /** "cover" crops tiles; "contain" keeps posters whole. */
  fit?: "cover" | "contain";
  sizes?: string;
};

/** A grid of framed photos that open full-size in a native dialog. */
export function PhotoViewer({ photos, className, fit = "cover", sizes = "(min-width: 1024px) 33vw, 100vw" }: PhotoViewerProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => setIndex(null);
    el.addEventListener("keydown", onKey);
    el.addEventListener("close", onClose);
    return () => {
      el.removeEventListener("keydown", onKey);
      el.removeEventListener("close", onClose);
    };
  }, [step]);

  const current = index === null ? null : photos[index];

  return (
    <>
      <ul className={className}>
        {photos.map((p, i) => (
          <li key={p.src} className={cn("min-w-0", p.tile)}>
            <button
              type="button"
              onClick={() => open(i)}
              aria-label={`Büyüt: ${p.alt}`}
              className="group relative block w-full cursor-zoom-in border border-ink bg-sheet-deep p-1.5 text-left"
            >
              <span className={cn("relative block overflow-hidden", fit === "contain" ? "aspect-square" : "aspect-[4/5]")}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes={sizes}
                  className={cn(
                    "transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]",
                    fit === "contain" ? "object-contain" : "object-cover",
                  )}
                />
                <span className="absolute right-2 top-2 grid size-9 place-items-center bg-sheet text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Maximize2 aria-hidden className="size-4" />
                </span>
              </span>
            </button>
            {p.label && <p className="map-label mt-2 text-ink-soft">{p.label}</p>}
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        aria-label={current?.alt ?? "Fotoğraf"}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-night/95 p-0 text-night-ink backdrop:bg-night/80"
      >
        {current && (
          <div className="flex h-full flex-col">
            <div className="map-label flex items-center justify-between gap-4 px-4 py-3 text-night-soft">
              <span className="tabular">
                {String((index ?? 0) + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Kapat"
                className="grid size-11 place-items-center border border-night-soft/50 text-night-ink hover:bg-night-ink hover:text-night"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="relative min-h-0 flex-1" onClick={(e) => e.target === e.currentTarget && close()}>
              <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain p-2 sm:p-6" />
            </div>
            {photos.length > 1 && (
              <div className="flex items-center justify-between gap-4 px-4 py-3">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Önceki fotoğraf"
                  className="grid size-11 place-items-center border border-night-soft/50 hover:bg-night-ink hover:text-night"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <p className="text-center text-sm text-night-soft">{current.label ?? current.alt}</p>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Sonraki fotoğraf"
                  className="grid size-11 place-items-center border border-night-soft/50 hover:bg-night-ink hover:text-night"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
