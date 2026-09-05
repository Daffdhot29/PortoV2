import {
  BrainCircuit,
  Code2,
  Eye,
  Sparkles,
} from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";
import { skillGroups } from "@/data/skills";

const icons = {
  "machine-learning": BrainCircuit,
  "generative-ai": Sparkles,
  "computer-vision": Eye,
  engineering: Code2,
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-soft border-t border-white/5"
    >
      <div className="container-main">
        <SectionHeader
          eyebrow="Skills & Tools"
          title={
            <>
              Technology behind the{" "}
              <span className="gradient-text">
                solutions.
              </span>
            </>
          }
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = icons[group.key];

            return (
              <article
                key={group.title}
                className="skill-card"
              >
                <div className="flex items-center gap-4">
                  <div className="icon-box">
                    <Icon size={21} />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-pill"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}