export const site = {
  name: "Florice Milling Spare & Solution",
  tagline: "Milling Spare & Solution",
  email: "consult@floricemilling.com",
  phone: "+91 98765 43210",
  description:
    "Independent consulting for rice mills, wheat flour mills, parboiling plants, and grain processing machinery optimization.",
};

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Projects" },
  { href: "/about", label: "About & FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const heroScope = [
  {
    title: "Rice & parboiling",
    description: "Paddy cleaning, hulling, whitening, polishing, soaking, steaming, drying",
  },
  {
    title: "Wheat & flour",
    description: "Conditioning, break-reduction, purifiers, plansifters, mixing systems",
  },
  {
    title: "Handling systems",
    description: "Bucket elevators, pneumatic conveying, spouting, ducting, cyclones",
  },
  {
    title: "Project support",
    description: "Layout design, spare parts sourcing, commissioning, troubleshooting",
  },
];

export const missionItems = [
  {
    title: "Increase productivity",
    description:
      "Higher head rice and flour recovery through effective, adaptable process and equipment decisions.",
  },
  {
    title: "Reduce operating costs",
    description:
      "Lower downtime, aspiration load, and maintenance burden with right-sized machinery and stable parameters.",
  },
  {
    title: "Build reliability",
    description:
      "Vendor-neutral specs, commissioning oversight, and spare parts coordination you can run shift after shift.",
  },
];

export const services = [
  {
    tag: "Rice · Wheat · Parboiling",
    title: "Plant Assessment",
    description:
      "Walk-through of your milling train with recovery mapping at each stage — from paddy intake or wheat conditioning through final grading and bagging.",
    deliverables: [
      "Head rice / flour extraction baseline",
      "Bottleneck and aspiration audit",
      "Prioritized improvement register",
    ],
  },
  {
    tag: "Equipment · Capex",
    title: "Machinery Selection",
    description:
      "Specification of hullers, rubber roll huskers, whiteners, plansifters, destoners, and conveying elements matched to your grain variety and TPH target.",
    deliverables: [
      "Vendor-neutral equipment shortlist",
      "Capacity and power load estimates",
      "Layout clearance and install notes",
    ],
  },
  {
    tag: "Process · Yield",
    title: "Process Optimization",
    description:
      "Adjustment of roll gaps, screen sizes, air volumes, and feed rates to raise extraction while controlling broken percentage, bran carry-over, and moisture drift.",
    deliverables: [
      "Parameter setting sheets per machine",
      "Before/after recovery comparison",
      "Operator tuning guidelines",
    ],
  },
  {
    tag: "Capacity · Layout",
    title: "Expansion Planning",
    description:
      "Feasibility and phased layout for additional milling capacity, new product grades, or brownfield line extensions without halting current production.",
    deliverables: [
      "Material flow and silo sizing",
      "Capex phasing with downtime windows",
      "Utility and aspiration load review",
    ],
  },
  {
    tag: "Startup · Handover",
    title: "Commissioning Support",
    description:
      "On-site oversight during equipment installation and first production runs — alignment, aspiration balancing, interlock verification, and operator sign-off.",
    deliverables: [
      "Pre-start mechanical checklist",
      "Run-in and parameter lock-in",
      "Handover documentation pack",
    ],
  },
  {
    tag: "Downtime · Root cause",
    title: "Technical Troubleshooting",
    description:
      "Diagnosis of blockages in pneumatic lines, high broken rice after variety change, plansifter overload, motor trips, and inconsistent grade output.",
    deliverables: [
      "Root-cause report with evidence",
      "Corrective action sequence",
      "Spare parts identification where needed",
    ],
  },
];

