import Image from "next/image";

export function Localization() {
  return (
    <section className="bg-foreground text-white py-24 md:py-32 px-8">
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
        <div>
          <h2 className="font-bold text-3xl text-center md:text-start">
            Como chegar
          </h2>
          <p className="w-full text-justify text-sm md:text-base md:max-w-sm mt-12 font-extralight">
            A <strong className="font-bold">Feira dos Municípios 2025</strong>{" "}
            acontece no Centro de Convenções de Teresina, um espaço moderno e
            acessível, preparado para receber grandes públicos e experiências
            inesquecíveis.
          </p>

          <div className="flex flex-row items-center gap-4 mt-8 justify-center md:justify-start">
            <Image
              src="/map.png"
              alt="Ícone Mapa"
              width={30}
              height={30}
              className="bg-cover"
            />
            <span>
              Av. Marechal Castelo Branco, 1275 <br /> – Bairro Cabral, Teresina
              – PI
            </span>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.1426064640796!2d-42.80113938954957!3d-5.080623694874926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e39ef0f034145%3A0x3d73a588ca4aa826!2sCentro%20de%20Conven%C3%A7%C3%B5es%20de%20Teresina!5e0!3m2!1spt-BR!2sbr!4v1758056315758!5m2!1spt-BR!2sbr"
          className="w-full md:w-[591px]"
          height="340"
          style={{ borderWidth: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
