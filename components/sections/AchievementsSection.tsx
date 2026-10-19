import { achievements } from "@/data/achievements";

export default function AchievementsSection() {
  return (
    <section className="achievements-section about-subsection" aria-labelledby="achievements-title">
      <div className="about-subheading"><h3 id="achievements-title">Pencapaian</h3><p>Kompetisi dan hackathon.</p></div>
      <ol className="achievements-list">{achievements.map((achievement) => (
        <li key={achievement.title}><span className="achievement-place">{achievement.place}</span><div><h4>{achievement.title}</h4><p>{achievement.organizer}</p></div><span className="achievement-role">{achievement.role}</span></li>
      ))}</ol>
    </section>
  );
}
