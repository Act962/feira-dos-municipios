import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const biennale = localFont({
  variable: "--font-biennale",
  src: [
    {
      path: "../font/Biennale-thin.otf",
      weight: "100",
    },
    {
      path: "../font/Biennale-light.otf",
      weight: "300",
    },
    {
      path: "../font/Biennale-regular.otf",
      weight: "400",
    },
    {
      path: "../font/Biennale-regular.otf",
      weight: "500",
    },
    {
      path: "../font/Biennale-bold.otf",
      weight: "700",
    },
    {
      path: "../font/Biennale-black.otf",
      weight: "900",
    },
  ],
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
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${biennale.variable} ${biennale.className} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