export const industries = [
  {
    label: "Primary",
    title: "Rice Milling",
    description:
      "Paddy pre-cleaning through final polishing — including 2–40 TPH modern mills, aromatic basmati lines, and traditional mills adding automated hulling and grading stages.",
  },
  {
    label: "Primary",
    title: "Wheat Flour Milling",
    description:
      "Intensive dampening, break and reduction passages, purifiers, and bran finishers for atta, maida, semolina, and bakery flour with ash and moisture targets.",
  },
  {
    label: "Intake",
    title: "Grain Cleaning & Grading",
    description:
      "Pre-cleaners, scouring machines, gravity selectors, indent cylinders, and optical sorters upstream of milling or storage silos.",
  },
  {
    label: "Process",
    title: "Parboiling",
    description:
      "Batch and continuous soaking, steaming vessels, and dryer integration — gelatinization control, steam distribution, and energy balance before milling.",
  },
  {
    label: "Dispatch",
    title: "Packaging Lines",
    description:
      "Open-mouth and valve bagging, gross weigh-fill systems, metal detection, and palletizing matched to mill output and bag weight tolerances.",
  },
  {
    label: "Upgrade",
    title: "Modernization Projects",
    description:
      "PLC replacement, SCADA visibility, pneumatic conveying retrofits, bucket elevator upgrades, and aspiration system rebalancing for aging plants.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Diagnose",
    description:
      "Site visit, shift log review, and operator interviews. Map recovery at each machine, downtime events, and material flow constraints.",
  },
  {
    step: "02",
    title: "Evaluate",
    description:
      "Benchmark head rice, flour yield, broken percentage, and energy per tonne against comparable mills running your grain type and capacity.",
  },
  {
    step: "03",
    title: "Recommend",
    description:
      "Issue a prioritized action list — process parameter changes, equipment replacements, layout revisions — with cost range and expected recovery gain.",
  },
  {
    step: "04",
    title: "Implement",
    description:
      "Support procurement review, installation oversight, setting of roll gaps and air gates, and hands-on operator training during the change window.",
  },
  {
    step: "05",
    title: "Stabilize",
    description:
      "Monitor two to four production cycles post-change. Lock parameters into SOPs and verify recovery holds after our team departs.",
  },
];

export const outcomes = [
  {
    value: "+2–5%",
    title: "Head rice / flour recovery",
    description:
      "Typical gain from whitener train rebalancing, screen changes, and feed rate correction — verified against monthly production reports.",
  },
  {
    value: "−30%",
    title: "Unplanned stoppages",
    description:
      "Fewer pneumatic blockages, elevator overload trips, and emergency clean-outs after duct sizing and interlock corrections.",
  },
  {
    value: "Spec'd",
    title: "Right-sized equipment",
    description:
      "Machinery matched to paddy variety, moisture range, and actual TPH — avoiding overspend on capacity you cannot feed consistently.",
  },
  {
    value: "Held",
    title: "Stable shift parameters",
    description:
      "Documented roll settings, air volumes, and grading splits that operators maintain without constant supervisor intervention.",
  },
];

export const projects = [
  {
    meta: "Rice mill · Andhra Pradesh · 12 TPH · 6-week engagement",
    title: "Multi-stage whitener recovery audit",
    result: "Head rice: 58.1% → 63.4%",
    problem:
      "Basmati variety switch dropped head rice 4 points; broken rose to 22%. Operators over-compensating on final polisher.",
    scope:
      "Rubber roll gap audit on huller, MM whitener screen sizing, air gate calibration on silky polisher, and length grader re-split.",
    outcome:
      "Head rice restored to 63.4% within six weeks. Broken reduced to 18.6%. Power draw on whitening section down 8%.",
    type: "rice" as const,
  },
  {
    meta: "Flour mill · Punjab · 200 TPD · Pneumatic retrofit",
    title: "Break system aspiration & conveying",
    result: "Blockages: −72% · Aspiration kW: −14%",
    problem:
      "Daily blockages on pneumatic lift to plansifter floor. Cyclone choke causing break passage starvation and ash drift on maida stream.",
    scope:
      "Duct velocity survey, cyclone and rotary valve replacement spec, PLC pressure interlocks, and rotary valve maintenance schedule.",
    outcome:
      "Blockage incidents dropped from 11/month to 3. Aspiration motor load reduced 14%. Maida ash stabilized within grade spec.",
    type: "flour" as const,
  },
  {
    meta: "Parboiling · Nigeria · 8 TPH greenfield · Commissioning",
    title: "Steaming & drying line startup",
    result: "Design capacity in 22 days",
    problem:
      "New soaking tanks and vertical steamer failing gelatinization targets. Dryer bottleneck forcing paddy back into soaking cycle.",
    scope:
      "Steam trap and distribution audit, soak time/temperature curves, dryer plenum balancing, and 5-day operator training program.",
    outcome:
      "Stable parboiled paddy output at 8 TPH within 22 days of startup. Milling recovery on parboiled rice reached 68% by month two.",
    type: "parboiling" as const,
  },
];

