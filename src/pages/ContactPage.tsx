import { profile } from "../data/profile";

function ContactPage() {
  return (
    <section className="py-8">
      <p className="text-brand text-sm uppercase tracking-[0.3em]">
        Contact
      </p>

      <h1 className="mt-4 max-w-4xl text-4xl font-bold sm:text-5xl">
        Let’s connect.
      </h1>

      <p className="text-secondary mt-5 max-w-2xl leading-7">
        I’m open to software development opportunities, internships, graduate
        roles, and creative technology projects.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <a
          href={`mailto:${profile.email}`}
          className="bg-surface border-default hover:border-brand rounded-2xl border p-6 transition"
        >
          <p className="text-brand text-sm font-medium">Email</p>
          <p className="mt-2 text-lg font-semibold">{profile.email}</p>
        </a>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="bg-surface border-default hover:border-brand rounded-2xl border p-6 transition"
        >
          <p className="text-brand text-sm font-medium">GitHub</p>
          <p className="mt-2 text-lg font-semibold">View my repositories</p>
        </a>

        {profile.linkedin && (
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="bg-surface border-default hover:border-brand rounded-2xl border p-6 transition"
          >
            <p className="text-brand text-sm font-medium">LinkedIn</p>
            <p className="mt-2 text-lg font-semibold">Connect with me</p>
          </a>
        )}

        <div className="bg-surface border-default rounded-2xl border p-6">
          <p className="text-brand text-sm font-medium">Location</p>
          <p className="mt-2 text-lg font-semibold">{profile.location}</p>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;