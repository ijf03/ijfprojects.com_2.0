import type { Project } from "../../types/project";

export const todoList = {
  slug: "todo-list",
  title: "To-do List App",
  tagline: "A typed React application for straightforward task management.",
  type: "Frontend App",
  year: "2024",
  featured: false,
  status: "Completed",

  shortDescription:
    "A task management app built to practise React, TypeScript, component structure, and state handling.",

  introduction: [
    "I built this small project to practise React component design and TypeScript without adding unnecessary backend complexity.",
  ],

  disciplines: ["Development"],
  roles: ["Frontend Developer"],
  responsibilities: [
    "Designed and developed the complete interface",
    "Defined typed task data",
    "Implemented task creation and completion interactions",
  ],

  categories: ["Frontend Development", "Productivity"],
  skills: ["React", "TypeScript", "CSS", "Vite"],
  techStack: {
    frontend: ["React", "Vite", "CSS"],
    languages: ["TypeScript"],
  },

  features: [
    "Create and manage tasks",
    "Update task completion status",
    "Reusable React components",
    "Type-safe application data",
  ],

  coverImage: "/images/projects/ToDoList.png",

  heroGallery: {
    layout: "full-width",
    items: [
      {
        type: "image",
        src: "/images/projects/ToDoList.png",
        alt: "To-do List application interface",
        caption: "Task management interface",
        aspectRatio: "wide",
      },
    ],
  },

  links: [
    {
      label: "View repository",
      href: "https://github.com/ijf03/Todo_List",
      type: "github",
    },
    {
      label: "View live project",
      href: "https://ijf03.github.io/Todo_List/",
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
            "The project focuses on reusable components, predictable state changes, and consistent typed application data.",
          ],
        },
      ],
    },
  ],
} satisfies Project;
