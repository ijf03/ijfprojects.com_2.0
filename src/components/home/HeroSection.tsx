import MagneticButtonLink from "../ui/MagneticButtonLink";
import { homeContent } from "../../data/home";
import FadeIn from "../ui/FadeIn";

function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="pt-8 pb-12 sm:pt-10 sm:pb-16">
        <FadeIn>
            <p className="text-brand text-sm uppercase tracking-[0.3em]">
                {hero.eyebrow}
            </p>
        </FadeIn>
      
        <FadeIn delay={0.1}>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
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

                <MagneticButtonLink to={hero.secondaryButton.path} variant="secondary">
                {hero.secondaryButton.label}
                </MagneticButtonLink>
            </div>
        </FadeIn>
    </section>
  );
}

export default HeroSection;