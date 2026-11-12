export type Project = {
  id: string;
  title: string;
  originalTitle?: string;
  category: string;
  description: string;
  problem: string;
  contribution?: string;
  status?: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  preview: "marketlens" | "translation" | "telco";
  video?: { src: string; poster: string; duration: string };
};

export const projects: Project[] = [
  {
    id: "marketlens",
    title: "MarketLens",
    category: "Market intelligence",
    description:
      "Explore market insights, save assets, and compare research context with supporting evidence and sources. The demo covers the Profile, Discovery, My Assets, and Comparison workflows.",
    problem:
      "Review research context across multiple assets with traceable evidence and sources.",
    tech: [],
    preview: "marketlens",
    video: {
      src: "/videos/marketlens.mp4",
      poster: "/images/projects/marketlens-poster.jpg",
      duration: "02:19",
    },
  },
  {
    id: "translatebydeff",
    title: "TranslateByDeff",
    originalTitle: "TranslateMachineByDeff",
    category: "Deep learning / NLP",
    description:
      "Indonesian-to-English translation using LSTMCell to learn sequential language patterns and generate translations.",
    problem:
      "Translate Indonesian text into English using neural machine translation.",
    tech: ["Python", "PyTorch", "LSTMCell", "NLP", "Streamlit"],
    liveUrl: "https://translatebydeff-ds8dbhgu3mfq8mnlpawqqg.streamlit.app/",
    preview: "translation",
  },
  {
    id: "telco-churn",
    title: "Telco Churn",
    originalTitle: "TelcoSense",
    category: "Machine learning",
    description:
      "Telecom plan recommendations based on customer spending and usage patterns, powered by a RandomForestClassifier model.",
    problem:
      "Identify telecom plans that match customer spending and usage patterns.",
    tech: ["Python", "Scikit-learn", "Random Forest", "Pandas", "Streamlit"],
    liveUrl: "https://telco-churn-costumer-dbkebtgwge3x4tsqdxemxn.streamlit.app/",
    preview: "telco",
  },
];
