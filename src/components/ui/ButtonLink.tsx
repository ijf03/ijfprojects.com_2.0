import { Link } from "react-router-dom";

type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

function ButtonLink({ to, children, variant = "primary" }: ButtonLinkProps) {
  const baseClasses =
    "rounded-full px-6 py-3 text-center font-semibold transition";

  const variants = {
    primary: "bg-brand hover:bg-brand-light text-black hover:shadow-[0_0_30px_rgba(44,181,160,0.25)] hover:-translate-y-0.5",
    secondary: "border border-default text-primary hover:border-brand hover:text-brand hover:-translate-y-0.5",
  };

  return (
    <Link to={to} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
}

export default ButtonLink;