/** Bathtub curve — reliability motif for ageing assets */
export function BathtubCurve({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Axes */}
      <path
        d="M36 24v140h420"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.35"
      />
      {/* Bathtub hazard rate */}
      <path
        d="M52 48
           C78 120, 110 148, 168 152
           C230 156, 280 148, 330 118
           C372 92, 400 58, 438 36"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Wear-out accent segment */}
      <path
        d="M330 118
           C372 92, 400 58, 438 36"
        stroke="#c45c26"
        strokeWidth="2.25"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Phase ticks */}
      <path d="M120 164v6M250 164v6M380 164v6" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}
