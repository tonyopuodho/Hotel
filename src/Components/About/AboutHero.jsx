import React from 'react'

function AboutHero() {
  return (
    <div className='relative h-[50vh] w-full'>
        {/* background image slider */}
        <div className='absolute inset-0 z-0'>
            <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-black-70 to-black/40 z-10'></div>
            {/* background image */}
            <div className='absolute inset-0 w-full h-full bg-cover bg-center' style={{backgroundImage:`url(src/assets/sasha-kaunas-xEaAoizNFV8-unsplash.jpg)`}}></div>
            {/* content */}
            <div className='relative z-30 flex items-center justify-center h-full'>
                <div className='max-w-7xl md:w-[80%] mx-auto w-full p-2 font-serif'>
                    <div className='text-left'>
                        <h1 className='text-white text-4xl md:text-6xl font-extrabold'>About us</h1>                       
                    </div>                                                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutHero