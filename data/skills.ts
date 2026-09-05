export type SkillGroup = {
  title: string;
  key: "machine-learning" | "generative-ai" | "computer-vision" | "engineering";
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    key: "machine-learning",
    title: "Machine Learning",
    skills: [
      "Supervised Learning",
      "Classification",
      "Random Forest",
      "Model Training",
      "Model Evaluation",
      "Feature Engineering",
      "Data Preprocessing",
      "Scikit-learn",
      "TensorFlow",
    ],
  },
  {
    key: "generative-ai",
    title: "Generative AI",
    skills: [
      "AI Agents",
      "Retrieval-Augmented Generation",
      "Memory-Augmented Generation",
      "Prompt Engineering",
      "Semantic Retrieval",
      "LLM Integration",
      "OpenAI API",
    ],
  },
  {
    key: "computer-vision",
    title: "Computer Vision",
    skills: [
      "YOLO",
      "Object Detection",
      "Optical Character Recognition",
      "Image Preprocessing",
      "Model Inference",
      "PaddleOCR",
    ],
  },
  {
    key: "engineering",
    title: "AI Engineering",
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "Docker",
      "Git",
      "GitHub",
      "MLflow",
    ],
  },
];