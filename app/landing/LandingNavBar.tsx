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
            setIsMobile(window.innerWidth <= 768); // Consideramos "móvil" para pantallas menores o iguales a 768px
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

        // Cleanup event listeners
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobile]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <nav
                className={`font-bold p-1 bg-teal-700 ${
                    isMobile
                        ? 'relative' // Navbar no queda fijo en dispositivos móviles
                        : `fixed w-full top-0 z-50 transition-colors duration-300 ${
                              isScrolled
                                  ? 'bg-teal-700 bg-opacity-60 backdrop-blur-md'
                                  : 'bg-teal-700'
                          }`
                }`}
            >
                <div className="container py-8 mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                    <Link href="/">

                        <Image
                            src="/logo_v3.png"
                            alt="Logo"
                            width={300}
                            height={50}
                            className="mr-3"
                        />
                    </Link>
                    </div>

                    {/* Botones en el centro */}
                    {!isMobile && (
                        <div className="space-x-9 p-6 text-lg hidden md:flex">
                            <Link
                                href="/"
                                className="text-black transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-400"
                            >
                                Inicio
                            </Link>
                            <Link
                                href="/#servicios"
                                className="text-black transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-400"
                            >
                                Servicios
                            </Link>
                            <Link
                                href="/contacto"
                                className="text-black transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-400"
                            >
                                Contacto
                            </Link>
                            <Link
                                href="/#faqs"
                                className="text-black transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-400"
                            >
                                FAQs
                            </Link>
                        </div>
                    )}

                    {/* Menú hamburguesa en pantallas pequeñas */}
                    {isMobile && (
                        <div className="md:hidden relative z-50">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white focus:outline-none px-4"
                            >
                                <Image
                                    src={isOpen ? '/icons/cross.svg' : '/icons/hamburger.svg'}
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
                    <div className="fixed inset-0 bg-teal-700 z-40 flex flex-col justify-center items-center space-y-6 text-3xl">
                        <Link
                            href="/"
                            className="text-black hover:text-neutral-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Inicio
                        </Link>
                        <Link
                            href="#servicios"
                            className="text-black hover:text-neutral-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Servicios
                        </Link>
                        <Link
                            href="/contacto"
                            className="text-black hover:text-neutral-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Contacto
                        </Link>
                        <Link
                            href="#faqs"
                            className="text-black hover:text-neutral-600"
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
