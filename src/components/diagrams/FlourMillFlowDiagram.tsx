const BOX_W = 88;
const BOX_H = 64;

const steps = [
  { label: "Wheat intake", x: 28 },
  { label: "Clean", x: 128 },
  { label: "Condition", x: 228 },
  { label: "Break", x: 328 },
  { label: "Purify", x: 428 },
  { label: "Reduce", x: 528 },
  { label: "Pack", x: 628 },
];

type Props = {
  variant?: "default" | "hero";
};

export default function FlourMillFlowDiagram({ variant = "default" }: Props) {
  const isHero = variant === "hero";

  return (
    <div
      className={
        isHero
          ? "overflow-x-auto rounded-sm border border-[var(--border)] bg-ivory-card shadow-card"
          : "overflow-x-auto rounded-sm border border-[var(--border)]"
      }
    >
      <svg
        viewBox="0 0 744 260"
        role="img"
        aria-label="Wheat flour milling process flow from intake through bagging"
        preserveAspectRatio="xMinYMid meet"
        className={isHero ? "block h-auto min-h-[220px] w-full min-w-[720px] md:min-h-[260px]" : "block h-auto w-full min-w-[640px]"}
      >
        <defs>
          <linearGradient id="flour-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ece8df" />
            <stop offset="100%" stopColor="#f6f3ec" />
          </linearGradient>
          <marker id="flour-arrow" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#3f5363" />
          </marker>
        </defs>
        <rect width="744" height="260" rx="4" fill="url(#flour-bg)" stroke="#cfc9bc" />
        <text
          x="28"
          y="36"
          fill="#3f5363"
          style={{ fontSize: isHero ? 14 : 12, fontWeight: 600, letterSpacing: "0.08em" }}
        >
          WHEAT / FLOUR MILLING TRAIN
        </text>
        {steps.map((step, index) => (
          <g key={step.label}>
            <rect
              x={step.x}
              y="84"
              width={BOX_W}
              height={BOX_H}
              rx="2"
              fill="#fdfcf9"
              stroke="#3f5363"
              strokeWidth="1.5"
            />
            <text
              x={step.x + BOX_W / 2}
              y="120"
              textAnchor="middle"
              fill="#1a1917"
              style={{ fontSize: isHero ? 13 : 11, fontWeight: 600 }}
            >
              {step.label}
            </text>
            {index < steps.length - 1 && (
              <line
                x1={step.x + BOX_W}
                y1="116"
                x2={steps[index + 1].x}
                y2="116"
                stroke="#3f5363"
                strokeWidth="2"
                markerEnd="url(#flour-arrow)"
              />
            )}
          </g>
        ))}
        <g opacity="0.85">
          <path d="M28 188 h688" stroke="#7a6348" strokeWidth="1" strokeDasharray="4 4" />
          <text x="28" y="218" fill="#5a574f" style={{ fontSize: isHero ? 12 : 10 }}>
            Plansifters · purifiers · bran finishers · pneumatic / elevator transfer
          </text>
        </g>
      </svg>
    </div>
  );
}
