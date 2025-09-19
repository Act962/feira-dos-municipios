"use client";

import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { CardNews } from "./card";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface CarsouselNewsProps {
  imageUrl: string;
  description: string;
  link: string;
  variant: "default" | "primary" | "secondary";
}

type Props = {
  news: CarsouselNewsProps[];
};

export default function CarouselNews({ news }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Container do carrossel sem interferência dos botões */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex w-full gap-8 backface-hidden touch-pan-y">
            {news.map((item, index) => (
              <CardNews
                description={item.description}
                imageUrl={item.imageUrl}
                link={item.link}
                key={index}
                variant={item.variant}
                className="shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3"
              />
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={`dot-button-${index}`}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                "size-3 bg-[#AF9D7E] rounded-full cursor-pointer",
                index === selectedIndex && "bg-orange"
              )}
            />
          ))}
        </div>
      </div>

      {/* Botões posicionados em relação ao container maior */}
      <button
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        aria-label="Previous slide"
        className="hidden z-10 absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full lg:flex items-center justify-center bg-foreground size-14 transition-opacity hover:opacity-85"
      >
        <Image
          src="/arrow-left.png"
          width={31}
          height={26}
          alt="Arrow Left"
          className="size-6"
        />
      </button>

      <button
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        aria-label="Next slide"
        className="hidden z-10 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer rounded-full lg:flex items-center justify-center bg-foreground size-14 transition-opacity hover:opacity-85"
      >
        <Image
          src="/arrow-right.png"
          width={31}
          height={26}
          alt="Arrow Right"
        />
      </button>
    </div>
  );
}

// Dots Buttons

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

// Prev & Next Buttons
type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};
