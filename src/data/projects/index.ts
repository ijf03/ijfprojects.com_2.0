import type { Project } from "../../types/project";

import { movingHouse247 } from "./movingHouse247";
import { todoList } from "./todoList";
import { nutricoach } from "./NutriCoach";
import { cifar10 } from "./cifar10";
import { smartPark } from "./SmartParkAPI";
import { secureFinanceGroup } from "./SecureFinanceGroup";

export { bubbleTeaStore } from "./bubbleTeaStore";
export { esportsPortfolio } from "./esportsPortfolio";
export { movingHouse247 } from "./movingHouse247";
export { todoList } from "./todoList";

export const projects: Project[] = [
  movingHouse247,
  // bubbleTeaStore,
  // esportsPortfolio,
  todoList,
  nutricoach,
  cifar10,
  smartPark,
  secureFinanceGroup,

];

export const featuredProjects = projects.filter(
  (project) => project.featured,
);

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);
