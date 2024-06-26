import React, { useState } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



export default function CarouselComponent() {
    return (
        <div className='bg-gray-600 flex items-center justify-center'>
            <Carousel          
                infiniteLoop={true}
                emulateTouch={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                width={1600}
                className="w-full items-center justify-center flex"
                >
                <div className="flex justify-center items-center">
                    <Image src="/img_coursel_1.png" alt="Product 1" className="mx-auto" width={11500} height={1000} />
                </div>
                <div className="flex justify-center items-center">
                    <Image src="/img_coursel_2.png" alt="Product 2" className="mx-auto" width={10000} height={1000} ></Image>
                </div>
                <div className="flex justify-center items-center">
                    <Image src="/img_coursel_2.png" alt="Product 3" className="mx-auto" width={10000} height={50} ></Image>
                </div>
                <div className="flex justify-center items-center">
                    <Image src="/img_coursel_2.png" alt="Product 4" className="mx-auto" width={10000} height={100} ></Image>
                </div>
                <div className="flex justify-center items-center">
                    <Image src="/img_coursel_2.png" alt="Product 5" className="mx-auto" width={10000} height={50}></Image>
                </div>
            </Carousel>
        </div>
    )
}