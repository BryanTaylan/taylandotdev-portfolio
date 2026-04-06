export const profile = {
  name: "Bryan Taylan",
  title: "Software engineer building clear, high-leverage products.",
  tagline: [
    "Backend systems, modern frontend, and fast iteration.",
    "UCF Computer Engineering student with internship and hackathon experience.",
  ],
  intro:
    "I build software across web, AI, and product systems with a focus on clarity, speed, and execution.",
  highlights: ["UCF Computer Engineering", "2 award-winning projects", "Orlando, FL"],
  heroPanel: {
    initials: "BT",
    focus: "Full-stack software engineering",
    basedIn: "Orlando, Florida",
    education: "B.S. Computer Engineering, Spring 2027",
    gpa: "3.85 GPA",
  },
} as const;

export const education = {
  school: "University of Central Florida",
  degree: "Bachelor of Science in Computer Engineering",
  gpa: "3.85 GPA",
  graduation: "Spring 2027",
} as const;

export const about = {
  heading: "I like building software that feels useful, fast, and well finished.",
  paragraphs: [
    "My work spans backend features, responsive interfaces, internal tools, and AI-driven builds. I care about clean systems, strong UX, and shipping products that hold up in real use. Music is a big part of how I reset, and I play guitar regularly.",
  ],
} as const;

export const skills = {
  languages: [
    "Python",
    "JavaScript",
    "TypeScript",
    "Java",
    "C",
    "HTML/CSS",
    "SQL",
    "MATLAB",
    "C#",
    "C++",
    "Verilog",
  ],
  frameworks: [
    "React",
    "Next.js",
    "Remix",
    "Node.js",
    "Flask",
    "Nest.js",
    "tRPC",
    "Tailwind CSS",
    "Prisma",
    "Shadcn",
  ],
  tools: [
    "Git",
    "REST APIs",
    "AWS",
    "Vercel",
    "MongoDB",
    "Postman",
    "VS Code",
    "Docker",
    "OpenAI",
    "Gemini",
  ],
} as const;

