import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { LinksSection } from "@/components/links-section";
import { OutsideSection } from "@/components/outside-section";
import { PageShell } from "@/components/page-shell";
import { ProjectsSection } from "@/components/projects-section";
import { SectionIntro } from "@/components/section-intro";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />

      <section id="about" className="pb-24">
        <div className="container grid gap-8 lg:grid-cols-[160px_minmax(0,1fr)]">
          <SectionIntro eyebrow="About" />
          <AboutSection />
        </div>
      </section>

      <section id="outside" className="pb-24">
        <div className="container grid gap-6 lg:grid-cols-[160px_minmax(0,1fr)]">
          <SectionIntro eyebrow="Outside" />
          <OutsideSection />
        </div>
      </section>

      <section id="experience" className="pb-24">
        <div className="container grid gap-8 lg:grid-cols-[160px_minmax(0,1fr)]">
          <SectionIntro eyebrow="Experience" />
          <ExperienceSection />
        </div>
      </section>

      <section id="projects" className="pb-24">
        <div className="container space-y-10">
          <SectionIntro eyebrow="Projects" />
          <ProjectsSection />
        </div>
      </section>

      <section id="links" className="pb-20">
        <div className="container space-y-10">
          <SectionIntro eyebrow="Links" />
          <LinksSection />
        </div>
      </section>
    </PageShell>
  );
}
