import React from 'react';
import LandingFooter from './LandingFooter';
import LandingQuestions from './LandingQuestions';
import LandingHeader from './LandingHeader';

export default function LandingHome() {
    return(
        <main className="flex flex-col items-right justify-between">
          <LandingHeader></LandingHeader>
          <div className="flex justify-center items-center font-bold text-3xl py-96 md:py-36 pb-20 px-4 text-center">
              <h1>
                Mirá cómo crece tu emprendimiento. 
                <br />   
                Te ayudamos en todo.
              </h1>
          </div>
          <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 py-10 md:border-e-2">
            <div className="flex flex-col items-center">
              <img
                src="/icons/shop.svg"
                alt=""
                width={100}
                height={100}
              />
              <h1 className="font-bold mt-4 mb-2 text-xl text-center">Editamos tu pagina según tus preferencias</h1>
              <p className="text-center">Tu eliges el logo, los productos y los colores, nosotros te lo colocamos!</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 py-10">
            <div className="flex flex-col items-center">
              <img
                src="/icons/download.svg"
                alt=""
                width={100}
                height={100}
              />
              <h1 className="font-bold mt-4 mb-2 text-xl text-center">Te cargamos tantos productos como prefieras</h1>
              <p className="text-center">Solo nos indicas qué productos necesitas y nosotros lo haremos!</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 py-10 md:border-s-2">
            <div className="flex flex-col items-center">
              <img
                src="/icons/rocket.svg"
                alt="explota tus ventas"
                width={100}
                height={100}
              />
              <h1 className="font-bold mt-4 mb-2 text-xl text-center">Explota tus ventas con nuestras páginas</h1>
              <p className="text-center">Una vez tengas la página, podrás vender cuantas veces quieras!</p>
            </div>
          </div>
        </div>

          <div className="py-20 md:p-40 md:py-52">
            <div className="flex flex-col lg:flex-row px-10 ">
              <div className="w-full">
                <img
                  className="max-w-full"
                  src="/landing_page_p2.png"
                  width={500}
                  height={500}
                  alt="gif"
                />
              </div>
              <div className="w-full py-20 sm:py-40 md:py-20 md:pr-20 lg:pr-20">
                <h1 className="text-3xl px-4 md:text-6xl font-bold sm:text-3xl mb-4 md:text-left">Te ayudamos todos los dias del año!</h1>
                <p className="md:text-xl text-2x1 text-lg pb-5 px-4 md:text-left">Nuestro equipo esta formado por personas reales, lo que significa que te ayudaremos y acompañaremos en lo que necesites para lograr vender tus productos!</p>
              </div>
            </div>
          </div>
          <div>
            <div className="justify-center items-center bg-slate-950 pb-10">
              <h1 className="py-10 p-4 font-bold text-center text-2xl text-slate-100">ESTAMOS EN LINEA AHORA</h1>
              <button className="hover:bg-slate-700 rounded-md mx-auto block text-2x1 bg-custom-bg text-gray-100 px-4 py-2 border-2 border-neutral-800">Chatea con nosotros</button>
            </div>
          </div>

          <div className="py-24 md:px-40">
            <div className="flex flex-col lg:flex-row w-full md:p-20">
              <div className='md:pr-32'>
                <img
                  className="max-w-full px-6"
                  src="/landing_page_p2.png"
                  width={500}
                  height={500}
                  alt="gif"
                />
              </div>
            <div className="flex flex-col text-left px-1 py-10 md:text-xl">
              <div className="flex items-center">
                <img className='mr-1' src="/icons/number_one.svg" alt="" width={50}/>
                <h1 className='font-bold py-2 text-xl md:text-3xl'> - Elegis tu dominio .com</h1>
              </div>
                <p className='pb-6 ps-20 border-b-2'>Tu eliges el logo, los productos y los colores, nosotros te lo colocamos!</p>
                <div className="flex items-center py-2">
                  <img className='mr-1' src="/icons/number_two.svg" alt="" width={50}/>
                  <h1 className='font-bold py-2 text-xl md:text-3xl'> - Personalizas tu tienda</h1>
                </div>
                <p className='pb-6 ps-20 border-b-2'>Solo nos indicas que productos necesitas y nosotros lo haremos!</p>
                <div className="flex items-center">
                  <img className='mr-1 py-2' src="/icons/number_three.svg" alt="" width={50}/>
                  <h1 className='font-bold py-2 text-xl md:text-3xl'> - Explota todas tus ventas</h1>
                </div>
                <p className='pb-6 ps-20'>Una vez tengas la pagina, podras vender cuantas veces quieras</p>
              </div>
            </div>
          </div>
          <div className="py-20">
            <div className="flex justify-center items-center bg-slate-950 p-4">
              <h1 className="font-bold text-slate-100 text-center px-10 py-10 text-2xl">UN UNICO PAGO, A TAN SOLO US$ 200 CON TODO INCLUIDO</h1>
            </div>
          </div>
            <LandingQuestions></LandingQuestions>
            <LandingFooter></LandingFooter>
    </main>
    )
}