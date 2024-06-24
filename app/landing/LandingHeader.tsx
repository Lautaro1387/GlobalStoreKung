import React from "react";
import Image from 'next/image'


export default function LandingHeader() {
    return(
    <div className="bg-custom-bg py-3 justify-between items-center md:px-20 lg:px-20">
        <div className="flex justify-between items-center w-full">
          <Image
            className="relative"
            src="/logo_final.png"
            alt="Logo"
            width={250}
            height={100}
            />
          <div className="flex items-center">
          <button className='ml-auto pb-1'>
          <Image
              src='/icons/language_3.svg'
              alt="Dark Mode"
              width={40}
              height={200}
            />
              <p>Idiomas</p>
          </button>          
          </div>

              </div>
      <div className="flex flex-col md:flex-row lg:flex-row h-screen">
        <div className="w-full md:w-1/2 py-10 md:pr-20 md:py-24 lg:pr-20">
          <h1 className="text-4xl text-center md:text-left lg:text-left px-2 md:px-10 md:text-6xl lg:text-7xl md:py-16 font-bold mb-6 md:mb-0">Creá tu tienda online según tus preferencias y vendé a todo el mundo!</h1>
          <p className="md:text-2xl text-center px-5 md:px-10 text-lg pb-8 md:text-left lg:text-left">Podes crear promos, descuentos, aceptá pagos online y publicitá tu tienda. ¡Todo lo necesario para explotar tus ventas!</p>
          <button className="hover:bg-slate-700 block mx-auto md:mx-10 md:justify-self-start md:items-self-start rounded-md text-xl md:text-2xl bg-slate-950 text-gray-100 px-4 py-2 md:px-6 md:py-4 border-2 border-neutral-800"> Empezar ahora </button>
        </div>
        <div className="hidden lg:flex w-1/2 bg-custom-bg justify-center items-center pb-56">
        <Image
          className="max-w-full"
          src="/landing_computer_2.png"
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