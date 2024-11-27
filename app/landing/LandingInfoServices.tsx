import React from 'react';
import LandingServices from './LandingServices';

const servicesList = [
    {
        imageUrl: '/icons/img_product_1.png',
        imageName: 'Service 1',
        nameProduct: 'Pantalón Skinny',
        description: 'Descripción del Producto 1',
        cost: 50,
    },
    {
        imageUrl: '/icons/img_product_2.png',
        imageName: 'Service 2',
        nameProduct: 'Pantalón Skinny',
        description: 'Descripción del Producto 2',
        cost: 80,
    },
    {
        imageUrl: '/icons/img_product_3.png',
        imageName: 'Service 2',
        nameProduct: 'Pantalón Skinny',
        description: 'Descripción del Producto 2',
        cost: 80,
    },
];

const LandingInfoServices = () => {
    return (
        <div id='servicios'>
            <h1  className='flex justify-center items-center p-10 text-5xl font-serif'>Nuestros servicios</h1>
            <LandingServices services={servicesList} />
        </div>
    );
};

export default LandingInfoServices;
