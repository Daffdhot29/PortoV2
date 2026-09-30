export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "TelcoSense",
    category: "Machine Learning",
    description:
      "A machine learning-based recommendation system built with RandomForestClassifier to recommend suitable telco packages based on customer spending and usage characteristics.",
    tech: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "Pandas",
      "Streamlit",
    ],
    liveUrl:
      "https://telco-churn-costumer-dbkebtgwge3x4tsqdxemxn.streamlit.app/",
  },
  {
    title: "TranslateMachineByDeff",
    category: "Deep Learning · NLP",
    description:
      "An Indonesian-to-English neural machine translation system developed using LSTMCell to learn sequential language patterns and generate English translations.",
    tech: [
      "Python",
      "PyTorch",
      "LSTMCell",
      "NLP",
      "Streamlit",
    ],
    liveUrl:
      "https://translatebydeff-ds8dbhgu3mfq8mnlpawqqg.streamlit.app/",
  },
];