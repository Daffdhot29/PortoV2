import { profile } from "@/data/profile";

export default function Header() {
  return (
    <header className="site-header container-main">
      <a className="wordmark" href="#home" aria-label="Daffa Yunus, kembali ke atas">{profile.shortName}</a>
      <nav className="main-nav" aria-label="Navigasi utama">
        <a href="#projects">Projects</a><a href="#about">About</a><a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
