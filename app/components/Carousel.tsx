"use client"

import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type CarouselProps = {
  images: { src: string; alt: string; width: number; height: number }[];
  infiniteLoop?: boolean;
  emulateTouch?: boolean;
  showThumbs?: boolean;
  showStatus?: boolean;
  autoPlay?: boolean;
  carouselWidth?: number; // Lo dejamos opcional, por si lo quieres usar más tarde
};

const CarouselComponent: React.FC<CarouselProps> = ({
  images,
  infiniteLoop = true,
  emulateTouch = true,
  showThumbs = false,
  showStatus = false,
  autoPlay = true,
  carouselWidth, // si no lo usas, puedes eliminarlo
}) => {
  return (
    <div className="bg-gray-600 w-full"> 
      {/* w-full para ocupar todo el ancho */}
      <Carousel
        infiniteLoop={infiniteLoop}
        emulateTouch={emulateTouch}
        showThumbs={showThumbs}
        showStatus={showStatus}
        autoPlay={autoPlay}
        // Eliminamos width={carouselWidth} para que sea realmente 100% de ancho
        className="w-full" // forzamos que el carrusel use todo el ancho disponible
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex justify-center items-center">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
