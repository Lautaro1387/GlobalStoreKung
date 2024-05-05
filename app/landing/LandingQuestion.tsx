import React from "react"

export default function LandingQuestions() {
    return(
        <div className="flex flex-col justify-center items-center pb-30">
        <h1 className='font-bold pb-16 text-3xl text-center'>
          Preguntas frecuentes
        </h1>

        <div className="flex items-center border-t-2 border-b-2 w-full">
          <h1 className='px-4 font-bold text-left text-lg'>
            ¿La puedo manejar desde cualquier dispositivo?
          </h1>
          <img src="/icons/arrow.svg" alt="" width={50} />
        </div>
        <p className='px-4 py-2 pb-10 text-lg hidden'> Por supuesto que si, podras manejar tu pagina tanto por tu celular, como una tablet o computadora</p>

        <div className="flex items-center border-b-2 w-full">
          <h1 className='px-4 font-bold text-left text-lg w-full'>
            ¿Se aceptan pagos online?
          </h1>
          <img className='text-right items-end justify-end' src="/icons/arrow_down.svg" alt="" width={50}/>
        </div>
        <p className='px-4 py-2 pb-10 text-lg hidden'>Claro que si, tenemos para aceptar pagos con Mercado Pago, PayPal, Prex y Itau</p>

        <div className="flex items-center text-xl border-b-2 w-full">
          <h1 className='px-4 font-bold text-left text-lg '>¿Debo pagar alguna comision por las ventas?</h1>
          <img src="/icons/arrow.svg" alt="" width={50} />
        </div>
        <p className='px-4 py-2 pb-20 text-lg hidden'>No, no cobramos ningun tipo de comision ni pagaras abono mensual</p>

        <p className='text-center'>¿Te quedan consultas? </p> <a className='font-bold text-gray-700 justify-end'>Estamos para ayudarte </a>
    </div>
    )
}