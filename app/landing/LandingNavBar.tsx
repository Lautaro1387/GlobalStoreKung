import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <>
    <header className="bg-teal-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo_final.png"
            alt="Logo"
            width={100}
            height={50}
            className="mr-3"
            />
        </div>
        {/* Botones en el centro */}
        <div className="flex space-x-9 p-4 font-bold text-lg">
          <Link href="/" className="text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-400">Inicio</Link>
          <Link href="/categorias" className="text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-400">Servicios</Link>
          <Link href="/productos"className="text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-400">Contacto</Link>
          <Link href="/preguntas frecuentes"className="text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-400">FAQs</Link>
        </div>

        {/* Barra de búsqueda e iconos */}
        <div className="flex items-center space-x-4">
         

            <Link rel="noopener" href="/demo_1/cart">
                <Image src="/icons/cart_white.svg" alt='cart' width={35} height={40} className='transition-transform duration-300 ease-in-out hover:-translate-y-1'></Image>
            </Link>
            <Link rel="noopener" href="/demo_1/cart">
                <Image src="/icons/config_white.svg" alt='config' width={35} height={40} className='transition-transform duration-300 ease-in-out hover:-translate-y-1'></Image>
            </Link>
        </div>
      </div>
    </header>
    </>
  );
}
