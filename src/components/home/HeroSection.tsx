import MagneticButtonLink from "../ui/MagneticButtonLink";
import FadeIn from "../ui/FadeIn";

import { homeContent } from "../../data/home";

import HeroVisual from "./HeroVisual";

function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="grid items-center gap-x-15 pb-12 lg:grid-cols-2 lg:pt-4 lg:pb-24">  
      <div>
        <FadeIn>
          <p className="text-brand text-sm uppercase tracking-[0.3em]">
            {hero.eyebrow}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight lg:text-5xl">
            {hero.heading}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-secondary mt-6 max-w-2xl text-base leading-7 sm:text-lg">
            {hero.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <MagneticButtonLink to={hero.primaryButton.path}>
              {hero.primaryButton.label}
            </MagneticButtonLink>

            <MagneticButtonLink
              to={hero.secondaryButton.path}
              variant="secondary"
            >
              {hero.secondaryButton.label}
            </MagneticButtonLink>
          </div>
        </FadeIn>
      </div>

      <HeroVisual />
    </section>
  );
}

export default HeroSection;