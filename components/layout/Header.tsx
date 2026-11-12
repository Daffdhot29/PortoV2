import { profile } from "@/data/profile";

export default function Header() {
  return (
    <header className="site-header container-main">
      <a className="wordmark" href="#home" aria-label="Daffa Yunus, back to top">{profile.shortName}</a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#projects">Projects</a><a href="#about">About</a><a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
