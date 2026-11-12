// All project data lives here for now.
// Later we can move each project into its own Markdown file.

export type Project = {
  slug: string; // used in the URL: /projects/<slug>
  title: string;
  summary: string; // one line, shown on cards
  description: string; // longer text, shown on the detail page
  tags: string[];
  category: "Fullstack" | "Frontend" | "Backend" | "Mobile" | "Design" | "Systems";
  year?: number;
  repo?: string; // GitHub link (or links, for split client/API repos)
  repoApi?: string;
  live?: string; // live demo
  featured?: boolean; // shown on the home page when true
};

export const projects: Project[] = [
  {
    slug: "laundbot",
    title: "Laundbot",
    summary: "Book laundry services online, with payments built in.",
    description:
      "A fullstack app that lets users book laundry services online. The client is built with Next.js and TypeScript; the RESTful API runs on Node.js (Express) with PostgreSQL, and includes a payment gateway integration. Frontend and backend live in separate repositories.",
    tags: ["Next.js", "TypeScript", "Express", "PostgreSQL"],
    category: "Fullstack",
    repo: "https://github.com/Emeriego/laundbot-client",
    repoApi: "https://github.com/Emeriego/laundbot-api",
    live: "https://laundbot-client.vercel.app/",
    featured: true,
  },
  {
    slug: "driveby",
    title: "Driveby",
    summary: "A peer-to-peer car rental platform.",
    description:
      "Driveby lets users rent cars from other users. The frontend is built with React, the RESTful API with Python (Django) and PostgreSQL, with a payment gateway integration.",
    tags: ["React", "Django", "PostgreSQL"],
    category: "Fullstack",
    repo: "https://github.com/Emeriego/DriveBy",
    live: "https://driveby-client.vercel.app/",
    featured: true,
  },
  {
    slug: "hng-express-boilerplate",
    title: "HNG Express.js Boilerplate",
    summary: "Open-source foundation for Express.js apps (contributor).",
    description:
      "An open-source boilerplate providing a structured foundation for Express.js applications: user authentication, environment configuration, predefined routes, and conventions for error handling and middleware. It helps teams start projects faster with clean, consistent code.",
    tags: ["Node.js", "Express", "PostgreSQL", "Open source"],
    category: "Backend",
    repo: "https://github.com/hngprojects/hng_boilerplate_expressjs",
    featured: true,
  },
  {
    slug: "dayline",
    title: "Dayline",
    summary: "A mobile day tracker for todos and daily notes.",
    description:
      "A mobile app for tracking daily activities: make todo lists or write daily notes. Built with React Native and TypeScript.",
    tags: ["React Native", "TypeScript", "Expo"],
    category: "Mobile",
    repo: "https://github.com/Emeriego/dayline",
    live: "https://expo.dev/@emerie/dayline",
    featured: true,
  },
  {
    slug: "sunnytech",
    title: "SunnyTech Press Website",
    summary: "Corporate site for a printing press company (client work).",
    description:
      "A corporate website showcasing the products and services of a printing press company, with a React frontend and a Node.js (Express) and PostgreSQL REST API.",
    tags: ["React", "Express", "PostgreSQL"],
    category: "Fullstack",
    repo: "https://github.com/Emeriego/sunnytech-client",
    live: "https://www.sunnytechlink.com/",
  },
  {
    slug: "unical-press",
    title: "Unical Press Archive",
    summary: "Archive of jobs and services for the University of Calabar press.",
    description:
      "A corporate website and archive showcasing the jobs and services of the University of Calabar printing press.",
    tags: ["PHP", "MySQL"],
    category: "Fullstack",
    live: "https://unicalpress.unical.edu.ng",
  },
  {
    slug: "kasia",
    title: "Kasia",
    summary: "Landing page for a health and fitness brand: design and build.",
    description:
      "A landing page for a health and fitness brand. I designed the UI/UX in Figma and implemented it with React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "Figma"],
    category: "Design",
    repo: "https://github.com/Emeriego/Glow",
    live: "https://glow-eight.vercel.app/",
  },
  {
    slug: "classmates",
    title: "Classmates",
    summary: "Landing page for a student collaboration platform.",
    description:
      "A responsive landing page for a student collaboration platform. I designed the UI/UX and built it in Webflow.",
    tags: ["Figma", "Webflow"],
    category: "Design",
    live: "https://flatmates-ca6109.webflow.io/",
  },
  {
    slug: "emchat",
    title: "EmChat",
    summary: "Landing page for a chat application.",
    description:
      "A responsive landing page for a chat application, designed and built in Webflow.",
    tags: ["Figma", "Webflow"],
    category: "Design",
    live: "https://emchat-com.webflow.io/",
  },
  {
    slug: "piano",
    title: "Virtual Piano",
    summary: "A playable piano in the browser.",
    description:
      "A responsive virtual piano that plays sounds when you click the keys. Built with HTML, CSS and JavaScript.",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "Frontend",
    repo: "https://github.com/Emeriego/piano",
    live: "https://piano-xi-gray.vercel.app/",
  },
  {
    slug: "airbnb-clone",
    title: "AirBnB Clone",
    summary: "A rental listings site with search (ALX project).",
    description:
      "A clone of the AirBnB website built with Flask, PostgreSQL and Redis, including a responsive UI and search.",
    tags: ["Python", "Flask", "PostgreSQL", "Redis"],
    category: "Fullstack",
    repo: "https://github.com/Emeriego/AirBnB_clone_v4",
  },
  {
    slug: "simple-shell",
    title: "Simple Shell",
    summary: "A Unix command-line shell written in C (ALX project).",
    description:
      "A simple implementation of a Unix shell in C: a command-line interface that reads, parses and executes user commands.",
    tags: ["C", "Shell"],
    category: "Systems",
    repo: "https://github.com/Emeriego/simpleshell",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