export const machineryCategories = [
  "Pre-cleaners & scouring machines",
  "Destoners & gravity selectors",
  "Rubber roll hullers & shellers",
  "Whiteners, polishers & silky polishers",
  "Plansifters, purifiers & graders",
  "Hammer mills & impact detachers",
  "Bucket elevators & screw conveyors",
  "Pneumatic conveying & cyclones",
  "Bagging, dosing & packaging lines",
  "PLC, SCADA & motor control panels",
  "Dampeners & intensive dampening",
  "Silos, hoppers, spouting & ducting",
];

export const faqItems = [
  {
    question: "How do I know if my plant needs a full assessment or just a single-machine review?",
    answer:
      "Start with a single-machine review if one piece of equipment changed and recovery dropped shortly after — for example, a new whitener or polisher. A full assessment is appropriate when recovery has drifted over months, downtime is rising across multiple stages, or you are planning capex and need a baseline across the entire milling train.",
  },
  {
    question: "Can you help us choose between replacing a whitener train vs. adding a polishing stage?",
    answer:
      "Yes. We model both options against your paddy variety, target head rice percentage, and available floor space. We compare capex, power load, operator skill required, and expected recovery gain — without tying the recommendation to a specific OEM.",
  },
  {
    question: "We want to increase capacity from 8 TPH to 12 TPH. What should we plan first?",
    answer:
      "Begin with intake, cleaning, and hulling capacity — bottlenecks often appear upstream of the whitener. We review silo draw rates, elevator capacities, aspiration loads, and utility headroom before specifying new milling equipment. A phased layout plan helps you upgrade without a full shutdown.",
  },
  {
    question: "Do you work with our existing equipment supplier, or do you specify independently?",
    answer:
      "We specify independently and can review proposals from your preferred suppliers. Our role is to verify that equipment capacity, installation clearance, and process fit match your grain and throughput — not to sell machines.",
  },
  {
    question: "How long does a typical plant assessment take on site?",
    answer:
      "Most rice and flour mill assessments run 3–5 days on site: one day for walk-through and data collection, one to two days for machine-level checks and operator interviews, and one day for preliminary findings. A written report with prioritized actions follows within one to two weeks.",
  },
  {
    question: "Can you support commissioning after new equipment is installed?",
    answer:
      "Yes. Commissioning support includes pre-start mechanical checks, aspiration balancing, parameter setting during run-in, operator training, and verification that recovery and downtime targets hold over the first production cycles.",
  },
  {
    question: "We are modernizing an old pneumatic conveying system. Is remote review enough to start?",
    answer:
      "Remote review works for an initial scope if you share layout drawings, duct routes, blockage history, and motor load data. On-site duct velocity measurement and cyclone inspection are usually needed before final specifications — especially on flour mill break systems where ash drift is a risk.",
  },
  {
    question: "What information should we send before requesting a consultation?",
    answer:
      "Include plant type (rice, wheat, parboiling), rated capacity (TPH/TPD), main grain variety, current recovery or extraction figures, and a brief description of the problem or upgrade goal. Shift logs or monthly production reports accelerate our initial scope proposal.",
  },
];

export const brochurePoints = [
  "Plant assessment and recovery audit methodology",
  "Machinery selection and vendor-neutral specification process",
  "Rice, wheat, parboiling, and modernization project scope",
  "Commissioning support and troubleshooting response format",
  "Spare parts coordination and fabricated structures supply",
];

export const aboutCredentials = [
  { value: "20+", label: "Years in grain processing & milling systems" },
  { value: "18", label: "Countries with on-site consulting" },
  { value: "0", label: "Equipment sales commissions — fully independent" },
  { value: "Turnkey", label: "Project design, install oversight & PM support" },
];
