import {
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-dark border-t border-white/5"
    >
      <div className="container-main">
        <div className="contact-box">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-400/15 bg-indigo-500/10 text-indigo-300">
            <Mail size={23} />
          </div>

          <p className="section-eyebrow mt-7">
            Let&apos;s Connect
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Let&apos;s build something{" "}
            <span className="gradient-text">
              intelligent.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-center leading-7 text-slate-400">
            Open to opportunities, collaborations, internships,
            and discussions around Artificial Intelligence and
            Machine Learning.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:arkandaffa0105@gmail.com"
              className="primary-button"
            >
              Get In Touch
              <ArrowRight size={18} />
            </a>

            <a
              href="/documents/CV-Muhammad-Daffa-Yunus.pdf"
              download
              className="secondary-button"
            >
              <Download size={17} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}