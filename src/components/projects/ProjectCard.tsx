import { Link } from "react-router-dom";
import type { Project } from "../../types/project";

type ProjectCardProps = {
  project: Project;
};

const MAX_VISIBLE_TECH = 4;

function ProjectCard({ project }: ProjectCardProps) {
  const visibleTech = project.techStack.slice(0, MAX_VISIBLE_TECH);
  const remainingTech = project.techStack.length - visibleTech.length;

  return (
    <article className="group relative flex h-full rounded-2xl p-[1px] transition duration-300 hover:-translate-y-2">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(44,181,160,0.45)] via-transparent to-transparent opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-default bg-surface p-4 transition duration-300 group-hover:border-brand group-hover:shadow-[0_0_40px_rgba(44,181,160,0.16)]">
        {project.coverImage && (
          <div className="relative -mx-1 -mt-1 mb-5">
            <div className="overflow-hidden rounded-xl border border-default bg-background transition duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:border-brand group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
              <img
                src={project.coverImage}
                alt={`${project.title} project preview`}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        )}

        <div className="flex flex-1 flex-col p-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-brand text-sm font-medium">
                {project.type}
              </p>

              <h2 className="mt-2 text-xl font-bold">
                {project.title}
              </h2>
            </div>

            <span className="text-muted shrink-0 text-sm">
              {project.year}
            </span>
          </div>

          {project.disciplines.length > 0 && (
            <p className="text-muted mt-3 text-xs uppercase tracking-[0.15em]">
              {project.disciplines.join(" · ")}
            </p>
          )}

          <p className="text-secondary mt-4 text-sm leading-6">
            {project.shortDescription}
          </p>

          <div className="mt-auto pt-6">
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
                <span className="bg-surface-elevated text-muted rounded-full px-3 py-1 text-xs">
                  +{remainingTech}
                </span>
              )}
            </div>

            <Link
              to={`/projects/${project.slug}`}
              aria-label={`View ${project.title} case study`}
              className="text-brand mt-6 inline-flex items-center gap-2 text-sm font-semibold"
            >
              View case study
              <span
                aria-hidden="true"
                className="transition duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
