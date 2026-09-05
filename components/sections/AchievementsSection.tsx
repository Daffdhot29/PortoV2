import { Award } from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";
import { achievements } from "@/data/achievements";

export default function AchievementsSection() {
  return (
    <section className="section-accent border-t border-white/5">
      <div className="container-main">
        <SectionHeader
          eyebrow="Achievements"
          title={
            <>
              Built, competed,{" "}
              <span className="gradient-text">
                and delivered.
              </span>
            </>
          }
          description="Selected national competitions and hackathons where I contributed through AI, Machine Learning, and software engineering."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement) => (
            <article
              key={achievement.title}
              className="achievement-card"
            >
              <Award
                className="text-indigo-400"
                size={24}
              />

              <p className="mt-7 text-sm font-medium text-indigo-300">
                {achievement.place}
              </p>

              <h3 className="mt-3 text-lg font-semibold">
                {achievement.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {achievement.organizer}
              </p>

              <p className="mt-5 text-xs uppercase tracking-wider text-slate-600">
                {achievement.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}