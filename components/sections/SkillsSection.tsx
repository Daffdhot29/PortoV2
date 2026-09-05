import { MapPin } from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";
import { experiences } from "@/data/experiences";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-dark border-t border-white/5"
    >
      <div className="container-main">
        <SectionHeader
          eyebrow="Experience"
          title={
            <>
              Building expertise through professional{" "}
              <span className="gradient-text">
                Experience
              </span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="experience-card"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="number-label">
                  0{index + 1}
                </span>

                <span className="role-badge">
                  {experience.type}
                </span>
              </div>

              <p className="mt-8 text-xs uppercase tracking-[0.16em] text-indigo-400">
                {experience.period}
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                {experience.role}
              </h3>

              <p className="mt-1 text-sm font-medium text-slate-300">
                {experience.company}
              </p>

              <div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
                <MapPin size={13} />
                {experience.location}
              </div>

              <ul className="mt-7 space-y-3">
                {experience.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-6 text-slate-500"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />

                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}