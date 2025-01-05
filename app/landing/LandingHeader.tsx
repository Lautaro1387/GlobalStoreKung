import React from "react";
import Image from 'next/image';
import NavBar from "./LandingNavBar";
import Link from "next/link";

export default function LandingHeader() {
  return (
    <div className="relative h-screen w-full">
      {/* Video de fondo */}
      <NavBar></NavBar>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/img/img_1.mp4" type="video/mp4" />
      </video>

      {/* Overlay para oscurecer el fondo */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Contenido */}
      <div className="relative z-10 text-white flex flex-col justify-center items-center h-full px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Haz crecer tu negocio de la mejor manera
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Aplicamos estrategias y soluciones innovadoras para satisfacer las necesidades de tus clientes.
        </p>
        <a
          href="/contacto"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg transition duration-300"
        >
          Contacta con nosotros
        </a>
      </div>
    </div>
  );
}




