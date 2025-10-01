import React from "react";
import { Button } from "../ui/buttons";
import Image from "next/image";
import Link from "next/link";

export function CallToAction() {
  const LINK_REDIRECT_WHATSAPP =
    "https://api.whatsapp.com/send/?phone=5586994435307&text=Ol%C3%A1%2C+gostaria+de+ser+expositor+na+Feira+dos+Munic%C3%ADpios+2025&type=phone_number&app_absent=0";

  return (
    <section className="relative py-16 md:py-24 px-8 text-white bg-foreground">
      <Image
        src="/vector-2.png"
        width={285}
        height={495}
        alt="Button"
        className="absolute bg-cover right-0 -top-15 w-[70px] md:w-[120px] md:-top-20 lg:w-[220px] lg:-top-32"
      />
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center space-y-12">
        <h2 className="font-bold text-2xl md:text-4xl text-center">
          Seja um expositor na Feira <br /> dos Municípios 2025
        </h2>
        <p className="text-background text-sm md:text-base text-center md:text-justify max-w-xl -tracking-tighter">
          Mostre o potencial da sua marca, conecte-se com gestores, investidores
          e visitantes de todo o estado e faça parte do maior evento de
          integração, cultura e inovação municipalista do Piauí.
        </p>

        <Link href={LINK_REDIRECT_WHATSAPP} target="_blank">
          <Button imageUrl="/vector.png">Quero ser um expositor</Button>
        </Link>
      </div>
    </section>
  );
}
