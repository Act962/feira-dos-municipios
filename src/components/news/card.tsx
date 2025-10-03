import Image from "next/image";
import Link from "next/link";
import { tv, type VariantProps } from "tailwind-variants";

export const cardVariants = tv({
  base: `p-8 h-full flex flex-col items-start text-white`,
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
  alt: string;
  title: string;
  description: string;
  link: string;
}

export function CardNews({
  variant,
  title,
  description,
  imageUrl,
  alt,
  link,
  ...props
}: CardNewsProps) {
  return (
    <div className="flex flex-col w-full text-background" {...props}>
      <div className=" bg-[#666666] min-h-[280px] relative">
        <Image src={imageUrl} alt={alt} fill className="object-cover" />
      </div>
      <div className={cardVariants({ variant })}>
        <h3 className="font-bold"> {title} </h3>
        <p className="text-xs mt-2">{description}</p>

        <Link
          href={link}
          className="flex flex-row items-center gap-1 font-light text-xs transition-all hover:opacity-85 self-end"
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
