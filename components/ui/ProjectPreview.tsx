type ProjectPreviewProps = { variant: "translation" | "telco" };

export default function ProjectPreview({ variant }: ProjectPreviewProps) {
  const translation = variant === "translation";
  return (
    <figure className={`project-preview project-preview-${variant}`}>
      <div className="preview-topline">
        <span>{translation ? "Bahasa Indonesia → English" : "Pengeluaran / penggunaan"}</span>
        <span aria-hidden="true">{translation ? "Aa" : "↗"}</span>
      </div>
      <p className="preview-title">{translation ? <>Dari satu bahasa,<br />ke bahasa lainnya.</> : <>Pola penggunaan.<br />Pilihan paket.</>}</p>
      <div className="model-flow" aria-label={translation ? "Teks ke LSTMCell ke terjemahan" : "Data pelanggan ke Random Forest ke paket"}>
        <span>{translation ? "Teks" : "Data"}</span><span aria-hidden="true">→</span>
        <span className="model-name">{translation ? "LSTMCell" : "Random Forest"}</span><span aria-hidden="true">→</span>
        <span>{translation ? "Terjemahan" : "Paket"}</span>
      </div>
      <figcaption>Ilustrasi alur model</figcaption>
    </figure>
  );
}
