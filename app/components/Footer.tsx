import React from "react"
import Image from 'next/image'
import Link from "next/link"

export default function FooterPage() {
    return (  
        <>
            <footer>
                <div className='bg-gray-800 w-full p-20'>
                <ul className='social_icon'>
                <li className='flex-wrap'><Link target="_blank" rel="noopener" href="https://www.instagram.com/globalstorekung/">
                    <Image src='/icons/instagram.svg' alt="Logo" width={50} height={10}/>
                    </Link>
                </li>
                <li className='frex-wrap'><Link target="_blank" rel="noopener" href="https://www.tiktok.com/@globalstorekung">
                    <Image src="/icons/tiktok.svg" alt="Logo" width={50} height={10}/>
                    </Link>
                </li>
                <li className='frex-wrap'><Link target="_blank" rel="noopener" href="https://www.tiktok.com/@globalstorekung">
                    <Image src="/icons/linkedin.svg" alt="Logo" width={50} height={10}/>
                    </Link>
                </li>
                </ul>
                <p className='text-xl text-center font-bold md:text-xl'>© 2024 Global Store Kung <span className='hidden md:inline'>|</span> <br className=' inline md:hidden'/>Todos los derechos reservados</p>
                </div>
            </footer>
        </>
    )
}
  