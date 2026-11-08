import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ZoomableImage from "./ZoomableImage";
import type {
  GalleryLayout,
  ProjectGallery,
  ProjectMedia,
} from "../../types/project";

type ProjectMediaGalleryProps = {
  gallery: ProjectGallery;
  title?: string;
  className?: string;
  maxPreviewItems?: number;
};

const gridClasses: Record<GalleryLayout, string> = {
  single: "grid-cols-1",
  "two-column": "grid-cols-1 sm:grid-cols-2",
  "three-column": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  "featured-grid": "grid-cols-1 sm:grid-cols-2",
  masonry: "",
  carousel:
    "grid-flow-col auto-cols-[85%] overflow-x-auto overscroll-x-contain sm:auto-cols-[55%] lg:auto-cols-[40%]",
  "full-width": "grid-cols-1",
};

function ProjectMediaGallery({
  gallery,
  title,
  className = "",
  maxPreviewItems = 4,
}: ProjectMediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const previewLimit = Math.max(1, maxPreviewItems);
  const previewItems = gallery.items.slice(0, previewLimit);
  const hiddenItemCount = Math.max(
    gallery.items.length - previewItems.length,
    0,
  );

  const activeItem =
    activeIndex === null ? null : gallery.items[activeIndex];

  function showPrevious() {
    setActiveIndex((current) => {
      if (current === null) {
        return null;
      }

      return (
        (current - 1 + gallery.items.length) %
        gallery.items.length
      );
    });
  }

  function showNext() {
    setActiveIndex((current) => {
      if (current === null) {
        return null;
      }

      return (current + 1) % gallery.items.length;
    });
  }

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => {
          if (current === null) {
            return null;
          }

          return (
            (current - 1 + gallery.items.length) %
            gallery.items.length
          );
        });
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => {
          if (current === null) {
            return null;
          }

          return (current + 1) % gallery.items.length;
        });
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, gallery.items.length]);

  if (gallery.items.length === 0) {
    return null;
  }

  const galleryContent = previewItems.map((item, index) => {
    const isLastPreview = index === previewItems.length - 1;
    const showMoreOverlay =
      isLastPreview && hiddenItemCount > 0;

    const isFeatured =
      gallery.layout === "featured-grid" &&
      index === (gallery.featuredIndex ?? 0);

    return (
      <GalleryPreviewItem
        key={`${item.src}-${index}`}
        item={item}
        index={index}
        isFeatured={isFeatured}
        hiddenItemCount={
          showMoreOverlay ? hiddenItemCount : 0
        }
        onOpen={setActiveIndex}
      />
    );
  });

  return (
    <>
      <section
        className={className}
        aria-label={title ?? "Project image gallery"}
      >
        {title && (
          <h2 className="mb-5 text-2xl font-bold">{title}</h2>
        )}

        {gallery.layout === "masonry" ? (
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryContent}
          </div>
        ) : (
          <div
            className={`grid items-start gap-4 ${gridClasses[gallery.layout]}`}
          >
            {galleryContent}
          </div>
        )}
      </section>

      {activeItem &&
        activeIndex !== null &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Project image viewer"
            onClick={() => setActiveIndex(null)}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-6"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close image viewer"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-2xl text-white transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              ×
            </button>

            {gallery.items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showPrevious();
                  }}
                  aria-label="View previous image"
                  className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-3xl text-white transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:left-6"
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showNext();
                  }}
                  aria-label="View next image"
                  className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-3xl text-white transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:right-6"
                >
                  ›
                </button>
              </>
            )}

            <div
              onClick={(event) => event.stopPropagation()}
              className="flex max-h-[94vh] w-full max-w-7xl flex-col items-center"
            >
              <div className="flex min-h-0 w-full flex-1 items-center justify-center">
                {activeItem.type === "image" ? (
                  <ZoomableImage
                    key={activeItem.src}
                    src={activeItem.src}
                    alt={activeItem.alt}
                  />
                ) : (
                  <video
                    key={activeItem.src}
                    src={activeItem.src}
                    poster={activeItem.poster}
                    controls
                    autoPlay
                    className="max-h-[82vh] max-w-full object-contain"
                  >
                    Your browser does not support embedded video.
                  </video>
                )}
              </div>

              <div className="mt-3 flex w-full max-w-4xl items-start justify-between gap-4 text-sm text-white">
                <p className="leading-6 text-white/80">
                  {activeItem.caption ?? activeItem.alt}
                </p>

                <span className="shrink-0 text-white/60">
                  {activeIndex + 1} / {gallery.items.length}
                </span>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

type GalleryPreviewItemProps = {
  item: ProjectMedia;
  index: number;
  isFeatured: boolean;
  hiddenItemCount: number;
  onOpen: (index: number) => void;
};

function GalleryPreviewItem({
  item,
  index,
  isFeatured,
  hiddenItemCount,
  onOpen,
}: GalleryPreviewItemProps) {
  const mediaClassName =
    item.aspectRatio === "portrait"
      ? "mx-auto block max-h-[70vh] w-auto max-w-full object-contain rounded-2xl"
      : "block h-auto w-full rounded-2xl";

  return (
    <figure
      className={[
        "group self-start",
        isFeatured ? "sm:col-span-2" : "",
        "mb-4 break-inside-avoid",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <button
        type="button"
        onClick={() => onOpen(index)}
        aria-label={
          hiddenItemCount > 0
            ? `Open gallery with ${hiddenItemCount} more items`
            : `Open ${item.alt}`
        }
        className="relative block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-transparent text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        {item.type === "image" ? (
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className={mediaClassName}
          />
        ) : (
          <video
            src={item.src}
            poster={item.poster}
            muted
            preload="metadata"
            className={mediaClassName}
          />
        )}

        <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/5" />

        {hiddenItemCount > 0 ? (
          <span className="absolute inset-0 flex items-center justify-center bg-black/65 text-center text-white">
            <span>
              <strong className="block text-4xl font-bold">
                +{hiddenItemCount}
              </strong>

              <span className="mt-1 block text-sm font-medium">
                View more
              </span>
            </span>
          </span>
        ) : (
          <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/65 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100">
            View larger
          </span>
        )}
      </button>

      {item.caption && (
        <figcaption className="text-secondary px-1 pt-3 text-sm leading-6">
          {item.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default ProjectMediaGallery;
