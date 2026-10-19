import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const instrumentSans = localFont({
  src: "./fonts/InstrumentSans.ttf", variable: "--font-instrument", weight: "400 700", display: "swap",
});
const newsreader = localFont({
  src: "./fonts/Newsreader-Italic.ttf", variable: "--font-newsreader", weight: "400", style: "italic", display: "swap",
});
export const metadata: Metadata = {
  title: "Muhammad Daffa Yunus — AI, Data & Web",
  description: "Portofolio Muhammad Daffa Yunus. Jelajahi MarketLens, TranslateByDeff, dan Telco Churn, serta pengalaman dalam AI, data, dan pengembangan aplikasi web.",
  openGraph: { title: "Muhammad Daffa Yunus — AI, Data & Web", description: "Proyek, kode, data, dan eksperimen.", type: "website", locale: "id_ID" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id" className={`${instrumentSans.variable} ${newsreader.variable}`}><body>{children}</body></html>;
}
