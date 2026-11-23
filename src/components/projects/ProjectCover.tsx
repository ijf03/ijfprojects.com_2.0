import { useState } from "react";
import { Code2 } from "lucide-react";
import type { Project } from "../../types/project";
import { flattenTechStack } from "../../data/technologyCategories";

/** A title treatment, never a fictional application screenshot. */
export default function ProjectCover({ project }: { project: Project }) {
  const [failedSrc, setFailedSrc] = useState<string>();
  const hasImage = project.coverImage && project.coverImage !== failedSrc;

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-default bg-background">
      {hasImage ? (
        <img
          src={project.coverImage}
          alt={`${project.title} project preview`}
          loading="lazy"
          onError={() => setFailedSrc(project.coverImage)}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105 motion-reduce:transform-none"
        />
      ) : (
        <div className="flex h-full flex-col justify-between bg-gradient-to-br from-[rgba(44,181,160,0.16)] via-transparent to-[rgba(125,211,252,0.08)] p-5 sm:p-6" aria-hidden="true">
          <Code2 className="text-brand h-7 w-7" strokeWidth={1.5} />
          <div>
            <p className="font-heading text-primary break-words text-2xl font-bold leading-tight">{project.title}</p>
            <p className="text-secondary mt-3 text-sm leading-5">
              {flattenTechStack(project.techStack).slice(0, 3).join(" / ")}
            </p>
          </div>
          <span className="text-brand text-sm">Software development</span>
        </div>
      )}
    </div>
  );
}
