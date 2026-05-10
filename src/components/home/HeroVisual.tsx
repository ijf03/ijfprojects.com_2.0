import { motion } from "framer-motion";
import { Code2, GitBranch, Layers3, Terminal } from "lucide-react";
import type { Transition } from "framer-motion";

const floatingTransition: Transition = {
  duration: 5,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
};

function HeroVisual() {
  return (
    <div className="relative hidden min-h-130 lg:block">
      <div className="absolute inset-0 rounded-4xl bg-surface/40 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto h-[520px] max-w-[560px]"
      >
        {/* Main workspace */}
        <motion.div
          animate={{ y: [0, -10] }}
          transition={floatingTransition}
          className="absolute left-0 top-12 w-[470px] overflow-hidden rounded-3xl border border-default bg-surface/80 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-center justify-between border-b border-default px-5 py-4">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
            </div>

            <p className="text-muted text-xs">portfolio.workspace.tsx</p>
          </div>

          <div className="grid grid-cols-[105px_300px_1fr]">
          <aside className="border-r border-default bg-background/40 p-4">
            {["home.tsx", "projects.ts", "skills.json", "story.md"].map(
              (item, index) => (
                <div
                  key={item}
                  className={`mb-3 rounded-xl px-3 py-2 text-xs ${
                    index === 0
                      ? "bg-surface-elevated text-primary"
                      : "text-muted"
                  }`}
                >
                  {item}
                </div>
              )
            )}
          </aside>

          <div className="space-y-3 p-5 font-mono text-xs">
            <p className="text-muted">
              <span className="text-brand">const</span>{" "}
              <span className="text-primary">developer</span> =
            </p>

            <p className="pl-4 text-primary">{`{`}</p>

            <p className="pl-8 text-secondary">
              role: <span className="text-brand">"Software Developer"</span>,
            </p>

            <p className="pl-8 text-secondary">
              focus: <span className="text-brand">"Interactive Experiences"</span>,
            </p>

            <p className="pl-8 text-secondary">
              builds: <span className="text-brand">["Web", "Games", "Creative Tech"]</span>
            </p>

            <p className="pl-4 text-primary">{`}`}</p>
          </div>

          <div />
        </div>
        </motion.div>

        {/* Terminal */}
        <motion.div
          animate={{ y: [0, -8] }}
          transition={{ ...floatingTransition, duration: 4.5 }}
          className="absolute bottom-12 left-12 w-82.5 rounded-3xl border border-default bg-background/90 p-5 shadow-xl backdrop-blur-xl"
        >
          <div className="mb-4 flex items-center gap-2 text-brand">
            <Terminal size={18} />
            <span className="text-xs uppercase tracking-[0.2em]">Session</span>
          </div>

          <div className="space-y-2 font-mono text-xs">
            <p className="text-muted">$ npm run build</p>
            <p className="text-secondary">✓ components compiled</p>
            <p className="text-secondary">✓ motion system ready</p>
            <p className="text-brand">portfolio deployed</p>
          </div>
        </motion.div>

        {/* Git status */}
        <motion.div
          animate={{ y: [0, 10] }}
          transition={{ ...floatingTransition, duration: 5.5 }}
          className="absolute bottom-35 right-0 w-60 rotate-[-5deg] rounded-3xl border border-default bg-surface/85 p-4 shadow-xl backdrop-blur-xl"
        >
          <div className="mb-3 flex items-center gap-2 text-brand">
            <GitBranch size={17} />
            <span className="text-xs uppercase tracking-[0.2em]">Git</span>
          </div>

          <p className="text-sm text-primary">feat/hero-workbench</p>
          <p className="mt-1 text-xs text-muted">3 files changed</p>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-background">
            <motion.div
              initial={{ width: "20%" }}
              animate={{ width: "78%" }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="h-full bg-brand"
            />
          </div>
        </motion.div>

        {/* Floating tag */}
        <motion.div
          animate={{ y: [0, -16], rotate: [-2, 2] }}
          transition={{ ...floatingTransition, duration: 6.5 }}
          className="absolute right-28 bottom-3 flex items-center gap-2 rounded-full border border-default bg-surface-elevated/90 px-4 py-3 text-sm text-primary shadow-xl backdrop-blur-xl"
        >
          <Code2 size={16} className="text-brand" />
          Driven by Passion, Defined by Code.
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroVisual;