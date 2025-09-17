import { cn } from "@/lib/utils";
import Image from "next/image";

const images = [
  {
    src: "/image-1.png",
    alt: "Image Solidaria 1",
  },
  {
    src: "/image-2.png",
    alt: "Image Solidaria 2",
  },
  {
    src: "/image-3.png",
    alt: "Image Solidaria 3",
  },
  {
    src: "/image-4.png",
    alt: "Image Solidaria 4",
  },
  {
    src: "/image-5.png",
    alt: "Image Solidaria 5",
  },
];

export function Gallery() {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Primeira linha - 2 imagens em telas pequenas */}
      <div className="grid grid-cols-2 lg:contents">
        {images.slice(0, 2).map((image, index) => (
          <div
            className="relative h-40 lg:h-60 w-full lg:flex-1"
            key={`image-${image.alt}-${index}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Segunda linha - 3 imagens em telas pequenas */}
      <div className="grid grid-cols-3 lg:contents">
        {images.slice(2).map((image, index) => (
          <div
            className="relative h-40 lg:h-60 w-full lg:flex-1"
            key={`image-${image.alt}-${index + 2}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
