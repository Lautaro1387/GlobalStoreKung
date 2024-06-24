import React, { useState } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



export default function CarouselComponent() {
    const [currentSlide, setCurrentSlide] = useState(0); // Estado para controlar la slide actual

    const handleChangeSlide = (index: any) => {
        setCurrentSlide(index); // Función para cambiar la slide actual
    };

    const handlePrevClick = () => {
        setCurrentSlide(currentSlide - 1); // Función para ir a la slide anterior
    };

    const handleNextClick = () => {
        setCurrentSlide(currentSlide + 1); // Función para ir a la siguiente slide
    };
    return (
        <div className='bg-gray-600 p-10'>
            <Carousel          
                selectedItem={currentSlide}
                onChange={handleChangeSlide}
                showArrows={true}
                infiniteLoop={true}
                emulateTouch={true}
                showThumbs={false}
                showStatus={true}
                autoPlay={true}
                >
                <div>
                    <Image src="/icons/cart_black.svg" alt="Product 1" className="mx-auto" width={50} height={50}/>
                </div>
                <div>
                    <Image src="/icons/account_black.svg" alt="Product 2" className="mx-auto" width={50} height={50}></Image>
                </div>
                <div>
                    <Image src="/icons/account_black.svg" alt="Product 3" className="mx-auto" width={50} height={50}></Image>
                </div>
                <div>
                    <Image src="/icons/account_black.svg" alt="Product 4" className="mx-auto" width={50} height={50}></Image>
                </div>
                <div>
                    <Image src="/icons/account_black.svg" alt="Product 5" className="mx-auto" width={50} height={50}></Image>
                </div>
            </Carousel>
            <div className="flex justify-between mt-4">
                <button onClick={handlePrevClick} disabled={currentSlide === 0} className="bg-gray-800 px-3 py-1 rounded">Anterior</button>
                <button onClick={handleNextClick} disabled={currentSlide === 4} className="bg-gray-800 px-3 py-1 rounded">Siguiente</button>
            </div>
        </div>
    )
}