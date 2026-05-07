import type { Project } from "../types/project";


export const projects: Project[] = [
  {
    slug: "bubble-tea-store",
    title: "Bubble Tea E-Commerce Website",
    type: "Full-stack Web App",
    year: "2024",
    featured: true,
    shortDescription:
      "A full-stack e-commerce website with product browsing, cart functionality, user authentication, and admin features.",
    overview:
        "This project was developed as a full-stack e-commerce platform focused on creating a clean shopping experience with authentication, product browsing, and admin management.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    features: [
        "User authentication",
        "Shopping cart system",
        "Admin dashboard",
        "Product management",
    ],
    coverImage: "/images/projects/BubbleTeaShop.png",

    media: [
    {
        type: "image",
        src: "/images/projects/BubbleTeaShop.png",
        alt: "Bubble Tea Store product page",
        caption: "Product browsing page",
    },
    {
        type: "image",
        src: "/images/projects/BubbleTeaShop.png",
        alt: "Bubble Tea Store cart page",
        caption: "Shopping cart page",
    },
    ],
    links: {
      github: "https://github.com/ijf03/Bubble_Tea_Store",
      live: "https://capstone-3-fe7qz7dyr-isabelle-fernans-projects.vercel.app/products",
    },
  },
  {
    slug: "esports-portfolio",
    title: "Esports Portfolio Website",
    type: "Frontend Website",
    year: "2024",
    featured: true,
    shortDescription:
      "A personal esports portfolio website created to showcase gaming, hosting, and commentary work.",
      overview:
        "This project was developed as a personal portfolio to highlight my experience and work in the esports industry, including gaming, hosting, and commentary.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: [
        "Responsive design",
        "Showcase of esports work",
        "Contact information",
    ],
    coverImage: "/images/projects/WG.png",

    media: [
    {
        type: "image",
        src: "/images/projects/WG.png",
        alt: "Bubble Tea Store product page",
        caption: "Product browsing page",
    },
    {
        type: "image",
        src: "/images/projects/WG.png",
        alt: "Bubble Tea Store cart page",
        caption: "Shopping cart page",
    },
    ],
    links: {
      github: "https://github.com/ijf03/WG",
      live: "https://wasabigaming03.com/",
    },
  },
  {
      slug: "todo-list",
      title: "To-do List App",
      type: "Frontend App",
      year: "2024",
      featured: true,
      shortDescription: "A simple task management app built to practise React, TypeScript, component structure, and state handling.",
      stack: ["React", "TypeScript", "Vite", "CSS"],
      coverImage: "/images/projects/BubbleTeaShop.png",

      media: [
          {
              type: "image",
              src: "/images/projects/BubbleTeaShop.png",
              alt: "Bubble Tea Store product page",
              caption: "Product browsing page",
          },
          {
              type: "image",
              src: "/images/projects/BubbleTeaShop.png",
              alt: "Bubble Tea Store cart page",
              caption: "Shopping cart page",
          },
      ],
      links: {
          github: "https://github.com/ijf03/Todo_List",
          live: "https://ijf03.github.io/Todo_List/",
      },
      overview: "",
      features: []
  },
];