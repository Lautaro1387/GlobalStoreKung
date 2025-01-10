import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Definición del tipo para las propiedades
interface Service {
  imageUrl: string;
  imageName: string;
  nameProduct: string;
  description: string;
  moreInfo: string; // Información adicional para el modal
}

interface LandingServicesProps {
  services: Service[];
}

const LandingServices: React.FC<LandingServicesProps> = ({ services }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const closeModal = () => setSelectedService(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-black hover:border-blue-500 flex flex-col justify-between relative pb-16"
          >
            <div>
              {/* Contenedor relativo para usar <Image fill /> */}
              <div className="relative w-full h-60">
                <Image
                  src={service.imageUrl}
                  alt={service.imageName}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 33vw"
                />
              </div>
              <div className="p-5">
                <h2 className="text-2xl font-bold">{service.nameProduct}</h2>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedService(service)}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white py-2 px-6 rounded hover:bg-teal-700 transition-colors"
            >
              Ver más
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3"
            >
              <Image
                src="/icons/cross_black.svg"
                alt="Cerrar"
                width={24}
                height={24}
              />
            </button>
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">{selectedService.nameProduct}</h2>
              <p className="text-gray-600">{selectedService.moreInfo}</p>
            </div>
            <Link href="/contacto">
                <button
                className="mt-6 bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition-colors"
                >
                Contactanos
                </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default LandingServices;
