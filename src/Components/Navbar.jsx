import React from 'react'
import { navigationLinks } from './constants/links'
import { FaBars } from 'react-icons/fa'

function Navbar() {
  return (
    <div className={`w-full h-[10%] fixed p-2 flex items-center bg-amber-950 font-serif`}>
        <div className={`max-w-7xl w-full md:w-[80%] mx-auto items-center text-white flex justify-between`}>
          <h1 className={`text-3xl md:text-4xl font-extrabold`}>Mara Hotel</h1>
          {/* desktop navigation */}
             <ul className='md:flex justify-between gap-4 hidden'>
            {
                navigationLinks.map((item) => (
                   <li key={item.id} className='text-xl'><a href={item.link}>{item.title}</a></li>     
                ))
            }
          </ul>
          <button className={`hidden md:block py-2 px-8 text-xl rounded-sm cursor-pointer text-amber-950 font-bold bg-white`}>Book now</button>
         <div className={`block md:hidden text-2xl transition-all duration-300 cursor-pointer`}>
            <FaBars/>
         </div>
        </div>        
    </div>
  )
}

export default Navbar