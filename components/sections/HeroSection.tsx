import Image from "next/image";

import {
  ArrowRight,
  BrainCircuit,
  Download,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="hero-section"
    >
      <div className="hero-grid" />

      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-36 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:pb-32">

        <div>
          <div className="hero-label">
            <BrainCircuit size={15} />

            AI & MACHINE LEARNING ENGINEER
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
            Building intelligent
            <br />

            solutions for a{" "}
            <span className="gradient-text">
              better tomorrow.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m Muhammad Daffa Yunus, an Information Systems
            student focused on Artificial Intelligence, Machine
            Learning, Computer Vision, and AI-powered solutions
            for real-world problems.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="mailto:arkandaffa0105@gmail.com"
              className="primary-button"
            >
              Let&apos;s Connect
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

          <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-500">

            <a
              href="mailto:arkandaffa0105@gmail.com"
              className="hero-contact"
            >
              <Mail size={17} />
              Email
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="hero-contact"
            >
              <FaLinkedinIn size={17} />
              LinkedIn
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="hero-contact"
            >
              <FaGithub size={17} />
              GitHub
            </a>

            <span className="hero-contact">
              <MapPin size={17} />
              Jakarta, Indonesia
            </span>

          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[470px]">

          <div className="portrait-glow" />

          <div className="portrait-frame">
            <Image
              src="/images/profile.png"
              alt="Muhammad Daffa Yunus"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 390px"
              className="object-cover object-top"
            />
          </div>

          <div className="hero-stats">

            <div>
              <strong>AI</strong>
              <span>Engineering</span>
            </div>

            <div>
              <strong>ML</strong>
              <span>Intelligence</span>
            </div>

            <div>
              <strong>CV</strong>
              <span>Vision</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}