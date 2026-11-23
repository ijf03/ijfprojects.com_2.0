import type { Project } from "../../types/project";
import { sortProjectsByDate } from "../projectDates";

import { secureFinanceGroup } from "./SecureFinanceGroup";
import { movingHouse247 } from "./movingHouse247";
import { bookApp } from "./bookApp";
import { aussieEcoGuard } from "./AussieEcoGuard";
import { ticketToRide } from "./ticketToRide";
import { cloudKitchenPro } from "./cloudKitchenPro";
import { recipeHub2 } from "./recipeHub2";
import { eldenThing2 } from "./eldenThing2";
import { flappyBirb } from "./flappyBirb";
import { cifar10 } from "./cifar10";
import { smartPark } from "./SmartParkAPI";
import { bubbleTeaStore } from "./bubbleTeaStore";
import { esportsPortfolio } from "./esportsPortfolio";
import { todoList } from "./todoList";
import { nutricoach } from "./NutriCoach";

export { secureFinanceGroup, movingHouse247, bookApp, aussieEcoGuard, ticketToRide, cloudKitchenPro, recipeHub2, eldenThing2, flappyBirb, cifar10, smartPark, bubbleTeaStore, esportsPortfolio, todoList, nutricoach, aussieEcoGuard as ecoguard };

export const projects: Project[] = sortProjectsByDate<Project>([
  secureFinanceGroup,
  movingHouse247,
  bookApp,
  aussieEcoGuard,
  ticketToRide,
  cloudKitchenPro,
  eldenThing2,
  flappyBirb,
  cifar10,
  smartPark,
  bubbleTeaStore,
  esportsPortfolio,
  todoList,
  nutricoach,
]);

export const featuredProjects = projects.filter(project => project.featured);

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find(project => project.slug === (
    slug === "ecoguard" ? "aussie-ecoguard" :
    slug === "recipehub2" ? "cloudKitchenPro" : slug
  ));
