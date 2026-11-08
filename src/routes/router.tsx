import { Navigate, createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import ResumePage from "../pages/ResumePage";
import SideQuestsPage from "../pages/SideQuestsPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "projects/:slug", element: <ProjectDetailPage /> },
      { path: "resume", element: <ResumePage /> },
      { path: "contact", element: <Navigate to="/about#contact" replace />},
      { path: "SideQuests", element: <SideQuestsPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
