import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anubis Tech | Engenharia de Software de Elite",
  description: "Dominando o Fluxo Digital. Soluções de software AAA para nichos complexos.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
