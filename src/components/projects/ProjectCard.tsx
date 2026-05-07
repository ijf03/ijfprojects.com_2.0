import { Link } from "react-router-dom";
import type { Project } from "../../types/project";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-surface border-default overflow-hidden rounded-2xl border transition hover:-translate-y-1">
      {project.coverImage && (
        <img
          src={project.coverImage}
          alt={`${project.title} preview`}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-5">
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

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="bg-surface-elevated text-secondary rounded-full px-3 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="text-brand mt-6 inline-block text-sm font-semibold hover:underline"
        >
          View project →
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;