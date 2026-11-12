const focusAreas = [
  { title: "Machine Learning", description: "Predictive systems built on structured and unstructured data." },
  { title: "Computer Vision", description: "Object detection, OCR, preprocessing, and visual inference pipelines." },
  { title: "Generative AI", description: "LLM applications with RAG, semantic retrieval, contextual memory, and AI agents." },
  { title: "AI Engineering", description: "AI integration into APIs, backend services, and applications." },
];

export default function FocusSection() {
  return (
    <section className="focus-section" id="focus" aria-labelledby="focus-title">
      <h4 id="focus-title">Areas of focus</h4>
      <dl className="focus-list">{focusAreas.map((item) => <div key={item.title}><dt>{item.title}</dt><dd>{item.description}</dd></div>)}</dl>
    </section>
  );
}
