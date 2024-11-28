import React from 'react';
import LandingServices from './LandingServices';

// Definición del tipo para un servicio
interface Service {
    imageUrl: string;
    imageName: string;
    nameProduct: string;
    description: string;
    cost: number;
}

// Lista de servicios con tipado
const servicesList: Service[] = [
    {
        imageUrl: '/icons/img_service_1.png',
        imageName: 'Landing Page',
        nameProduct: 'Landing Page',
        description: 'Diseñamos páginas de aterrizaje efectivas para captar clientes.',
        cost: 50,
    },
    {
        imageUrl: '/icons/img_service_2.png',
        imageName: 'Dominio VPS',
        nameProduct: 'Dominio VPS',
        description: 'Configura tu dominio con VPS para un rendimiento óptimo.',
        cost: 80,
    },
    {
        imageUrl: '/icons/img_service_3.png',
        imageName: 'Automatización de Negocios',
        nameProduct: 'Automatización de Negocios',
        description: 'Simplifica procesos y mejora la eficiencia con nuestras soluciones.',
        cost: 120,
    },
];

const LandingInfoServices: React.FC = () => {
    return (
        <div id='servicios' className='bg-gray-100'>
            <h1 className='flex justify-center items-center p-10 text-5xl font-serif text-gray-800'>
                Nuestros Servicios
            </h1>
            <LandingServices services={servicesList} />
        </div>
    );
};

export default LandingInfoServices;
