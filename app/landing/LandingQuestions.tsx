import React from "react";
import { useState } from "react";
import Image from 'next/image';



export default function LandingQuestions() {

  const [enable, setEnable] = useState(true)
  const imgEnable = enable ? '/icons/arrow.svg' : '/icons/arrow_up.svg'
  
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  
  const textEnable1 = isActive1 ? '' : 'hidden'
  const textEnable2 = isActive2 ? '' : 'hidden'
  const textEnable3 = isActive3 ? '' : 'hidden'
  const textEnable4 = isActive4 ? '' : 'hidden'


  const handleClick1 = () => {
    setIsActive1(!isActive1);
  };

  const handleClick2 = () => {
    setIsActive2(!isActive2);
  };

  const handleClick3 = () => {
    setIsActive3(!isActive3);
  };

  const handleClick4 = () => {
    setIsActive4(!isActive4);
  };
  
  return(
        <div className="flex flex-col justify-center pb-30 md:text-center md:px-40 py-40">
        <h1 className='font-bold pb-16 text-3xl text-center'>
          Preguntas frecuentes
        </h1>

        <div className="flex items-center border-b-2 w-full focus:outline-none cursor-pointer" onClick={handleClick1}>
          <h1 className='px-4 font-bold text-left text-lg w-full'>
            ¿Si eligo algun servicio que requiera pagina web, podré manejar mi pagina en cualquier dispositivo?
          </h1>
          <Image src={imgEnable} alt="" width={50} height={10}/>
        </div>
        <p className={`px-4 py-2 pb-10 text-lg md:text-left ${textEnable1}`}> Si, podrás manejar tu pagina tanto por un celular, una tablet, una laptop o computadora</p>
        <div className="flex items-center border-b-2 w-full focus:outline-none cursor-pointer" onClick={handleClick2}>
          <h1 className='px-4 font-bold text-left text-lg w-full'>
            ¿Cuales son los metodos de pago?
          </h1>
          <Image src={imgEnable} alt="" width={50} height={10}/>
        </div>
        <p className={`px-4 py-2 pb-10 text-lg  md:text-left ${textEnable2}`}>Si, los pagos se hacen mediante transferencia bancaria.</p>
        <div className="flex items-center border-b-2 w-full focus:outline-none cursor-pointer" onClick={handleClick2}>
          <h1 className='px-4 font-bold text-left text-lg w-full'>
            ¿Cuanto tiempo demoran eb realizar mi proyecto?
          </h1>
          <Image src={imgEnable} alt="" width={50} height={10}/>
        </div>
        <p className={`px-4 py-2 pb-10 text-lg  md:text-left ${textEnable2}`}>Dependerá del tipo de servicio que eligas, pero siempre se indicará antes del pago, el tiempo previsto que llevará hacer el proyecto.</p>
        
        <div className="flex items-center border-b-2 w-full focus:outline-none cursor-pointer" onClick={handleClick4}>
          <h1 className='px-4 font-bold text-left text-lg w-full'>
            ¿Ofrecen servicio de mantenimiento despues de crear mi proyecto?
          </h1>
          <Image src={imgEnable} alt="" width={50} height={10}/>
        </div>
        <p className={`px-4 py-2 pb-10 text-lg  md:text-left ${textEnable4}`}>Sí, ofrecemos mantenimiento continuo para asegurar que su proyecto esté siempre actualizado, seguro y funcionando correctamente. Esto incluye actualizaciones de seguridad, copias de seguridad y soporte técnico.</p>

        <div className="py-10"></div>
        <p className='text-center text-xl md:text-2xl'>¿Te quedan consultas? </p> <a className='font-bold text-gray-700 justify-end text-xl md:text-2xl text-center'>Estamos para ayudarte</a>
    </div>
    )
}