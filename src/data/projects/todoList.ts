import type { Project } from "../../types/project";

export const todoList = {
  slug: "todo-list",
  title: "To-do List App",
  type: "Frontend App",
  year: "2024",
  featured: true,
  status: "Completed",

  shortDescription:
    "A task management app built to practise React, TypeScript, component structure, and state handling.",

  overview:
    "A focused frontend project for managing everyday tasks while applying reusable React components, typed data, and straightforward state-driven interactions.",

  role: "Frontend Developer",
  categories: ["Frontend Development", "Productivity"],

  stack: ["React", "TypeScript", "Vite", "CSS"],

  features: [
    "Create and manage tasks",
    "Update task completion status",
    "Reusable React components",
    "Type-safe application data",
  ],

  coverImage: "/images/projects/ToDoList.png",

  media: [
    {
      type: "image",
      src: "/images/projects/ToDoList.png",
      alt: "To-do List application interface",
      caption: "Task management interface",
    },
  ],

  links: {
    github: "https://github.com/ijf03/Todo_List",
    live: "https://ijf03.github.io/Todo_List/",
  },

  caseStudy: {
    problem: [
      "I wanted a small project that would let me practise React component design and TypeScript without unnecessary backend complexity.",
    ],
    goals: [
      "Create reusable UI components",
      "Manage task state predictably",
      "Use TypeScript to improve data consistency",
    ],
    responsibilities: [
      "Designed and developed the complete application",
      "Defined typed task data",
      "Implemented task creation and completion interactions",
    ],
    outcome: {
      summary:
        "The project provided a focused introduction to building typed React applications with reusable components and state-driven interfaces.",
      highlights: [
        "Applied TypeScript in a React project",
        "Practised component composition",
        "Deployed the application using GitHub Pages",
      ],
    },
  },
} satisfies Project;
