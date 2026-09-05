import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M Daffa Yunus |  Machine Learning Engineer",
  description:
    "Portfolio of Muhammad Daffa Yunus — Artificial Intelligence, Machine Learning, Computer Vision and AI Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}