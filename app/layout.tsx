import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daftar Sekarang - 100% GRATIS",
  description:
    "Daftar sekarang dan dapatkan bimbingan bisnis 100% gratis dari mentor sukses dan berpengalaman.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
