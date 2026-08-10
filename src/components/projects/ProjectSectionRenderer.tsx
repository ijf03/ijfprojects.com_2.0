import type {
  ProjectContentBlock,
  ProjectSection,
} from "../../types/project";
import ProjectMediaGallery from "./ProjectMediaGallery";

type ProjectSectionRendererProps = {
  section: ProjectSection;
};

function ProjectSectionRenderer({
  section,
}: ProjectSectionRendererProps) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-heading`}
      className="scroll-mt-28"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
        <header>
          {(section.number || section.eyebrow) && (
            <p className="text-brand text-sm uppercase tracking-[0.3em]">
              {section.number ?? section.eyebrow}
            </p>
          )}

          <h2
            id={`${section.id}-heading`}
            className="mt-3 text-3xl font-bold"
          >
            {section.title}
          </h2>

          {section.details && section.details.length > 0 && (
            <div className="border-default mt-7 space-y-6 border-t pt-6">
              {section.details.map((detail) => (
                <div key={detail.label}>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.15em]">
                    {detail.label}
                  </h3>

                  <ul className="text-secondary mt-2 space-y-1 text-sm">
                    {detail.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </header>

        <div className="space-y-8">
          {section.blocks.map((block, index) => (
            <ProjectBlockRenderer
              key={`${block.type}-${index}`}
              block={block}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type ProjectBlockRendererProps = {
  block: ProjectContentBlock;
};

function ProjectBlockRenderer({
  block,
}: ProjectBlockRendererProps) {
  switch (block.type) {
    case "text":
      return (
        <div className="text-secondary max-w-3xl space-y-5 text-lg leading-8">
          {block.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      );

    case "gallery":
      return <ProjectMediaGallery gallery={block.gallery} />;

    case "list":
      return (
        <div>
          {block.title && (
            <h3 className="text-xl font-bold">
              {block.title}
            </h3>
          )}

          <ul
            className={[
              "text-secondary mt-5 grid gap-4",
              block.columns === 3
                ? "md:grid-cols-2 lg:grid-cols-3"
                : block.columns === 2
                  ? "md:grid-cols-2"
                  : "grid-cols-1",
            ].join(" ")}
          >
            {block.items.map((item) => (
              <li
                key={item}
                className="border-default flex gap-3 rounded-2xl border p-5 leading-7"
              >
                <span className="text-brand" aria-hidden="true">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "callout":
      return (
        <aside className="border-brand bg-surface rounded-2xl border-l-4 p-6">
          {block.title && (
            <h3 className="font-bold">
              {block.title}
            </h3>
          )}

          <p className="text-secondary mt-2 leading-7">
            {block.text}
          </p>
        </aside>
      );

    case "quote":
      return (
        <figure className="border-default border-l pl-6">
          <blockquote className="text-xl leading-8">
            “{block.quote}”
          </blockquote>

          {block.attribution && (
            <figcaption className="text-secondary mt-3 text-sm">
              — {block.attribution}
            </figcaption>
          )}
        </figure>
      );

    case "links":
      return (
        <div className="flex flex-wrap gap-4">
          {block.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="border-default hover:border-brand hover:text-brand rounded-full border px-5 py-2.5 font-semibold transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      );
  }
}

export default ProjectSectionRenderer;
