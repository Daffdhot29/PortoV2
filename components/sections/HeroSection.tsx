import ArrowIcon from "@/components/ui/ArrowIcon";

export default function HeroSection() {
  return (
    <section className="hero-section container-main" aria-labelledby="hero-title">
      <div className="hero-kicker">
        <p><span className="status-dot" aria-hidden="true" />Developer / AI · Data · Web</p>
        <span className="hero-year">Portofolio / 2026</span>
      </div>
      <h1 id="hero-title"><span>Muhammad</span><span>Daffa Yunus</span></h1>
      <aside className="hero-note" aria-label="Catatan editorial">
        <span className="note-rule" aria-hidden="true" /><p className="eyebrow">Catatan / 01</p>
        <p className="editorial-note">Dari ide,<br />ke eksperimen,<br />ke aplikasi.</p>
      </aside>
      <p className="hero-description">Saya membangun aplikasi web dan sistem berbasis AI melalui kode, data, dan eksperimen.</p>
      <div className="hero-actions">
        <a className="primary-button" href="#projects">Lihat proyek <ArrowIcon /></a>
        <a className="text-link" href="#contact">Hubungi saya <ArrowIcon diagonal /></a>
      </div>
      <div className="hero-foot"><span>Kode. Data. Eksperimen.</span><a href="#projects">Lanjut ke proyek <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
