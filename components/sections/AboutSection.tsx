import Image from "next/image";
import ArrowIcon from "@/components/ui/ArrowIcon";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import FocusSection from "@/components/sections/FocusSection";
import SkillsSection from "@/components/sections/SkillsSection";
import { profile } from "@/data/profile";

export default function AboutSection() {
  return (
    <section className="about-section container-main" id="about" aria-labelledby="about-title">
      <div className="about-intro">
        <div className="about-aside">
          <p className="eyebrow">02 / About</p>
          <figure className="portrait">
            <Image src="/images/profile.png" alt="Muhammad Daffa Yunus" width={432} height={578} sizes="(max-width: 760px) 240px, 280px" />
            <figcaption>{profile.location}</figcaption>
          </figure>
        </div>
        <div className="about-copy">
          <h2 id="about-title">Behind the projects.</h2>
          <p className="about-lead">I am Muhammad Daffa Yunus, an Information Systems student at Universitas Gunadarma working on AI, machine learning, computer vision, and web applications.</p>
          <p>I connect models with retrieval systems, APIs, databases, and software applications. The projects above focus on market intelligence, translation with LSTMCell, and telecom plan recommendations.</p>
          <div className="education-line"><p>{profile.university}</p><span>{profile.study}</span></div>
          <details className="coursework"><summary>Relevant coursework <span className="disclosure-mark" aria-hidden="true" /></summary><p>{profile.coursework.join(" / ")}</p></details>
          <a className="text-link cv-link" href={profile.cv} download>Download CV <ArrowIcon diagonal /></a>
        </div>
      </div>
      <div className="about-records">
        <ExperienceSection />
        <details className="expertise-disclosure" id="skills"><summary><span>Focus &amp; expertise</span><span className="disclosure-mark" aria-hidden="true" /></summary><div className="expertise-content"><FocusSection /><SkillsSection /></div></details>
        <AchievementsSection />
      </div>
    </section>
  );
}
