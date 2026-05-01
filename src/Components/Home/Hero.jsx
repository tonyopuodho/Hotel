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
        </div>
    </div>
  )
}

export default Hero