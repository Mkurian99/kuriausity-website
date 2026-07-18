/**
 * Brand mark: a minimal neural constellation resolving into a legible "K" —
 * five nodes and three connecting lines, echoing the hero brain's dot-and-line
 * language at wordmark scale. Color follows the parent's `color` (currentColor).
 */
export default function LogoMark({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <line x1="6" y1="4" x2="6" y2="20" />
        <line x1="6" y1="12" x2="18" y2="4" />
        <line x1="6" y1="12" x2="18" y2="20" />
      </g>
      <circle cx="6" cy="4" r="1.6" fill="currentColor" />
      <circle cx="6" cy="20" r="1.6" fill="currentColor" />
      <circle cx="18" cy="4" r="1.6" fill="currentColor" />
      <circle cx="18" cy="20" r="1.6" fill="currentColor" />
      <circle cx="6" cy="12" r="2.2" fill="currentColor" />
    </svg>
  );
}
