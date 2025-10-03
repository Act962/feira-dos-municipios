import Image from "next/image";
import CarouselNews, { CarsouselNewsProps } from "./carousel-news";

const news: CarsouselNewsProps[] = [
  {
    imageUrl: "/news/new-1.JPG",
    alt: "2023.09.21 - EXPOSITOR CARIDADE - FEIRA DOS MUNICIPIOS",
    title: "Público e Oportunidades",
    description:
      "Mais de 20 mil visitantes são esperados entre gestores, investidores, empresários, estudantes e sociedade civil,criando um ambiente de conexões e novas oportunidades.",
    link: "/",
    variant: "default",
  },
  {
    imageUrl: "/news/new-2.JPG",
    alt: "2023.09.22 - EXPOSITORES - FEIRA DOS MUNICIPIOS",
    title: "Experiências Culturais",
    description:
      "Artesanato, gastronomia típica, turismo e apresentações artísticas fazem parte da programação que celebra a diversidade cultural do Piauí.",
    link: "/",
    variant: "primary",
  },
  {
    imageUrl: "/news/new-3.JPG",
    alt: "2023.09.21 - ABERTURA - FEIRA DOS MUNICIPIOS",
    title: "Inovação e Gestão Pública",
    description:
      "A feira é palco para cases de sucesso e boas práticas de gestão, fortalecendo a cooperação regional e incentivando soluções criativas para os desafios municipais.",
    link: "/",
    variant: "secondary",
  },
  {
    imageUrl: "/news/new-4.jpg",
    alt: "Feira do Muncipio Letras Grandesf",
    title: "Tema 2025",
    description:
      "A 8ª edição da Feira dos Municípios traz como tema “Territórios de Desenvolvimento Inovadores”, destacando o potencial de cada região do Piauí em uma experiência única de integração e inovação.",
    link: "/",
    variant: "default",
  },
  {
    imageUrl: "/news/new-5.JPG",
    alt: "2023.09.21 - EXPOSITOR PIMENTEIRAS - FEIRA DOS MUNICIPIOS",
    title: "224 Municípios",
    description:
      "Todos os municípios piauienses estarão representados, apresentando suas riquezas culturais, econômicas e turísticas em espaços temáticos que valorizam cada território de desenvolvimento.",
    link: "/",
    variant: "primary",
  },
  {
    imageUrl: "/news/new-6.jpg",
    alt: "Responsávies pelo Evento",
    title: "Protagonismo Municipal",
    description:
      "A Feira dos Municípios reafirma o papel das cidades como protagonistas do desenvolvimento regional, promovendo integração, cooperação e a construção de um Piauí mais sustentável e inovador.",
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

          {/* <button
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
          </button> */}
        </div>
        {/*  */}
      </div>

      <CarouselNews news={news} />
    </section>
  );
}
