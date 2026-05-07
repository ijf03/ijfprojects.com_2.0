import { useEffect, useState } from "react";

function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{
        background: `radial-gradient(
            220px circle at ${position.x}px ${position.y}px,
            rgba(168, 85, 247, 0.10),
            transparent 35%
        )`,
      }}
    />
  );
}

export default CursorSpotlight;