export const experienceItems = [
  {
    role: "Sponsorship Director",
    company: "Knight Hacks",
    period: "January 2026 - Present",
    location: "Orlando, FL",
    bullets: [
      "Manage corporate partnerships for UCF’s largest software engineering club (1000+ members).",
      "Lead outreach to tech companies to secure funding, sponsorships, and event resources.",
      "Collaborate with the executive board on budget planning and sponsorship strategy.",
      "Develop sponsorship proposals and maintain relationships with corporate partners.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Knight Hacks",
    period: "September 2025 - Present",
    location: "Orlando, FL",
    bullets: [
      "Built backend features with tRPC, TypeScript, and SQL supporting judging for 1,000+ participants.",
      "Integrated Stripe to process and track $95,000+ in corporate sponsorship payments.",
      "Built a TypeScript results page with 4 response display types for an internal form platform replacing Google Forms.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "NextGen Software",
    period: "May 2025 - August 2025",
    location: "Boca Raton, FL",
    bullets: [
      "Improved HTML/CSS layouts for a bookselling site, increasing product page consistency and cutting layout-related support requests by 20%.",
      "Enhanced catalog styling and mobile responsiveness, contributing to a 15% increase in average session duration.",
      "Worked directly with 3 clients to implement design feedback and improve delivery.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "NextGen Software",
    period: "June 2023 - August 2023",
    location: "Boca Raton, FL",
    bullets: [
      "Modernized the Tier 25 app with React, improving UI consistency for a product with 5,000+ downloads.",
      "Optimized HTML, CSS, and JavaScript across 10+ pages to improve SEO, responsiveness, and supportability.",
      "Resolved 20+ UI inconsistencies through DevTools and manual testing, improving mobile performance.",
    ],
  },
] as const;

export const projects = [
  {
    title: "Agentic Nuclear Reactor",
    description:
      "A 4-agent system for autonomous beam steering with live telemetry.",
    summary:
      "Python, FastAPI, Google ADK, Gemini, Next.js, TypeScript, and Arduino.",
    bullets: [
      "Built a 4-agent Google ADK system for autonomous beam steering with Gemini reasoning.",
      "Streamed real-time telemetry through FastAPI WebSockets into a Next.js dashboard.",
      "Engineered Arduino firmware for electrode sensing, micro-current capture, and DAC steering signals.",
    ],
    tags: ["Python", "FastAPI", "Google ADK", "Gemini", "Next.js", "TypeScript", "Arduino"],
    award: "1st Place Overall + Google Cloud ADK Winner",
    awardContext: "HackUSF 2026, 80+ projects",
    accent:
      "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(24,24,27,0.96), rgba(255,255,255,0.04))",
    links: {
      devpost: "https://devpost.com/software/regenerative-agentic-nuclear-reactor",
    },
  },
  {
    title: "Systema",
    description:
      "An AI interview platform for grading, proctoring, and candidate workflow.",
    summary:
      "Next.js, TypeScript, Gemini APIs, Supabase, and Resend.",
    bullets: [
      "Built an AI interview platform with Gemini 2.0 Flash for real-time auto-grading.",
      "Added proctoring with Gemini Vision checks running every 10 seconds during interviews.",
      "Automated scheduling, event logging, and feedback delivery with Supabase and Resend.",
    ],
    tags: ["Next.js", "TypeScript", "Gemini API", "Resend", "Supabase"],
    award: "1st Place MLH Best Use of Google Gemini",
    awardContext: "Knight Hacks 2025, 1st of 120 teams",
    accent:
      "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(12,12,12,0.96), rgba(255,255,255,0.03))",
    links: {
      devpost: "https://devpost.com/software/systema",
    },
  },
  {
    title: "Venue View",
    description:
      "A full-stack concert preview app for live event data, venue details, and seat mapping.",
    bullets: [
      "Built a full-stack concert preview app integrating the Ticketmaster API to fetch and render live event data.",
      "Developed dynamic venue and seat map views using parsed event metadata across 20+ fields.",
      "Engineered authentication in Flask with password hashing and SQLite persistence.",
      "Implemented 4+ REST endpoints for registration, login, and session management.",
    ],
    tags: ["Flask", "Ticketmaster API", "SQLite", "REST APIs", "Authentication"],
    award: undefined,
    awardContext: undefined,
    accent:
      "linear-gradient(135deg, rgba(255,255,255,0.07), rgba(10,10,10,0.96), rgba(255,255,255,0.025))",
    links: undefined,
  },
  {
    title: "Shoperize",
    description:
      "An AI-powered Shopify workflow for automating product background replacement.",
    bullets: [
      "Built an AI-powered Shopify app using GPT-4 Vision and DALL·E 3 to automate product background replacement.",
      "Reduced manual editing time from hours to under 2 minutes.",
      "Developed a React dashboard with 5+ preset backgrounds and custom prompt generation.",
      "Designed scalable image processing workflows for dynamic product rendering.",
    ],
    tags: ["React", "GPT-4 Vision", "DALL·E 3", "Shopify", "Image Processing"],
    award: undefined,
    awardContext: undefined,
    accent:
      "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(14,14,14,0.96), rgba(255,255,255,0.02))",
    links: undefined,
  },
  {
    title: "Gym Tracker",
    description:
      "A fitness tracking app for workouts, goals, and progress across desktop and mobile.",
    bullets: [
      "Built a fitness tracking web app using React.js and JavaScript for logging workouts and setting goals.",
      "Designed a responsive UI optimized for both desktop and mobile usage.",
      "Implemented core workout logging and progress tracking features.",
      "Structured frontend state management for a consistent user experience.",
    ],
    tags: ["React.js", "JavaScript", "Responsive UI", "State Management"],
    award: undefined,
    awardContext: undefined,
    accent:
      "linear-gradient(135deg, rgba(255,255,255,0.055), rgba(8,8,8,0.96), rgba(255,255,255,0.018))",
    links: undefined,
  },
] as const;

export const externalLinks = [
  {
    label: "Email",
    value: "bryanefetaylan@gmail.com",
    href: "mailto:bryanefetaylan@gmail.com",
    kind: "email",
  },
  {
    label: "GitHub",
    value: "github.com/BryanTaylan",
    href: "https://github.com/BryanTaylan",
    kind: "github",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bryan-taylan",
    href: "https://www.linkedin.com/in/bryan-taylan",
    kind: "linkedin",
  },
  {
    label: "Resume",
    value: "Open PDF",
    href: "/Taylan_Bryan.pdf",
    kind: "resume",
  },
  {
    label: "Guitar",
    value: "TikTok / Music",
    href: "https://www.tiktok.com/@btaylmusic?is_from_webapp=1&sender_device=pc",
    kind: "guitar",
  },
] as const;
