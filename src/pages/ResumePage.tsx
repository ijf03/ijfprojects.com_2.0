import { profile } from "../data/profile";
import { skillGroups } from "../data/skills";
import { experiences } from "../data/experience";
import { education } from "../data/education";

function ResumePage() {
  return (
    <section className="py-8">
      <p className="text-brand text-sm uppercase tracking-[0.3em]">
        Resume
      </p>

      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold sm:text-5xl">{profile.name}</h1>
          <p className="text-secondary mt-3">
            {profile.role} · {profile.location}
          </p>
        </div>

        <a
          href={profile.resumeUrl}
          download
          className="bg-brand hover:bg-brand-light rounded-full px-6 py-3 text-center font-semibold text-black transition"
        >
          Download Resume
        </a>
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-bold">Profile</h2>
        <p className="text-secondary mt-3 max-w-4xl">
          Final-year Bachelor of Information Technology (Software Development)
          student at Monash University with industry experience in machine
          learning, computer vision, and software development. Experience
          developing full-stack web applications, backend systems, and mobile
          applications through industry projects, professional education, and
          client-facing roles, with a strong foundation in problem solving,
          technical, leadership, and communication skills.
        </p>
      </section>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_2fr]">
        <aside className="space-y-8">
          <section>
            <h2 className="text-xl font-bold">Contact</h2>
            <p className="text-secondary mt-3">{profile.email}</p>
            <p className="text-secondary">{profile.location}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold">Skills</h2>

            <div className="mt-4 space-y-5">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-brand text-sm font-semibold">
                    {group.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-surface-elevated text-secondary rounded-full px-3 py-1 text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold">Professional Experience</h2>

            <div className="mt-5 space-y-5">
              {experiences.filter((experience) => experience.type === "Work" || experience.organisation === "Monash Nexus for Emerging Technologies (MNET)").map((experience) => (
                <article
                  key={`${experience.role}-${experience.organisation}`}
                  className="border-default border-b pb-5"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                    <div>
                      <h3 className="font-semibold">{experience.role}</h3>
                      <p className="text-secondary">
                        {experience.organisation}
                      </p>
                    </div>

                    <p className="text-muted text-sm">{experience.period}</p>
                  </div>

                  <ul className="text-secondary mt-3 space-y-2">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>• {highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Additional Leadership and Communication</h2>
            <div className="mt-5 space-y-5">
              {experiences.filter((experience) => experience.type !== "Work" && experience.organisation !== "Monash Nexus for Emerging Technologies (MNET)").map((experience) => (
                <article key={experience.organisation} className="border-default border-b pb-5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                    <div>
                      <h3 className="font-semibold">{experience.role}</h3>
                      <p className="text-secondary">{experience.organisation}</p>
                    </div>
                    <p className="text-muted text-sm">{experience.period}</p>
                  </div>
                  <ul className="text-secondary mt-3 list-disc space-y-2 pl-5">
                    {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Education</h2>

            <div className="mt-5 space-y-5">
              {education.map((item) => (
                <article key={item.course}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                    <div>
                      <h3 className="font-semibold">{item.course}</h3>
                      <p className="text-secondary">{item.school}</p>
                    </div>

                    <p className="text-muted text-sm">{item.period}</p>
                  </div>

                  <p className="text-secondary mt-3">{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default ResumePage;
