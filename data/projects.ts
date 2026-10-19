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
      "Menelusuri temuan pasar, menyimpan aset, dan membandingkan konteks riset beserta evidence dan sumbernya. Demo menampilkan alur Profile, Discovery, My Assets, dan Comparison.",
    problem:
      "Membaca konteks riset beberapa aset dengan bukti dan sumber yang dapat ditelusuri.",
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
      "Penerjemahan bahasa Indonesia ke bahasa Inggris menggunakan LSTMCell untuk mempelajari pola bahasa berurutan dan menghasilkan terjemahan.",
    problem:
      "Menerjemahkan teks bahasa Indonesia ke bahasa Inggris dengan pendekatan neural machine translation.",
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
      "Rekomendasi paket telco berdasarkan karakteristik pengeluaran dan penggunaan pelanggan, dengan model RandomForestClassifier.",
    problem:
      "Menentukan paket telco yang sesuai dengan karakteristik pengeluaran dan penggunaan pelanggan.",
    tech: ["Python", "Scikit-learn", "Random Forest", "Pandas", "Streamlit"],
    liveUrl: "https://telco-churn-costumer-dbkebtgwge3x4tsqdxemxn.streamlit.app/",
    preview: "telco",
  },
];
