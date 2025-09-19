import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface ButtonProps extends React.ComponentProps<"button"> {
  imageUrl: string;
  iconUrl?: string;
}

export function Button({
  className,
  imageUrl,
  iconUrl = "/seta.png",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "relative w-full h-14 px-8 md:max-w-[387px] md:h-[70px] group cursor-pointer transition-opacity hover:opacity-85 text-white",
        className
      )}
      {...props}
    >
      <Image src={imageUrl} fill alt="Button" className="bg-cover" />
      <div className="relative w-full flex items-center justify-center gap-4">
        <span className=" font-bold">{children}</span>
        <Image src={iconUrl} width={12} height={12} alt="Seta" />
      </div>
    </button>
  );
}
