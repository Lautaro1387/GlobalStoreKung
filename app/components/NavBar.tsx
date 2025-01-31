import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <>
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo_dark.png"
            alt="Logo"
            width={80}
            height={50}
            className="mr-3"
            />
        </div>
        {/* Botones en el centro */}
        <div className="flex space-x-9 p-4 font-bold text-lg">
          <Link href="/demo2" className="text-white transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:text-teal-400">Inicio</Link>
          <Link href="/demo2/categorias" className="text-white transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:text-teal-400">Categorias</Link>
          <Link href="/demo2/productos"className="text-white transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:text-teal-400">Productos</Link>
          <Link href="/demo2/preguntas-frecuentes"className="text-white transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:text-teal-400">Preguntas frecuentes</Link>
        </div>

        {/* Barra de búsqueda e iconos */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Buscar..."
            className="px-10 py-2 rounded-lg"
            />
            <Link rel="noopener" href="/demo2/cart">
                <Image src="/icons/search_white.svg" alt='search' width={35} height={40} className='transition-transform duration-300 ease-in-out hover:-translate-y-2'></Image>
            </Link>
            <Link rel="noopener" href="/demo2/auth/register">
                <Image src="/icons/account_white.svg" alt='account' width={35} height={40} className='transition-transform duration-300 ease-in-out hover:-translate-y-2'></Image>
            </Link>
            <Link rel="noopener" href="/demo2/auth/login">
                <Image src="/icons/account_white.svg" alt='account' width={35} height={40} className='transition-transform duration-300 ease-in-out hover:-translate-y-2'></Image>
            </Link>
            <Link rel="noopener" href="/demo2/cart">
                <Image src="/icons/cart_white.svg" alt='cart' width={35} height={40} className='transition-transform duration-300 ease-in-out hover:-translate-y-2'></Image>
            </Link>
            <Link rel="noopener" href="/demo2/conf">
                <Image src="/icons/config_white.svg" alt='config' width={35} height={40} className='transition-transform duration-300 ease-in-out hover:-translate-y-2'></Image>
            </Link>
        </div>
      </div>
    </header>
    </>
  );
}
