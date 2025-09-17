import React from "react";
import Image from "next/image";

const partners = [
  {
    imageUrl: "/partners/pac-saude.png",
    title: "Pac Saúde\nDistribuidora",
  },
  {
    imageUrl: "/partners/modelo.png",
    title: "Modelo\nMóveis",
  },
  {
    imageUrl: "/partners/executiva.png",
    title: "Executiva\nConsultoria &\nProjetos",
  },
  { imageUrl: "/partners/bamex.png", title: "BAMEX" },
  { imageUrl: "/partners/sistemas.png", title: "DL SISTEMAS" },
  { imageUrl: "/partners/caju-tec.png", title: "CAJU TEC" },
  { imageUrl: "/partners/portal-r10.png", title: "R10 Comunicação" },
  { imageUrl: "/partners/mercearia-gourmet.png", title: "Mercearia\nGourmet" },
  { imageUrl: "/partners/lala-doces.png", title: "Lalá Doces" },
  { imageUrl: "/partners/mais-saude.png", title: "Mias Saúde\nDistribuidora" },
  {
    imageUrl: "/partners/jose-de-freitas.png",
    title: "Prefeitura de José\nde Freitas",
  },
  {
    imageUrl: "/partners/dom-inocencio.png",
    title: "Prefeitura de Dom\nInocêncio",
  },
  { imageUrl: "/partners/luzilandia.png", title: "Prefeitura de\nLuzilância" },
  { imageUrl: "/partners/simoes.png", title: "Prefeitura de\nSimões" },
  {
    imageUrl: "/partners/luis-correia.png",
    title: "Prefeitura de Luis\nCorreia",
  },
  {
    imageUrl: "/partners/loga-do-piaui.png",
    title: "Prefeitura de Logoa\ndo Piauí",
  },
  { imageUrl: "/partners/urucui.png", title: "Prefeitura de Uruçuí" },
  { imageUrl: "/partners/aroazes.png", title: "Prefeitura de\nAroazes" },
  {
    imageUrl: "/partners/demerval-lobao.png",
    title: "Prefeitura de\nDemerval Lobão",
  },
  {
    imageUrl: "/partners/santa-cruz.png",
    title: "Prefeitura de Santa\nCruz dos Milagres",
  },
];

export function Partners() {
  return (
    <section className="py-16 md:py-32 px-8">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
        {/* Title */}
        <div>
          <h2 className="font-bold text-md sm:text-2xl md:text-4xl text-center">
            Conheça as prefeituras e <br />
            empresas participantes da
          </h2>
          <div className="relative flex items-center justify-center">
            <Image
              src="/backgroud-title.png"
              alt="Background Title"
              width={500}
              height={500}
              className="object-cover"
            />
            <h2 className="absolute font-bold text-md sm:text-2xl md:text-4xl text-center text-white">
              Feira dos Municípios 2025
            </h2>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3  md:grid-cols-5 gap-12">
          {partners.map((partner, index) => (
            <div
              className="flex flex-col items-center justify-center"
              key={`partner-${index}`}
            >
              <div className="relative w-[80px] h-[80px] sm:w-[110px] sm:h-[110px]">
                <Image
                  src={partner.imageUrl}
                  alt={partner.title}
                  fill
                  sizes="(max-width: 768px) 110px, 110px"
                  quality={95}
                  priority={index < 10} // Prioriza as primeiras 10 imagens
                  className="object-contain"
                />
              </div>
              <p className="whitespace-pre-line  text-sm/snug font-medium">
                {" "}
                {partner.title}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
