import { homeContent } from "../../data/home";
import { skillGroups } from "../../data/skills";

function SkillsPreview() {
  const { skillsPreview } = homeContent;

  return (
    <section className="border-default border-t py-12">
      <p className="text-brand text-sm uppercase tracking-[0.3em]">
        {skillsPreview.eyebrow}
      </p>

      <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
        {skillsPreview.heading}
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="bg-surface border-default rounded-2xl border p-5"
          >
            <h3 className="text-lg font-semibold">{group.title}</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-surface-elevated text-secondary rounded-full px-3 py-1 text-sm"
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

export default SkillsPreview;