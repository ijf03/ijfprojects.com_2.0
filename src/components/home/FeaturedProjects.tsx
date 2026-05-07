import { homeContent } from "../../data/home";
import { projects } from "../../data/projects";
import ButtonLink from "../ui/ButtonLink";
import ProjectCard from "../projects/ProjectCard";

function FeaturedProjects() {
  const { featuredProjects } = homeContent;
  const featured = projects.filter((project) => project.featured);

  return (
    <section className="border-default border-t py-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-brand text-sm uppercase tracking-[0.3em]">
            {featuredProjects.eyebrow}
          </p>

          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            {featuredProjects.heading}
          </h2>
        </div>

        <ButtonLink to={featuredProjects.buttonPath} variant="secondary">
          {featuredProjects.buttonLabel}
        </ButtonLink>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;