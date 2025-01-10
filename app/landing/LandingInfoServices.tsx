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
        moreInfo: 'Te ayudamos a diseñar e implementar un sitio web que destaque tus servicios, productos o empresa de manera efectiva. Creamos soluciones adaptadas a tus necesidades, asegurandonós que tu oferta capte la atención de tus clientes. Trabajamos en conjunto contigo para el desarrollo de la página, hasta terminarla!', // ← Nueva propiedad
    },
    {
        imageUrl: '/img/hosting.webp',
        imageName: 'Hosting VPS',
        nameProduct: 'Dominio / VPS',
        description: 'Ofrecemos opciones completas de Hosting y VPS, esencial para empresas que buscan eficiencia y economía.',
        moreInfo: 'Ya sea que estés comenzando o que ya tengas un sitio web, trabajamos con una amplia gama de servicios que se ajustan a tus necesidades. Nuestro equipo se encargará de seleccionar la mejor solución para cada situación, según los requerimientos y objetivos del proyecto.', // ← Nueva propiedad
    },
    {
        imageUrl: '/img/automate.webp',
        imageName: 'Automatización de Negocios',
        nameProduct: 'Automatización de Negocios',
        description: 'Simplifica procesos y mejora la eficiencia de tu empresa con nuestras soluciones.',
        moreInfo: 'La automatización es una realidad que se ha convertido en el eje principal de muchas empresas. Implementamos soluciones que optimizan tu día a día, reemplazando procesos manuales por herramientas automatizadas, facilitando tu negocio de la mejor manera. Nos pasas la información de tu negocio y nosotros nos encargamos del resto para cumplir tus necesidades.', // ← Nueva propiedad
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
