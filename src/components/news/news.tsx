import Image from "next/image";
import CarouselNews, { CarsouselNewsProps } from "./carousel-news";

const news: CarsouselNewsProps[] = [
  {
    imageUrl: "",
    description:
      "Territórios de Desenvolvimento Inovadores é o tema da 8ª edição da Feira dos Municípios. Durante três dias, no Centro de Convenções de Teresina, você vai explorar as riquezas do território piauiense em uma imersão única: artesanato tradicional, turismo, gastronomia típica e atrações culturais que revelam a força e a diversidade dos nossos municípios.",
    link: "/",
    variant: "default",
  },
  {
    imageUrl: "",
    description:
      "Territórios de Desenvolvimento Inovadores é o tema da 8ª edição da Feira dos Municípios. Durante três dias, no Centro de Convenções de Teresina, você vai explorar as riquezas do território piauiense em uma imersão única: artesanato tradicional, turismo, gastronomia típica e atrações culturais que revelam a força e a diversidade dos nossos municípios.",
    link: "/",
    variant: "primary",
  },
  {
    imageUrl: "",
    description:
      "Territórios de Desenvolvimento Inovadores é o tema da 8ª edição da Feira dos Municípios. Durante três dias, no Centro de Convenções de Teresina, você vai explorar as riquezas do território piauiense em uma imersão única: artesanato tradicional, turismo, gastronomia típica e atrações culturais que revelam a força e a diversidade dos nossos municípios.",
    link: "/",
    variant: "secondary",
  },
  {
    imageUrl: "",
    description:
      "Territórios de Desenvolvimento Inovadores é o tema da 8ª edição da Feira dos Municípios. Durante três dias, no Centro de Convenções de Teresina, você vai explorar as riquezas do território piauiense em uma imersão única: artesanato tradicional, turismo, gastronomia típica e atrações culturais que revelam a força e a diversidade dos nossos municípios.",
    link: "/",
    variant: "default",
  },
  {
    imageUrl: "",
    description:
      "Territórios de Desenvolvimento Inovadores é o tema da 8ª edição da Feira dos Municípios. Durante três dias, no Centro de Convenções de Teresina, você vai explorar as riquezas do território piauiense em uma imersão única: artesanato tradicional, turismo, gastronomia típica e atrações culturais que revelam a força e a diversidade dos nossos municípios.",
    link: "/",
    variant: "primary",
  },
  {
    imageUrl: "",
    description:
      "Territórios de Desenvolvimento Inovadores é o tema da 8ª edição da Feira dos Municípios. Durante três dias, no Centro de Convenções de Teresina, você vai explorar as riquezas do território piauiense em uma imersão única: artesanato tradicional, turismo, gastronomia típica e atrações culturais que revelam a força e a diversidade dos nossos municípios.",
    link: "/",
    variant: "secondary",
  },
];

export function News() {
  return (
    <section id="news" className="relative py-16 md:py-24 px-8 space-y-14 ">
      <Image
        src="/cacto.png"
        width={580}
        height={440}
        alt="Button"
        className="absolute bg-contain -bottom-18 left-0 w-[180px] lg:w-auto"
      />

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center ">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-4 w-full">
          <h2 className="font-bold text-xl md:text-3xl text-center md:text-left">
            Fique por dentro de tudo o que <br /> acontece na Feira dos
            Municípios 2025.
          </h2>

          <button
            className="bg-[url('/vector-3.png')] bg-cover bg-no-repeat px-4 h-10  w-[150px] cursor-pointer font-bold flex flex-row items-center justify-center gap-2 transition-all hover:opacity-85"
            aria-label="Vet todas"
          >
            Vet todas
            <Image
              width={12}
              height={12}
              src={"/seta-blue.png"}
              alt="Seta Blue"
            />
          </button>
        </div>
        {/*  */}
      </div>

      <CarouselNews news={news} />
    </section>
  );
}
