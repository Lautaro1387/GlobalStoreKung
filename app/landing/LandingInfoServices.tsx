import React from 'react';
import LandingServices from './LandingServices';

// Definición del tipo para un servicio
interface Service {
    imageUrl: string;
    imageName: string;
    nameProduct: string;
    description: string;
}

// Lista de servicios con tipado
const servicesList: Service[] = [
    {
        imageUrl: '/icons/landing_page.webp',
        imageName: 'Landing Page',
        nameProduct: 'Landing Page',
        description: 'Creamos paginas webs innovadoras y optimizadas para que tus clientes puedan ver tu producto o servicio de manera efectiva, clara y accesible',
    },
    {
        imageUrl: '/icons/hosting.webp',
        imageName: 'Hosting / VPS',
        nameProduct: 'Dominio VPS',
        description: 'Ofrecemos opciones completas de Hostinger y VPS, esencial para empresas que buscan eficencia y economía.',
    },
    {
        imageUrl: '/icons/automate.webp',
        imageName: 'Automatización de Negocios',
        nameProduct: 'Automatización de Negocios',
        description: 'Simplifica procesos y mejora la eficiencia de tu empresa con nuestras soluciones.',
    },
];

const LandingInfoServices: React.FC = () => {
    return (
        <div id='servicios' className='bg-gray-100 '>
            <h1 className='flex justify-center items-center md:p-10 md:pt-20 pt-40 text-4xl md:text-5xl font-serif text-gray-800'>
                Nuestros Servicios
            </h1>
            <LandingServices services={servicesList} />
        </div>
    );
};

export default LandingInfoServices;
