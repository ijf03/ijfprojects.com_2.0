import { useEffect, useRef, useState } from "react";

type ZoomableImageProps = { src: string; alt: string };

/** Key by source in the gallery so each new image starts fitted to the viewport. */
export default function ZoomableImage({ src, alt }: ZoomableImageProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [natural, setNatural] = useState({ width: 0, height: 0 });
  const [zoom, setZoom] = useState(1);
  const drag = useRef<{ x: number; y: number; left: number; top: number } | null>(null);

  useEffect(() => {
    const element = viewportRef.current;
    if (!element) return;
    const observer = new ResizeObserver(() => {
      setViewport({ width: element.clientWidth, height: element.clientHeight });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const fit = natural.width && viewport.width
    ? Math.min(viewport.width / natural.width, viewport.height / natural.height, 1)
    : 1;
  const maxZoom = Math.max(8, 1 / fit);
  const width = natural.width * fit * zoom;
  const height = natural.height * fit * zoom;
  const buttonClass = "min-h-11 rounded-full border border-white/30 px-4 text-sm text-white hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:opacity-40";

  function changeZoom(next: number) {
    setZoom(Math.min(maxZoom, Math.max(1, next)));
  }

  // Keep the same image point centred when zooming or resizing.
  const previousSize = useRef({ width: 0, height: 0 });
  useEffect(() => {
    const element = viewportRef.current;
    if (!element || !width || !height) return;
    const previous = previousSize.current;
    const x = previous.width > viewport.width
      ? (element.scrollLeft + viewport.width / 2) / previous.width : 0.5;
    const y = previous.height > viewport.height
      ? (element.scrollTop + viewport.height / 2) / previous.height : 0.5;
    element.scrollLeft = x * width - viewport.width / 2;
    element.scrollTop = y * height - viewport.height / 2;
    previousSize.current = { width, height };
  }, [width, height, viewport]);

  return (
    <div
      className="w-full min-w-0"
      onKeyDown={(event) => {
        if (["+", "=", "-", "0"].includes(event.key)) {
          event.preventDefault();
          event.stopPropagation();
          changeZoom(event.key === "0" ? 1 : zoom * (event.key === "-" ? 1 / 1.5 : 1.5));
        }
        // Arrow keys pan a zoomed image instead of navigating to another image.
        if (zoom > 1 && event.key.startsWith("Arrow")) event.stopPropagation();
      }}
    >
      <div className="mb-3 flex flex-wrap items-center justify-center gap-2" aria-label="Image zoom controls">
        <button type="button" className={buttonClass} aria-label="Zoom out" disabled={zoom <= 1} onClick={() => changeZoom(zoom / 1.5)}>−</button>
        <output className="min-w-16 text-center text-sm text-white" aria-live="polite">{Math.round(zoom * 100)}%</output>
        <button type="button" className={buttonClass} aria-label="Zoom in" disabled={zoom >= maxZoom} onClick={() => changeZoom(zoom * 1.5)}>+</button>
        <button type="button" className={buttonClass} onClick={() => changeZoom(1)}>Fit</button>
        <button type="button" className={buttonClass} disabled={!natural.width} onClick={() => changeZoom(1 / fit)}>Actual size</button>
        <a className={`${buttonClass} inline-flex items-center`} href={src} target="_blank" rel="noreferrer">Open original</a>
      </div>
      <div
        ref={viewportRef}
        tabIndex={0}
        role="region"
        aria-label="Image detail. Use plus and minus to zoom, zero to fit. Scroll or drag to explore."
        className={`h-[62dvh] w-full overflow-auto overscroll-contain rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:h-[70dvh] ${zoom > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"}`}
        onDoubleClick={() => changeZoom(zoom > 1 ? 1 : 2)}
        onPointerDown={(event) => {
          // Touch keeps native scrolling and browser pinch zoom.
          if (zoom <= 1 || event.pointerType !== "mouse" || event.button !== 0) return;
          const element = event.currentTarget;
          drag.current = { x: event.clientX, y: event.clientY, left: element.scrollLeft, top: element.scrollTop };
          element.setPointerCapture(event.pointerId);
          element.focus();
          event.preventDefault();
        }}
        onPointerMove={(event) => {
          if (!drag.current) return;
          event.currentTarget.scrollLeft = drag.current.left + drag.current.x - event.clientX;
          event.currentTarget.scrollTop = drag.current.top + drag.current.y - event.clientY;
        }}
        onPointerUp={(event) => {
          drag.current = null;
          if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
        }}
        onPointerCancel={() => { drag.current = null; }}
        onLostPointerCapture={() => { drag.current = null; }}
      >
        <div className="flex items-center justify-center" style={{ width: Math.max(viewport.width, width), height: Math.max(viewport.height, height) }}>
          <img
            src={src}
            alt={alt}
            draggable={false}
            onLoad={(event) => setNatural({ width: event.currentTarget.naturalWidth, height: event.currentTarget.naturalHeight })}
            className="block max-w-none shrink-0 select-none"
            style={natural.width ? { width, height } : { maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
      </div>
      <p className="mt-2 text-center text-xs text-white/60">Zoom with + / − or double-click. Scroll, swipe, or drag to explore. 100% fits the image.</p>
    </div>
  );
}
