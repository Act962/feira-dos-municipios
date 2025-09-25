import Image from "next/image";
import { Button } from "../ui/buttons";

export default function Expositores() {
  return (
    <section className="relative px-8 py-24  bg-red text-white">
      <Image
        src="/start-1.png"
        width={72}
        height={72}
        alt="Button"
        className="absolute bg-cover hover:opacity-85 top-2 md:top-4 right-0 md:right-48"
      />
      <Image
        src="/estrela.png"
        width={210}
        height={210}
        alt="Button"
        className="absolute bg-cover hover:opacity-85 bottom-12 size-32 md:size-auto md:bottom-32 left-0"
      />
      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-justify leading-6 font-light">
          <strong>A Feira dos Municípios 2025</strong> consolida-se como o maior
          e mais relevante evento de integração, cultura e inovação
          municipalista do Piauí, refletindo o compromisso do estado com o
          desenvolvimento regional sustentável e a valorização das identidades
          locais.
          <br />
          <br /> Com realização da Kalor Produções e co-realização da Associação
          Piauiense de Municípios (APPM), a feira acontecerá nos dias 29, 30 e
          31 de outubro de 2025, no Centro de Convenções de Teresina.
          <br />
          <br /> Reunindo representantes dos 224 municípios piauienses, a edição
          de 2025 espera atrair mais de 20 mil visitantes entre gestores
          públicos, empresários, investidores, instituições, artistas,
          produtores culturais, estudantes e a sociedade em geral.
          <br />
          <br /> Com um formato inovador, os municípios serão apresentados por
          meio dos 12 Territórios de Desenvolvimento do Piauí, promovendo
          cooperação regional e potencializando soluções conjuntas para desafios
          comuns.
          <br />
          <br /> Cada território terá a oportunidade de destacar suas principais
          potencialidades econômicas, culturais e turísticas, além de
          compartilhar cases de sucesso e boas práticas de gestão pública, com
          foco especial em inovação.
          <br />
          <br /> A Feira reafirma o papel dos municípios como protagonistas do
          desenvolvimento e fortalece a construção de um Piauí mais integrado,
          criativo e sustentável
        </p>
        <Button imageUrl="/vector.png" className="mt-12">
          Conheça nossos expositores
        </Button>
      </div>
    </section>
  );
}
