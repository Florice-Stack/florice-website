type FlowStep = {
  id: string;
  label: string;
  x: number;
};

const BOX_W = 96;
const BOX_H = 64;

const steps: FlowStep[] = [
  { id: "intake", label: "Paddy intake", x: 28 },
  { id: "preclean", label: "Pre-clean", x: 132 },
  { id: "destone", label: "De-stone", x: 236 },
  { id: "hull", label: "Hull / shell", x: 340 },
  { id: "whiten", label: "Whiten", x: 444 },
  { id: "grade", label: "Grade", x: 548 },
  { id: "pack", label: "Bagging", x: 652 },
];

type Props = {
  variant?: "default" | "hero";
};

export default function RiceMillFlowDiagram({ variant = "default" }: Props) {
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
        viewBox="0 0 776 260"
        role="img"
        aria-label="Rice milling process flow from paddy intake through bagging"
        preserveAspectRatio="xMinYMid meet"
        className={isHero ? "block h-auto min-h-[220px] w-full min-w-[720px] md:min-h-[260px]" : "block h-auto w-full min-w-[640px]"}
      >
        <defs>
          <linearGradient id="rice-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ece8df" />
            <stop offset="100%" stopColor="#f6f3ec" />
          </linearGradient>
          <marker id="rice-arrow" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 Z" fill="#465738" />
          </marker>
        </defs>
        <rect width="776" height="260" rx="4" fill="url(#rice-bg)" stroke="#cfc9bc" />
        <text
          x="28"
          y="36"
          fill="#465738"
          style={{ fontSize: isHero ? 14 : 12, fontWeight: 600, letterSpacing: "0.08em" }}
        >
          RICE MILLING TRAIN
        </text>
        {steps.map((step, index) => (
          <g key={step.id}>
            <rect
              x={step.x}
              y="84"
              width={BOX_W}
              height={BOX_H}
              rx="2"
              fill="#fdfcf9"
              stroke="#465738"
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
                stroke="#465738"
                strokeWidth="2"
                markerEnd="url(#rice-arrow)"
              />
            )}
          </g>
        ))}
        <g opacity="0.85">
          <path d="M28 188 h720" stroke="#7a6348" strokeWidth="1" strokeDasharray="4 4" />
          <text x="28" y="218" fill="#5a574f" style={{ fontSize: isHero ? 12 : 10 }}>
            Aspiration · pneumatic lift · bucket elevators between stages
          </text>
        </g>
      </svg>
    </div>
  );
}
