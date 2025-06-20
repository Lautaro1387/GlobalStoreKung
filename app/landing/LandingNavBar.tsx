import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingNavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Detectar si es móvil
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Detectar scroll
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Mostrar botón "Ir arriba" solo en móvil y si hay desplazamiento
      setShowScrollTop(window.scrollY > 200 && isMobile);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    // Inicializamos el estado en el primer renderizado
    handleResize();

    // Cleanup de los event listeners
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  useEffect(() => {
    // Desactivar el scroll cuando el menú está abierto
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup: remover la clase cuando el componente se desmonte
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`font-bold p-1 
          fixed w-full top-0 z-50 transition-colors duration-300 
          ${
            isScrolled
              ? 'bg-teal-700/75 backdrop-blur-md'
              : 'bg-transparent'
          }
          `}
      >
        <div className="container py-8 md:py-0 md:px-4 mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/img/logo_v4.png"
                alt="Logo"
                width={300}
                height={50}
                className="mr-3"
              />
            </Link>
          </div>

          {/* Botones en el centro (solo desktop) */}
          {!isMobile && (
            <div className="space-x-9 p-6 text-lg hidden md:flex">
              <Link
                href="/"
                className="text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-300"
              >
                Inicio
              </Link>
              <Link
                href="/#servicios"
                className="text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-300"
              >
                Servicios
              </Link>
              <Link
                href="/contacto"
                className="text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-300"
              >
                Contacto
              </Link>
              <Link
                href="/#faqs"
                className="text-white transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-300"
              >
                FAQs
              </Link>
            </div>
          )}

          {/* Menú hamburguesa en pantallas pequeñas */}
          {isMobile && (
            <div className="md:hidden relative z-50">
              <button
                onClick={() => {
                  scrollToTop(); // Lleva la página al inicio
                  setTimeout(() => {
                    setIsOpen(!isOpen); // Abre o cierra el menú después del scroll
                  }, 700); // Ajusta este tiempo si es necesario
                }}
                className="text-white focus:outline-none px-4"
              >
                <Image
                  src={isOpen ? '/icons/cross_white.svg' : '/icons/hamburger_white.svg'}
                  alt="menu"
                  width={30}
                  height={30}
                />
              </button>
            </div>
          )}
        </div>

        {/* Menú desplegable en responsive */}
        {isOpen && isMobile && (
          <div className="fixed inset-0 bg-teal-700 bg-opacity-60 backdrop-blur-md z-40 flex flex-col justify-center items-center space-y-6 text-3xl">
            <Link
              href="/"
              className="text-white hover:text-neutral-300"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/#servicios"
              className="text-white hover:text-neutral-300"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/contacto"
              className="text-white hover:text-neutral-300"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <Link
              href="/#faqs"
              className="text-white hover:text-neutral-300"
              onClick={() => setIsOpen(false)}
            >
              FAQs
            </Link>
          </div>
        )}
      </nav>

      {/* Botón "Ir arriba" en móvil */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-teal-700 text-white rounded-full p-3 shadow-md hover:bg-teal-600 transition-all duration-300 w-12 h-12 flex items-center justify-center"
        >
          ↑
        </button>
      )}
    </>
  );
}
