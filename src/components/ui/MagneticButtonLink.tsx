import { Link } from "react-router-dom";
import { useRef, useState } from "react";

type MagneticButtonLinkProps = {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

function MagneticButtonLink({
  to,
  children,
  variant = "primary",
}: MagneticButtonLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const baseClasses =
    "inline-block rounded-full px-6 py-3 text-center font-semibold transition";

  const variants = {
    primary:
      "bg-brand hover:bg-brand-light text-black hover:shadow-[0_0_30px_rgba(44,181,160,0.25)]",
    secondary:
      "border border-default text-primary hover:border-brand hover:text-brand",
  };

  function handleMouseMove(event: React.MouseEvent<HTMLAnchorElement>) {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.18;

    setPosition({ x, y });
  }

  function handleMouseLeave() {
    setPosition({ x: 0, y: 0 });
  }

  return (
    <Link
      ref={ref}
      to={to}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}

export default MagneticButtonLink;