import ButtonLink from "../ui/ButtonLink";
import { profile } from "../../data/profile";

function HeroSection() {
  return (
    <section className="pt-8 pb-12 sm:pt-10 sm:pb-16">
      <p className="text-brand text-sm uppercase tracking-[0.3em]">
        {profile.role}
      </p>

      <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Building thoughtful web applications, interactive systems, and digital
        experiences.
      </h1>

      <p className="text-secondary mt-6 max-w-2xl text-base leading-7 sm:text-lg">
        I’m {profile.name}, a software development student and developer based
        in {profile.location}, with experience across full-stack web
        development, game development, emerging technology, and creative digital
        work.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <ButtonLink to="/projects">View Projects</ButtonLink>
        <ButtonLink to="/contact" variant="secondary">
          Contact Me
        </ButtonLink>
      </div>
    </section>
  );
}

export default HeroSection;