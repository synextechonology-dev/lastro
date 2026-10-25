import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { AvisoCookies } from "@/components/AvisoCookies";
import { ModoRevisao } from "@/components/ModoRevisao";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const metadata: Metadata = {
  title: {
    default: "Lastro Contabilidade",
    template: "%s · Lastro Contabilidade",
  },
  description: "Lastro Contabilidade — projeto conceito da Synex. Escritório fictício.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        {children}
        <AvisoCookies />
        <ModoRevisao />
      </body>
    </html>
  );
}
