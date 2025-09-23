import Image from "next/image";
import Link from "next/link";
import { tv, type VariantProps } from "tailwind-variants";

export const cardVariants = tv({
  base: `p-8 flex flex-col items-end text-white gap-4`,
  variants: {
    variant: {
      default: "bg-red",
      primary: "bg-orange",
      secondary: "bg-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface CardNewsProps
  extends VariantProps<typeof cardVariants>,
    React.ComponentProps<"div"> {
  imageUrl: string;
  description: string;
  link: string;
}

export function CardNews({
  variant,
  description,
  imageUrl,
  link,
  ...props
}: CardNewsProps) {
  return (
    <div className="flex flex-col w-full text-background" {...props}>
      <div className=" bg-[#666666] h-[280px]">{/* Conteúdo + Image */}</div>
      <div className={cardVariants({ variant })}>
        <p className="text-xs text-justify font-extralight leading-4">
          {description}
        </p>

        <Link
          href={link}
          className="flex flex-row items-center gap-1 font-light text-xs transition-all hover:opacity-85"
        >
          saiba mais
          <Image
            width={7}
            height={8}
            src="/arrow-bottom-right.png"
            alt="Seta"
          />
        </Link>
      </div>
    </div>
  );
}
