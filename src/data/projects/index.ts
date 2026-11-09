import type { Project } from "../../types/project";

import { movingHouse247 } from "./movingHouse247";
import { todoList } from "./todoList";
import { nutricoach } from "./NutriCoach";
import { cifar10 } from "./cifar10";
import { smartPark } from "./SmartParkAPI";
import { secureFinanceGroup } from "./SecureFinanceGroup";
import { aussieEcoGuard } from "./aussieEcoGuard";
import { bubbleTeaStore } from "./bubbleTeaStore";
import { esportsPortfolio } from "./esportsPortfolio";

export const projects: Project[] = [
  secureFinanceGroup,
  cifar10,
  smartPark,
  aussieEcoGuard,
  movingHouse247,
  bubbleTeaStore,
  esportsPortfolio,
  todoList,
  nutricoach,
];

export const featuredProjects = projects.filter(
  (project) => project.featured,
);

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug);
