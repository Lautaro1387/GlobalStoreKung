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

    const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className={`font-bold p-1 fixed w-full top-0 z-50" transition-colors duration-300 ${isScrolled ? 'bg-teal-700 bg-opacity-60 backdrop-blur-md' : 'bg-teal-700'}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        
            <div className="flex items-center">
            <Image
                src="/logo_finally.png"
                alt="Logo"
                width={300}
                height={50}
                className="mr-3"
                />
            </div>
        {/* Botones en el centro */}
       
        {/* Barra de búsqueda e iconos */}
        <div className={`space-x-9 p-1  text-lg hidden md:flex`}>
          <Link href="/" className="text-black transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-400">Inicio</Link>
          <Link href="/categorias" className="text-black transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-400">Servicios</Link>
          <Link href="/productos"className="text-black transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-400">Contacto</Link>
          <Link href="/preguntas frecuentes"className="text-black transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-400">FAQs</Link>
        </div>
         
        <div className='md:hidden'>
          <button>
              <Image src="/icons/config_black.svg" alt='config' width={35} height={40} className='transition-transform duration-300 ease-in-out hover:-translate-y-1'></Image>
          </button>
          <button onClick={() => setIsOpen(!isOpen)}
            className='text-white focus:outline-none'>
            <Image src={`${isOpen ? '/icons/cross.svg' : '/icons/hamburger.svg'}`} alt='config' width={30} height={40}></Image>
          </button>
        </div>
      </div>
       
        
        {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4">
          <a href="#" className="block text-black hover:text-gray-300 text">Inicio</a>
          <a href="#" className="block text-black hover:text-gray-300">Servicios</a>
          <a href="#" className="block text-black hover:text-gray-300">Contacto</a>
          <a href="#" className="block text-black hover:text-gray-300">FAQs</a>
        </div>
      )}
    </nav>
  );
}
