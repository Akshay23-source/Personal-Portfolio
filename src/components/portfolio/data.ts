export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const CONTACT = {
  email: "akshaygabrieal@gmail.com",
  linkedin: "https://www.linkedin.com/in/akshay-gabrieal-r-2848b02b0",
  github: "https://github.com/Akshay23-source",
  location: "India",
};

export const ROLES = [
  "AI/ML Enthusiast",
  "Cloud Enthusiast",
  "SWE Enthusiast",
  "Cybersecurity Enthusiast",
];

export const STATS = [
  { label: "Projects Completed", value: 15 },
  { label: "Certifications", value: 12 },
  { label: "Technologies", value: 25 },
  { label: "GitHub Repos", value: 20 },
];

export const SKILLS: string[] = [
  // Programming
  "Python", "C++",
  // Frontend
  "HTML", "CSS",
  // Backend
  "Node.js",
  // Database
  "MySQL", "Supabase",
  // AI / ML
  "TensorFlow", "PyTorch", "Scikit-learn", "LLMs", "Prompt Engineering",
  // Cybersecurity
  "Networking", "Packet Tracer",
  // Tools
  "Git", "GitHub", "VS Code", "Docker", "Figma", "Postman",
];

export type Project = {
  title: string;
  category: "AI" | "Web" | "Mobile" | "Cybersecurity";
  description: string;
  problem: string;
  features: string[];
  stack: string[];
  challenges: string;
  learnings: string;
  github: string;
  demo?: string;
  gradient: string;
};

export const PROJECTS: Project[] = [
  {
    title: "RakshaNet — Women Safety App",
    category: "Cybersecurity",
    description: "A premium women's safety platform with instant authentication, real-time Leaflet navigation, local fallback demo mode, and offline Firestore syncing.",
    problem: "Traditional safety apps depend heavily on active internet coverage and lack instant local mapping or decentralized relay networks.",
    features: ["Instant Auth (Email/Phone)", "Leaflet Navigation & Route Safety", "Shake-Detection SOS Trigger", "Background Video/Audio Evidence Logging", "P2P Mesh Network Hopping Simulation"],
    stack: ["React", "TypeScript", "Tailwind CSS", "Leaflet JS", "Firebase Firestore", "Firebase Storage"],
    challenges: "Developing a robust mesh-hopping simulation and seamless camera/microphone capturing as WebM blobs.",
    learnings: "Leveraging background accelerometer listeners, mapping polygon overlaps, and handling localized offline caches.",
    github: "https://github.com/Akshay23-source/-RakshaNet-Women-Safety-App",
    demo: "https://raksha-net-women-safety-app.vercel.app",
    gradient: "from-rose-500 via-pink-500 to-violet-500",
  },
  {
    title: "CarbonMind AI",
    category: "AI",
    description: "Net-Zero lifestyle intelligence OS using NLP, computer vision OCR, and predictive modeling to track and audit carbon footprints in real-time.",
    problem: "Standard carbon calculators are static, rely on monthly averages, and fail to provide gamified rewards to sustain behavioral shifts.",
    features: ["Digital Carbon Twin™", "Gemini 1.5-Flash Receipt OCR", "Green Coins & XP Gamification Engine", "ESG B2B ESG Aggregation Dashboard", "Decentralized Green Rewards Portal"],
    stack: ["React", "TypeScript", "Node.js", "Express", "Google Gemini API", "Cloud Firestore", "Tailwind CSS"],
    challenges: "Mitigating prompt injection vectors during natural language parsing, and optimizing TTL in-memory caching.",
    learnings: "Designing ESG metrics architectures, orchestrating strict JSON schemas with Gemini, and creating high-performance starfield canvas loops.",
    github: "https://github.com/Akshay23-source/CarbonMind-AI",
    demo: "https://carbon-mind-ai.vercel.app/",
    gradient: "from-emerald-500 via-teal-400 to-cyan-500",
  },
  {
    title: "Student Information System (SIS)",
    category: "Web",
    description: "Educational institution command center for grade, performance tracking, roster CRUD operations, leaderboards, and role management.",
    problem: "Schools suffer from siloed systems where teachers, students, and administrators cannot interact or audit records securely.",
    features: ["Student Portal (GPA, Ranks)", "Teacher Portal (Student CRUD, Leaderboard)", "Admin Role Assignment", "Dynamic Verification QR Code Generator", "PDF Report Sheet Exporter"],
    stack: ["React", "TypeScript", "TanStack Start", "Supabase DB", "Tailwind CSS", "Recharts", "jsPDF", "html5-qrcode"],
    challenges: "Integrating Supabase Row-Level Security policies with nested user roles, and structuring clean PDF documents dynamically.",
    learnings: "Working with TanStack Start SSR routing engine, handling client-side QR verification, and implementing interactive WebAudio synthesizers.",
    github: "https://github.com/Akshay23-source/Student-Information-System",
    demo: "https://student-information-system-akshay23.vercel.app",
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
  },
  {
    title: "Bus Pass Management System",
    category: "Web",
    description: "Full-stack application offering streamlined online bus pass applications, route selection, and a personalized travel summary dashboard.",
    problem: "Manual bus pass renewals cause physical queues, administration overhead, and poor transit tracking.",
    features: ["JWT User Authentication", "Dynamic Route Selection Flow", "Travel Dashboard & Insights", "Bus Pass Status Tracker", "Responsive Desktop/Mobile Layout"],
    stack: ["React", "TypeScript", "Python", "Flask", "JWT Auth", "Tailwind CSS"],
    challenges: "Synchronizing state between Flask authentication middleware and React frontend contexts.",
    learnings: "Designing secure token renewal flows, structuring RESTful APIs, and implementing mobile-first layouts.",
    github: "https://github.com/Akshay23-source/CodeAlpha_BusPassSystem",
    demo: "https://codealpha-bus-pass-system.vercel.app",
    gradient: "from-amber-500 via-orange-500 to-red-500",
  },
];

