import Image from "next/image";
import { Countdown } from "./countdown";

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

      <div className="relative w-full max-w-4xl flex flex-col-reverse md:flex-row gap-8">
        <div>
          <Image src="/logo.png" alt="Logo" width={396} height={262} />

          <p className="max-w-xl mt-16">
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
        <div>
          <div>
            <h3 className="font-bold text-2xl">29, 30 e 31 de outubro</h3>
            <span className="font-light text-sm text-orange">
              Centro de Convenções de Teresina
            </span>
          </div>

          <div className="mt-3 space-y-2">
            <strong className="text-sm block">Estamos chegando em...</strong>
            <Countdown />
          </div>
        </div>
      </div>
    </section>
  );
}
