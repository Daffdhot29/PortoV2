import { BrainCircuit, Download } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#050914]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="logo-box">
            <BrainCircuit size={19} />
          </div>

          <span className="font-semibold tracking-tight">
            Muhammad Daffa Yunus
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <a className="nav-link" href="#home">
            Home
          </a>

          <a className="nav-link" href="#about">
            About
          </a>

          <a className="nav-link" href="#focus">
            Focus
          </a>

          <a className="nav-link" href="#experience">
            Experience
          </a>

          <a className="nav-link" href="#skills">
            Skills
          </a>

          <a className="nav-link" href="#projects">
            Projects
          </a>

          <a className="nav-link" href="#contact">
            Contact
          </a>
        </nav>

        <a
          href="/documents/CV-Muhammad-Daffa-Yunus.pdf"
          download
          className="secondary-button hidden sm:inline-flex"
        >
          <Download size={16} />
          Download CV
        </a>
      </div>
    </header>
  );
}