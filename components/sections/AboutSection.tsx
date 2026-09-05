import {
  BrainCircuit,
  Cpu,
  GraduationCap,
  Target,
} from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-dark border-t border-white/5"
    >
      <div className="container-main">
        <SectionHeader
          eyebrow="About Me"
          title={
            <>
              AI-focused,{" "}
              <span className="gradient-text">
                impact driven.
              </span>
            </>
          }
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <div className="glass-card p-8 lg:p-10">
            <p className="max-w-2xl text-lg leading-8 text-slate-400">
              I&apos;m an Information Systems student at Universitas
              Gunadarma with strong interests in Artificial Intelligence,
              Machine Learning, Computer Vision, and Software Engineering.
            </p>

            <p className="mt-5 max-w-2xl leading-7 text-slate-500">
              I enjoy transforming AI capabilities into practical
              systems by combining models, retrieval, APIs, databases,
              and software engineering.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              <ValueCard
                icon={<Target size={20} />}
                title="Problem Solver"
                text="Turning problems into solutions."
              />

              <ValueCard
                icon={<BrainCircuit size={20} />}
                title="Continuous Learner"
                text="Learning through real projects."
              />

              <ValueCard
                icon={<Cpu size={20} />}
                title="AI Builder"
                text="From models into products."
              />
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-start gap-4">
              <div className="icon-box">
                <GraduationCap size={22} />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold">
                      Universitas Gunadarma
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      B.Cs in Information System
                    </p>
                  </div>
                </div>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="text-sm font-semibold text-slate-200">
                    Relevant Coursework
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    Artificial Intelligence, Machine Learning, Natural
                    Language Processing, Deep Learning, Model Optimization, Fine-Tuning,
                     Information Systems
                    Analysis and Design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ValueCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

function ValueCard({
  icon,
  title,
  text,
}: ValueCardProps) {
  return (
    <div className="value-card">
      <div className="text-indigo-400">
        {icon}
      </div>

      <p className="mt-4 text-sm font-semibold">
        {title}
      </p>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {text}
      </p>
    </div>
  );
}