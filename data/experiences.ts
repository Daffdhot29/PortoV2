export type Experience = {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    period: "Apr 2026 — Present",
    role: "Machine Learning Engineer",
    company: "PT POWERNET INDOSOLUSI",
    location: "South Jakarta, DKI Jakarta",
    type: "Project Based",
    points: [
      "Developed an AI-powered reporting platform using Large Language Models.",
      "Integrated Retrieval-Augmented Generation pipelines for context-aware document generation.",
      "Developed Machine Learning and Deep Learning models for predictive analytics and intelligent automation.",
    ],
  },
  {
    period: "Jun 2026 — Present",
    role: "Computer Vision Engineer",
    company: "TRIDANA LABS",
    location: "South Jakarta, DKI Jakarta",
    type: "Project Based",
    points: [
      "Developed end-to-end computer vision pipelines covering preprocessing, inference and output processing.",
      "Integrated computer vision models into existing systems and APIs.",
      "Prepared and labeled image datasets while maintaining annotation consistency and data quality.",
    ],
  },
  {
    period: "May 2026 — Aug 2026",
    role: "Software Developer",
    company: "DASSA CORP",
    location: "Central Jakarta, DKI Jakarta",
    type: "Internship",
    points: [
      "Developed responsive web application interfaces.",
      "Integrated RESTful APIs and built backend services and business logic.",
      "Managed database operations, validation, security best practices and technical documentation.",
    ],
  },
];