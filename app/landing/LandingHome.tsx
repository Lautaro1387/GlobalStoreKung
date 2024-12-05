import React from 'react';
import LandingFooter from './LandingFooter';
import LandingQuestions from './LandingQuestions';
import LandingHeader from './LandingHeader';
import Image from 'next/image'
import LandingInfoServices from './LandingInfoServices';


export default function LandingHome() {
    return(
        <main className="flex flex-col items-right justify-between font-extrabold">
          <LandingHeader></LandingHeader>
          <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 pt-20">
            <div className="flex flex-col items-center">
              <Image
                src="/icons/shopping-bag.svg"
                alt=""
                width={48}
                height={48}
              />
              <h1 className="font-bold mt-4 mb-2 text-xl text-center">Creamos tu pagina a tu estilo</h1>
              <p className="text-center">Tu nos pasas la información para el sitio web y nosotros lo creamos, según tus preferencias (se incluye hosting y certificado SSL)!</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 pt-20">
            <div className="flex flex-col items-center">
              <Image
                src="/icons/blog.svg"
                alt=""
                width={48}
                height={48}
              />
              <h1 className="font-bold mt-4 mb-2 text-xl text-center">Diseñamos lo que necesites</h1>
              <p className="text-center">Creamos diseños personalizados para satisfacer las necesidades de nuestros clientes.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 pt-20">
            <div className="flex flex-col items-center">
              <Image
                src="/icons/portfolio.svg"
                alt="explota tus ventas"
                width={48}
                height={48}
              />
              <h1 className="font-bold mt-4 mb-2 text-xl text-center">Automatizamos tu negocio</h1>
              <p className="text-center">Tenemos muchas opciones para mejorar y automatizar tu negocio, solamente necesitamos saber de que tipo de negocio tienes y nosotros nos encargamos del resto.</p>
            </div>
          </div>
        </div>
        <LandingInfoServices />
            <div className="flex justify-center items-center font-bold text-3xl pt-20 md:py-10 pb-10 px-4 text-center">
              <h1 className='flex justify-center items-center p-10 text-4xl font-serif text-gray-800'>
                ¿Por qué elegirnos?
              </h1>
              </div>
          <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 py-10">
            <div className="flex flex-col items-center">
              <Image
                src="/icons/passionate.svg"
                alt=""
                width={48}
                height={48}
              />
              <h1 className="font-bold mt-4 mb-2 text-xl text-center">Pasión</h1>
              <p className="text-center">Tu eliges el logo, los productos y los colores, nosotros te lo colocamos!</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 py-10">
            <div className="flex flex-col items-center">
              <Image
                src="/icons/professional.svg"
                alt=""
                width={48}
                height={48}
              />
              <h1 className="font-bold mt-4 mb-2 text-xl text-center">Profesionales</h1>
              <p className="text-center">Solo nos indicas qué productos necesitas y nosotros lo haremos!</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 py-10">
            <div className="flex flex-col items-center">
              <Image
                src="/icons/support.svg"
                alt="explota tus ventas"
                width={48}
                height={48}
              />
              <h1 className="font-bold mt-4 mb-2 text-xl text-center">Asistencia</h1>
              <p className="text-center">Una vez tengas la página, podrás vender cuantas veces quieras!</p>
            </div>
          </div>
        </div>
        <LandingQuestions></LandingQuestions>
            <LandingFooter></LandingFooter>
    </main>
    )
}