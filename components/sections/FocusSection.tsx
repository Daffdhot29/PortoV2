import {
  BrainCircuit,
  Cpu,
  Eye,
  Sparkles,
} from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";

const focusAreas = [
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description:
      "Building predictive and intelligent systems from structured and unstructured data.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Building visual intelligence with object detection, OCR, preprocessing and inference pipelines.",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    description:
      "Developing LLM applications using RAG, semantic retrieval, contextual memory and AI agents.",
  },
  {
    icon: Cpu,
    title: "AI Engineering",
    description:
      "Integrating AI capabilities into APIs, backend services and production-ready applications.",
  },
];

export default function FocusSection() {
  return (
    <section
      id="focus"
      className="section-accent border-t border-white/5"
    >
      <div className="container-main">
        <SectionHeader
          eyebrow="Core Focus"
          title={
            <>
              What I build with{" "}
              <span className="gradient-text">
                Artificial Intelligence.
              </span>
            </>
          }
          description="My focus is not only on training models, but on turning AI capabilities into usable systems."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="focus-card"
              >
                <div className="icon-box">
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-8 h-px bg-gradient-to-r from-indigo-500/60 to-transparent" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}