export const EXPERIENCE = [
  {
    role: "AI & Cloud Intern",
    company: "IBM Cloud / Edunet Foundation",
    duration: "July 2025 — August 2025",
    description: "4-week virtual internship leveraging IBM Cloud Platform and SkillsBuild for deploying AI services and orchestrating cloud resource instances.",
    skills: ["IBM Cloud", "AI Services", "SkillsBuild", "Virtual Intelligent Agents", "Cloud Deployment"],
    certificate: "/certificates/ibm_cloud_internship.pdf",
  },
  {
    role: "Cybersecurity with AI Intern",
    company: "NIIT Foundation",
    duration: "August 2025",
    description: "4-week virtual internship focused on cybersecurity methodologies combined with AI analytics for threat detection, network mapping, and security auditing.",
    skills: ["Cybersecurity", "Threat Intelligence", "AI Analytics", "Security Auditing", "Network Security"],
    certificate: "/certificates/niit_cybersecurity_internship.pdf",
  },
  {
    role: "ServiceNow Virtual Intern",
    company: "ServiceNow",
    duration: "August 2025",
    description: "Completed the Virtual Internship Program focusing on ServiceNow application design, custom workflow creation, and Micro Certification in ServiceNow administration.",
    skills: ["ServiceNow", "System Administration", "ITSM", "Workflows", "Custom Applications"],
    certificate: "/certificates/servicenow_internship.pdf",
  },
];

