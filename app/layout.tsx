import type { Metadata } from "next";
import { Space_Mono, JetBrains_Mono, Quicksand } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vitória Baltazar — VitóriaOS",
  description:
    "Portfolio de Vitória Baltazar (VicFelas), desenvolvedora FullStack. Projetos, stack e contato num desktop pastel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${spaceMono.variable} ${jetbrainsMono.variable} ${quicksand.variable} font-body antialiased`}
      >
        <div className="crt-overlay" />
        <div className="crt-vignette" />
        {children}
      </body>
    </html>
  );
}
