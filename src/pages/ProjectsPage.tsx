import { useState } from "react";
import { Search, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { projects } from "../data/projects";
import { matchesProjectSearch } from "../data/projectSearch";
import ProjectCard from "../components/projects/ProjectCard";

function ProjectsPage() {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") ?? "";
  const [isSearchOpen, setIsSearchOpen] = useState(initialSearch.length > 0);
  const [search, setSearch] = useState(initialSearch);

  const filteredProjects = projects.filter((project) => matchesProjectSearch(project, search));

  function toggleSearch() {
    setIsSearchOpen((current) => !current);
  }

  function clearSearch() {
    setSearch("");
    setIsSearchOpen(false);
  }

  return (
    <section aria-labelledby="projects-heading" className="py-8">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-brand text-sm uppercase tracking-[0.3em]">
            Projects
          </p>

          <h1
            id="projects-heading"
            className="mt-4 text-4xl font-bold sm:text-5xl"
          >
            Selected projects and case studies.
          </h1>
        </div>

        <div className="flex shrink-0 items-center gap-2 pt-1">
          {isSearchOpen && (
            <label>
              <span className="sr-only">Search projects</span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search..."
                autoFocus
                className="border-default/60 bg-surface/60 text-primary placeholder:text-muted w-32 rounded-full border px-3 py-1 text-sm outline-none transition focus:border-default/60 focus:ring-0 sm:w-48"
              />
            </label>
          )}

          <button
            type="button"
            onClick={toggleSearch}
            aria-label={isSearchOpen ? "Close project search" : "Search projects"}
            aria-expanded={isSearchOpen}
            className="text-secondary rounded-full border border-default p-2.5 transition hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            {isSearchOpen ? <X size={18} /> : <Search size={18} />}
          </button>
        </div>
      </div>

      <p className="text-secondary mt-5 max-w-2xl leading-7">
        A collection of development, UI/UX, business systems, game development,
        and creative technology projects.
      </p>

      {search.trim() && (
        <div className="mt-8 flex items-center justify-between gap-4 text-sm">
          <p className="text-secondary">
            Showing {filteredProjects.length} project
            {filteredProjects.length === 1 ? "" : "s"} matching “{search}”
          </p>
          <button
            type="button"
            onClick={clearSearch}
            className="text-brand font-semibold hover:underline"
          >
            Clear search
          </button>
        </div>
      )}

      {filteredProjects.length > 0 ? (
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-secondary mt-10 rounded-2xl border border-default p-8 text-center">
          No projects match that search. Try a different skill or project name.
        </p>
      )}
    </section>
  );
}

export default ProjectsPage;
