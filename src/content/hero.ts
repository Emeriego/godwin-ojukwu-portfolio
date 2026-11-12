// Hero copy in English and German. Content lives here, not in components,
// so wording changes never touch layout code. (Full-site German arrives in build step 6.)

export type Lang = "en" | "de";

export type QuickTopic = "me" | "projects" | "skills" | "experience" | "contact";

type HeroCopy = {
  status: string;
  hello: string;
  intro: string;
  title: string;
  /** Rotating typed lines, shown in random order */
  lines: string[];
  askPlaceholder: string;
  askLabel: string;
  topics: Record<QuickTopic, { label: string; question: string; answer: string }>;
  /** Shown for typed questions until the AI chat backend exists (build step 5) */
  pendingAnswer: string;
  cv: string;
};

export const heroCopy: Record<Lang, HeroCopy> = {
  en: {
    status: "Open to software developer roles in Germany",
    hello: "Hello",
    intro: ", I'm Godwin.",
    title: "Software Developer",
    lines: [
      "Building software that solves real problems isn't just my job. It's what I'd be doing anyway.",
      "Give me a real problem and a keyboard, and I'll happily lose track of time until it's solved.",
      "I design it, build it and ship it, because making things that work is my favorite way to spend a day.",
      "From the first sketch to the final release, I love turning real problems into software that works.",
      "I design, build and ship software that solves real problems, and I enjoy every step of it.",
    ],
    askPlaceholder: "Ask me anything about Godwin…",
    askLabel: "Ask a question about Godwin",
    topics: {
      me: {
        label: "Me",
        question: "Who is Godwin?",
        answer:
          "Godwin is a software developer based in Herne, Germany. He has a BSc in Computer Science, has built web apps with React and Next.js since 2017, and is now building ComBridge with Java 21 and Spring Boot.",
      },
      projects: {
        label: "Projects",
        question: "What has he built?",
        answer:
          "His flagship is ComBridge, an AI communication assistant built with Java, Spring Boot, React Native, Deepgram and Gemini. Others include a water-pump failure prediction model and fullstack apps like Laundbot and Driveby.",
      },
      skills: {
        label: "Skills",
        question: "What is his stack?",
        answer:
          "Java, Spring Boot, TypeScript, JavaScript, React, Next.js, Node.js, Python and PostgreSQL, plus machine learning and a background in UI design.",
      },
      experience: {
        label: "Experience",
        question: "Where has he worked?",
        answer:
          "Application developer and systems analyst at the University of Calabar (2017 to 2025), and frontend developer at Intplus Technology (2023 to 2025), where he built a JavaScript payment SDK and a component library.",
      },
      contact: {
        label: "Contact",
        question: "How do I reach him?",
        answer:
          "Email is fastest: tap Contact me and a message is ready to send. He's open to software developer roles in Germany.",
      },
    },
    pendingAnswer: "The AI assistant is coming soon. It will answer here using Godwin's CV and projects. Meanwhile, try one of the topics below.",
    cv: "View CV",
  },
  de: {
    status: "Offen für Stellen als Softwareentwickler in Deutschland",
    hello: "Hallo",
    intro: ", ich bin Godwin.",
    title: "Softwareentwickler",
    lines: [
      "Software zu bauen, die echte Probleme löst, ist für mich nicht nur ein Beruf. Es ist das, was ich sowieso tun würde.",
      "Ein echtes Problem und eine Tastatur, und ich vergesse gern die Zeit, bis es gelöst ist.",
      "Ich entwerfe, baue und liefere Software aus, denn etwas zu bauen, das funktioniert, ist meine liebste Art, einen Tag zu verbringen.",
      "Von der ersten Skizze bis zum fertigen Release: Ich liebe es, echte Probleme in Software zu verwandeln, die funktioniert.",
      "Ich entwerfe, baue und liefere Software, die echte Probleme löst, und genieße jeden Schritt davon.",
    ],
    askPlaceholder: "Stellen Sie eine Frage zu Godwin…",
    askLabel: "Eine Frage zu Godwin stellen",
    topics: {
      me: {
        label: "Über mich",
        question: "Wer ist Godwin?",
        answer:
          "Godwin ist Softwareentwickler in Herne. Er hat einen B.Sc. in Informatik, entwickelt seit 2017 Webanwendungen mit React und Next.js und baut aktuell ComBridge mit Java 21 und Spring Boot.",
      },
      projects: {
        label: "Projekte",
        question: "Was hat er gebaut?",
        answer:
          "Sein wichtigstes Projekt ist ComBridge, ein KI-Kommunikationsassistent mit Java, Spring Boot, React Native, Deepgram und Gemini. Dazu kommen ein Modell zur Vorhersage defekter Wasserpumpen und Fullstack-Apps wie Laundbot und Driveby.",
      },
      skills: {
        label: "Skills",
        question: "Welchen Tech-Stack nutzt er?",
        answer:
          "Java, Spring Boot, TypeScript, JavaScript, React, Next.js, Node.js, Python und PostgreSQL, dazu Machine Learning und Erfahrung im UI-Design.",
      },
      experience: {
        label: "Erfahrung",
        question: "Wo hat er gearbeitet?",
        answer:
          "Als Application Developer und Systems Analyst an der University of Calabar (2017 bis 2025) und als Frontend-Entwickler bei Intplus Technology (2023 bis 2025), wo er ein JavaScript-Payment-SDK und eine Komponentenbibliothek entwickelt hat.",
      },
      contact: {
        label: "Kontakt",
        question: "Wie erreiche ich ihn?",
        answer:
          "Am schnellsten per E-Mail: Tippen Sie auf „Kontakt“, und die Nachricht ist schon vorbereitet. Er ist offen für Stellen als Softwareentwickler in Deutschland.",
      },
    },
    pendingAnswer: "Der KI-Assistent kommt bald. Er antwortet hier auf Basis von Godwins Lebenslauf und Projekten. Probieren Sie bis dahin eines der Themen unten.",
    cv: "Lebenslauf ansehen",
  },
};

export const quickTopics: { id: QuickTopic; icon: "smile" | "briefcase" | "layers" | "clock" | "mail"; tone: string }[] = [
  { id: "me", icon: "smile", tone: "text-[var(--tile-teal)]" },
  { id: "projects", icon: "briefcase", tone: "text-[var(--tile-green)]" },
  { id: "skills", icon: "layers", tone: "text-[var(--tile-purple)]" },
  { id: "experience", icon: "clock", tone: "text-[var(--tile-amber)]" },
  { id: "contact", icon: "mail", tone: "text-[var(--tile-pink)]" },
];
