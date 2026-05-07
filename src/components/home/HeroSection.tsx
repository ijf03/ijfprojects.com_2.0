import ButtonLink from "../ui/ButtonLink";
import { homeContent } from "../../data/home";

function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="pt-8 pb-12 sm:pt-10 sm:pb-16">
      <p className="text-brand text-sm uppercase tracking-[0.3em]">
        {hero.eyebrow}
      </p>

      <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {hero.heading}
      </h1>

      <p className="text-secondary mt-6 max-w-2xl text-base leading-7 sm:text-lg">
        {hero.description}
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <ButtonLink to={hero.primaryButton.path}>
          {hero.primaryButton.label}
        </ButtonLink>

        <ButtonLink to={hero.secondaryButton.path} variant="secondary">
          {hero.secondaryButton.label}
        </ButtonLink>
      </div>
    </section>
  );
}

export default HeroSection;