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
  { value: "Staff", label: "software engineer focused on AI agent infrastructure" },
  { value: "300+", label: "products built as founder and CTO" },
  { value: "100M+", label: "annual transactions in early fintech infrastructure" },
  { value: "40+", label: "technologists mentored through the AI shift" },
];

export const contactChannels = {
  generalEmail: "hello@rahatkhanna.me",
  generalHref: "mailto:hello@rahatkhanna.me",
  speakingEmail: "yehtechnologies@gmail.com",
  speakingHref: "mailto:yehtechnologies@gmail.com?subject=Speaking%20Invitation",
};

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

export const profileHighlights = [
  {
    years: "2008 - 2012",
    label: "FOUNDER ROOTS / YEH TECHNOLOGIES",
    title: "Built 300+ websites and enterprise apps for global clients.",
    body: "The early chapter was hands-on founder work: selling, designing, shipping, and learning how real customers judge software.",
    meta: "entrepreneurship",
  },
  {
    years: "2011 - 2012",
    label: "FINTECH SCALE / INSTANTPAY",
    title: "Architected infrastructure processing 100M+ annual transactions.",
    body: "Led the technology foundation for a multi-service fintech platform where reliability, throughput, and operator trust mattered every day.",
    meta: "CTO experience",
  },
  {
    years: "2012 - 2017",
    label: "ENTERPRISE + COMMERCE / GENPACT, FLIPKART",
    title: "Built mobile, healthcare, and ecommerce systems used by thousands.",
    body: "Moved from enterprise transformation into Flipkart-scale commerce, including operator workflows and customer-facing post-order experiences.",
    meta: "platform builder",
  },
  {
    years: "2017 - 2023",
    label: "APPLE SCALE / ADS AND MEDIA PRODUCTS",
    title: "Led web systems across Apple Ads, Music, TV, Podcasts, Books, and editorial launches.",
    body: "This chapter proves product judgment at global scale: high-visibility consumer experiences, business tools, and cross-functional platform delivery.",
    meta: "Staff engineer trajectory",
  },
  {
    years: "2023 - now",
    label: "AI INFRASTRUCTURE / NOW",
    title: "Focused on agent observability, evaluation, guardrails, and enterprise-ready autonomy.",
    body: "The current chapter connects everything before it: systems thinking, product taste, scale, and the reliability stack for AI agents.",
    meta: "post-AI world",
  },
  {
    years: "2023 - now",
    label: "MENTORSHIP / HUMAN IMPACT",
    title: "Mentored 40+ engineers and professionals through the AI shift.",
    body: "The public mission is not only technical credibility. It is helping younger technologists see a bigger path for themselves.",
    meta: "impact",
  },
];

export const systems = [
  {
    title: "Agent Observability & Evaluation",
    href: "/projects/agent-observability",
    label: "Flagship case study",
    body: "A practical walkthrough of how to make agents measurable: traces, task success, hallucination checks, tool precision, and human escalation.",
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
    body: "The product-scale foundation behind the AI chapter: media, ads, commerce, platform systems, and operator workflows.",
    icon: Sparkles,
    tags: ["React", "TypeScript", "Platform", "Scale"],
  },
];

export const writingPosts = [
  {
    title: "Why Agent Observability Is the Bottleneck for Enterprise AI",
    href: "/vision#writing",
    summary: "The move from demos to deployed agents depends on traces, evals, cost visibility, and supervision.",
  },
  {
    title: "The Evaluation Problem for Long-Horizon Agents",
    href: "/vision#writing",
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

export const publicAppearances = [
  {
    title: "Podcast with SinghInUSA",
    href: "https://youtu.be/rhsBMnU0ArU?si=xMOOmQxL-smh4DtN",
    label: "PODCAST",
    body: "A public podcast conversation about Rahat's journey, career, and technology perspective.",
  },
  {
    title: "Podcast with Marco Polo",
    href: "https://www.youtube.com/watch?v=xvK7NpzfAsI&t=2163s&pp=ygUMcmFoYXQga2hhbm5h0gcJCQQLAYcqIYzv",
    label: "PODCAST",
    body: "A public long-form conversation shared as part of Rahat's broader career and technology story.",
  },
  {
    title: "JSFoo Conference Talk",
    href: "https://www.youtube.com/watch?v=71JdaRofCgA&pp=ygUMcmFoYXQga2hhbm5h",
    label: "CONFERENCE TALK / PUBLIC ARCHIVE",
    body: "An earlier public conference talk from Rahat's JavaScript and web-platform chapter.",
  },
  {
    title: "AngularJS Talk",
    href: "https://www.youtube.com/watch?v=A7SUlXxZ0nc&pp=ygUMcmFoYXQga2hhbm5h",
    label: "TECH TALK / PUBLIC ARCHIVE",
    body: "An earlier public technical talk from Rahat's AngularJS and frontend engineering chapter.",
  },
  {
    title: "Hybrid Mobile App Talk",
    href: "https://www.youtube.com/watch?v=A7SUlXxZ0nc&pp=ygUMcmFoYXQga2hhbm5h",
    label: "TECH TALK / PUBLIC ARCHIVE",
    body: "An earlier public technical talk from Rahat's hybrid mobile and cross-platform engineering chapter.",
  },
];

export const internalTalkNote =
  "Conference talks while working for Apple were internal and are not available to post publicly.";

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
  { label: "Speaking", href: "/speaking" },
  { label: "Vision", href: "/vision" },
];

export const footerLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/rahatkhanna" },
  { label: "GitHub", href: "https://github.com/mappmechanic" },
  { label: "Topmate", href: "https://topmate.io/rahat_khanna" },
  { label: "X", href: "https://x.com/mappmechanic" },
];

export const publicSafetyNote =
  "Views are my own. Public project references are selected context; proprietary details remain private.";

export const visionSignals = [
  { title: "Trustworthy agents", icon: ShieldCheck },
  { title: "Embodied autonomy", icon: Cpu },
  { title: "Mission systems", icon: Telescope },
  { title: "Human leverage", icon: Users },
  { title: "Frontier ambition", icon: Rocket },
];
