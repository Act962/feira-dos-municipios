import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Feira dos Municípios",
  description:
    "O maior encontro de integração, cultura e inovação municipalista do Piauí. De 29 a 31 de outubro, no Centro de Convenções de Teresina, a feira reúne os 224 municípios piauienses em um espaço que valoriza identidades locais, promove cooperação regional e impulsiona o desenvolvimento sustentável do estado.",
  icons: {
    icon: "/feira-dos-municipios.png",
  },
  openGraph: {
    title: "Feira dos Municípios | Territórios de Desenvolvimento Inovadores",
    description:
      "O maior encontro de integração, cultura e inovação municipalista do Piauí. De 29 a 31 de outubro, no Centro de Convenções de Teresina, a feira reúne os 224 municípios piauienses em um espaço que valoriza identidades locais, promove cooperação regional e impulsiona o desenvolvimento sustentável do estado.",
    url: "https://feiradosmunicipiospi.com.br/feira-dos-municipios.png",
    siteName:
      "Feira dos Municípios | Territórios de Desenvolvimento Inovadores",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://feiradosmunicipiospi.com.br/feira-dos-municipios.png",
        width: 1080,
        height: 1080,
        alt: "Feira dos Municípios",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
