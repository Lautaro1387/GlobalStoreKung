import React from 'react';
import LandingFooter from './LandingFooter';
import LandingQuestions from './LandingQuestions';
import LandingHeader from './LandingHeader';
import Image from 'next/image'


export default function LandingHome() {
    return(
        <main className="flex flex-col items-right justify-between">
          <LandingHeader></LandingHeader>
          <div className="flex justify-center items-center font-bold text-3xl py-96 md:py-36 pb-20 px-4 text-center">
              <h1>
               Los servicios que ofrecemos
              </h1>
          </div>
          <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 py-10 md:border-e-2">
            <div className="flex flex-col items-center">
              <Image
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
              <Image
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
              <Image
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
            <LandingQuestions></LandingQuestions>
            <LandingFooter></LandingFooter>
    </main>
    )
}