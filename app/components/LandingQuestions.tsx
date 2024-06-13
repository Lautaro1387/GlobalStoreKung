import React from "react";
import { useState } from "react";
import Image from 'next/image';



export default function LandingQuestions() {

  const [enable, setEnable] = useState(true)
  const imgEnable = enable ? '/icons/arrow.svg' : '/icons/arrow_up.svg'
  
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  
  const textEnable1 = isActive1 ? '' : 'hidden'
  const textEnable2 = isActive2 ? '' : 'hidden'
  const textEnable3 = isActive3 ? '' : 'hidden'

  const handleClick1 = () => {
    setIsActive1(!isActive1);
  };

  const handleClick2 = () => {
    setIsActive2(!isActive2);
  };

  const handleClick3 = () => {
    setIsActive3(!isActive3);
  };
  
  return(
        <div className="flex flex-col justify-center pb-30 md:text-center md:px-96">
        <h1 className='font-bold pb-16 text-3xl text-center'>
          Preguntas frecuentes
        </h1>

        <div className="flex items-center border-t-2 border-b-2 focus:outline-none cursor-pointer" onClick={handleClick1}>
          <h1 className='px-4 font-bold text-lg'>
            ¿La puedo manejar desde cualquier dispositivo?
          </h1>
          <Image src={imgEnable} alt="" width={50} height={10}/>
        </div>
        <p className={`px-4 py-2 pb-10 text-lg md:text-left ${textEnable1}`}> Por supuesto que si, podras manejar tu pagina tanto por tu celular, como una tablet o computadora</p>

        <div className="flex items-center border-b-2 w-full focus:outline-none cursor-pointer" onClick={handleClick2}>
          <h1 className='px-4 font-bold text-left text-lg w-full'>
            ¿Se aceptan pagos online?
          </h1>
          <Image src={imgEnable} alt="" width={50} height={10}/>
        </div>
        <p className={`px-4 py-2 pb-10 text-lg  md:text-left ${textEnable2}`}>Claro que si, tenemos para aceptar pagos con Mercado Pago, PayPal, Prex y Itau</p>

        <div className="flex items-center text-xl border-b-2 w-full focus:outline-none cursor-pointer" onClick={handleClick3}>
            <h1 className='px-4 font-bold text-left text-lg w-full'>¿Debo pagar alguna comision por las ventas?</h1>
            <Image src={imgEnable} alt="" width={50} height={10}/>
        </div>
          <p className={`px-4 py-2 pb-20 text-lg  md:text-left ${textEnable3}`}>No, no cobramos ningun tipo de comision ni pagaras abono mensual</p>
        <div className="py-10"></div>
        <p className='text-center text-xl md:text-2xl'>¿Te quedan consultas? </p> <a className='font-bold text-gray-700 justify-end text-xl md:text-2xl text-center'>Estamos para ayudarte </a>
    </div>
    )
}