import Image from "next/image";
import { Countdown } from "./countdown";
import { Button } from "../ui/buttons";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-background bg-bottom-right px-4 py-12 flex items-center justify-center mt-12"
    >
      <video
        src="/videos/video-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />

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

          <p className="w-full text-start mt-16 tracking-wider leading-7">
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
            <h3 className="font-black text-3xl">29, 30 e 31 de outubro</h3>
            <span className="font-normal text-orange">
              Centro de Convenções de Teresina
            </span>
          </div>

          <div className="mt-3 space-y-2">
            <strong className="text-sm font-black block">
              Estamos chegando em...
            </strong>
            <Countdown />
          </div>

          <p className="md:hidden w-full text-justify mt-16 tracking-wider leading-7">
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

          <Link href="/inscricao">
            <Button imageUrl="/vector.png" className="mt-12">
              Faça sua inscrição
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
