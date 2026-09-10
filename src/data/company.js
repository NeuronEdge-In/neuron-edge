const photo = (seed, w = 1200, h = 800) => `https://picsum.photos/seed/${seed}/${w}/${h}`;
const avatar = (n) => `https://i.pravatar.cc/400?img=${n}`;

export const company = {
  name: "NeuronEdge",
  tagline: "Engineering digital products that scale",
  founded: 2016,
  email: "hello@neuronedge.io",
  phone: "+1 (415) 555-0142",
  address: "500 Mission Street, Suite 1200, San Francisco, CA 94105",
  offices: ["San Francisco", "London", "Bengaluru", "Dubai"],
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "X", href: "https://x.com" },
    { label: "Dribbble", href: "https://dribbble.com" },
  ],
};

export const nav = [
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Projects", to: "/projects" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const stats = [
  { value: 250, suffix: "+", label: "Projects delivered" },
  { value: 120, suffix: "+", label: "Clients worldwide" },
  { value: 98, suffix: "%", label: "Client retention" },
  { value: 9, suffix: "+", label: "Years in business" },
];

export const services = [
  { slug: "web-development", icon: "globe", title: "Web Application Development", short: "High-performance web platforms, portals and SaaS products built on modern stacks.", bullets: ["React / Next.js frontends", "Node, .NET & Python backends", "Progressive web apps", "Headless commerce & CMS"], image: photo("ne-svc-web") },
  { slug: "mobile-development", icon: "phone", title: "Mobile App Development", short: "Native and cross-platform apps for iOS and Android that users love and stores approve.", bullets: ["Flutter & React Native", "Native Swift / Kotlin", "App Store optimisation", "Offline-first & push"], image: photo("ne-svc-mobile") },
  { slug: "cloud-devops", icon: "cloud", title: "Cloud & DevOps", short: "Cloud architecture, migration and automation on AWS, Azure and GCP — secure, observable, cost-optimised.", bullets: ["Cloud migration & modernisation", "Kubernetes & serverless", "CI/CD & IaC (Terraform)", "SRE, monitoring, FinOps"], image: photo("ne-svc-cloud") },
  { slug: "ai-ml", icon: "sparkle", title: "AI & Machine Learning", short: "Generative AI, predictive models and intelligent automation embedded into your products and operations.", bullets: ["LLM apps, RAG & agents", "Computer vision & NLP", "Predictive analytics", "MLOps & model monitoring"], image: photo("ne-svc-ai") },
  { slug: "ui-ux", icon: "pen", title: "UI/UX Design", short: "Research-led product design — from discovery and prototyping to design systems that scale.", bullets: ["User research & testing", "Wireframes & prototypes", "Design systems", "Accessibility (WCAG 2.2)"], image: photo("ne-svc-design") },
  { slug: "data-engineering", icon: "database", title: "Data Engineering & Analytics", short: "Pipelines, warehouses and dashboards that turn raw data into decisions.", bullets: ["Data lakes & warehouses", "ETL / streaming pipelines", "BI dashboards", "Data governance"], image: photo("ne-svc-data") },
  { slug: "qa-testing", icon: "shield", title: "QA & Test Automation", short: "Quality baked in — automated, performance and security testing across every release.", bullets: ["Test automation frameworks", "Performance & load testing", "Security / penetration testing", "Release management"], image: photo("ne-svc-qa") },
  { slug: "consulting", icon: "compass", title: "IT Consulting & Digital Transformation", short: "Technology strategy, architecture reviews and dedicated teams that extend your own.", bullets: ["Technology roadmaps", "Architecture audits", "Dedicated / staff augmentation", "Product & agile coaching"], image: photo("ne-svc-consult") },
];

