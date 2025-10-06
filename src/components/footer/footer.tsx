import Image from "next/image";

export function Footer() {
  return (
    <section className="bg-orange text-white">
      <div className="relative h-4 w-full bg-white flex flex-row">
        <div className="size-full bg-red" />
        <div className="size-full bg-orange" />
        <div className="size-full bg-foreground" />
      </div>

      <div className="py-16 px-4 flex flex-col items-center justify-center">
        {/* Realização e Co-realização */}
        <div className="flex gap-12">
          <div>
            <span className="text-sm">Realização:</span>
            <Image
              src="/sponsors/kalor.svg"
              width={100}
              height={100}
              alt="Logo Kalor Produções"
            />
          </div>
          <div>
            <span className="text-sm">Co-realização:</span>
            <Image
              src="/sponsors/appm.png"
              width={333}
              height={129}
              alt="Logo Kalor Produções"
              className="w-[120px]"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-6 gap-3">
          <span className="text-sm">Patrocínio:</span>

          <div className="flex flex-row items-center justify-center gap-8 flex-wrap">
            <Image
              src="/sponsors/sebrae.png"
              alt="Logo do Sebrae"
              width={343}
              height={186}
              className="w-[100px]"
            />

            <Image
              src="/sponsors/sesc.png"
              alt="Logo do Sebrae"
              width={291}
              height={158}
              className="w-[100px]"
            />

            <Image
              src="/sponsors/senac.png"
              alt="Logo do Senac"
              width={399}
              height={217}
              className="w-[100px]"
            />

            <Image
              src="/sponsors/ittnet.png"
              alt="Logo do Ittnet"
              width={538}
              height={102}
              className="w-[100px] mt-4"
            />

            <Image
              src="/sponsors/paxuniao.png"
              alt="Logo do Pax União"
              width={531}
              height={91}
              className="w-[100px] mt-4"
            />

            <Image
              src="/sponsors/piaui.png"
              alt="Logo do Pax União"
              width={203}
              height={113}
              className="w-[100px]"
            />

            <Image
              src="/sponsors/governo-piaui.png"
              alt="Logo do Pax União"
              width={464}
              height={135}
              className="w-[120px]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center mt-8">
          <span className="text-sm">Promoção:</span>
          <Image
            src="/sponsors/meionorte.png"
            width={582}
            height={98}
            alt="Logo Kalor Produções"
            className="w-[120px]"
          />
        </div>
      </div>
    </section>
  );
}
