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
    <div className="flex items-center">
      {images.map((image, index) => (
        <div
          className="relative h-40 md:h-60 w-full"
          key={`image-${image.alt}-${index}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="w-full bg-cover"
          />
        </div>
      ))}
    </div>
  );
}
