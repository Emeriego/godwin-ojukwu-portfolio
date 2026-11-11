// Personal details used across the site. Single source of truth.
export const site = {
  name: "Godwin Ojukwu",
  firstName: "Godwin",
  role: "Software Developer",
  techLine: ["Java", "TypeScript", "JavaScript", "React", "Next.js"],
  location: "Herne, Germany",
  email: "emeriego@gmail.com",
  // Fixed value: Next.js prerenders pages, so `new Date()` isn't allowed here.
  year: 2026,
  links: {
    github: "https://github.com/Emeriego",
    // TODO: confirm this is the exact LinkedIn URL (CV lists "ojukwugc")
    linkedin: "https://www.linkedin.com/in/ojukwugc",
  },
  cv: "/godwin-ojukwu-cv.pdf", // copy of reference/CV_Godwin.pdf
};

// The "Contact me" button opens the visitor's email app with everything pre-filled,
// so they only have to press Send.
export const contactHref = `mailto:${site.email}?${new URLSearchParams({
  subject: "Let's talk: software developer role",
  body: "Hi Godwin,\n\nI came across your portfolio and would like to talk about a role.\n\nBest regards,\n",
})
  .toString()
  .replace(/\+/g, "%20")}`;

// Sections of the one-page home, in order. Used by the nav.
export const sections = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
] as const;
