import ArrowIcon from "@/components/ui/ArrowIcon";

export default function HeroSection() {
  return (
    <section className="hero-section container-main" aria-labelledby="hero-title">
      <div className="hero-kicker">
        <p><span className="status-dot" aria-hidden="true" />Developer / AI · Data · Web</p>
        <span className="hero-year">Portfolio / 2026</span>
      </div>
      <h1 id="hero-title"><span>Muhammad</span><span>Daffa Yunus</span></h1>
      <aside className="hero-note" aria-label="Editorial note">
        <span className="note-rule" aria-hidden="true" /><p className="eyebrow">Note / 01</p>
        <p className="editorial-note">From ideas,<br />to experiments,<br />to applications.</p>
      </aside>
      <p className="hero-description">I build web applications and AI-powered systems through code, data, and experimentation.</p>
      <div className="hero-actions">
        <a className="primary-button" href="#projects">View projects <ArrowIcon /></a>
        <a className="text-link" href="#contact">Contact me <ArrowIcon diagonal /></a>
      </div>
      <div className="hero-foot"><span>Code. Data. Experiments.</span><a href="#projects">Explore projects <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
