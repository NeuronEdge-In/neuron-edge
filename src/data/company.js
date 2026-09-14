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
    slug: "banas-water-billing",
    title: "Banas Water Delivery & Business Management Platform",
    client: "Banas Water Co.",
    category: "Web & Mobile",
    industry: "Utilities & Service Ops",
    year: "2025",
    summary: "Enterprise-grade digital logistics, inventory tracking, and billing ecosystem designed for purified water distributors and route delivery managers. Replaces manual paper record-keeping with an automated, mobile-first workflow for daily water delivery logging, physical PIN/QR-verified customer deliveries, automated monthly billing, and real-time customer ledger tracking.",
    overview: "Banas Water Delivery & Business Management Platform is an enterprise-grade digital logistics, inventory tracking, and billing ecosystem designed specifically for purified water distributors, beverage suppliers, and route delivery managers. The platform replaces manual paper-based record-keeping with an automated, mobile-first workflow for daily water delivery logging, PIN/QR-verified customer deliveries, automated monthly billing, and real-time customer ledger tracking across web and mobile clients.",
    tech: ["Django 6.0 REST API", "React 19 (Web)", "React Native (Expo SDK 54)", "Upstash QStash", "PostgreSQL (UUIDv7)", "Redis", "Evolution API (WhatsApp)", "Docker", "AWS S3"],
    image: "/banas.jpg",
    hue: "cyan",
    metrics: [["< 50ms", "Redis API Latency"], ["100%", "Worker-Free Task Automation"], ["-95%", "Billing Disputes"]],
    externalUrl: "https://juned-the-programmer.github.io/JunedProtfolio.github.io/projects/Banas/banas.html",
    playStoreUrl: null,
    features: [
      "Route-Based Customer & Delivery Management: Organizes customer accounts by geographical delivery routes with custom delivery sequencing, dynamic per-customer rate plans, and active status toggles to streamline daily route planning and delivery efficiency.",
      "Dual-Mode Daily Delivery Logging: Provides rapid mobile entry supporting both manual delivery logging and location-based physical QR code scanning with PIN verification. Backed by an asynchronous staging module for offline field logging and automated batch reconciliation when network connection is restored.",
      "Automated Monthly Billing Engine: Generates custom date-range monthly bills by automatically aggregating delivered water units and coolers, applying customer-specific rate structures, factoring in previous account balances or advance payments, and issuing unique sequential bill numbers.",
      "Real-Time Customer Ledger & Payment Processing: Tracks multi-channel payments (Cash, UPI, Bank Transfer) with automatic balance deduction, round-off adjustments, and real-time account ledgers, providing full financial transparency for both business owners and customers.",
      "Serverless Task Queue & Notification Dispatcher: Utilizes webhook-driven cron scheduling via Upstash QStash for monthly bill generation, midnight dashboard metric resets, and paced WhatsApp delivery alerts via Evolution API."
    ],
    architecture: [
      "Serverless Queue Parallelism & Worker-Free Background Architecture: Instead of running resource-heavy background worker processes, the backend utilizes Upstash QStash HTTP webhooks for serverless background execution. Database-heavy transactional queues (such as pending verification, bill batching, and bulk importing) are strictly constrained to single-worker parallelism to guarantee database write ordering and eliminate race conditions, while I/O-bound tasks (email dispatch and QR generation) run concurrently for maximum throughput.",
      "Distributed High-Performance Schema with UUIDv7 & Compound Indexing: All core relational database models adopt time-ordered UUIDv7 primary keys, combining global uniqueness for multi-region scaling with B-tree index locality. Database tables feature custom compound indexes—such as (customer, -date_added) and (route, active)—enabling sub-millisecond query execution on route delivery screens and historical ledger lookups.",
      "Modern Decoupled Multi-Client Ecosystem: The architecture pairs a mobile-first cross-platform application (Expo React Native with offline state management via Zustand and hardware-backed JWT storage in Expo Secure Store) alongside a high-density analytics admin dashboard featuring real-time visual charts (Recharts) and global state management via Redux Toolkit."
    ],
    highlights: [
      "Multi-Platform Ecosystem: Field delivery Android app for route drivers, dedicated Admin mobile app for live ops tracking, and an enterprise React 19 Web Admin Panel.",
      "Production-ready REST API architected with Django 6.0, SimpleJWT authentication, OpenAPI/Swagger docs, and Gunicorn WSGI multi-threading serving both mobile apps and web.",
      "Worker-free background task queue using Upstash QStash HTTP webhooks for automated monthly billing runs and paced WhatsApp invoice delivery via Evolution API.",
      "High-performance database layer with time-ordered UUIDv7 primary keys, compound B-tree indexing, and Upstash Redis caching delivering sub-50ms API response latency."
    ]
  },
  {
    slug: "raahbar-spiritual-guide",
    title: "Rahbar Ecosystem — Islamic Spiritual Suite",
    client: "Raahbar Ecosystem",
    category: "Mobile & Web",
    industry: "Media & Spiritual Tech",
    year: "2025",
    summary: "Multi-platform digital spiritual companion suite featuring an offline-first Expo React Native app, Fastify v5 REST API backend microservices, administrative control dashboard, 2-step content verification pipeline, offline Quranic text engine, localized prayer time calculation engine, and transactional push notification dispatcher.",
    overview: "Rahbar is a multi-platform digital Islamic spiritual companion suite designed for global users. The platform connects a high-performance cross-platform mobile application built with React Native and Expo with a lightweight Node.js microservices backend powered by Fastify v5. It provides offline-first access to religious literature, precise location-based prayer schedules, Qibla directional calculations, and verified community updates.",
    tech: ["Fastify v5", "Node.js", "React Native", "Expo SDK 54", "PostgreSQL 16", "Expo SQLite", "Redis", "Upstash QStash", "Expo Push API", "Adhan JS"],
    image: "/raahbar.png",
    hue: "violet",
    metrics: [["Sub-50ms", "Fastify REST API Latency"], ["100% Offline", "Quran & Dua Availability"], ["2-Step", "Admin Content Verification"]],
    externalUrl: "https://juned-the-programmer.github.io/JunedProtfolio.github.io/projects/Raahbar/raahbar.html",
    playStoreUrl: null,
    features: [
      "Offline-First Quran & Duas Engine: Embeds an optimized SQLite database on mobile devices to ensure complete access to Quranic chapters, translations, phonetics, and supplications without requiring an active network connection.",
      "Localized Prayer Schedules & Qibla Compass: Integrates Adhan JS and device GPS positioning to compute precise prayer times across multiple juristic conventions alongside real-time compass Qibla direction.",
      "2-Step Verified Community Broadcasts & Payams: Features a multi-stage admin content moderation pipeline where community announcements and religious literature undergo Super Admin verification and validation before public release.",
      "Transactional Outbox Push Notification Worker: Employs a background outbox pattern worker to reliably queue and batch-dispatch mobile push notifications via Expo Push API with exponential retry backoffs."
    ],
    architecture: [
      "High-Throughput Fastify v5 Backend Microservices: Utilizes Node.js with Fastify v5 framework, delivering sub-50ms REST API response latency and minimal memory footprint compared to traditional web frameworks.",
      "Dual Database Hybrid Storage: Combines PostgreSQL 16 on cloud for centralized user management, content verification, and analytics, paired with on-device Expo SQLite for offline content caching.",
      "Redis In-Memory Caching & QStash Scheduler: Uses Upstash Redis for rapid prayer schedule caching and QStash for serverless cron execution of daily metric rollups and push notification triggers."
    ],
    highlights: [
      "Two-Step Content Verification Pipeline: Multi-stage moderation workflow where community broadcasts, Payams, and religious literature undergo Super Admin verification & validation before public release and automated regional push dispatch.",
      "Dual-layer hybrid database architecture combining PostgreSQL 16 on cloud with high-performance on-device Expo SQLite for 100% offline access to Quranic texts and Duas.",
      "Real-time GPS coordinate fetching paired with Adhan JS mathematical calculations for precise prayer times across multiple juristic conventions.",
      "Transactional outbox pattern (notificationWorker.ts) for reliably batch-dispatching mobile push notifications via Expo Push API with retry backoff."
    ]
  },
  {
    slug: "inventory-management-system",
    title: "Enterprise Dual-Mode Inventory & Accounting Platform",
    client: "Retail & Wholesale Enterprise",
    category: "Web & ERP",
    industry: "Logistics & Retail",
    year: "2025",
    summary: "Enterprise real-time inventory reconciliation & dual-taxation accounting platform for retail networks and wholesale distributors. Features strict financial data isolation between GST tax invoices and non-tax estimate sales records, automated background ledger rollups, sub-15ms Redis query caching, and server-side PDF compilation.",
    overview: "Enterprise Dual-Mode Inventory & Accounting Platform is a robust ERP solution built to solve dual-record keeping challenges in retail networks. It enables business owners to seamlessly manage product catalogs, real-time multi-warehouse stock levels, point-of-sale (POS) barcode billing, and dual-taxation financial ledgers within a single unified web platform.",
    tech: ["Python 3.10+", "Django 4.2", "Django REST Framework", "PostgreSQL 13+", "Redis Cache", "Celery", "Celery Beat", "WeasyPrint PDF", "Docker", "Bootstrap 5"],
    image: "/inventory.jpg",
    hue: "cyan",
    metrics: [["100%", "Tax & Non-Tax Data Isolation"], ["80%", "Accounting Overhead Reduction"], ["< 15ms", "POS Query Latency"]],
    externalUrl: "https://juned-the-programmer.github.io/JunedProtfolio.github.io/projects/Inventory/inventory.html",
    playStoreUrl: null,
    features: [
      "100% Tax & Non-Tax Data Isolation: Implements session-level middleware partitioning that completely isolates official GST tax invoices from non-tax estimate sales records, giving owners clean financial reporting.",
      "Real-Time Multi-Location Inventory Reconciliation: Tracks stock movements across multiple warehouses and retail counters with automatic stock deduction and dynamic minimum-quantity reorder alerts.",
      "Server-Side PDF Invoicing Engine: Uses WeasyPrint to compile complex multi-line tax invoices and custom customer estimate receipts into downloadable PDFs in under 1 second.",
      "Automated Background Ledger Rollups: Celery Beat periodic workers automatically compute daily and monthly profit/loss rollups, customer balance aging, and inventory valuation without manual bookkeeping."
    ],
    architecture: [
      "Django 4.2 ORM & Redis Cache Layer: Optimizes relational database queries with Django ORM select_related and prefetch_related patterns, backed by Redis in-memory object caching for sub-15ms POS lookups.",
      "Asynchronous Task Queue with Celery & Celery Beat: Decouples long-running report generation, bulk CSV data imports, and nightly ledger resets into background Celery workers.",
      "Docker Containerized Infrastructure: Packaged with Docker Compose for consistent multi-environment deployment across staging and production servers."
    ],
    highlights: [
      "Dual-mode enterprise accounting allowing business owners to run tax-compliant GST billing alongside internal estimate sales with strict data partitioning.",
      "High-performance Redis caching layer (django-redis) delivering sub-15ms entity lookup speeds for high-concurrency POS usage.",
      "Background worker architecture using Celery & Celery Beat for periodic ledger resets and automatic balance migrations."
    ]
  }
];

