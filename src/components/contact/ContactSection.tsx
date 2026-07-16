import { profile } from "../../data/profile";

function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 border-t border-default py-20"
    >
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-brand text-sm uppercase tracking-[0.3em]">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Let&apos;s connect.
          </h2>

          <p className="text-secondary mt-5 max-w-xl leading-7">
            I&apos;m open to software development opportunities, graduate
            roles, internships, and creative technology projects.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <a
            href={`mailto:${profile.email}`}
            className="bg-surface border-default hover:border-brand min-w-0 rounded-2xl border p-6"
          >
            <p className="text-brand text-sm font-medium">
              Email
            </p>

            <p className="mt-2 break-words text-lg font-semibold">
              {profile.email}
            </p>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="bg-surface border-default hover:border-brand rounded-2xl border p-6"
          >
            <p className="text-brand text-sm font-medium">
              GitHub
            </p>

            <p className="mt-2 text-lg font-semibold">
              View my repositories
            </p>
          </a>

          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bg-surface border-default hover:border-brand rounded-2xl border p-6"
            >
              <p className="text-brand text-sm font-medium">
                LinkedIn
              </p>

              <p className="mt-2 text-lg font-semibold">
                Connect with me
              </p>
            </a>
          )}

          <div className="bg-surface border-default rounded-2xl border p-6">
            <p className="text-brand text-sm font-medium">
              Location
            </p>

            <p className="mt-2 text-lg font-semibold">
              {profile.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;