import { experiences } from "@/data/experiences";

export default function ExperienceSection() {
  return (
    <section className="experience-section about-subsection" id="experience" aria-labelledby="experience-title">
      <div className="about-subheading"><h3 id="experience-title">Pengalaman</h3><p>Proyek dan pekerjaan yang saya kerjakan.</p></div>
      <div className="experience-list">
        {experiences.map((experience) => (
          <details className="experience-item" key={`${experience.company}-${experience.role}`}>
            <summary>
              <span className="experience-period">{experience.period}</span>
              <span className="experience-heading"><span className="experience-role">{experience.role}</span><span>{experience.company}</span></span>
              <span className="disclosure-mark" aria-hidden="true" />
            </summary>
            <div className="experience-content"><p className="experience-location">{experience.location} / {experience.type}</p><ul>{experience.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
          </details>
        ))}
      </div>
    </section>
  );
}
