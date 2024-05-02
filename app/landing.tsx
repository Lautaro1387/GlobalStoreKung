import React from 'react';

export default function Landing() {
    return(
        <main className="flex flex-col items-right justify-between">
          <div className="bg-custom-bg py-3 justify-between items-center">
            <div className='flex px-1'>
                <img
                  className="relative"
                  src="/logo_final.png"
                  alt="Logo"
                  width={210}
                  height={100}
                  />
                <button className='ml-auto px-3 pb-1'>
                  <img src="/dark_mode.svg" alt="Dark Mode"
                    width={40}
                    height={200}
                    />
                </button>          
              </div>
            <div className="flex flex-col lg:flex-row h-screen">
              <div className="w-full py-10 md:py-20 md:pr-20 lg:pr-20">
                <h1 className="text-4xl text-center px-1 md:text-6xl font-bold sm:text-4xl mb-6">Creá tu tienda online en minutos y vendé a todo el mundo!</h1>
                <p className="md:text-2xl text-center px-5 text-lg pb-8">Podes crear promos, descuentos, aceptá pagos online y publicitá tu tienda. ¡Todo lo necesario para explotar tus ventas!</p>
                <button className="hover:bg-slate-700 block mx-auto mb:items-center mb:justify-end rounded-md text-2x1 bg-slate-950 text-gray-100 px-4 py-2 border-2 border-neutral-800"> Empieza ahora </button>
                </div>
                <div className="hidden lg:flex w-1/2 px-10 bg-custom-bg justify-center items-center">
                <img
                  className="max-w-full"
                  src="/landing_computer.png"
                  alt="gif"
                  width={700}
                  height={200}
                  />
                  </div>
                  <div className="w-full lg:hidden h-screen bg-custom-bg flex justify-center items-center">
                <img
                  className="max-w-full"
                  src="/landing_phone_3.png"
                  width={700}
                  height={200}
                  alt="gif"
                  />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center font-bold text-3xl py-96 pb-20 px-4 text-center">
              <h1>
                Mirá cómo crece tu emprendimiento. 
                <br />   
                Te ayudamos en todo.
              </h1>
          </div>
          <div className="flex">
            <div className="flex flex-col w-full md:w-1/3 justify-center items-center">
                <img
                    src="/shop.svg"
                    alt=""
                    width={100}
                    height={100}
                />
                <h1 className='font-bold px-10 py-2 text-xl text-center'>Editamos tu pagina <br /> según tus preferencias</h1>
                <p className='px-10 pb-20 text-center'>Tu eliges el logo, los productos y los colores, nosotros te lo colocamos!</p>
                <img
                  src="/download.svg"
                  alt=""
                  width={100}
                  height={100}
                  />
                <h1 className='font-bold text-center px-10 py-2 text-xl'>Te cargamos tantos productos como prefieras</h1>
                <p className='px-10 pb-20 text-center'>Solo nos indicas que productos necesitas y nosotros lo haremos!</p>
                    <img
                    src="rocket.svg"
                    alt="explota tus ventas"
                    width={100}
                    height={100}
                    />
                <h1 className='font-bold px-10 py-2 text-xl text-center'>Explota tus ventas con nuestras paginas!</h1>
                <p className='px-10 pb-20 text-center'>Una vez tengas la pagina, podras vender cuantas veces quieras</p>
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
                <h1 className="text-3xl px-4 md:text-6xl font-bold sm:text-3xl mb-4">Te ayudamos todos los dias del año!</h1>
                <p className="md:text-xl text-2x1 text-lg pb-5 px-4">Nuestro equipo esta formado por personas reales, lo que significa que te ayudaremos y acompañaremos en lo que necesites para lograr vender tus productos!</p>
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
            <div className="flex flex-col lg:flex-row h-screen">
              <div className="w-full lg:hidden">
                <img
                  className="max-w-full px-6"
                  src="/landing_page_p2.png"
                  width={500}
                  height={500}
                  alt="gif"
                />
              </div>
            <div className="flex flex-col w-full md:w-1/3 justify-start px-1 py-10">
              <div className="flex items-center">
                <img className='mr-1' src="number_one.svg" alt="" width={60}/>
                <h1 className='font-bold py-2 text-xl'> - Elegis tu dominio .com</h1>
              </div>
                <p className='pb-6 px-20'>Tu eliges el logo, los productos y los colores, nosotros te lo colocamos!</p>
                <div className="flex items-center">
                  <img className='mr-1' src="number_two.svg" alt="" width={60}/>
                  <h1 className='font-bold py-2 text-xl'> - Personalizas tu tienda</h1>
                </div>
                <p className='pb-6 px-20'>Solo nos indicas que productos necesitas y nosotros lo haremos!</p>
                <div className="flex items-center">
                  <img className='mr-1' src="number_three.svg" alt="" width={60}/>
                  <h1 className='font-bold py-2 text-xl'> - Explota todas tus ventas</h1>
                </div>
                <p className='pb-6 px-20'>Una vez tengas la pagina, podras vender cuantas veces quieras</p>
              </div>
            </div>
          </div>
          <div className="py-20">
            <div className="flex justify-center items-center bg-slate-950 p-4">
              <h1 className="font-bold text-slate-100 text-center px-10 py-10 text-2xl">UN UNICO PAGO, A TAN SOLO US$ 200 CON TODO INCLUIDO</h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-2xl pb-30">
              <h1 className='font-bold pb-16 text-3xl text-center'>
                Preguntas frecuentes
              </h1>
              <div className="flex items-center">
                <h1 className='font-bold text-xl'>
                  La puedo manejar desde cualquier dispositivo?
                </h1>
                <img src="arrow.svg" alt="" width={65} />
              </div>
              <p className='py-2 pb-10 text-lg'> Por supuesto que si, podras manejar tu pagina tanto por tu celular, como una tablet o computadora</p>
              <div className="flex items-center">
                <h1 className='font-bold text-xl'>
                  Puedo aceptar pagos online?
                </h1>
                <img src="arrow_down.svg" alt="" width={65}/>
              </div>
              <p className='py-2 pb-10 text-lg'>Claro que si, tenemos para aceptar pagos con Mercado Pago, PayPal, Prex y Itau</p>
              <div className="flex items-center text-xl">
                <h1 className='font-bold'>Debo pagar alguna comision por las ventas?</h1>
                <img src="arrow.svg" alt="" width={65} />
              </div>
              <p className='py-2 pb-10 text-lg'>No, no cobramos ningun tipo de comision ni pagaras abono mensual</p>
              
              <p className='mx-auto block'>¿Te quedan consultas? </p> <a className='font-bold text-gray-700 justify-end pb-20'>Estamos para ayudarte </a>
              <footer>
                <div className='wave'></div>
                <div className=''></div>
                <div className=''></div>
                <div className=''></div>
              </footer>
          </div>
    </main>
    )
}