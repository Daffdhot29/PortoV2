import {
  BrainCircuit,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030711] px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-3">
          <div className="logo-box">
            <BrainCircuit size={18} />
          </div>

          <div>
            <p className="font-semibold">
              Daffa Yunus
            </p>

            <p className="mt-1 text-sm text-slate-600">
              AI for a Brighter Tomorrow.
            </p>
          </div>
        </div>

        <div className="flex gap-3">

          <a
            href="https://www.linkedin.com/in/muhammad-daffa-yunus-66924b209/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={17} />
          </a>

          <a
            href="https://github.com/Daffdhot29"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <FaGithub size={17} />
          </a>

          <a
            href="mailto:arkandaffa0105@gmail.com"
            className="social-icon"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>

        </div>

        <p className="text-xs text-slate-700">
          © 2026 Muhammad Daffa Yunus
        </p>

      </div>
    </footer>
  );
}