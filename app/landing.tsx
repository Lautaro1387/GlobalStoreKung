import React from 'react';

export default function Landing() {
    return(
        <main className="flex flex-col items-right justify-between">
          <div className="bg-custom-bg py-4">
            <div className='flex'>
              <div className='px-5'>
                <img
                  className="relative"
                  src="/logo_final.png"
                  alt="Logo"
                  width={210}
                  height={300}
                  />  
              </div>
              <div>
                <button className=' justify-end'>
                  <img src="/dark_mode.svg" alt="Dark Mode"
                    height={200}
                    width={40}
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row px-10 h-screen">
              <div className="w-full lg:w-1/2 py-20 sm:py-40 md:py-20 md:pr-20 lg:pr-20">
                <h1 className="text-3x1 text-center md:text-6xl font-bold sm:text-3xl mb-4">Creá tu tienda online en minutos y vendé a todo el mundo!</h1>
                <p className="md:text-xl text-center text-2x1 text-lg pb-5">Podes crear promos, descuentos, aceptá pagos online y publicitá tu tienda. ¡Todo lo necesario para explotar tus ventas!</p>
                <button className="hover:bg-slate-700 block mx-auto mb:items-center mb:justify-end rounded-md text-2x1 bg-slate-950 text-gray-100 px-4 py-2 border-2 border-neutral-800"> Empieza ahora </button>
              </div>
              <div className="hidden lg:block w-1/2 px-10">
                <img
                  className="max-w-full"
                  src="/landing_computer.png"
                  alt="gif"
                />
              </div>
              <div className="w-full lg:hidden">
                <img
                  className="max-w-full"
                  src="/landing_phone.png"
                  width={500}
                  height={500}
                  alt="gif"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center font-bold text-3xl py-40 pb-20 px-10 text-center">
              <h1>
                Mirá cómo crece tu emprendimiento. 
                <br />   
                Te ayudamos en todo.
              </h1>
          </div>
          <div className="flex text-center">
            <div className="flex flex-col w-full md:w-1/3 justify-center items-center">
                <img
                    src="/shop.svg"
                    alt=""
                    width={100}
                    height={100}
                />
                <h1 className='font-bold px-10 py-2 text-2xl'>Editamos tu pagina según tus preferencias</h1>
                <p className='px-10 pb-20'>Tu eliges el logo, los productos y los colores, nosotros te lo colocamos!</p>
                <img
                  src="/download.svg"
                  alt=""
                  width={100}
                  height={100}
                  />
                <h1 className='font-bold px-10 py-2 text-2xl'>Te cargamos tantos productos como prefieras</h1>
                <p className='px-10 pb-20'>Solo nos indicas que productos necesitas y nosotros lo haremos!</p>
                    <img
                    src="rocket.svg"
                    alt="explota tus ventas"
                    width={100}
                    height={100}
                    />
                <h1 className='font-bold px-10 py-2 text-2xl'>Explota tus ventas con nuestras paginas!</h1>
                <p className='px-10 pb-20'>Una vez tengas la pagina, podras vender cuantas veces quieras</p>
              </div>
          </div>
          <div className="py-24">
            <div className="flex flex-col lg:flex-row px-10 h-screen">
              <div className="w-full lg:hidden">
                <img
                  className="max-w-full"
                  src="/landing_page_p2.png"
                  width={500}
                  height={500}
                  alt="gif"
                />
              </div>
              <div className="w-full lg:w-1/2 py-20 sm:py-40 md:py-20 md:pr-20 lg:pr-20">
                <h1 className="text-5x1 text-center md:text-6xl font-bold sm:text-3xl mb-4">Te ayudamos todos los dias del año!</h1>
                <p className="md:text-xl text-center text-2x1 text-lg pb-5">Nuestro equipo esta formado por personas reales, lo que significa que te ayudaremos y acompañaremos en lo que necesites para lograr vender tus productos!</p>
              </div>
            </div>
          </div>
          <div>
            <div className="justify-center items-center bg-slate-950 pb-10">
              <h1 className="py-10 p-4 font-bold text-center text-2xl text-slate-100">ESTAMOS EN LINEA AHORA</h1>
              <button className="hover:bg-slate-700 rounded-md mx-auto block text-2x1 bg-custom-bg text-gray-100 px-4 py-2 border-2 border-neutral-800">Chatea con nosotros</button>
            </div>
          </div>

          <div className="py-24">
            <div className="flex flex-col lg:flex-row px-10 h-screen">
              <div className="w-full lg:hidden">
                <img
                  className="max-w-full"
                  src="/landing_page_p2.png"
                  width={500}
                  height={500}
                  alt="gif"
                />
              </div>
            <div className="flex flex-col w-full md:w-1/3 justify-center items-center py-10">
                <h1 className='font-bold py-2 text-2xl'> 1 - Elegis tu dominio .com</h1>
                <p className='pb-20 px-6'>Tu eliges el logo, los productos y los colores, nosotros te lo colocamos!</p>
                <h1 className='font-bold py-2 text-2xl'> 2 - Personalizas tu tienda</h1>
                <p className='pb-20 px-6'>Solo nos indicas que productos necesitas y nosotros lo haremos!</p>
                <h1 className='font-bold py-2 text-2xl'> 3 - Explota todas tus ventas</h1>
                <p className='pb-20 px-6'>Una vez tengas la pagina, podras vender cuantas veces quieras</p>
              </div>
            </div>
          </div>
          <div className="py-40">
            <div className="flex justify-center items-center bg-slate-950 p-4">
              <h1 className="font-bold text-slate-100 text-center px-10 py-10 text-2xl">UN UNICO PAGO A TAN SOLO USD300 CON TODO INCLUIDO</h1>
            </div>
          </div>
          <div className="flex justify-center items-center font-bold text-2xl pb-20 px-10 text-center">
              <h1>
                Preguntas frecuentes
              </h1>
          </div>
    </main>
    )
}