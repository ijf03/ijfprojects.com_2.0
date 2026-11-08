import { useRef } from "react";
import type { SkillGroup } from "../../types/skill";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { homeContent } from "../../data/home";
import { projects } from "../../data/projects";
import { getTechnicalSkillGroups, getTechnologyCategoryConflicts } from "../../data/projectTechnicalSkills";

if (import.meta.env.DEV) {
  const conflicts = getTechnologyCategoryConflicts(projects);
  if (conflicts.length) console.warn(`Technologies assigned to multiple categories: ${conflicts.join(", ")}`);
}

function SkillCategoryCard({ group, index }: { group: SkillGroup; index: number }) {
  const topRef = useRef<HTMLSpanElement>(null);
  const topInView = useInView(topRef, { once: true, amount: "some" });
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative min-w-0">
      {/* Observe only this stationary top edge, never the card's full height. */}
      <span ref={topRef} aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px" />
      <motion.article
        initial={reduceMotion ? false : { y: 24 }}
        animate={{ y: reduceMotion || topInView ? 0 : 24 }}
        transition={{ duration: 0.5 }}
        whileHover={reduceMotion ? undefined : { y: -8 }}
        className="group relative overflow-hidden rounded-2xl border border-default bg-surface/70 p-4 shadow-xl backdrop-blur-xl sm:rounded-4xl sm:p-6"
      >
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-24 w-full bg-linear-to-t from-brand/10 to-transparent" />
        </div>
      
        <div className="relative">
          <div className="mb-4 flex items-start justify-between gap-3 sm:mb-8 sm:gap-4">
            <div className="flex min-h-9 items-center gap-3 sm:block sm:min-h-0">
              <p className="shrink-0 text-xs uppercase tracking-[0.25em] text-muted">
                0 {index + 1}
              </p>
      
              <h3 className="text-lg font-semibold text-primary sm:mt-3 sm:text-2xl">
                {group.title}
              </h3>
            </div>
      
            <div className="shrink-0 rounded-full border border-default bg-background/50 p-2 text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <Cpu size={18} />
            </div>
          </div>
      
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <Link
                key={skill}
                to={`/projects?search=${encodeURIComponent(skill)}`}
                className="rounded-full border border-default bg-background/50 px-3 py-1.5 text-sm text-secondary transition-colors duration-300 hover:border-brand hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand group-hover:border-brand/40 group-hover:text-primary"
              >
                {skill}
              </Link>
            ))}
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function SkillsPreview() {
  const { skillsPreview } = homeContent;
  const visibleGroups = getTechnicalSkillGroups(projects);

  return (
    <section className="border-default border-t py-12 sm:py-20">
      {/* The stacked mobile section can be taller than the viewport. Keep its
          content visible without relying on a section-wide scroll threshold. */}
      <div>
        <p className="text-brand text-sm uppercase tracking-[0.3em]">
          {skillsPreview.eyebrow}
        </p>

        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl text-2xl font-bold sm:text-4xl">
            {skillsPreview.heading}
          </h2>

          <p className="max-w-md text-sm leading-6 text-secondary">
            A focused set of tools I use to build interfaces, backend systems,
            and interactive digital experiences.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:mt-10 sm:gap-5 md:grid-cols-3">
          {visibleGroups.map((group, index) => (
            <SkillCategoryCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsPreview;
