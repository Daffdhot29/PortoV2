import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="site-footer container-main">
      <p>© {new Date().getFullYear()} {profile.shortName}</p>
      <p className="footer-note">Code. Data. Experiments.</p>
      <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
    </footer>
  );
}
