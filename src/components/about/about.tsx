import Image from "next/image";
import { Button } from "../ui/buttons";

export function About() {
  return (
    <section className="relative bg-orange text-background">
      <Image
        src="/background-about.png"
        alt="Background About"
        width={600}
        height={500}
        className="absolute h-full right-48 brightness-20 opacity-5"
      />
      <div className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-0 md:gap-24">
        <div className="py-14 px-8">
          <h2 className="font-bold text-3xl text-center md:text-start">
            Sobre a Feira <br /> dos Municípios
          </h2>
          <p className="w-full text-justify text-sm md:text-base md:max-w-sm mt-12 tracking-wider font-extralight">
            <strong>
              O maior encontro de integração, cultura e inovação municipalista
              do Piauí.
            </strong>{" "}
            De 29 a 31 de outubro, no Centro de Convenções de Teresina, a feira
            reúne os 224 municípios piauienses em um espaço que valoriza
            identidades locais, promove cooperação regional e impulsiona o
            desenvolvimento sustentável do estado.
          </p>
        </div>

        <div className="relative flex flex-col items-end pb-8">
          <Image
            src="/caju.png"
            alt="Foto Caju"
            width={358}
            height={352}
            className="hidden md:block w-[260px] bg-cover"
          />
          <Image
            src="/caju-right.png"
            alt="Foto Caju"
            width={358}
            height={352}
            className="md:hidden w-[210px] bg-cover"
          />
          <Image
            src="/chapeu.png"
            alt="Foto Chapeu"
            width={358}
            height={352}
            className="w-[210px] absolute -left-4 md:-left-20 top-28 bg-cover"
          />

          <div className="px-8 md:px-0 mt-12">
            <Button imageUrl="/vector-white.png">
              Saiba mais sobre o evento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
