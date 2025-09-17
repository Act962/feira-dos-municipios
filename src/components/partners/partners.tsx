import Image from "next/image";
import React from "react";
import { Button } from "../ui/buttons";

export function Partners() {
  return (
    <section className="">
      <div className="w-full max-w-4xl mx-auto flex item">
        <div>
          <h2>Conheça as prefeituras e empresas participantes da</h2>
          <Button imageUrl="/vector.png">Conheça nossos expositores</Button>
        </div>
      </div>
    </section>
  );
}
