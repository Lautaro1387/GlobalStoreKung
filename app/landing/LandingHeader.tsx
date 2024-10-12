import React from "react";
import Image from 'next/image'


export default function LandingHeader() {
    return(
    <div className="bg-teal-600 py-3 justify-between items-center md:px-20 lg:px-20">
        
      <div className="flex flex-col md:flex-row lg:flex-row h-screen">
        <div className="w-full md:w-1/2 py-10 md:pr-20 md:py-24 lg:pr-20">
          <h1 className="text-4xl text-center md:text-left lg:text-left px-2 md:px-10 md:text-6xl lg:text-7xl md:py-16 font-bold mb-6 md:mb-0">Hace crecer tu negocio de la mejor manera!</h1>
          <p className="md:text-2xl text-center px-5 md:px-10 text-lg pb-8 md:text-left lg:text-left">Nos encargamos de hacer crecer tu negocio.</p>
          <button className="hover:bg-slate-700 block mx-auto md:mx-10 md:justify-self-start md:items-self-start rounded-md text-xl md:text-2xl bg-slate-950 text-gray-100 px-4 py-2 md:px-6 md:py-4 border-2 border-neutral-800"> Empezar ahora </button>
        </div>
        <div className="hidden lg:flex w-1/2 bg-teal-600 justify-center items-center pb-56">
        <Image
          className="max-w-full"
          src="/img_header.svg"
          alt="gif"
          width={700}
          height={100}
          />
          </div>
          <div className="w-full md:hidden lg:hidden h-screen bg-custom-bg flex justify-center items-center">
          <Image
            className="max-w-full"
            src="/landing_phone_4.png"
            width={700}
            height={200}
            alt="gif"
          />
      </div>
      </div>
    </div>)
}