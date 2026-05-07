import HeroSection from "../components/home/HeroSection";
import SkillsPreview from "../components/home/SkillsPreview";
import FeaturedProjects from "../components/home/FeaturedProjects";
import FadeIn from "../components/ui/FadeIn";

function HomePage() {
  return (
    <>
        <HeroSection />
        <FadeIn>
            <SkillsPreview />
        </FadeIn>
        <FadeIn>
            <FeaturedProjects />
        </FadeIn>
    </>
  );
}

export default HomePage;