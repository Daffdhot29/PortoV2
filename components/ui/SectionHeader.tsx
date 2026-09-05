import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div>
      <p className="section-eyebrow">{eyebrow}</p>

      <h2 className="section-title mt-4">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}