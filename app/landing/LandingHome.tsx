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
              <h1 className="font-bold mt-4 mb-2 text-xl text-center">Creamos tu pagina web a tu estilo</h1>
              <p className="text-center font-medium">Nos pasas la información para el sitio web y la creamos según tus preferencias!</p>
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
              <h1 className="font-bold mt-4 mb-2 text-xl text-center">Hosting / Dominio</h1>
              <p className="text-center font-medium">Contamos con servicio para el hosting y dominio de tu pagina web (se incluye certificado SSL)!.</p>
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
              <p className="text-center font-medium">Tenemos muchas opciones para mejorar y automatizar tu negocio, ponte en contacto con nosotros para conocer tus necesidad y nos encargamos del resto.</p>
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
              <p className="text-center font-medium"> Nos apasiona transformar tus ideas en realidades únicas que reflejen tu esencia y visión. Cada detalle, desde los colores hasta el diseño final, está pensado para transmitir lo que te hace especial. Nuestro compromiso es poner creatividad, esfuerzo y dedicación en cada proyecto.

              </p>
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
              <p className="text-center font-medium">Trabajamos con precisión y dedicación. Solo dinos lo que necesitas, y lo haremos realidad de manera eficiente, asegurándonos de superar tus expectativas!</p>
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
              <p className="text-center font-medium">Estamos contigo cuando más lo necesitas. Ya sea para resolver inconvenientes en tu página web o para brindarte ayuda adicional, puedes contar con nuestro respaldo en todo momento. ¡Tu tranquilidad es nuestra prioridad!</p>
            </div>
          </div>
        </div>
        <LandingQuestions></LandingQuestions>
            <LandingFooter></LandingFooter>
    </main>
    )
}