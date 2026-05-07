import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

function ProjectsPage() {
  return (
    <section className="py-8">
      <p className="text-brand text-sm uppercase tracking-[0.3em]">
        Projects
      </p>

      <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
        Selected work and technical builds.
      </h1>

      <p className="text-secondary mt-5 max-w-2xl leading-7">
        A collection of projects across full-stack development, frontend
        development, game development, and creative technology.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;