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
          <h2 id="about-title">Di balik proyek.</h2>
          <p className="about-lead">Saya Muhammad Daffa Yunus, mahasiswa Sistem Informasi di Universitas Gunadarma yang mengerjakan AI, machine learning, computer vision, dan aplikasi web.</p>
          <p>Saya menghubungkan model dengan retrieval, API, database, dan pengembangan perangkat lunak. Pada proyek-proyek di atas, fokusnya mencakup market intelligence, penerjemahan dengan LSTMCell, dan rekomendasi paket telco.</p>
          <div className="education-line"><p>{profile.university}</p><span>{profile.study}</span></div>
          <details className="coursework"><summary>Mata kuliah terkait <span className="disclosure-mark" aria-hidden="true" /></summary><p>{profile.coursework.join(" / ")}</p></details>
          <a className="text-link cv-link" href={profile.cv} download>Unduh CV <ArrowIcon diagonal /></a>
        </div>
      </div>
      <div className="about-records">
        <ExperienceSection />
        <details className="expertise-disclosure" id="skills"><summary><span>Bidang &amp; keahlian</span><span className="disclosure-mark" aria-hidden="true" /></summary><div className="expertise-content"><FocusSection /><SkillsSection /></div></details>
        <AchievementsSection />
      </div>
    </section>
  );
}
