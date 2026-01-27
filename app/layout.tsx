import './globals.css';
import React from 'react';

export const metadata = {
  title: "DaarkStar TEC",
  description: "Transformando código em poder digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
