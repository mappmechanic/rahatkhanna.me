import {
  BrainCircuit,
  LineChart,
  Cpu,
  Orbit,
  Rocket,
  ShieldCheck,
  Sparkles,
  Telescope,
  Users,
} from "lucide-react";

export const sitePrinciples = [
  "AI agents must be observable before they can be trusted.",
  "Evaluation is the executive dashboard for autonomous work.",
  "Humanoids and space will need the same reliability stack as enterprise agents.",
  "Young technologists need proof that reinvention is possible.",
];

export const metrics = [
  { value: "14+", label: "years building software at scale" },
  { value: "Staff", label: "AI infrastructure engineer at Apple" },
  { value: "300+", label: "products built as founder and CTO" },
  { value: "100M+", label: "annual transactions in early fintech infrastructure" },
  { value: "40+", label: "technologists mentored through the AI shift" },
];

export const thesisCards = [
  {
    title: "Agents",
    icon: BrainCircuit,
    body: "Designing harnesses, memory, context engineering, orchestration, and runtime supervision for long-horizon autonomous work.",
  },
  {
    title: "Humanoids",
    icon: Cpu,
    body: "Thinking about the reliability layer for embodied systems: tool policy, world-state memory, fleet telemetry, and human override.",
  },
  {
    title: "Space",
    icon: Orbit,
    body: "Studying mission-grade autonomy patterns where delayed feedback, resilience, and auditability become existential system requirements.",
  },
];

export const careerArc = [
  {
    era: "Founder roots",
    years: "2008 - 2012",
    title: "YEH Technologies, instantPay",
    body: "Built 300+ websites and enterprise apps, then architected fintech infrastructure processing 100M+ transactions per year.",
  },
  {
    era: "Platform builder",
    years: "2012 - 2017",
    title: "Genpact, Flipkart",
    body: "Moved from mobile and digital transformation into high-scale commerce systems used by thousands of operators and millions of customers.",
  },
  {
    era: "Apple scale",
    years: "2017 - 2023",
    title: "Apple Ads, Media Products",
    body: "Led web systems across Search Ads, News Ads, Apple Music, Apple TV, Podcasts, and Books.",
  },
  {
    era: "Post-AI world",
    years: "2023 - now",
    title: "AI Agent Infrastructure",
    body: "Architecting evaluation, observability, guardrails, memory, and supervision patterns for production AI agents.",
  },
];

export const systems = [
  {
    title: "Agent Observability & Evaluation",
    href: "/projects/agent-observability",
    label: "Flagship case study",
    body: "A public-safe walkthrough of how to make agents measurable: traces, task success, hallucination checks, tool precision, and human escalation.",
    icon: LineChart,
    tags: ["LLM-as-Judge", "Tracing", "Reliability", "Governance"],
  },
  {
    title: "Deep Agent Runtime Patterns",
    href: "/vision",
    label: "Architecture thesis",
    body: "Planner, executor, reviewer loops, durable memory, tool sandboxes, policy admission, and replayable execution graphs.",
    icon: ShieldCheck,
    tags: ["Memory", "Policy", "Context", "Multi-agent"],
  },
  {
    title: "Apple-Scale Web Platforms",
    href: "/projects",
    label: "Pre-AI credibility",
    body: "The product-scale foundation behind the AI chapter: media, ads, commerce, internal platforms, and operator workflows.",
    icon: Sparkles,
    tags: ["React", "TypeScript", "Platform", "Scale"],
  },
];

export const writingPosts = [
  {
    title: "Why Agent Observability Is the Bottleneck for Enterprise AI",
    href: "/writing",
    summary: "The move from demos to deployed agents depends on traces, evals, cost visibility, and supervision.",
  },
  {
    title: "The Evaluation Problem for Long-Horizon Agents",
    href: "/writing",
    summary: "Task success, tool precision, hallucination rate, and execution quality need to become first-class metrics.",
  },
  {
    title: "Agents, Humanoids, and Space: The Coming Autonomy Stack",
    href: "/vision",
    summary: "A long-term view of the reliability systems that will connect digital, embodied, and mission-grade autonomy.",
  },
];

export const speakingTopics = [
  {
    title: "Production AI Is Nothing Like Demo AI",
    body: "A field guide for agent reliability, observability, escalation, and executive trust.",
    audience: "AI agent conferences, engineering leadership summits, startup operator events",
  },
  {
    title: "The New Staff Engineer: Architect, Evaluator, Operator",
    body: "How senior technologists create leverage when AI writes more of the code.",
    audience: "Labs, engineering orgs, universities, founder communities",
  },
  {
    title: "From India Founder to Apple Staff Engineer",
    body: "A practical reinvention story for young technologists building ambitious careers.",
    audience: "Universities, developer communities, early-career technologists",
  },
];

export const designTokens = [
  { name: "Void", value: "#05070D", usage: "Primary background" },
  { name: "Signal Blue", value: "#29B6FF", usage: "AI systems, CTAs, telemetry" },
  { name: "Warm Amber", value: "#F6B84B", usage: "Pre-AI roots and human story" },
  { name: "Orbit Violet", value: "#9A7CFF", usage: "Bridge between agents, humanoids, and space" },
  { name: "Mint", value: "#55D991", usage: "Trust, safety, verified states" },
  { name: "Panel", value: "#111826", usage: "Cards and command surfaces" },
];

export const motionStates = [
  "Static poster",
  "Generated start frame",
  "Generated end frame",
  "Scroll-scrubbed transition video",
  "Reduced-motion fallback",
  "Mobile static summary",
];

export const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "Writing", href: "/writing" },
  { label: "Speaking", href: "/speaking" },
  { label: "Vision", href: "/vision" },
  { label: "OS", href: "/os" },
];

export const footerLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/rahatkhanna" },
  { label: "GitHub", href: "https://github.com/mappmechanic" },
  { label: "Topmate", href: "https://topmate.io/rahat_khanna" },
  { label: "X", href: "https://x.com/mappmechanic" },
];

export const visionSignals = [
  { title: "Trustworthy agents", icon: ShieldCheck },
  { title: "Embodied autonomy", icon: Cpu },
  { title: "Mission systems", icon: Telescope },
  { title: "Human leverage", icon: Users },
  { title: "Frontier ambition", icon: Rocket },
];
