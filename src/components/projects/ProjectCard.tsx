import { flattenTechStack } from "../../data/technologyCategories";
import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import ProjectCover from "./ProjectCover";

type ProjectCardProps = {
  project: Project;
};

const MAX_VISIBLE_TECH = 4;

function ProjectCard({ project }: ProjectCardProps) {
  const technologies = flattenTechStack(project.techStack);
  const visibleTech = technologies.slice(0, MAX_VISIBLE_TECH);
  const remainingTech = technologies.length - visibleTech.length;

  return (
    <article className="h-full">
      <Link
        to={`/projects/${project.slug}`}
        aria-label={`View ${project.title} case study`}
        className="group relative flex h-full rounded-2xl p-[1px] transition duration-300 hover:-translate-y-2 focus-visible:-translate-y-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand motion-reduce:transform-none"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(44,181,160,0.45)] via-transparent to-transparent opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />

        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-default bg-surface p-4 transition duration-300 group-hover:border-brand group-hover:shadow-[0_0_40px_rgba(44,181,160,0.16)]">
          <div className="relative -mx-1 -mt-1 mb-5">
            <ProjectCover project={project} />
          </div>

          <div className="flex flex-1 flex-col p-1">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-brand text-sm font-medium">
                  {project.type}
                </p>

                <h2 className="mt-2 break-words text-xl font-bold">
                  {project.title}
                </h2>
              </div>

              <span className="text-secondary shrink-0 text-sm">
                {project.year}
              </span>
            </div>

            {project.disciplines.length > 0 && (
              <p className="text-secondary mt-3 text-xs uppercase tracking-[0.15em]">
                {project.disciplines.join(" · ")}
              </p>
            )}

            <p className="text-secondary mt-4 text-sm leading-6">
              {project.shortDescription}
            </p>

            <div className="mt-auto pt-6">
              {project.deploymentStatus && (
                <p className="text-secondary mb-4 text-sm">{project.deploymentStatus}</p>
              )}
              <div
                className="flex flex-wrap gap-2"
                aria-label="Technologies used"
              >
                {visibleTech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-surface-elevated text-secondary rounded-full px-3 py-1 text-xs transition duration-300 group-hover:text-primary"
                  >
                    {tech}
                  </span>
                ))}

                {remainingTech > 0 && (
                  <span className="bg-surface-elevated text-secondary rounded-full px-3 py-1 text-xs">
                    +{remainingTech}
                  </span>
                )}
              </div>

              <span className="text-brand mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                View case study
                <span
                  aria-hidden="true"
                  className="transition duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default ProjectCard;
