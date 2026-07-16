import { useEffect, useRef } from "react";
import "./CursorSpotlight.css";

function CursorSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      const spotlight = spotlightRef.current;
      if (!spotlight) return;

      spotlight.style.setProperty("--spotlight-x", `${event.clientX}px`);
      spotlight.style.setProperty("--spotlight-y", `${event.clientY}px`);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      aria-hidden="true"
      className="cursor-spotlight pointer-events-none fixed inset-0 z-0 hidden md:block"
    />
  );
}

export default CursorSpotlight;