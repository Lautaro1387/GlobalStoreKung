import React, { useState } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


type CarouselProps = {
    images: { src: string, alt: string, width: number, height: number}[];
    infiniteLoop?: boolean,
    emulateTouch?: boolean,
    showThumbs?: boolean,
    showStatus?: boolean,
    autoPlay?: boolean,
    carouselWidth: number
};

const CarouselComponent: React.FC<CarouselProps> = ({
    images,
    infiniteLoop = true,
    emulateTouch = true,
    showThumbs = false,
    showStatus = false,
    autoPlay = true,
    carouselWidth = 1600,
}) => {


    return (
        <div className='bg-gray-600 flex items-center justify-center'>
            <Carousel          
                infiniteLoop={infiniteLoop}
                emulateTouch={emulateTouch}
                showThumbs={showThumbs}
                showStatus={showStatus}
                autoPlay={autoPlay}
                width={carouselWidth}
                className="w-full items-center justify-center flex"
                >
                {images.map((image, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <Image src={image.src} alt={image.alt} className="mx-auto" width={image.width} height={image.height} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CarouselComponent;
