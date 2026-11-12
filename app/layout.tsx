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
  description: "Muhammad Daffa Yunus's portfolio. Explore MarketLens, TranslateByDeff, and Telco Churn, alongside experience in AI, data, and web application development.",
  openGraph: { title: "Muhammad Daffa Yunus — AI, Data & Web", description: "Projects, code, data, and experiments.", type: "website", locale: "en_US" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${instrumentSans.variable} ${newsreader.variable}`}><body>{children}</body></html>;
}
