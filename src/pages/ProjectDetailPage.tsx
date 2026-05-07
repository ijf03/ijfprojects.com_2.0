import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectMediaGallery from "../components/projects/ProjectMediaGallery";

function ProjectDetailPage() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="py-8">
        <h1 className="text-3xl font-bold">Project not found.</h1>
      </section>
    );
  }

  return (
    <section className="py-8">
      <p className="text-brand text-sm uppercase tracking-[0.3em]">
        {project.type}
      </p>

      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-4xl font-bold sm:text-5xl">
          {project.title}
        </h1>

        <span className="text-secondary">{project.year}</span>
      </div>

      <p className="text-secondary mt-6 max-w-3xl text-lg leading-8">
        {project.overview}
      </p>

      {/* Links */}
      <div className="mt-8 flex flex-wrap gap-4">
        {project.links?.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="bg-brand hover:bg-brand-light rounded-full px-6 py-3 font-semibold text-black transition"
          >
            Live Demo
          </a>
        )}

        {project.links?.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="border-default hover:border-brand hover:text-brand rounded-full border px-6 py-3 font-semibold transition"
          >
            GitHub
          </a>
        )}
      </div>

      <ProjectMediaGallery media={project.media} />

      {/* Tech Stack */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold">Tech Stack</h2>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="bg-surface-elevated text-secondary rounded-full px-4 py-2 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold">Key Features</h2>

        <ul className="text-secondary mt-5 space-y-3">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <span className="text-brand">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectDetailPage;