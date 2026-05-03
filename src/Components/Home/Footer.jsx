import React from 'react'
import { FaCopyright, FaFacebook, FaPhone, FaTwitch, FaTwitter, FaWhatsapp } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='py-16 bg-gray-900'>
        <div className='max-w-7xl md:w-[80%] mx-auto font-serif'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <h1 className='text-2xl font-extralight text-white'>Mara Hotel</h1>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-2xl font-extralight text-white'>Follow us</h1>
                  <span className='text-white flex items-center gap-3 text-xl'><FaWhatsapp/> +254794498656</span>   
                  <span className='text-white flex items-center gap-3 text-xl'><FaFacebook/> marahotel</span>
                  <span className='text-white flex items-center gap-3 text-xl'><FaTwitter/> @marahotel</span>     
                </div>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-2xl font-extralight text-white'>Special contacts</h1>
                  <span className='text-white flex items-center gap-3 text-xl'><FaPhone/> +254794498656</span>   
                  <span className='text-white flex items-center gap-3 text-xl'><FaPhone/> +254716818554</span>                   
                </div>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-2xl font-extralight text-white'>Subscribe to news letter</h1>
                  <p className='text-sm text-white'>Hear about our latest offers by signing up to our mailing list.</p>
                 <form action="">
                  <input type="text" className='w-full bg-white p-2 outline-none rounded-sm'/>
                  <button className='bg-amber-950 text-white w-full mt-2 py-2 rounded-sm cursor-pointer text-lg'>Subscribe</button>
                </form>                  
                </div>
            </div>
            <hr  className='mt-5 text-amber-950'/>
            <div className='flex justify-center items-center mt-4 text-amber-900'>
               Copyright <FaCopyright className='ml-2 mr-2'/>  {new Date().getFullYear()} Mara hotel All Rights reserved
            </div>
            
        </div>
    </div>
  )
}

export default Footer