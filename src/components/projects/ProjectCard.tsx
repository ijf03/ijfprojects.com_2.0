import { Link } from "react-router-dom";
import type { Project } from "../../types/project";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full rounded-2xl p-[1px] transition duration-300 hover:-translate-y-2">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(44,181,160,0.45)] via-transparent to-transparent opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full w-full flex-col overflow-visible rounded-2xl border border-default bg-surface p-4 transition duration-300 group-hover:border-brand group-hover:shadow-[0_0_40px_rgba(44,181,160,0.16)]">
        {project.coverImage && (
          <div className="relative -mt-2 mb-5 overflow-visible">
            <div className="overflow-hidden rounded-xl border border-default bg-background transition duration-500 group-hover:-translate-y-3 group-hover:translate-x-2 group-hover:scale-[1.04] group-hover:border-brand group-hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
              <img
                src={project.coverImage}
                alt={`${project.title} preview`}
                className="h-48 w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        )}

        <div className="flex flex-1 flex-col p-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-brand text-sm font-medium">{project.type}</p>

              <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
            </div>

            <span className="text-muted text-sm">{project.year}</span>
          </div>

          <p className="text-secondary mt-4 text-sm leading-6">
            {project.shortDescription}
          </p>

          <div className="mt-auto pt-5">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-surface-elevated text-secondary rounded-full px-3 py-1 text-xs transition duration-300 group-hover:text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              to={`/projects/${project.slug}`}
              className="text-brand mt-6 inline-flex items-center gap-2 text-sm font-semibold"
            >
              View project
              <span className="transition duration-300 group-hover:translate-x-1">
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