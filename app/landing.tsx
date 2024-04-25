import React from 'react';

export default function Landing() {
    return(
        <main className="flex flex-col items-right justify-between">
      <div className="bg-custom-bg py-4">

      <div className="px-20">
        <img
          className="relative"
          src="/logo_final.png"
          alt="Logo"
          width={200}
          height={300}
          />
        
      </div>
      <div className="flex px-20 h-screen">
        <div className="w-1/2 py-20">
          <h1 className="text-2x1 font-bold mb-4 text-6xl">Creá tu tienda online en minutos y vendé a todo el mundo!</h1>
          <p className="text-2x1 text-lg pb-5">Podes crear promos, descuentos, aceptá pagos online y publicitá tu tienda. ¡Todo lo necesario para explotar tus ventas!</p>
          <button className="hover:bg-slate-700 rounded-md text-2x1 bg-slate-950 text-gray-100 px-4 py-2 border-2 border-neutral-800">Empieza ahora</button>
        </div>
        <div className="flex px-10 w-1/2 justify-center items-center">
        <img
        className="pb-10"
        src="/landing_test.png"
        alt="gif"
        width={800}
        height={100}
        />
        </div>
      </div>
        </div>
      <div className="flex justify-center items-center font-bold text-4xl px-56 py-20">
        <h1 className="flex">
          Mirá cómo crece tu emprendimiento. 
          Te ayudamos en todo.
        </h1>
      </div>
      <div className="flex px-10">
        <div className="flex flex-col w-1/3 justify-center items-center">
            <img
                src="/shop.svg"
                alt=""
                width={100}
                height={100}
            />
            <h1 className='font-bold px-10 py-2 text-2xl'>Editamos tu pagina según tus preferencias</h1>
            <p className='px-10'>Tu eliges el logo, los productos y los colores, nosotros te lo colocamos!</p>
        </div>
        <div className="flex flex-col w-1/3 justify-center items-center">
            <img
                src="/download.svg"
                alt=""
                width={100}
                height={100}
            />
            <h1 className='font-bold px-10 py-2 text-2xl'>Te cargamos tantos productos como prefieras</h1>
            <p className='px-10'>Solo nos indicas que productos necesitas y nosotros lo haremos!</p>
        </div>
        <div className="flex flex-col w-1/3 justify-center items-center">
            <img
                src="rocket.svg"
                alt="explota tus ventas"
                width={100}
                height={100}
            />
            <h1 className='font-bold px-10 py-2 text-2xl'>Explota tus ventas con nuestras paginas!</h1>
            <p className='px-10'>Una vez tengas la pagina, podras vender cuantas veces quieras</p>
        </div>
      </div>
      <div className="py-40">
        <div className="flex justify-center items-center bg-slate-950 pb-10">
          <h1 className="p-4 font-bold text-slate-100 w-56">ESTAMOS EN LINEA AHORA</h1>
          <button className="hover:bg-slate-700 rounded-md text-2x1 bg-slate-950 text-gray-100 px-4 py-2 border-2 border-neutral-800">Chatea con nosotros</button>
        </div>
      </div>
      <div className="py-40">
        <div className="flex justify-center items-center bg-slate-950 pb-10">
          <h1 className="p-4 font-bold text-slate-100 w-56">PAGO UNICO A TAN SOLO $5000 CON TODO INCLUIDO</h1>
        </div>
      </div>
    </main>
    )
}