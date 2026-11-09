import type { Project } from "../../types/project";

export const esportsPortfolio = {
  slug: "esports-portfolio",
  title: "Esports Portfolio Website",
  tagline: "A personal platform for gaming, hosting, and commentary work.",
  type: "Frontend Website",
  year: "2024",
  featured: false,
  status: "Completed",

  shortDescription:
    "A personal esports portfolio presenting gaming, hosting, commentary, and contact information.",

  introduction: [
    "I created this website to bring my esports work into one focused platform that could be shared with event organisers and collaborators.",
  ],

  disciplines: ["Design", "Development"],
  roles: ["UI Designer", "Frontend Developer"],
  responsibilities: [
    "Designed the visual identity and page layouts",
    "Developed the responsive frontend",
    "Organised written and visual portfolio content",
  ],

  categories: ["Frontend Development", "Personal Branding", "Esports"],
  skills: ["HTML", "CSS", "JavaScript"],
  techStack: {
    frontend: ["HTML", "CSS"],
    languages: ["JavaScript"],
  },

  features: [
    "Responsive page layouts",
    "Esports experience showcase",
    "Hosting and commentary highlights",
    "Contact and social links",
  ],

  coverImage: "/images/projects/WG.png",

  heroGallery: {
    layout: "full-width",
    items: [
      {
        type: "image",
        src: "/images/projects/WG.png",
        alt: "Wasabi Gaming esports portfolio homepage",
        caption: "Main esports portfolio interface",
        aspectRatio: "wide",
      },
    ],
  },

  links: [
    {
      label: "View repository",
      href: "https://github.com/ijf03/WG",
      type: "github",
    },
    {
      label: "View live project",
      href: "https://wasabigaming03.com/",
      type: "live",
    },
  ],

  sections: [
    {
      id: "overview",
      number: "01",
      title: "Project overview",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The website combines personal branding with a responsive frontend to communicate my experience across gaming, hosting, events, and commentary.",
          ],
        },
      ],
    },
  ],
} satisfies Project;
