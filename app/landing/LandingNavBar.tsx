import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <>
    <header className={`p-5 fixed w-full top-0 z-50" transition-colors duration-300 ${isScrolled ? 'bg-teal-600' : 'bg-transparent'}`}>
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
          <Link href="/" className="text-black transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-400">Inicio</Link>
          <Link href="/categorias" className="text-black transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-400">Servicios</Link>
          <Link href="/productos"className="text-black transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-400">Contacto</Link>
          <Link href="/preguntas frecuentes"className="text-black transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-400">FAQs</Link>
        </div>

        {/* Barra de búsqueda e iconos */}
        <div className="flex items-center space-x-4">
            <Link rel="noopener" href="">
                <Image src="/icons/config_black.svg" alt='config' width={35} height={40} className='transition-transform duration-300 ease-in-out hover:-translate-y-1'></Image>
            </Link>
        </div>
      </div>
    </header>
    </>
  );
}
