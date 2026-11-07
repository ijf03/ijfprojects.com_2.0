import { Link } from "react-router-dom";
import ContactSection from "../components/contact/ContactSection";
import { about } from "../data/about";

function AboutPage() {
  return (
    <div>
      <section className="py-8 pb-20">
        <p className="text-brand text-sm uppercase tracking-[0.3em]">
          About
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-bold sm:text-5xl">
          Building technology that blends creativity, interaction, and
          problem-solving.
        </h1>

        <p className="text-secondary mt-6 max-w-3xl text-lg leading-8">
          {about.intro}
        </p>

        <div className="mt-10 max-w-3xl space-y-6">
          {about.description.map((paragraph) => (
            <p key={paragraph} className="text-secondary leading-8">
              {paragraph}
            </p>
          ))}
          <p className="text-secondary leading-8">
            For a glimpse of life beyond the projects, explore my{" "}
            <Link to="/SideQuests" className="text-brand underline underline-offset-4 hover:text-primary">
              Side Quests
            </Link>
            {" "}— a scrapbook of community, esports, and moments along the way.
          </p>
        </div>

      </section>
      <ContactSection />
      
    </div>
  );
}

export default AboutPage;
