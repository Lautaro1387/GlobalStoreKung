import React from 'react';
import LandingServices from './LandingServices';

// Definición del tipo para un servicio
interface Service {
    imageUrl: string;
    imageName: string;
    nameProduct: string;
    description: string;
    moreInfo: string; // ← Agregamos la propiedad faltante
}

// Lista de servicios con tipado
const servicesList: Service[] = [
    {
        imageUrl: '/img/landing.webp',
        imageName: 'Landing Page',
        nameProduct: 'Landing Page',
        description: 'Creamos paginas webs innovadoras y optimizadas para que tus clientes puedan ver tu producto o servicio de manera efectiva, clara y accesible',
        moreInfo: 'Más detalles sobre nuestra creación de páginas web y cómo te ayuda a destacar tu servicio.', // ← Nueva propiedad
    },
    {
        imageUrl: '/img/hosting.webp',
        imageName: 'Hosting / VPS',
        nameProduct: 'Dominio VPS',
        description: 'Ofrecemos opciones completas de Hosting y VPS, esencial para empresas que buscan eficiencia y economía.',
        moreInfo: 'Explicación más extensa de planes de Hosting/VPS y servicios relacionados.', // ← Nueva propiedad
    },
    {
        imageUrl: '/img/automate.webp',
        imageName: 'Automatización de Negocios',
        nameProduct: 'Automatización de Negocios',
        description: 'Simplifica procesos y mejora la eficiencia de tu empresa con nuestras soluciones.',
        moreInfo: 'Descripción detallada de cómo automatizamos tus procesos y los beneficios para tu negocio.', // ← Nueva propiedad
    },
];

const LandingInfoServices: React.FC = () => {
    return (
        <div id='servicios' className='bg-white '>
            <h1 className='flex justify-center items-center md:p-10 md:pt-20 pt-40 text-4xl md:text-5xl font-serif text-gray-800'>
                Nuestros Servicios
            </h1>
            <LandingServices services={servicesList} />
        </div>
    );
};

export default LandingInfoServices;
