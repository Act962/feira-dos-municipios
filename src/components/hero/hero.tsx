import Image from "next/image";
import { Countdown } from "./countdown";
import { Button } from "../ui/buttons";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-background bg-bottom-right px-4 py-12 flex items-center justify-center mt-12">
      <div
        className="absolute inset-0 bg-cover bg-bottom-right bg-no-repeat opacity-100"
        style={{
          backgroundImage: "url('/background-hero.png')",
        }}
      />

      <div className="absolute bg-background inset-0 opacity-85" />

      <Image
        src="/caju-hero.png"
        width={230}
        height={230}
        alt="Button"
        className="hidden md:block absolute bg-contain bottom-10 left-0"
      />

      <Image
        src="/caju-hero-right.png"
        width={103}
        height={220}
        alt="Button"
        className="sm:hidden absolute bg-cover right-0 top-14 size-32"
      />

      <div className="relative w-full max-w-4xl flex flex-col-reverse md:flex-row gap-24">
        {/* Left */}
        <div className="hidden md:block">
          <Image src="/logo.png" alt="Logo" width={396} height={262} />

          <p className="w-full text-start mt-16">
            Territórios de Desenvolvimento Inovadores é o tema da{" "}
            <strong className="font-bold text-orange">
              8ª edição da Feira dos Municípios
            </strong>
            . Durante três dias, no Centro de Convenções de Teresina, você vai
            explorar as riquezas do território piauiense em uma imersão única:
            artesanato tradicional, turismo, gastronomia típica e atrações
            culturais que revelam a força e a diversidade dos nossos municípios.
          </p>
        </div>

        {/* Right */}
        <div className="mt-8 md:mt-0">
          <div>
            <h3 className="font-bold text-2xl">29, 30 e 31 de outubro</h3>
            <span className="font-light text-orange">
              Centro de Convenções de Teresina
            </span>
          </div>

          <div className="mt-3 space-y-2">
            <strong className="text-sm block">Estamos chegando em...</strong>
            <Countdown />
          </div>

          <p className="md:hidden w-full text-justify mt-16">
            Territórios de Desenvolvimento Inovadores é o tema da{" "}
            <strong className="font-bold text-orange">
              8ª edição da Feira dos Municípios
            </strong>
            . Durante três dias, no Centro de Convenções de Teresina, você vai
            explorar as riquezas do território piauiense em uma imersão única:
            artesanato tradicional, turismo, gastronomia típica e atrações
            culturais que revelam a força e a diversidade dos nossos municípios.
          </p>

          <div className="flex flex-row mt-16 justify-center md:justify-start">
            <Image
              src="/rastag.png"
              alt="#"
              width={90}
              height={90}
              className="object-contain"
            />
            <div>
              <p className="text-red font-black text-2xl">
                vem pra <br />{" "}
                <strong className="text-6xl text-foreground">feira</strong>{" "}
              </p>
            </div>
          </div>

          <Button imageUrl="/vector.png">Faça sua inscrição</Button>
        </div>
      </div>
    </section>
  );
}
