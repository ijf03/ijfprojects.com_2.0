import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Resume", path: "/resume" },
  { label: "Contact", path: "/about#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  function isLinkActive(label: string, path: string) {
    const [pathname, hash] = path.split("#");

    if (label === "Contact") {
      return (
        location.pathname === pathname &&
        location.hash === `#${hash}`
      );
    }

    if (label === "About") {
      return (
        location.pathname === "/about" &&
        location.hash !== "#contact"
      );
    }

    return location.pathname === pathname;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-default bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-brand text-xl font-bold">
          IJF
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.label, link.path);

            return (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isActive ? "page" : undefined}
                className={`
                  relative text-sm transition
                  ${
                    isActive
                      ? "text-brand after:w-full"
                      : "text-secondary hover:text-primary after:w-0"
                  }
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-px
                  after:bg-brand
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          className="text-primary md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-default border-t bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.label, link.path);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={
                    isActive
                      ? "text-brand"
                      : "text-secondary transition hover:text-primary"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;