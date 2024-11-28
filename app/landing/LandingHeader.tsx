import React from "react";
import Image from 'next/image';
import NavBar from "./LandingNavBar";
import Link from "next/link";


export default function LandingHeader() {
  return (
    <div>
      <NavBar />
      <div className="bg-teal-600 py-40 justify-between items-center text-start">
        <div className="flex flex-col md:flex-row h-screen px-5 md:px-20 lg:px-30">
          <div className="w-full md:w-1/2 md:pr-10 lg:pr-20">
            <h1 className="md:text-left lg:text-left px-2 md:px-4 lg:px-10 text-5xl md:text-6xl lg:text-6xl font-bold mb-6">
              ¡Haz crecer tu negocio de la mejor manera!
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl md:text-left px-4 lg:px-10 pb-8">
              Aplicamos estrategias y soluciones innovadoras para satisfacer las necesidades de tus clientes.
            </p>
            <Link className="hover:bg-slate-900 md:mx-8 mx-2 rounded-full text-xl bg-slate-950 text-gray-100 px-6 py-3 md:py-4 border-2 border-neutral-800 animate-bounce" href='/contacto'>
            Contacta con nosotros
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0 lg:pb-56">
            <Image
              className="max-w-full p-5 lg:p-10"
              src="/img_header.svg"
              alt="gif"
              width={480}
              height={400}
              />
          </div>
        </div>
      </div>
    </div>
  );
}




