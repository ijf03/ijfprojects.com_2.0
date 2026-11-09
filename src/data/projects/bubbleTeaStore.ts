import type { Project } from "../../types/project";

export const bubbleTeaStore = {
  slug: "bubble-tea-store",
  title: "Bubble Tea E-Commerce Website",
  tagline: "A complete MERN shopping experience for browsing and managing products.",
  type: "Full-stack Web App",
  year: "2024",
  featured: false,
  status: "Completed",

  shortDescription:
    "A full-stack e-commerce website with product browsing, cart functionality, authentication, and administrative features.",

  introduction: [
    "This project was developed as a full-stack e-commerce platform focused on creating a clear shopping experience supported by persistent product and user data.",
  ],

  disciplines: ["Development"],
  roles: ["Full-stack Developer"],
  responsibilities: [
    "Designed and implemented the customer-facing frontend",
    "Built backend routes and MongoDB integration",
    "Connected authentication, product, and cart workflows",
    "Created administrative product controls",
  ],

  categories: ["Full-stack Development", "E-Commerce"],
  skills: ["React", "Node.js", "Express", "MongoDB", "HTML", "CSS"],
  techStack: {
    frontend: ["React", "HTML", "CSS"],
    backend: ["Node.js", "Express"],
    databases: ["MongoDB"],
  },

  features: [
    "Product catalogue and browsing",
    "User authentication",
    "Shopping cart management",
    "Administrative product controls",
  ],

  coverImage: "/images/projects/bubble-tea-shop/logo.png",

  heroGallery: {
    layout: "full-width",
    items: [
      {
        type: "image",
        src: "/images/projects/bubble-tea-store/dashboard.png",
        alt: "Bubble Tea Store product catalogue",
        caption: "Product browsing interface",
        aspectRatio: "wide",
      },
    ],
  },

  links: [],

  sections: [
    {
      id: "overview",
      number: "01",
      title: "Project overview",
      blocks: [
        {
          type: "text",
          paragraphs: [
            "The application supports a complete shopping flow, including account access, product browsing, cart management, and administrative product controls.",
          ],
        },
      ],
    },
  ],
} satisfies Project;
