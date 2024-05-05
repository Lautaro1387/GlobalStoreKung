import React from "react"

export default function LandingFooter() {
    return(
        <>
         <footer>
            <div className='wave wave1'></div>
            <div className='wave wave2'></div>
            <div className='wave wave3'></div>
            <div className='wave wave4'></div>
        </footer>
        <div className='bg-custom-bg w-full py-10'>
        <ul className='social_icon'>
          <li className='flex-wrap'><a target="_blank" rel="noopener" href="https://www.instagram.com/globalstorekung/">
              <img src='/icons/instagram.svg' alt="Logo" width={50}/>
            </a>
          </li>
          <li className='frex-wrap'><a target="_blank" rel="noopener" href="https://www.tiktok.com/@globalstorekung">
              <img src="/icons/tiktok.svg" alt="Logo" width={50}/>
            </a>
          </li>
          <li className='frex-wrap'><a target="_blank" rel="noopener" href="https://www.tiktok.com/@globalstorekung">
              <img src="/icons/linkedin.svg" alt="Logo" width={50}/>
            </a>
          </li>
        </ul>
        <p className='text-xl text-center font-bold md:text-2xl'>© 2024 Global Store Kung <span className='hidden md:inline'>|</span> <br className=' inline md:hidden'/>Todos los derechos reservados</p>
        </div>
        </>
    )
}