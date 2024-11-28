import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
        <nav
            className={`font-bold p-1 fixed w-full top-0 z-50 transition-colors duration-300 ${
                isScrolled ? 'bg-teal-700 bg-opacity-60 backdrop-blur-md' : 'bg-teal-700'
            }`}
        >
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
                <div className="space-x-9 p-6 text-lg hidden md:flex">
                    <Link
                        href="/"
                        className="text-black transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-400"
                    >
                        Inicio
                    </Link>
                    <Link
                        href="#servicios"
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
                        href="#faqs"
                        className="text-black transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:text-teal-400"
                    >
                        FAQs
                    </Link>
                </div>

                {/* Menú hamburguesa en pantallas pequeñas */}
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
            </div>

            {/* Menú desplegable en responsive */}
            {isOpen && (
                <div className="fixed inset-0 bg-teal-700 z-40 flex flex-col justify-center items-center space-y-6 text-3xl">
                    <Link
                        href="/"
                        className=" text-black hover:text-neutral-600"
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
    );
}
