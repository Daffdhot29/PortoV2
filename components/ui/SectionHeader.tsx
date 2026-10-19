import type { ReactNode } from "react";

type SectionHeaderProps = { eyebrow: string; title: ReactNode; description?: string };
export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{description && <p>{description}</p>}</div>;
}
