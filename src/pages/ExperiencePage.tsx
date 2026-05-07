import { experiences } from "../data/experience";

function ExperiencePage() {
  return (
    <section className="py-8">
      <p className="text-brand text-sm uppercase tracking-[0.3em]">
        Experience
      </p>

      <h1 className="mt-4 max-w-4xl text-4xl font-bold sm:text-5xl">
        Technical, leadership, and creative experience.
      </h1>

      <p className="text-secondary mt-5 max-w-3xl leading-7">
        A selection of roles and experiences that have shaped how I build,
        communicate, lead, and collaborate.
      </p>

      <div className="mt-10 space-y-6">
        {experiences.map((experience) => (
          <article
            key={`${experience.role}-${experience.organisation}`}
            className="bg-surface border-default rounded-2xl border p-6"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-brand text-sm font-medium">
                  {experience.type}
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {experience.role}
                </h2>

                <p className="text-secondary mt-1">
                  {experience.organisation}
                </p>
              </div>

              <span className="text-muted text-sm">
                {experience.period}
              </span>
            </div>

            <p className="text-secondary mt-5 leading-7">
              {experience.description}
            </p>

            <ul className="text-secondary mt-5 space-y-3">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="text-brand">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-surface-elevated text-secondary rounded-full px-3 py-1 text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExperiencePage;