const focusAreas = [
  { title: "Machine Learning", description: "Sistem prediktif dari data terstruktur maupun tidak terstruktur." },
  { title: "Computer Vision", description: "Deteksi objek, OCR, preprocessing, dan pipeline inferensi visual." },
  { title: "Generative AI", description: "Aplikasi LLM dengan RAG, semantic retrieval, contextual memory, dan AI agents." },
  { title: "AI Engineering", description: "Integrasi AI ke API, layanan backend, dan aplikasi." },
];

export default function FocusSection() {
  return (
    <section className="focus-section" id="focus" aria-labelledby="focus-title">
      <h4 id="focus-title">Fokus pekerjaan</h4>
      <dl className="focus-list">{focusAreas.map((item) => <div key={item.title}><dt>{item.title}</dt><dd>{item.description}</dd></div>)}</dl>
    </section>
  );
}
