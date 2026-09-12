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
  {
    slug: "raahbar-spiritual-guide",
    title: "Raahbar — Spiritual Companion Ecosystem",
    client: "Raahbar Ecosystem",
    category: "Mobile",
    industry: "Media & Lifestyle",
    year: "2025",
    summary: "Multi-platform spiritual companion suite featuring an offline-first Expo React Native app, Fastify v5 API backend, 2-step content verification moderation, AWS S3 asset streaming, and transactional push outbox worker.",
    tech: ["Fastify v5", "React Native", "Expo SDK 54", "PostgreSQL 16", "Expo SQLite", "2-Step Verification", "Adhan JS"],
    image: "/raahbar.png",
    hue: "violet",
    metrics: [["Sub-100ms", "Fastify API Latency"], ["100% Offline", "Functional Availability"], ["2-Step", "Content Verification"]],
    externalUrl: null,
    playStoreUrl: null,
    highlights: [
      "Two-Step Content Verification Pipeline: Multi-stage moderation workflow where community broadcasts, Payams, and religious literature undergo Super Admin verification & validation before public release and automated regional push dispatch.",
      "Dual-layer hybrid database architecture combining PostgreSQL 16 on cloud with high-performance on-device Expo SQLite for 100% offline access to Quranic texts and Duas.",
      "Real-time GPS coordinate fetching paired with Adhan JS mathematical calculations for precise prayer times across multiple juristic conventions.",
      "Transactional outbox pattern (notificationWorker.ts) for reliably batch-dispatching mobile push notifications via Expo Push API with retry backoff."
    ]
  },
  {
    slug: "inventory-management-system",
    title: "Single Inventory — Enterprise ERP & Ledger",
    client: "Retail & Manufacturing Enterprise",
    category: "Web",
    industry: "Logistics & Retail",
    year: "2025",
    summary: "Multi-tenant inventory management, POS billing, and dual-mode financial accounting platform with real-time stock reconciliation and automated GST/Estimate ledgers.",
    tech: ["Django 4.2", "Python", "Celery", "Celery Beat", "Redis", "PostgreSQL", "WeasyPrint PDF", "Docker"],
    image: "/inventory.jpg",
    hue: "cyan",
    metrics: [["< 15ms", "POS Lookup Latency"], ["100%", "Automated Celery Rollups"], ["100%", "Dual-Channel Isolation"]],
    externalUrl: null,
    playStoreUrl: null,
    highlights: [
      "Dual-mode enterprise accounting allowing business owners to run tax-compliant GST billing alongside internal estimate sales with strict data partitioning.",
      "High-performance Redis caching layer (django-redis) delivering sub-15ms entity lookup speeds for high-concurrency POS usage.",
      "Background worker architecture using Celery & Celery Beat for periodic ledger resets and automatic balance migrations."
    ]
  },
  {
    slug: "banas-water-billing",
    title: "Banas Water — Delivery, Mobile Apps & Admin Ecosystem",
    client: "Banas Water Co.",
    category: "Web & Mobile",
    industry: "Utilities & Service Ops",
    year: "2025",
    summary: "Complete digital logistics & billing suite featuring an Android delivery app, dedicated Admin mobile app, enterprise Web Admin panel, QR-verified cooler tracking, and automated customer ledger.",
    tech: ["Django 6.0 REST", "React 19 (Web)", "React Native (Android)", "Admin & Delivery Apps", "Upstash QStash", "PostgreSQL (UUIDv7)", "Redis", "Docker", "AWS S3"],
    image: "/banas.jpg",
    hue: "cyan",
    metrics: [["< 50ms", "API Latency"], ["3 Platforms", "Web Admin, Admin & Driver Apps"], ["-95%", "Billing Disputes"]],
    externalUrl: null,
    playStoreUrl: null,
    highlights: [
      "Multi-Platform Ecosystem: Field delivery Android app for route drivers, dedicated Admin mobile app for live ops tracking, and an enterprise React 19 Web Admin Panel.",
      "Production-ready REST API architected with Django 6.0, SimpleJWT authentication, OpenAPI/Swagger docs, and Gunicorn WSGI multi-threading serving both mobile apps and web.",
      "Worker-free background task queue using Upstash QStash HTTP webhooks for automated monthly billing runs and paced WhatsApp invoice delivery via Evolution API.",
      "High-performance database layer with time-ordered UUIDv7 primary keys, compound B-tree indexing, and Upstash Redis caching."
    ]
  },
  {
    slug: "arcana-luxury-gifting",
    title: "ARCANA — Luxury AI Curation & Mystery Gifting",
    client: "Arcana (UAE / GCC Market)",
    category: "Mobile",
    industry: "E-Commerce & AI",
    year: "2025",
    summary: "AI-driven luxury curation platform combining Claude 4.6 Sonnet customer profiling with human atelier curation, automated UAE courier dispatch (Quiqup), and proof-gated order fulfillment.",
    tech: ["React Native", "React 19", "Node.js (Express v5)", "PostgreSQL", "Claude 4.6 AI", "Quiqup API", "Stripe"],
    image: "/arcana.jpg",
    hue: "violet",
    metrics: [["AI + Human", "Curation Engine"], ["Quiqup UAE", "Automated Logistics"], ["Proof-Gated", "FSM Fulfillment"]],
    externalUrl: "https://arcana-web.uv-techsoft.com/",
    playStoreUrl: null,
    highlights: [
      "AI Creative Agent powered by Anthropic Claude 4.6 Sonnet generating bespoke item proposals from customer preference vectors (scents, colors, apparel, mood profiles).",
      "Proof-Gated Finite State Machine (FSM) enforcing packaging photo verification before packing and dispatching orders.",
      "Automated UAE logistics integration with Quiqup API for instant courier dispatch, shipping label URL generation, and status webhooks."
    ]
  },
  {
    slug: "starfomo-social-platform",
    title: "StarFomo — Next-Gen Social App & Recommendation Algo",
    client: "StarFomo",
    category: "Mobile",
    industry: "Social & Media",
    year: "2025",
    summary: "Mobile social platform featuring short video reels, clean content moderation, cash reward wallet, and a custom behavioral feed ranking algorithm.",
    tech: ["React Native", "Node.js", "Express", "MongoDB", "Redis", "Behavioral Feed Algo", "Android/iOS"],
    image: "https://starfomo.com/wp-content/uploads/2026/04/Star-Fomo-light-4-1.png",
    hue: "lime",
    metrics: [["5K+", "Active Users"], ["4.8★", "Google Play Rating"], ["Custom Algo", "Real-Time Feed Ranking"]],
    externalUrl: "https://starfomo.com/",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.starfomo.socialapp",
    highlights: [
      "Custom recommendation and ranking algorithm analyzing watch time, interaction signals, and dwell duration to elevate top posts in user feeds.",
      "High-FPS video feed player for short video reels, moment sharing, and clean community content moderation.",
      "Integrated reward wallet tracking user engagement and enabling seamlessly processed cash reward withdrawals."
    ]
  },
  {
    slug: "arya-taray-foundation",
    title: "Arya Taray — Monastic & Community Services Platform",
    client: "Central Monastic Body (Dratshang) of Bhutan",
    category: "Web",
    industry: "Non-Profit & Cultural",
    year: "2025",
    summary: "Enterprise digital platform centralizing ritual service bookings, transparent donation management, and Dzongkhag-aware event coordination across Bhutan.",
    tech: ["Django 5.2 REST", "React 18", "TypeScript", "PostgreSQL", "LocMemCache (SHA-256)", "Recharts", "Render Cloud"],
    image: "/aryataray.jpg",
    hue: "lime",
    metrics: [["< 10ms", "Public Cache Latency"], ["20 Dzongkhags", "National Coverage"], ["100%", "Atomic Backup Integrity"]],
    externalUrl: "https://aryataray.bt/",
    playStoreUrl: null,
    highlights: [
      "Public-facing Buddhist prayer & ritual service booking engine with region mapping and administrative fulfillment pipelines.",
      "Dzongkhag-aware event calendar management system across Bhutan's 20 Dzongkhags with real-time temporal status calculations.",
      "High-throughput DRF caching layer utilizing SHA-256 process-local cache keys, delivering sub-10ms public response latency."
    ]
  }
];

export const caseStudies = [
  {
    slug: "terms-conditions-nlp-analyzer",
    client: "Consumer Protection & LegalTech",
    industry: "AI / LegalTech",
    title: "Generative AI & RAG Pipeline for Analyzing Complex Legal & Privacy Documents",
    excerpt: "Architected an enterprise GenAI solution using RAG, vector databases, custom LLM prompt engineering, Django REST API, and a React Native mobile app to flag consumer-unfriendly clauses in real time.",
    image: "/privacy_ai.jpg",
    hue: "cyan",
    services: ["AI/ML", "Mobile", "Cloud"],
    results: [["RAG + LLM", "GenAI Pipeline"], ["Vector DB", "Document Chunking"], ["Django + React Native", "Full-Stack Integration"]],
    challenge: "Consumers blindly accept dense privacy policies and bank terms without reading them, exposing themselves to aggressive data sharing, arbitration traps, and unfavorable fee structures.",
    approach: [
      "Generative AI & RAG Architecture: Built a production GenAI pipeline to ingest, chunk, embed, and analyze dense multi-page legal documents.",
      "Vector DB Retrieval: Implemented a vector database retrieval pipeline to search semantic text segments and retrieve relevant contract context without hallucination.",
      "Custom Prompt Engineering: Crafted prompt strategies guiding LLMs to isolate customer-adverse clauses, categorize risk severity, and output plain-English explanations.",
      "React Native & Django REST: Exposed AI insights through a Django REST API integrated with a React Native mobile application for Android & iOS."
    ],
    outcome: "Delivered an end-to-end GenAI legal audit solution that processes complex legal documents in seconds, alerting users to problematic terms before signing or accepting."
  },
  {
    slug: "gods-eye-facial-recognition",
    client: "Smart Security & Facility Ops",
    industry: "AI / Computer Vision",
    title: "Real-time Edge Facial Detection and WebSockets Multi-Camera Tracking",
    excerpt: "Multi-camera computer vision architecture combining OpenCV, Dlib 68-point facial landmark embeddings, edge Flask camera micro-services, and real-time Socket.IO alerts on a central web dashboard.",
    image: "/gods_eye.jpg",
    hue: "violet",
    services: ["AI/ML", "Web", "IoT"],
    results: [["Real-Time", "Socket.IO WebSockets"], ["Dlib + OpenCV", "Edge Embeddings"], ["Multi-Camera", "Unified Command UI"]],
    challenge: "Locating authorized individuals or missing persons across multi-camera facility networks typically requires costly proprietary hardware and manual video monitoring.",
    approach: [
      "Facial Embedding Pipeline: Used Python and Dlib to extract 68-point facial landmarks and store vector embeddings in a centralized database.",
      "Edge Camera Micro-Services: Built lightweight Flask services running on local camera feeds to detect faces using OpenCV and match vector signatures on the edge.",
      "Low-Latency Socket.IO Alerts: Integrated Python-SocketIO to push instantaneous WebSocket notifications to the command dashboard whenever a target is identified.",
      "Interactive Command Center: Built a live frontend dashboard displaying camera coordinates, timestamp logs, and snapshot matches."
    ],
    outcome: "Deployed a distributed computer vision tracking system capable of real-time multi-camera detection and instant WebSocket alert delivery."
  }
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