export const caseStudies = [
  {
    slug: "attendance-face-recognition",
    client: "Academic Institution (Under Dr. Hemanth K.S.)",
    industry: "AI / Computer Vision & EdTech",
    title: "Patent-Pending Facial Recognition Attendance System & Multi-Face Verification",
    excerpt: "Invented a patent-pending multi-face batch verification methodology in a single camera frame, eliminating manual roll-call and outputting sub-2 second automated Excel roster logs.",
    image: "/attendance.png",
    hue: "lime",
    services: ["AI/ML", "Computer Vision", "Web"],
    results: [["Patent Pending", "Batch Verification Engine"], ["< 2 Seconds", "Roster Export Speed"], ["100%", "Roll-Call Elimination"]],
    challenge: "Traditional paper roll-call attendance in large university classrooms suffers from proxy attendance, significant lecture time waste (10–15 minutes lost per class), and tedious manual administrative bookkeeping.",
    approach: [
      "Patent-Pending Batch Verification Architecture: Invented a multi-face verification engine capable of detecting, cropping, and verifying multiple student facial vectors in a single frame under varied indoor lighting and angles.",
      "Lightweight Computer Vision Inference: Optimized OpenCV image preprocessing, facial alignment, and noise reduction pipelines to execute high-precision inference without requiring expensive GPU hardware.",
      "Facial Feature Vector Embeddings: Employed convolutional feature extraction (TensorFlow & Teachable Machine) to generate 128-dimensional facial embedding vectors and match them against student database profiles.",
      "Automated Roster Export Engine: Built an automated data engine matching identified facial vectors with registered student IDs, compiling daily/monthly summaries into formatted XLSX and CSV reports.",
      "Centralized Administrative Portal: Built a Django administration portal allowing faculty members to enroll student face profiles, review attendance logs, and manage course rosters."
    ],
    outcome: "Successfully deployed a patent-pending multi-face attendance verification solution that records complete classroom rosters in under 2 seconds per frame, entirely eliminating manual roll-call overhead for faculty."
  },
  {
    slug: "terms-conditions-nlp-analyzer",
    client: "Consumer LegalTech & Finance",
    industry: "AI / LegalTech & Mobile",
    title: "AI-Powered Terms & Conditions NLP Risk Analyzer for Banking & Legal Contracts",
    excerpt: "Architected an enterprise AI legal audit suite pairing mobile OCR document scanning with custom Word2Vec vector embeddings and NLP risk classification to detect predatory clauses in sub-3 seconds with >88% accuracy.",
    image: "/privacy_ai.jpg",
    hue: "cyan",
    services: ["AI/ML", "Mobile", "Cloud"],
    results: [["Sub-3s", "Cloud NLP Inference"], ["> 88%", "Predatory Risk Detection"], ["100%", "Cross-Platform Mobile Coverage"]],
    challenge: "Millions of consumers accept complex legal policies, bank terms, and credit agreements without reading dense legalese, exposing themselves to hidden financial penalties, automatic fee escalation, and forced arbitration traps.",
    approach: [
      "Multi-Page OCR Document Ingestion Pipeline: Built a mobile camera document ingestion engine in React Native (Expo) that crops, denoises, and normalizes physical contract photos into structured text data.",
      "Domain-Specific Legal Dataset Curation: Collected and manually annotated thousands of legal clauses from financial agreements, credit cards, and service policies to train high-precision consumer risk models.",
      "Word2Vec Embeddings & Legal Risk Matrix: Trained Word2Vec vector embeddings and NLP classification models (Scikit-Learn, NLTK) to evaluate semantic context and tag contract clauses into risk tiers (High Risk, Moderate Risk, Compliance Warning).",
      "Predatory Clause & Risk Scanner: Evaluated text specifically for consumer-adverse clauses including automatic renewal traps, forced arbitration, hidden penalty fees, and excessive data privacy waivers.",
      "Cloud REST API & Mobile Dashboard: Exposed real-time inference microservices via Django REST Framework on Google Cloud Platform (GCP), returning highlighted risk clauses and plain-language summaries to mobile clients."
    ],
    outcome: "Delivered an intuitive AI legal auditor that parses multi-page agreements in under 3 seconds, alerting users to predatory terms before signing or accepting contracts."
  },
  {
    slug: "gods-eye-facial-recognition",
    client: "Campus Security & Facility Operations",
    industry: "AI / Computer Vision & IoT",
    title: "God's Eye — Distributed Edge Facial Recognition & Multi-Camera Tracking Network",
    excerpt: "Multi-camera computer vision architecture deploying lightweight Flask edge nodes on camera feeds to extract 68-point facial landmark vectors and push real-time sub-500ms Socket.IO WebSocket alerts to a central dashboard.",
    image: "/gods_eye.jpg",
    hue: "violet",
    services: ["AI/ML", "Web", "IoT"],
    results: [["< 500ms", "Edge-to-Dashboard Alert Speed"], ["68-Point", "Facial Landmark Vectors"], ["Plug & Play", "Edge Node Camera Registration"]],
    challenge: "Locating targeted individuals or missing persons across multi-camera campus networks typically requires expensive proprietary hardware servers or manual, error-prone video feed monitoring.",
    approach: [
      "Decoupled Edge Computing Topology: Reduced central server load and bandwidth consumption by deploying localized camera edge nodes (Python, Flask) that capture live feeds and extract 68-point facial landmark vectors on the edge using dlib and OpenCV.",
      "Sub-Second Socket.IO WebSocket Event Pipeline: Integrated bi-directional Socket.IO / Engine.IO WebSockets to push immediate detection alerts, camera location IDs, and timestamp logs to central security dashboards without polling delay.",
      "Centralized Target Profile Registry: Maintained a central database storing target facial embeddings, camera registry configurations, and historical location tracking logs for audit trails.",
      "Spatial Command Dashboard: Built an interactive security command interface enabling administrators to search target individuals, enroll face profiles, view live camera alerts, and trace movement paths."
    ],
    outcome: "Deployed a distributed edge tracking network delivering sub-500ms real-time multi-camera target detection alerts with minimal network bandwidth usage."
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