export const products = [
  { slug: "edgeflow", name: "EdgeFlow", tag: "Workflow Automation", tagline: "No-code workflow automation for operations teams.", description: "Connect 300+ apps, design approval flows and automate repetitive back-office work with an AI copilot that writes the automation for you.", features: ["Visual flow builder", "AI-generated automations", "Audit trail & RBAC", "On-prem or cloud"], image: photo("ne-prod-edgeflow", 1400, 900), hue: "cyan", pricing: "From $29 / user / month" },
  { slug: "pulseanalytics", name: "Pulse Analytics", tag: "Business Intelligence", tagline: "Real-time dashboards without a data team.", description: "Plug in your databases and SaaS tools, ask questions in plain English, and get board-ready dashboards that refresh every second.", features: ["Natural-language queries", "Embedded analytics SDK", "Alerts & anomaly detection", "SOC 2 Type II"], image: photo("ne-prod-pulse", 1400, 900), hue: "violet", pricing: "From $99 / month" },
  { slug: "shopcore", name: "ShopCore", tag: "Commerce Platform", tagline: "Headless commerce engine for growing brands.", description: "A composable storefront and order-management backbone with built-in PIM, multi-currency checkout and marketplace integrations.", features: ["Headless storefront API", "PIM & inventory", "Multi-region checkout", "Marketplace connectors"], image: photo("ne-prod-shopcore", 1400, 900), hue: "lime", pricing: "Custom" },
  { slug: "careconnect", name: "CareConnect", tag: "HealthTech", tagline: "Telehealth and patient-engagement suite.", description: "HIPAA-compliant video visits, scheduling, e-prescriptions and a patient app — white-labelled for clinics and hospital networks.", features: ["Video consults", "EHR integrations (FHIR)", "Patient mobile app", "White-label branding"], image: photo("ne-prod-care", 1400, 900), hue: "cyan", pricing: "Per-provider licensing" },
];

export const projects = [
  { slug: "fintrack-banking-app", title: "FinTrack — Digital Banking App", client: "Meridian Bank", category: "Mobile", industry: "FinTech", year: "2025", summary: "A React Native banking app with biometric login, instant transfers and AI spend insights for 1.2M customers.", tech: ["React Native", "Node.js", "PostgreSQL", "AWS"], image: photo("ne-proj-fintrack", 1200, 800), hue: "cyan", metrics: [["4.8★", "App Store rating"], ["1.2M", "Active users"], ["-37%", "Support tickets"]] },
  { slug: "urbancart-marketplace", title: "UrbanCart Marketplace", client: "UrbanCart", category: "Web", industry: "E-commerce", year: "2025", summary: "A multi-vendor marketplace on Next.js with headless commerce, real-time inventory and personalised recommendations.", tech: ["Next.js", "GraphQL", "Redis", "Vercel"], image: photo("ne-proj-urbancart", 1200, 800), hue: "violet", metrics: [["+64%", "Conversion"], ["12k", "Vendors"], ["0.9s", "LCP"]] },
  { slug: "medilink-telehealth", title: "MediLink Telehealth Platform", client: "Cascade Health", category: "Web", industry: "Healthcare", year: "2024", summary: "HIPAA-compliant telehealth with video consultations, e-prescriptions and EHR integration across 90 clinics.", tech: ["React", ".NET", "Azure", "FHIR"], image: photo("ne-proj-medilink", 1200, 800), hue: "lime", metrics: [["90", "Clinics"], ["300k", "Consults / yr"], ["99.95%", "Uptime"]] },
  { slug: "fleetsense-iot", title: "FleetSense IoT Dashboard", client: "Orbital Logistics", category: "Cloud", industry: "Logistics", year: "2024", summary: "Streaming telemetry from 9,000 vehicles into a Kubernetes-hosted analytics platform with predictive maintenance.", tech: ["Kafka", "Kubernetes", "TimescaleDB", "GCP"], image: photo("ne-proj-fleetsense", 1200, 800), hue: "cyan", metrics: [["9k", "Vehicles"], ["-18%", "Fuel spend"], ["2B", "Events / day"]] },
  { slug: "learnly-lms", title: "Learnly — Learning Platform", client: "Learnly", category: "Web", industry: "EdTech", year: "2024", summary: "A video-first LMS with live classes, adaptive quizzes and an AI tutor serving 400k students.", tech: ["Next.js", "Python", "OpenAI", "AWS"], image: photo("ne-proj-learnly", 1200, 800), hue: "violet", metrics: [["400k", "Students"], ["+41%", "Completion"], ["35", "Countries"]] },
  { slug: "visionqc-inspection", title: "VisionQC — AI Inspection", client: "Helix Robotics", category: "AI/ML", industry: "Manufacturing", year: "2025", summary: "Computer-vision defect detection running on edge devices at 240 units per minute.", tech: ["PyTorch", "TensorRT", "Jetson", "MLOps"], image: photo("ne-proj-visionqc", 1200, 800), hue: "lime", metrics: [["-63%", "Escaped defects"], ["11ms", "Latency"], ["$4.2M", "Saved / yr"]] },
  { slug: "nomad-travel-app", title: "Nomad Travel Companion", client: "Nomad Inc.", category: "Mobile", industry: "Travel", year: "2023", summary: "Flutter app with offline maps, itinerary AI and in-app bookings, launched in 22 markets.", tech: ["Flutter", "Firebase", "Maps SDK", "Stripe"], image: photo("ne-proj-nomad", 1200, 800), hue: "cyan", metrics: [["2M", "Downloads"], ["22", "Markets"], ["4.7★", "Rating"]] },
  { slug: "insurai-claims", title: "InsurAI Claims Automation", client: "Atlas Insurance", category: "AI/ML", industry: "Insurance", year: "2025", summary: "LLM-powered document understanding that triages and drafts claim decisions with human review.", tech: ["LLMs", "RAG", "Python", "Azure"], image: photo("ne-proj-insurai", 1200, 800), hue: "violet", metrics: [["-70%", "Processing time"], ["94%", "Accuracy"], ["5 days → 6h", "Cycle"]] },
  { slug: "greengrid-energy", title: "GreenGrid Energy Portal", client: "Nordwind Energy", category: "Cloud", industry: "Energy", year: "2023", summary: "Customer portal + cloud migration of legacy billing to serverless AWS, cutting infra cost by 40%.", tech: ["AWS Lambda", "React", "Terraform", "DynamoDB"], image: photo("ne-proj-greengrid", 1200, 800), hue: "lime", metrics: [["-40%", "Infra cost"], ["1.5M", "Accounts"], ["Zero", "Downtime migration"]] },
];

export const caseStudies = [
  { slug: "meridian-digital-banking", client: "Meridian Bank", industry: "FinTech", title: "Re-platforming a bank's mobile experience in nine months", excerpt: "How we replaced a legacy banking app with a React Native platform serving 1.2M customers — without a single day of downtime.", image: photo("ne-cs-meridian", 1400, 900), hue: "cyan", services: ["Mobile", "Cloud", "UI/UX"], results: [["4.8★", "App rating (from 2.9)"], ["-37%", "Support tickets"], ["9 mo", "To launch"]], challenge: "Meridian's 8-year-old native apps were slow to ship, rated 2.9 stars and blocked new products like instant payments. Two prior modernisation attempts had stalled.", approach: ["Discovery sprint with 40 customer interviews and a full audit of the legacy API surface.", "Single React Native codebase with a design system shared with web.", "Strangler-fig migration: new app shipped feature-by-feature behind flags while the old app stayed live.", "Biometric auth, instant transfers and an AI spend-insights engine on AWS.", "Automated test suite with 2,400 E2E tests and weekly release train."], outcome: "The new app launched to 100% of customers in nine months, ratings climbed to 4.8, support tickets fell 37% and Meridian now ships weekly." },
  { slug: "urbancart-headless-commerce", client: "UrbanCart", industry: "E-commerce", title: "Doubling conversion with a headless marketplace rebuild", excerpt: "A monolithic storefront replaced with Next.js + headless commerce, lifting conversion 64% and cutting page load to under a second.", image: photo("ne-cs-urbancart", 1400, 900), hue: "violet", services: ["Web", "Cloud", "Data"], results: [["+64%", "Conversion"], ["0.9s", "LCP"], ["12k", "Vendors onboarded"]], challenge: "UrbanCart's monolith took 4+ seconds to load, couldn't handle flash-sale traffic and made vendor onboarding a manual, week-long process.", approach: ["Composable architecture: Next.js storefront, GraphQL gateway, headless commerce backend.", "Edge caching and ISR for sub-second pages worldwide.", "Self-serve vendor portal with automated KYC.", "Personalisation engine using purchase and browsing signals.", "Load-tested to 50× baseline traffic before Black Friday."], outcome: "Conversion rose 64%, Black Friday ran with zero incidents at 30× normal load, and vendor onboarding dropped from a week to 20 minutes." },
  { slug: "helix-ai-quality-inspection", client: "Helix Robotics", industry: "Manufacturing", title: "AI visual inspection at 240 units per minute", excerpt: "Edge computer-vision that cut escaped defects by 63% and saved $4.2M a year on a single production line.", image: photo("ne-cs-helix", 1400, 900), hue: "lime", services: ["AI/ML", "Cloud", "Data"], results: [["-63%", "Escaped defects"], ["11ms", "Inference"], ["$4.2M", "Annual savings"]], challenge: "Manual inspection missed micro-defects at line speed, and cloud-based vision was too slow and too expensive at 240 units per minute.", approach: ["12-camera capture rig with synchronised lighting.", "Custom detection models compressed with TensorRT for NVIDIA Jetson.", "Active-learning loop: operators label edge cases in-app, models retrain weekly.", "MLOps pipeline with drift monitoring and OTA model rollout.", "Operator dashboard integrated with the MES."], outcome: "Escaped defects fell 63% within the first quarter, inference runs in 11ms on-device, and the client is rolling the system out to 14 more lines." },
  { slug: "nordwind-cloud-migration", client: "Nordwind Energy", industry: "Energy", title: "Zero-downtime migration of legacy billing to serverless AWS", excerpt: "1.5M customer accounts moved from an on-prem monolith to a serverless platform, cutting infrastructure cost 40%.", image: photo("ne-cs-nordwind", 1400, 900), hue: "cyan", services: ["Cloud", "Web", "QA"], results: [["-40%", "Infra cost"], ["0", "Minutes downtime"], ["1.5M", "Accounts migrated"]], challenge: "A 15-year-old billing system on end-of-life hardware, with no documentation and a regulatory requirement for 24/7 availability.", approach: ["Reverse-engineered the domain model with the two remaining subject-matter experts.", "Event-driven serverless architecture on Lambda, DynamoDB and Step Functions.", "Dual-run period with automated reconciliation of every invoice.", "Infrastructure as code with Terraform and full observability stack.", "New customer portal with self-service billing."], outcome: "The cutover completed with zero downtime and zero billing discrepancies; infrastructure cost fell 40% and release cadence went from quarterly to daily." },
];

export const posts = [
  { slug: "choosing-flutter-vs-react-native-2026", title: "Flutter vs React Native in 2026: how we choose for clients", category: "Mobile", date: "2026-08-12", read: "7 min", author: "Sofia Almeida", authorImg: avatar(47), image: photo("ne-blog-1", 1200, 700), excerpt: "Both frameworks are mature. The decision now comes down to team, ecosystem and the specific UI you need to ship.", body: ["When clients ask us 'Flutter or React Native?', the honest answer is that both will ship a great app. The interesting question is which one will keep shipping great apps two years from now, with the team you actually have.", "We look at four things: existing web investment (React Native shares more with a React web codebase), the design language (Flutter's custom rendering shines for highly branded UI), platform-specific features you need on day one, and hiring in your region.", "Our default for product companies with a React web app is React Native with Expo. Our default for design-heavy consumer apps or teams starting from scratch is Flutter. Either way, we insist on a shared design-token system so the two platforms never drift apart."] },
  { slug: "rag-in-production-lessons", title: "Ten lessons from shipping RAG systems to production", category: "AI/ML", date: "2026-07-28", read: "9 min", author: "Daniel Kim", authorImg: avatar(12), image: photo("ne-blog-2", 1200, 700), excerpt: "Retrieval-augmented generation demos are easy. Production systems that users trust are a different discipline.", body: ["Every RAG demo works on the ten documents the team picked. Production means fifty thousand documents, half of them PDFs scanned in 2009, and users who ask questions no one anticipated.", "Our top lessons: invest in chunking and metadata before touching the model; build evaluation datasets from real user questions on week one; treat retrieval quality as a separate metric from answer quality; and always show citations so users can verify.", "The single biggest win in most of our engagements has been hybrid search (keyword + vector) combined with a re-ranker. It's not glamorous, but it moved answer accuracy by 20+ points in three different projects."] },
  { slug: "cloud-cost-optimisation-playbook", title: "The cloud cost playbook: 12 fixes that cut bills 30–60%", category: "Cloud", date: "2026-07-10", read: "6 min", author: "Lucas Moreau", authorImg: avatar(33), image: photo("ne-blog-3", 1200, 700), excerpt: "Most cloud bills are 40% waste. Here's the checklist we run in the first week of every FinOps engagement.", body: ["Right-size before you re-architect. In nearly every audit we run, the first 20% of savings comes from instances that were provisioned for a launch-day peak two years ago.", "Then: commit to savings plans for the steady-state baseline, move logs and backups to cold storage tiers, kill unattached volumes and idle load balancers, and set budgets with alerts per team.", "Only after that do we talk about serverless or Kubernetes. Architecture changes are real savings, but they're slower and riskier than turning off what nobody uses."] },
  { slug: "design-systems-that-survive", title: "Design systems that survive their second year", category: "Design", date: "2026-06-22", read: "5 min", author: "Priya Nair", authorImg: avatar(45), image: photo("ne-blog-4", 1200, 700), excerpt: "Most design systems die quietly. The ones that live are treated as products with users, roadmaps and support.", body: ["A design system is not a Figma file. It's a product whose users are your engineers and designers, and it needs the same care: a roadmap, release notes, office hours and someone accountable.", "We set three rules with clients: tokens are the single source of truth for both Figma and code; every component ships with accessibility built in; and nothing enters the system until it's been used in two real features.", "Adoption follows when the system makes people faster. If it doesn't, no governance document will save it."] },
  { slug: "kubernetes-or-serverless", title: "Kubernetes or serverless? A decision framework", category: "Cloud", date: "2026-06-03", read: "8 min", author: "Elias Brandt", authorImg: avatar(15), image: photo("ne-blog-5", 1200, 700), excerpt: "Stop picking by fashion. Pick by workload shape, team size and how much operational surface you can afford.", body: ["Serverless wins for spiky, event-driven workloads and small teams that don't want to run infrastructure. Kubernetes wins for steady high-throughput services, complex networking and organisations with platform teams.", "The trap is doing both badly. We've inherited plenty of clusters running three services that should have been Lambda functions, and plenty of serverless sprawl that nobody can trace.", "Our framework scores workloads on traffic shape, latency sensitivity, state, and team maturity. Most organisations end up with a mix — and that's fine as long as it's deliberate."] },
  { slug: "ai-agents-for-back-office", title: "Where AI agents actually work today: the back office", category: "AI/ML", date: "2026-05-15", read: "6 min", author: "Amara Okafor", authorImg: avatar(24), image: photo("ne-blog-6", 1200, 700), excerpt: "Forget autonomous everything. The agents delivering ROI right now are doing invoices, tickets and onboarding.", body: ["The most valuable agents we've deployed this year are boring: they read invoices and match them to purchase orders, triage support tickets, and prepare onboarding packets.", "What makes them work is narrow scope, deterministic tools, and a human-in-the-loop for anything irreversible. Accuracy goes up, and so does trust.", "Start with a process that has clear inputs, a measurable output and a person who currently hates doing it. That's where the ROI lives."] },
];

