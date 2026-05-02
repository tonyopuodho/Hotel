import React, { useEffect, useState } from 'react'

function Hero() {
    const backgroundImage = [
        "src/assets/jorg-angeli-1tyuLfDOnG0-unsplash.jpg",
        "src/assets/premium_photo-1676321688630-9558e7d2be10.jpg",
        "src/assets/sasha-kaunas-xEaAoizNFV8-unsplash.jpg",
        "src/assets/the-anam-_twiIcIsp2s-unsplash.jpg"
    ]
    const [imageIndex,setImageIndex] = useState(0)
    const [isVisible,setIsVisible] = useState(false)
    useEffect(() => {
        setIsVisible(true)
    },[])
    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prev) => (prev + 1) % backgroundImage.length)
        }, 7000);
        return () => {
            clearInterval(interval)
        }
    },[backgroundImage.length])
  return (
    <div className='relative h-screen md:h-[100vh] overflow-hidden'>
        {/* background image slider with dark overlay */}
        <div className='absolute inset-0 z-0'>
            {/* background overlay */}
            <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-black-70 to-black/40 z-10'></div>
            {/* background images */}
            {
                backgroundImage.map((item,index) => (
                    <div key={index}
                    className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-2000 ${index === imageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                     style={{backgroundImage:`url(${item})`}}></div>
                ))
            }
            {/*content */}
            <div className='relative z-30 flex items-center justify-center h-full'>
                <div className='max-w-7xl md:w-[80%] mx-auto w-full p-2 font-serif flex justify-center items-center flex-col gap-2'>
                    <div className='text-center'>
                        <h1 className='text-white text-4xl md:text-6xl font-extrabold'>Welcome to Mara Hotel</h1>
                        <h1 className='text-white text-4xl md:text-6xl font-extrabold'>Your luxury hotel for vacation</h1> 
                    </div>
                    <div className='flex flex-col md:flex-row gap-10 mt-10'>
                      <button className='py-4 px-12 text-white bg-amber-950 text-xl
                      outline-none
                      rounded-2xl cursor-pointer'>Contact us</button>
                      <button  className='py-4 px-12 text-white bg-transparent border text-xl
                      outline-none transition-all duration-300 hover:bg-amber-950 
                      rounded-2xl cursor-pointer'>Explore more</button>
                    </div>                                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero