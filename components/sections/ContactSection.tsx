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
        <div><h2 id="contact-title">Have a project or idea<br />we can work on<br /><em>together?</em></h2><p className="contact-description">Open to job opportunities, project collaborations, and conversations about AI, data, and web applications.</p><a className="text-link" href={profile.cv} download>Download CV <ArrowIcon diagonal /></a></div>
        <div className="contact-links">{links.map((link) => (
          <a className="contact-item" key={link.label} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>
            <span className="contact-label">{link.label}</span><span className="contact-value">{link.value}</span><ArrowIcon diagonal />{link.external && <span className="sr-only">, opens in a new tab</span>}
          </a>
        ))}</div>
      </div>
    </section>
  );
}
