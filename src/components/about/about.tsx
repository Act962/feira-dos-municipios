import Image from "next/image";

export function About() {
  return (
    <section className="relative bg-orange text-white px-8">
      <Image
        src="/background-about.png"
        alt="Background About"
        width={600}
        height={500}
        className="absolute h-full right-48  brightness-20 opacity-5"
      />
      <div className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-4 justify-between">
        <div className="py-14">
          <h2 className="font-bold text-3xl text-center md:text-start">
            Sobre a Feira dos Municípios
          </h2>
          <p className="w-full text-justify text-sm md:text-base md:max-w-sm mt-12">
            O maior encontro de integração, cultura e inovação municipalista do
            Piauí. De 29 a 31 de outubro, no Centro de Convenções de Teresina, a
            feira reúne os 224 municípios piauienses em um espaço que valoriza
            identidades locais, promove cooperação regional e impulsiona o
            desenvolvimento sustentável do estado.
          </p>
        </div>

        <div className="relative flex flex-col items-end pb-8">
          <Image
            src="/caju.png"
            alt="Foto Caju"
            width={500}
            height={500}
            className=""
          />

          <button className="relative w-full h-14 md:max-w-[387px] md:h-[70px] cursor-pointer hover:opacity-85">
            <Image
              src="/vector-white.png"
              fill
              alt="Button"
              className="bg-cover"
            />
            <div className="w-full flex items-center justify-center gap-4">
              <span className="font-bold">Saiba mais sobre o evento</span>
              <Image src="/seta.png" width={12} height={12} alt="Seta" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
