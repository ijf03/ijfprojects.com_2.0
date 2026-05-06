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
    primary: "bg-brand hover:bg-brand-light text-black",
    secondary:
      "border border-default text-primary hover:border-brand hover:text-brand",
  };

  return (
    <Link to={to} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
}

export default ButtonLink;