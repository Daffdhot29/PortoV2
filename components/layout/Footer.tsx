import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="site-footer container-main">
      <p>© {new Date().getFullYear()} {profile.shortName}</p>
      <p className="footer-note">Kode. Data. Eksperimen.</p>
      <a href="#home">Kembali ke atas <span aria-hidden="true">↑</span></a>
    </footer>
  );
}