export const process = [
  { step: "01", title: "Discover", text: "Workshops, user research and a technical audit to define scope, success metrics and risks." },
  { step: "02", title: "Design", text: "UX flows, prototypes and architecture — validated with real users before a line of production code." },
  { step: "03", title: "Build", text: "Agile sprints with demos every two weeks, automated testing and CI/CD from day one." },
  { step: "04", title: "Launch & Grow", text: "Release, monitor, optimise. Dedicated support and a roadmap for what's next." },
];

export const team = [
  { name: "Maya Raghavan", role: "Co-founder & CEO", bio: "20 years building software for banks, retailers and healthcare. Ex-VP Engineering at a Fortune 500.", img: avatar(9) },
  { name: "Elias Brandt", role: "Co-founder & CTO", bio: "Cloud architect who has migrated 200+ workloads. Kubernetes contributor.", img: avatar(15) },
  { name: "Sofia Almeida", role: "VP Engineering", bio: "Scaled engineering from 8 to 80. Mobile-first product leader.", img: avatar(47) },
  { name: "Daniel Kim", role: "Head of AI", bio: "Leads generative-AI and ML practice. Previously at a frontier AI lab.", img: avatar(12) },
  { name: "Priya Nair", role: "Design Director", bio: "Award-winning product designer. Built design systems for 30+ products.", img: avatar(45) },
  { name: "Lucas Moreau", role: "Head of Cloud & DevOps", bio: "AWS & GCP certified. FinOps evangelist who has cut $12M in cloud spend.", img: avatar(33) },
  { name: "Amara Okafor", role: "Head of Consulting", bio: "Advises boards on digital transformation and technology strategy.", img: avatar(24) },
  { name: "Kenji Watanabe", role: "Head of QA", bio: "Test automation architect. Zero-defect release advocate.", img: avatar(60) },
];

