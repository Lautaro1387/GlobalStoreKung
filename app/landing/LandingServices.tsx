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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-black hover:border-blue-500"
                >
                    <div className="relative w-full h-60"> {/* Altura aumentada */}
                        <img
                            src={service.imageUrl}
                            alt={service.imageName}
                            className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-5">
                        <h2 className="text-2xl font-bold">{service.nameProduct}</h2>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LandingServices;
