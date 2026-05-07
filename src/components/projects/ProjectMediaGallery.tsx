import type { ProjectMedia } from "../../types/project";

type ProjectMediaGalleryProps = {
  media?: ProjectMedia[];
};

function ProjectMediaGallery({ media }: ProjectMediaGalleryProps) {
  if (!media || media.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold">Project Preview</h2>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {media.map((item) => (
          <figure
            key={item.src}
            className="bg-surface border-default overflow-hidden rounded-2xl border"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt ?? "Project preview"}
                className="h-64 w-full object-cover"
              />
            ) : (
              <video
                src={item.src}
                controls
                className="h-64 w-full object-cover"
              />
            )}

            {item.caption && (
              <figcaption className="text-secondary px-4 py-3 text-sm">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}

export default ProjectMediaGallery;