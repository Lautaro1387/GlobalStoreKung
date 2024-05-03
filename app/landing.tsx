import React from 'react';

export default function LandingHome() {
    return(
        <main className="flex flex-col items-right justify-between">
          <div className="bg-custom-bg py-3 justify-between items-center md:px-20 lg:px-20">
            <div className='flex px-1 w-full md:w-500px'>
                <img
                  className="relative"
                  src="/logo_final.png"
                  alt="Logo"
                  width={250}
                  height={100}
                  />
                <button className='ml-auto'>
                  <img src="/icons/dark_mode.svg" alt="Dark Mode"
                    width={40}
                    height={200}
                    />
                </button>          
              </div>
            <div className="flex flex-col md:flex-row lg:flex-row h-screen">
              <div className="w-full md:w-1/2 py-10 md:pr-20 md:py-24 lg:pr-20">
                <h1 className="text-4xl text-center md:text-left lg:text-left px-2 md:px-10 md:text-6xl lg:text-7xl md:py-16 font-bold mb-6 md:mb-0">Creá tu tienda online en minutos y vendé a todo el mundo!</h1>
                <p className="md:text-2xl text-center px-5 md:px-10 text-lg pb-8 md:text-left lg:text-left">Podes crear promos, descuentos, aceptá pagos online y publicitá tu tienda. ¡Todo lo necesario para explotar tus ventas!</p>
                <button className="hover:bg-slate-700 block mx-auto md:mx-10 md:justify-self-start md:items-self-start rounded-md text-xl bg-slate-950 text-gray-100 px-4 py-2 border-2 border-neutral-800"> Empezar ahora </button>
              </div>
              <div className="hidden lg:flex w-1/2 bg-custom-bg justify-center items-center pb-56">
              <img
                className="max-w-full"
                src="/landing_computer_2.png"
                alt="gif"
                width={700}
                height={100}
                />
                </div>
                <div className="w-full md:hidden lg:hidden h-screen bg-custom-bg flex justify-center items-center">
                <img
                  className="max-w-full"
                  src="/landing_phone_4.png"
                  width={700}
                  height={200}
                  alt="gif"
                />
            </div>
            </div>
          </div>
          <div className="flex justify-center items-center font-bold text-3xl py-96 md:py-36 pb-20 px-4 text-center">
              <h1>
                Mirá cómo crece tu emprendimiento. 
                <br />   
                Te ayudamos en todo.
              </h1>
          </div>
          <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 px-4 py-10 ">
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
          <div className="w-full md:w-1/3 px-4 py-10">
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

          <div className="py-24">
            <div className="flex flex-col lg:flex-row px-10 h-screen">
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
                <h1 className="text-3xl px-4 md:text-6xl font-bold sm:text-3xl mb-4 md:text-center">Te ayudamos todos los dias del año!</h1>
                <p className="md:text-xl text-2x1 text-lg pb-5 px-4 md:text-center">Nuestro equipo esta formado por personas reales, lo que significa que te ayudaremos y acompañaremos en lo que necesites para lograr vender tus productos!</p>
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
              <div className="w-full">
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
                <img className='mr-1' src="/icons/number_one.svg" alt="" width={60}/>
                <h1 className='font-bold py-2 text-xl'> - Elegis tu dominio .com</h1>
              </div>
                <p className='pb-6 px-20'>Tu eliges el logo, los productos y los colores, nosotros te lo colocamos!</p>
                <div className="flex items-center">
                  <img className='mr-1' src="/icons/number_two.svg" alt="" width={60}/>
                  <h1 className='font-bold py-2 text-xl'> - Personalizas tu tienda</h1>
                </div>
                <p className='pb-6 px-20'>Solo nos indicas que productos necesitas y nosotros lo haremos!</p>
                <div className="flex items-center">
                  <img className='mr-1' src="/icons/number_three.svg" alt="" width={60}/>
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
                <img src="/icons/arrow.svg" alt="" width={65} />
              </div>
              <p className='py-2 pb-10 text-lg'> Por supuesto que si, podras manejar tu pagina tanto por tu celular, como una tablet o computadora</p>
              <div className="flex items-center">
                <h1 className='font-bold text-xl'>
                  Puedo aceptar pagos online?
                </h1>
                <img src="/icons/arrow_down.svg" alt="" width={65}/>
              </div>
              <p className='py-2 pb-10 text-lg'>Claro que si, tenemos para aceptar pagos con Mercado Pago, PayPal, Prex y Itau</p>
              <div className="flex items-center text-xl">
                <h1 className='font-bold'>Debo pagar alguna comision por las ventas?</h1>
                <img src="/icons/arrow.svg" alt="" width={65} />
              </div>
              <p className='py-2 pb-10 text-lg'>No, no cobramos ningun tipo de comision ni pagaras abono mensual</p>
              <p className='mx-auto block'>¿Te quedan consultas? </p> <a className='font-bold text-gray-700 justify-end'>Estamos para ayudarte </a>

              <footer>
                <div className='wave wave1'></div>
                <div className='wave wave2'></div>
                <div className='wave wave3'></div>
                <div className='wave wave4'></div>
              </footer>
              <div className='bg-custom-bg w-full py-20'>
              <ul className='social_icon'>
                <li className='flex-wrap'><a href="https://www.instagram.com/globalstorekung/">
                    <img src='/icons/instagram.svg' alt="Logo" width={50}/>
                  </a>
                </li>
                <li className='frex-wrap'><a href="https://www.tiktok.com/@globalstorekung">
                    <img src="/icons/tiktok.svg" alt="Logo" width={50}/>
                  </a>
                </li>
                <li className='frex-wrap'><a href="https://www.tiktok.com/@globalstorekung">
                    <img src="/icons/linkedin.svg" alt="Logo" width={50}/>
                  </a>
                </li>
              </ul>
              <p className='text-center font-bold'>2024 Global Store Kung | All Rights Reserved</p>
              </div>
          </div>
    </main>
    )
}