// The CV as data: the single source of truth for the /cv page and the home
// page's Experience section. Based on CV_Godwin.pdf (Nov 2026).
// The downloadable PDF is maintained separately: update both together.

export type CvEntry = {
  title: string;
  org: string;
  location?: string;
  period?: string;
  points?: string[];
  stack?: string[];
};

export type SkillGroup = { name: string; items: string[] };

export type Cv = {
  profile: string;
  skills: SkillGroup[];
  projects: CvEntry[];
  experience: CvEntry[];
  education: CvEntry[];
  openSource: CvEntry[];
  languages: string[];
};

export const cv: Cv = {
  profile:
    "Software developer experienced in building and maintaining web applications with React, Next.js, TypeScript and JavaScript, including API integrations, performance improvements and reusable components. Currently independently building ComBridge, an AI-assisted, end-to-end communication bridge using Java 21, Spring Boot, PostgreSQL and React Native to address a real communication barrier. Brings additional applied experience in machine learning, predictive modelling and data analytics; motivated by practical problem-solving, code quality and learning new backend technologies.",

  skills: [
    { name: "Frontend", items: ["React", "Next.js", "React Native", "TypeScript", "JavaScript", "HTML5", "CSS3 / Sass", "Tailwind CSS", "Bootstrap"] },
    { name: "Backend", items: ["Java 21", "Spring Boot (current project)", "Node.js", "Express.js", "Python", "Django"] },
    { name: "APIs & data", items: ["REST APIs", "Third-party / AI integrations", "PostgreSQL", "SQL", "Firebase", "Swagger"] },
    { name: "Engineering tools", items: ["Git", "Docker", "Jenkins", "Code reviews", "Reusable component libraries"] },
    {
      name: "AI-augmented development",
      items: [
        "Agentic coding workflows",
        "AI coding agent orchestration",
        "Context engineering and task decomposition",
        "AI-assisted debugging and test generation",
        "Review and validation of AI-generated code",
        "Claude Code · Codex · GitHub Copilot · ChatGPT",
      ],
    },
    { name: "AI & analytics", items: ["Speech-to-text and LLM integration", "Machine learning", "Predictive modelling", "Clustering", "Streamlit"] },
  ] satisfies SkillGroup[],

  projects: [
    {
      title: "ComBridge: AI-assisted end-to-end communication bridge",
      org: "Independent project",
      period: "Ongoing",
      stack: ["Java 21", "Spring Boot", "PostgreSQL", "React Native", "TypeScript", "Deepgram", "Gemini AI", "REST APIs"],
      points: [
        "Building an end-to-end communication assistant that helps users understand spoken German and respond in real time, addressing a personal language barrier through practical software.",
        "Developing the Java/Spring Boot backend for audio processing, conversation and turn management, context-aware translation and generation of multiple suggested replies.",
        "Integrating Deepgram speech recognition and Gemini AI with a React Native mobile interface; implementing REST endpoints and automated tests.",
        "Core conversational flows are working; continuing to improve latency, reliability and the voice interaction experience.",
      ],
    },
    {
      title: "Water-pump functionality prediction",
      org: "Machine learning",
      stack: ["Python", "Machine learning", "Streamlit"],
      points: [
        "Built and compared models to predict water-pump functionality in Tanzania; applied RFECV feature selection, with Random Forest performing best among tested approaches.",
      ],
    },
    {
      title: "Retail customer segmentation",
      org: "Data analytics",
      stack: ["Python", "Clustering", "Data analysis"],
      points: ["Analysed retail customer data using clustering to identify meaningful customer groups and behavioural patterns."],
    },
  ] satisfies CvEntry[],

  experience: [
    {
      title: "Application Developer / Systems Analyst",
      org: "ICT Directorate, University of Calabar",
      location: "Nigeria",
      period: "Feb 2017 – Jan 2025",
      points: [
        "Developed and maintained more than five university web applications using React and Next.js.",
        "Improved frontend performance through architecture reviews, state-management improvements and refactoring.",
        "Supported API integrations and data-fetching improvements; worked with TypeScript, React Native, Python/Django, Docker and Swagger.",
      ],
    },
    {
      title: "Frontend Software Developer",
      org: "Intplus Technology LLC",
      location: "Lagos, Nigeria",
      period: "May 2023 – Jan 2025",
      points: [
        "Developed web applications and a JavaScript payment SDK delivered through a Node.js server/CDN for integration into client applications.",
        "Integrated third-party APIs and services; reviewed code, mentored new team members and published a reusable component library via GitHub Packages.",
      ],
    },
    {
      title: "Graphic Design / IT Support",
      org: "Sarki Digital Impressions Ltd",
      location: "Abuja, Nigeria",
      period: "Apr 2016 – Feb 2017",
      points: [
        "Created brand assets and reports; used feedback and data to guide design decisions and supported IT infrastructure and backups.",
      ],
    },
  ] satisfies CvEntry[],

  education: [
    { title: "Certificate, Software Engineering", org: "ALX Africa and Holberton", period: "Jul 2024" },
    { title: "B.Sc., Computer Science", org: "University of Abuja", period: "Oct 2011" },
  ] satisfies CvEntry[],

  openSource: [
    {
      title: "HNG ExpressJS Boilerplate",
      org: "Open-source contribution",
      period: "Feb 2024 – May 2024",
      points: ["Contributed to an open-source Express.js boilerplate for structured web application development."],
    },
  ] satisfies CvEntry[],

  languages: ["English", "German"],
};
