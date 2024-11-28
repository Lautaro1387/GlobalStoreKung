import React from 'react';

// Definición del tipo para las propiedades
interface Service {
    imageUrl: string;
    imageName: string;
    nameProduct: string;
    description: string;
}

interface LandingServicesProps {
    services: Service[];
}

const LandingServices: React.FC<LandingServicesProps> = ({ services }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 p-5'>
            {services.map((service, index) => (
                <div
                    key={index}
                    className='bg-white shadow-lg rounded-lg p-5 hover:scale-105 transition-transform duration-300'
                >
                    <img
                        src={service.imageUrl}
                        alt={service.imageName}
                        className='w-full h-40 object-cover rounded'
                    />
                    <h2 className='text-2xl font-bold mt-4'>{service.nameProduct}</h2>
                    <p className='text-gray-600 mt-2'>{service.description}</p>
                </div>
            ))}
        </div>
    );
};

export default LandingServices;
