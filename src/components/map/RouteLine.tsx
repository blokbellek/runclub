"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Point = [number, number];

/**
 * Draws the Sunday route through points given in percent of the parent box.
 * Rendered in real pixels so the stroke stays even and the draw-on animation
 * can use the true path length.
 */
export function RouteLine({
  points,
  className,
  animate = true,
  color = "var(--route)",
}: {
  points: Point[];
  className?: string;
  /** Draw on once; off for supporting segments so there is one authored moment. */
  animate?: boolean;
  color?: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el) return;
    // Padding box, to match the absolutely positioned SVG and any % positioned pins.
    const ro = new ResizeObserver(() => setSize({ w: el.clientWidth, h: el.clientHeight }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  let d = "";
  if (size) {
    const px = points.map(([x, y]) => [(x / 100) * size.w, (y / 100) * size.h] as Point);
    d = `M${px[0][0]} ${px[0][1]}`;
    // Catmull-Rom → cubic Bézier for a hand-drawn, continuous line.
    for (let i = 0; i < px.length - 1; i++) {
      const p0 = px[i - 1] ?? px[i];
      const p1 = px[i];
      const p2 = px[i + 1];
      const p3 = px[i + 2] ?? p2;
      const c1: Point = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2: Point = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += ` C${c1[0]} ${c1[1]} ${c2[0]} ${c2[1]} ${p2[0]} ${p2[1]}`;
    }
  }

  return (
    <svg ref={ref} aria-hidden className={cn("pointer-events-none absolute inset-0 size-full overflow-visible", className)}>
      {d && (
        <path
          d={d}
          pathLength={1}
          className={animate ? "route-draw" : undefined}
          stroke={color}
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      )}
    </svg>
  );
}
