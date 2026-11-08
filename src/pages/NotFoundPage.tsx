import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

type NotFoundPageProps = { project?: boolean };

function NotFoundPage({ project = false }: NotFoundPageProps) {
  const linkClass = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4 focus-visible:ring-offset-background";

  return (
    <section aria-labelledby="not-found-heading" className="flex min-h-[65vh] items-center justify-center py-16 sm:py-24">
      <div className="border-default bg-surface/70 w-full max-w-3xl rounded-3xl border px-6 py-12 text-center shadow-xl backdrop-blur-xl sm:p-16">
        <p className="text-brand text-sm uppercase tracking-[0.3em]">Page not found</p>
        <p aria-hidden="true" className="text-brand mt-6 text-8xl font-bold tracking-tighter sm:text-9xl">404</p>
        <h1 id="not-found-heading" className="mt-6 text-3xl font-bold text-primary sm:text-4xl">
          {project ? "That project couldn't be found." : "Looks like a wrong turn."}
        </h1>
        <p className="text-secondary mx-auto mt-4 max-w-md leading-7">
          {project
            ? "This project may have moved or is no longer available. You can explore the rest of my work below."
            : "The page you're looking for may have moved, or the link might be incorrect. Let's get you back on track."}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className={`${linkClass} bg-brand text-black hover:bg-brand-light`}>
            <ArrowLeft size={18} aria-hidden="true" /> Back home
          </Link>
          <Link to="/projects" className={`${linkClass} border border-default text-primary hover:border-brand hover:text-brand`}>
            Explore projects <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
