import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name:"Amina K",
      review:"I had a wonderful stay at this hotel. The rooms were clean, spacious, and very comfortable. The staff were welcoming and always ready to help. I especially loved the quiet atmosphere—it made my stay very relaxing."
    },{
      id:2,
      name:"Brian O.",
      review:"This hotel exceeded my expectations. The check-in process was smooth, and the service throughout my stay was excellent. The food was delicious, and the facilities were well maintained. I would definitely recommend it."
    },{
      id:3,
      name:"Cynthia M",
      review:"A great place for both business and leisure. The Wi-Fi was fast and reliable, and the workspace in the room was perfect for getting things done. After work, I enjoyed the pool and the peaceful environment."
    }
  ]
  return (
    <div className='py-16 bg-gray-100'>
      <div className='max-w-7xl md:w-[80%] mx-auto px-2 w-full font-serif'>
        <h1 className='text-3xl font-extrabold text-amber-900 text-center md:text-left'>What our clients say</h1>
        <div className='mt-5 grid gap-3 grid-cols-1 md:grid-cols-3'>
          {
              testimonials.map((item,index) => (
                <div key={index} className='p-2 bg-white rounded-sm'>
                  <h1 className='text-xl font-extrabold text-amber-900'>{item.name}</h1>
                  <p className='text-gray-600 text-xl mt-2'><FaQuoteLeft/>{item.review}</p>
                </div>
              ))
          }                
        </div>
      </div>
    </div>
  )
}

export default Testimonials