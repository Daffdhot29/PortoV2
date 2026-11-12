type ProjectPreviewProps = { variant: "translation" | "telco" };

export default function ProjectPreview({ variant }: ProjectPreviewProps) {
  const translation = variant === "translation";
  return (
    <figure className={`project-preview project-preview-${variant}`}>
      <div className="preview-topline">
        <span>{translation ? "Indonesian → English" : "Spending / usage"}</span>
        <span aria-hidden="true">{translation ? "Aa" : "↗"}</span>
      </div>
      <p className="preview-title">{translation ? <>From one language,<br />to another.</> : <>Usage patterns.<br />Plan choices.</>}</p>
      <div className="model-flow" aria-label={translation ? "Text to LSTMCell to translation" : "Customer data to Random Forest to plan"}>
        <span>{translation ? "Text" : "Data"}</span><span aria-hidden="true">→</span>
        <span className="model-name">{translation ? "LSTMCell" : "Random Forest"}</span><span aria-hidden="true">→</span>
        <span>{translation ? "Translation" : "Plan"}</span>
      </div>
      <figcaption>Model workflow illustration</figcaption>
    </figure>
  );
}
