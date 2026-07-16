import type { Project } from "../../types/project";

export const esportsPortfolio = {
  slug: "esports-portfolio",
  title: "Esports Portfolio Website",
  type: "Frontend Website",
  year: "2024",
  featured: true,
  status: "Completed",

  shortDescription:
    "A personal esports portfolio that presents gaming, hosting, commentary, and contact information.",

  overview:
    "Created to bring my esports work into one focused platform, the website showcases experience across gaming, event hosting, and commentary through a responsive frontend.",

  role: "Frontend Developer and Designer",
  categories: ["Frontend Development", "Personal Branding", "Esports"],

  stack: ["HTML", "CSS", "JavaScript"],

  features: [
    "Responsive page layouts",
    "Esports experience showcase",
    "Hosting and commentary highlights",
    "Contact and social links",
  ],

  coverImage: "/images/projects/WG.png",

  media: [
    {
      type: "image",
      src: "/images/projects/WG.png",
      alt: "Wasabi Gaming esports portfolio homepage",
      caption: "Main esports portfolio interface",
    },
  ],

  links: {
    github: "https://github.com/ijf03/WG",
    live: "https://wasabigaming03.com/",
  },

  caseStudy: {
    problem: [
      "My gaming, hosting, and commentary work needed a dedicated online home that was easier to share with event organisers and collaborators.",
    ],
    goals: [
      "Create a recognisable personal esports identity",
      "Present experience and achievements clearly",
      "Ensure the site worked across desktop and mobile devices",
    ],
    responsibilities: [
      "Designed the visual identity and layout",
      "Developed the responsive frontend",
      "Organised written and visual portfolio content",
    ],
    outcome: {
      summary:
        "The website created a focused portfolio for my esports work and gave me a practical platform for presenting public-facing experience.",
      highlights: [
        "Combined personal branding with frontend development",
        "Created a responsive portfolio experience",
        "Published a live website with accessible contact information",
      ],
    },
  },
} satisfies Project;