export const EDUCATION = [
  {
    title: "Bachelor of Engineering (B.Tech) — Computer Science & Engineering",
    org: "St Joseph Engineering College, Mangalore",
    duration: "2022 — 2026",
    detail: "",
    courses: ["Data Structures", "Algorithms", "Operating Systems", "DBMS", "Machine Learning", "Computer Networks", "Cybersecurity"],
  },
  {
    title: "Pre-University College (PUC)",
    org: "St Joseph's Pre-University College, Bangalore",
    duration: "2021 — 2023",
    detail: "PCMC",
    courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
  },
  {
    title: "10th Standard (SSLC)",
    org: "St. Joseph's Indian High School, Bangalore",
    duration: "2021",
    detail: "SSLC",
    courses: ["Mathematics", "Science", "Social Science", "Languages"],
  },
];

export const CERTIFICATIONS = [
  {
    name: "AI ASCEND 2026",
    issuer: "Saveetha Engineering College (powered by Kyndryl & AWS)",
    date: "2026",
    link: "/certificates/saveetha_ai_ascend.jpg",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy (offered by NIIT Foundation)",
    date: "July 2025",
    link: "/certificates/cisco_niit_cybersecurity.jpg",
  },
  {
    name: "Low Code No Code Development",
    issuer: "YHills",
    date: "February 2025",
    link: "/certificates/yhills_low_code_no_code.jpg",
  },
  {
    name: "Software Engineering",
    issuer: "Infosys Springboard",
    date: "July 2024",
    link: "/certificates/infosys_software_engineering.jpg",
  },
  {
    name: "Journey to Cloud: Envisioning Your Solution",
    issuer: "IBM SkillsBuild",
    date: "July 2025",
    link: "/certificates/ibm_journey_to_cloud.pdf",
  },
  {
    name: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "July 2025",
    link: "/certificates/ibm_getting_started_with_ai.pdf",
  },
  {
    name: "Scuderia Ferrari HP Meets IBM Innovation: AI-Powered Racing",
    issuer: "IBM SkillsBuild",
    date: "January 2026",
    link: "/certificates/ibm_ferrari_racing.jpg",
  },
  {
    name: "Machine Learning Bootcamp",
    issuer: "YHills",
    date: "October 2024",
    link: "/certificates/yhills_ml_bootcamp.jpg",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "NCC Cadet",
    detail: "Represented the Karnataka & Goa Directorate at the National Level NCC Idea Innovation Camp held in Vijayawada, Andhra Pradesh. Developed and presented an innovative Women Safety App, demonstrating innovation, problem-solving, leadership, and technical presentation skills.",
  },
  {
    title: "Sports",
    detail: "Represented Bangalore North thrice in state level and Mangalore SJEC once. Floorball state winners (represented Bangalore North, led the winning team, and led SJEC team to states). Represented SJEC at the state level in athletics and cross country.",
  },
];

export const LEARNING = [
  { name: "Cloud Computing", progress: 80 },
  { name: "Cybersecurity", progress: 75 },
  { name: "AI Agents", progress: 70 },
  { name: "Automation", progress: 65 },
  { name: "AI Tools", progress: 60 },
];

export const TESTIMONIALS = [
  {
    name: "Dr. Placeholder",
    role: "Professor, CSE Dept.",
    quote: "Akshay is one of the most curious and self-driven students I have taught. His projects consistently go beyond coursework.",
  },
  {
    name: "Mentor Placeholder",
    role: "Senior Engineer",
    quote: "Rare combination of solid engineering fundamentals and a real product mindset. Ships fast and thinks clearly.",
  },
  {
    name: "Supervisor Placeholder",
    role: "Internship Supervisor",
    quote: "Delivered internship goals ahead of schedule and proactively improved parts of the codebase nobody asked him to.",
  },
];

export const BLOG = [
  { title: "From Prompts to Products: Building with LLMs", date: "Aug 2025", excerpt: "Lessons from shipping LLM-powered features to real users." },
  { title: "A Practical Guide to RAG Pipelines", date: "Jun 2025", excerpt: "Chunking, embeddings, and eval strategies that actually work." },
  { title: "Cybersecurity for Developers", date: "Apr 2025", excerpt: "The threat model every full-stack dev should carry in their head." },
];