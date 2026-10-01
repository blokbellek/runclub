// Legend symbols drawn in the sheet's own cartographic grammar.
type SymbolProps = React.SVGProps<SVGSVGElement>;

const base = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  "aria-hidden": true,
} as const;

/** Meeting point: a map pin with a ring at its foot. */
export function PinSymbol(props: SymbolProps) {
  return (
    <svg {...base} viewBox="0 0 40 40" {...props}>
      <ellipse cx="20" cy="35" rx="8" ry="2.5" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <path
        d="M20 34c-6-8.5-9.5-14-9.5-19a9.5 9.5 0 0 1 19 0c0 5-3.5 10.5-9.5 19Z"
        fill="var(--route)"
      />
      <circle cx="20" cy="15" r="3.6" fill="var(--sheet)" />
    </svg>
  );
}

/** Run: the solid route line. */
export function RouteSymbol(props: SymbolProps) {
  return (
    <svg {...base} viewBox="0 0 40 40" {...props}>
      <path
        d="M3 28c6 0 6-14 13-14s6 12 12 12 6-10 9-10"
        stroke="var(--route)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Walk: a footpath, dashed like on a topographic sheet. */
export function FootpathSymbol(props: SymbolProps) {
  return (
    <svg {...base} viewBox="0 0 40 40" {...props}>
      <path
        d="M3 28c6 0 6-14 13-14s6 12 12 12 6-10 9-10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 4.5"
      />
    </svg>
  );
}

/** Tea after: a tulip tea glass on its saucer. */
export function TeaSymbol(props: SymbolProps) {
  return (
    <svg {...base} viewBox="0 0 40 40" {...props}>
      <path
        d="M13.5 8h13c0 4-2.6 6.2-2.6 9.6 0 3.6 3.1 6 3.1 10.4 0 3-2.6 5-7 5s-7-2-7-5c0-4.4 3.1-6.8 3.1-10.4 0-3.4-2.6-5.6-2.6-9.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M14.4 24.5h11.2c.6 1.1 1 2.2 1 3.5 0 2.2-2.2 3.6-6.6 3.6s-6.6-1.4-6.6-3.6c0-1.3.4-2.4 1-3.5Z"
        fill="var(--contour)"
      />
      <path d="M6 35.5h28" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Spot height / summit triangle. */
export function SummitSymbol(props: SymbolProps) {
  return (
    <svg {...base} viewBox="0 0 40 40" {...props}>
      <path d="M20 9 32 31H8L20 9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="20" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}

/** North arrow, as printed in a sheet collar. */
export function NorthArrow(props: SymbolProps) {
  return (
    <svg {...base} viewBox="0 0 24 40" {...props}>
      <path d="M12 4 19 30 12 25 5 30 12 4Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M12 4v21l-7 5 7-26Z" fill="currentColor" />
      <text x="12" y="39" textAnchor="middle" fontSize="8" fontWeight="700" fill="currentColor">
        K
      </text>
    </svg>
  );
}
