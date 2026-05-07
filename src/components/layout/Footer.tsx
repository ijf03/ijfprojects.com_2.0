import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../../data/profile";

function Footer() {
  return (
    <footer className="border-default mt-16 border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link to="/" className="text-brand text-xl font-bold">
            {profile.initials}
          </Link>

          <p className="text-secondary mt-2 text-sm">
            {profile.role} based in {profile.location}.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-secondary hover:text-brand transition"
          >
            <Mail size={20} />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-secondary hover:text-brand transition"
          >
            <FaGithub size={20} />
          </a>

          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-secondary hover:text-brand transition"
            >
              <FaLinkedin size={20} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;