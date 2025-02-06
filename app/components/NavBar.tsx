// app/components/NavBar.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import SignOutButton from "./SignOutButton";

export default function NavBar() {
  const { notification } = useCart();
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/demo2/">
            <Image
              src="/img/logo_demo1_1.png"
              alt="Logo"
              width={80}
              height={50}
              className="mr-3"
            />
          </Link>
        </div>
        {/* Menú central */}
        <div className="flex space-x-9 p-4 font-bold text-lg">
          <Link
            href="/demo2"
            className="text-white transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:text-teal-400"
          >
            Inicio
          </Link>
          <Link
            href="/demo2/productos"
            className="text-white transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:text-teal-400"
          >
            Productos
          </Link>
        </div>
        {/* Sección de iconos */}
        <div className="flex items-center space-x-4 relative">
          <input
            type="text"
            placeholder="Buscar..."
            className="px-10 py-2 rounded-lg"
          />
          <Link href="/demo2/cart">
            <Image
              src="/icons/search_white.svg"
              alt="search"
              width={35}
              height={40}
              className="transition-transform duration-300 ease-in-out hover:-translate-y-2"
            />
          </Link>
          <Link href="/demo2/auth/register">
            <Image
              src="/icons/account_white.svg"
              alt="account"
              width={35}
              height={40}
              className="transition-transform duration-300 ease-in-out hover:-translate-y-2"
            />
          </Link>
          <Link href="/demo2/auth/login">
            <Image
              src="/icons/account_white.svg"
              alt="account"
              width={35}
              height={40}
              className="transition-transform duration-300 ease-in-out hover:-translate-y-2"
            />
          </Link>
          <Link href="/demo2/cart">
              <Image
                src="/icons/cart_white.svg"
                alt="cart"
                width={35}
                height={40}
                className="transition-transform duration-300 ease-in-out hover:-translate-y-2"
              />
          </Link>
          <Link href="/demo2/conf">
            <Image
              src="/icons/config_white.svg"
              alt="config"
              width={35}
              height={40}
              className="transition-transform duration-300 ease-in-out hover:-translate-y-2"
            />
          </Link>
          {notification && (
            <div className="absolute top-full right-0 bg-green-500 text-white text-xs rounded px-2 py-1 mt-1">
              {notification}
            </div>
          )}
          {/* Botón para cerrar sesión */}
          <SignOutButton />
        </div>
      </div>
    </header>
  );
}
