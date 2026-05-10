import { motion, type Variants } from "framer-motion";
import { Cpu } from "lucide-react";
import { homeContent } from "../../data/home";
import { skillGroups } from "../../data/skills";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function SkillsPreview() {
  const { skillsPreview } = homeContent;

  return (
    <section className="border-default border-t py-20">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <p className="text-brand text-sm uppercase tracking-[0.3em]">
          {skillsPreview.eyebrow}
        </p>

        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            {skillsPreview.heading}
          </h2>

          <p className="max-w-md text-sm leading-6 text-secondary">
            A focused set of tools I use to build interfaces, backend systems,
            and interactive digital experiences.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[2rem] border border-default bg-surface/70 p-6 shadow-xl backdrop-blur-xl"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-brand/10 to-transparent" />
              </div>

              <div className="relative">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted">
                      0 {index + 1}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold text-primary">
                      {group.title}
                    </h3>
                  </div>

                  <div className="rounded-full border border-default bg-background/50 p-2 text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <Cpu size={18} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-default bg-background/50 px-3 py-1.5 text-sm text-secondary transition-colors duration-300 group-hover:border-brand/40 group-hover:text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default SkillsPreview;