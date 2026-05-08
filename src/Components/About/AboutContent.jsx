import React from 'react'

function AboutContent() {
  return (
    <div className='py-10'>
        <div className='max-w-7xl px-2 md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='w-[100%] h-[50vh]'>
              <div className='rounded-sm shadow-md w-full h-full bg-cover bg-center' style={{backgroundImage:`url(src/assets/sasha-kaunas-xEaAoizNFV8-unsplash.jpg)`}}></div>
            </div>
            <div>
                <p className='text-gray-600 text-xl font-serif'>
                    Located in the heart of Naivasha, Mara Hotel is a perfect blend of comfort, luxury, and authentic Kenyan hospitality. Surrounded by breathtaking scenery and a peaceful atmosphere, our hotel offers guests a relaxing getaway with modern rooms, delicious local and international cuisine, and exceptional customer service. Whether you are visiting for business, adventure, or leisure, Mara Hotel provides a welcoming environment designed to make every stay memorable and enjoyable.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutContent