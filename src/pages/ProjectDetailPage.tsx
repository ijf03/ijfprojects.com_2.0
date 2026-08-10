import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import ProjectMediaGallery from "../components/projects/ProjectMediaGallery";
import ProjectSectionRenderer from "../components/projects/ProjectSectionRenderer";

function ProjectDetailPage() {
  const { slug } = useParams();

  const project = getProjectBySlug(slug ?? "");

  if (!project) {
    return (
      <section className="py-8">
        <p className="text-brand text-sm uppercase tracking-[0.3em]">
          Error
        </p>

        <h1 className="mt-4 text-3xl font-bold">Project not found.</h1>

        <Link
          to="/projects"
          className="text-brand mt-6 inline-block font-semibold hover:underline"
        >
          Return to projects
        </Link>
      </section>
    );
  }

  return (
    <article className="py-8">
      <Link
        to="/projects"
        className="text-secondary hover:text-brand text-sm transition"
      >
        ← Back to projects
      </Link>

      {/* Project header */}
      <header className="mt-8">
        <p className="text-brand text-sm uppercase tracking-[0.3em]">
          {project.type}
        </p>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="max-w-4xl text-4xl font-bold sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="text-secondary mt-5 max-w-3xl text-xl leading-8">
              {project.tagline}
            </p>
          </div>

          <span className="text-secondary shrink-0">
            {project.completedDate ?? project.year}
          </span>
        </div>

        {/* Introduction */}
        <div className="text-secondary mt-10 max-w-3xl space-y-5 text-lg leading-8">
          {project.introduction.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {/* External links */}
        {project.links.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-4">
            {project.links.map((link, index) => (
              <a
                key={`${link.href}-${index}`}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={
                  index === 0
                    ? "bg-brand hover:bg-brand-light rounded-full px-6 py-3 font-semibold text-black transition"
                    : "border-default hover:border-brand hover:text-brand rounded-full border px-6 py-3 font-semibold transition"
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Top project gallery */}
      {project.heroGallery && (
        <div className="mt-12">
          <ProjectMediaGallery gallery={project.heroGallery} />
        </div>
      )}

      {/* Project summary */}
      <section className="border-default mt-16 border-y py-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <ProjectMetaGroup
            label="Disciplines"
            items={project.disciplines}
          />

          <ProjectMetaGroup label="Roles" items={project.roles} />

          <ProjectMetaGroup
            label="Tools & technologies"
            items={project.techStack}
          />

          <ProjectMetaGroup
            label="Project details"
            items={[
              ...(project.client ? [`Client: ${project.client}`] : []),
              ...(project.duration ? [`Duration: ${project.duration}`] : []),
              ...(project.team ?? []),
            ]}
          />
        </div>
      </section>

      {/* Responsibilities */}
      {project.responsibilities.length > 0 && (
        <section className="mt-16">
          <p className="text-brand text-sm uppercase tracking-[0.3em]">
            My contribution
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Roles and responsibilities
          </h2>

          <ul className="text-secondary mt-8 grid gap-4 md:grid-cols-2">
            {project.responsibilities.map((responsibility) => (
              <li
                key={responsibility}
                className="bg-surface rounded-2xl p-5 leading-7"
              >
                <span className="text-brand mr-3">•</span>
                {responsibility}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Key features */}
      {project.features.length > 0 && (
        <section className="mt-16">
          <p className="text-brand text-sm uppercase tracking-[0.3em]">
            Platform scope
          </p>

          <h2 className="mt-3 text-3xl font-bold">Key features</h2>

          <ul className="text-secondary mt-8 grid gap-4 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="border-default flex gap-3 rounded-2xl border p-5"
              >
                <span className="text-brand">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Flexible case-study sections */}
      <div className="mt-20 space-y-24">
        {project.sections.map((section) => (
          <ProjectSectionRenderer
            key={section.id}
            section={section}
          />
        ))}
      </div>
    </article>
  );
}

interface ProjectMetaGroupProps {
  label: string;
  items: string[];
}

function ProjectMetaGroup({
  label,
  items,
}: ProjectMetaGroupProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em]">
        {label}
      </h2>

      <ul className="text-secondary mt-4 space-y-2">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectDetailPage;