import {
  ArrowUpRight,
  BrainCircuit,
  Languages,
} from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";

const projectIcons = [
  BrainCircuit,
  Languages,
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-dark border-t border-white/5"
    >
      <div className="container-main">

        <SectionHeader
          eyebrow="Featured Projects"
          title={
            <>
              Turning ideas into{" "}
              <span className="gradient-text">
                intelligent systems.
              </span>
            </>
          }
          description="Selected projects exploring Machine Learning, Deep Learning, and practical AI applications."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">

          {projects.map((project, index) => {
            const Icon = projectIcons[index];

            return (
              <article
                key={project.title}
                className="project-card"
              >

                {/* TOP */}
                <div className="flex items-start justify-between gap-5">

                  <div className="project-icon">
                    <Icon size={25} />
                  </div>

                  <span className="project-number">
                    0{index + 1}
                  </span>

                </div>

                {/* CATEGORY */}
                <p className="mt-9 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-400">
                  {project.category}
                </p>

                {/* TITLE */}
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="skill-pill"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* FOOTER */}
                <div className="mt-9 border-t border-white/5 pt-6">

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Live Project

                    <ArrowUpRight size={17} />
                  </a>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}