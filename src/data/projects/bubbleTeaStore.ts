import type { Project } from "../../types/project";

export const bubbleTeaStore = {
  slug: "bubble-tea-store",
  title: "Bubble Tea E-Commerce Website",
  type: "Full-stack Web App",
  year: "2024",
  featured: true,
  status: "Completed",

  shortDescription:
    "A full-stack e-commerce website with product browsing, cart functionality, user authentication, and administrative features.",

  overview:
    "Developed as a full-stack e-commerce platform, this project focuses on a clear shopping experience supported by authentication, product browsing, cart management, and administrative controls.",

  role: "Full-stack Developer",
  categories: ["Full-stack Development", "E-Commerce"],

  stack: ["React", "Node.js", "Express", "MongoDB", "HTML", "CSS"],

  features: [
    "Product catalogue and browsing",
    "User authentication",
    "Shopping cart management",
    "Administrative product controls",
  ],

  coverImage: "/images/projects/BubbleTeaShop.png",

  media: [
    {
      type: "image",
      src: "/images/projects/BubbleTeaShop.png",
      alt: "Bubble Tea Store product catalogue",
      caption: "Product browsing interface",
    },
  ],

  links: {
    github: "https://github.com/ijf03/Bubble_Tea_Store",
    live: "https://capstone-3-fe7qz7dyr-isabelle-fernans-projects.vercel.app/products",
  },

  caseStudy: {
    problem: [
      "The project required a complete shopping flow supported by persistent product and user data.",
    ],
    goals: [
      "Build a clear product browsing experience",
      "Support authentication and cart management",
      "Provide administrative product controls",
    ],
    responsibilities: [
      "Designed and implemented the frontend",
      "Built backend routes and database integration",
      "Connected authentication, product, and cart workflows",
    ],
    outcome: {
      summary:
        "The project delivered an end-to-end MERN e-commerce experience and strengthened my understanding of how frontend, API, and database layers work together.",
      highlights: [
        "Implemented a complete full-stack application",
        "Created customer and administrative workflows",
        "Deployed a working web experience",
      ],
    },
  },
} satisfies Project;
