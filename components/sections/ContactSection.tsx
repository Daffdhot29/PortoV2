import ArrowIcon from "@/components/ui/ArrowIcon";
import { profile } from "@/data/profile";

export default function ContactSection() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
    { label: "GitHub", value: profile.githubHandle, href: profile.github, external: true },
    { label: "LinkedIn", value: profile.name, href: profile.linkedin, external: true },
  ];
  return (
    <section className="contact-section container-main" id="contact" aria-labelledby="contact-title">
      <p className="eyebrow">03 / Contact</p>
      <div className="contact-grid">
        <div><h2 id="contact-title">Punya proyek atau ide<br />untuk dikerjakan<br /><em>bersama?</em></h2><p className="contact-description">Terbuka untuk peluang kerja, kolaborasi proyek, dan diskusi seputar AI, data, dan aplikasi web.</p><a className="text-link" href={profile.cv} download>Unduh CV <ArrowIcon diagonal /></a></div>
        <div className="contact-links">{links.map((link) => (
          <a className="contact-item" key={link.label} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>
            <span className="contact-label">{link.label}</span><span className="contact-value">{link.value}</span><ArrowIcon diagonal />{link.external && <span className="sr-only">, tab baru</span>}
          </a>
        ))}</div>
      </div>
    </section>
  );
}
