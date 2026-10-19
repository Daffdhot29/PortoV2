import { skillGroups } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section className="skills-section" aria-labelledby="skills-title">
      <h4 id="skills-title">Metode &amp; teknologi</h4>
      <dl className="skills-list">{skillGroups.map((group) => <div key={group.key}><dt>{group.title}</dt><dd>{group.skills.join(" / ")}</dd></div>)}</dl>
    </section>
  );
}
