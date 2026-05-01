import React, { useState } from 'react'
import { navigationLinks } from './constants/links'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div className={`w-full h-[10%] fixed p-2 flex items-center bg-amber-950 shadow-md font-serif z-50`}>
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
         <div className={`block md:hidden text-2xl transition-all duration-300 cursor-pointer`} onClick={ () => setIsOpen(!isOpen)}>
        
            {
                isOpen ? <FaTimes/> : <FaBars/>
            }
         </div>
        </div>
        {/* mobile navigation */}
        <div className={`absolute md:hidden ${isOpen ? 'left-0': 'left-[-100%]' } transition-all duration-400 h-[100vh] bottom-0 inset-0 w-[80%] bg-amber-950 z-60`}>
            <ul className={`mt-20 ml-20`}>
                {
                    navigationLinks.map((item) => (
                        <li key={item.id} className={`text-2xl text-white mb-2`} onClick={() => setIsOpen(!isOpen)}><a href={item.link}>{item.title}</a></li>
                    ))
                }
            </ul>
            <button className={`w-[90%] ml-4 mt-10 md:block py-2 px-8 text-xl rounded-sm cursor-pointer text-amber-950 font-bold bg-white`}>Book now</button>
        </div>
    </div>
  )
}

export default Navbar