export const values = [
  { title: "Ship, then improve", text: "Working software in users' hands beats perfect plans. We release early and iterate with data." },
  { title: "Own the outcome", text: "We measure ourselves on your business results — not hours logged or tickets closed." },
  { title: "Engineer for the long run", text: "Clean architecture, tests and docs, so your team can own what we build." },
  { title: "Radical transparency", text: "Weekly demos, open backlogs and honest estimates. No surprises." },
];

export const milestones = [
  { year: "2016", text: "Founded in San Francisco as a two-person web studio." },
  { year: "2018", text: "First enterprise client; mobile practice launched." },
  { year: "2020", text: "Cloud & DevOps practice; London office opens." },
  { year: "2022", text: "Launched EdgeFlow, our first SaaS product. Bengaluru hub opens." },
  { year: "2024", text: "AI & ML practice; 100th client; Dubai office." },
  { year: "2026", text: "250+ projects delivered, 4 products, 120+ people." },
];

export const jobs = [
  { title: "Senior React / Next.js Engineer", location: "Remote", type: "Full-time", team: "Web" },
  { title: "Flutter Developer", location: "Bengaluru", type: "Full-time", team: "Mobile" },
  { title: "Cloud / DevOps Engineer (AWS)", location: "London / Remote", type: "Full-time", team: "Cloud" },
  { title: "ML Engineer — LLM Applications", location: "San Francisco / Remote", type: "Full-time", team: "AI" },
  { title: "Product Designer", location: "Remote", type: "Full-time", team: "Design" },
  { title: "QA Automation Engineer", location: "Bengaluru", type: "Full-time", team: "QA" },
  { title: "Business Analyst", location: "Dubai", type: "Full-time", team: "Consulting" },
];

export const perks = ["Remote-first, flexible hours", "Competitive salary + bonus", "Learning & certification budget", "Latest hardware", "Health & wellness cover", "Annual team retreat"];

export const testimonials = [
  { quote: "NeuronEdge rebuilt our mobile banking app in nine months. Ratings went from 2.9 to 4.8 and we now ship every week.", name: "Head of Digital", org: "Meridian Bank", img: avatar(5) },
  { quote: "They think like product owners, not vendors. Every sprint demo moved a real business metric.", name: "CTO", org: "UrbanCart", img: avatar(31) },
  { quote: "The cloud migration finished with zero downtime and 40% lower costs. Our board noticed.", name: "CIO", org: "Nordwind Energy", img: avatar(20) },
];

export const faqs = [
  { q: "What kind of companies do you work with?", a: "Startups, scale-ups and enterprises across fintech, healthcare, retail, logistics, energy and education. If you have a product to build or a system to modernise, we can help." },
  { q: "How do you price projects?", a: "Fixed-price for well-defined scopes, time-and-materials for evolving products, and dedicated-team retainers for long-term partnerships. We'll recommend the model that fits." },
  { q: "How quickly can you start?", a: "A discovery sprint can begin within two weeks. Dedicated teams are usually staffed within 3–4 weeks." },
  { q: "Who owns the code and IP?", a: "You do — fully. Everything we build is handed over with documentation, tests and infrastructure-as-code." },
  { q: "Do you provide support after launch?", a: "Yes. Every project includes a hypercare period, and most clients continue with a support and enhancement retainer." },
];

export const industries = ["FinTech", "Healthcare", "E-commerce", "Logistics", "Energy", "EdTech", "Insurance", "Manufacturing", "Travel", "Real Estate"];
