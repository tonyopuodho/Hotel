import React from 'react'

function RoomConfrence() {
     const rooms = [
        {
            img:"src/assets/deluxe.jpeg",
            name:"Deluxe room",
            description:"The Deluxe Room provides a more spacious and refined experience, perfect for guests who want extra comfort. It includes premium bedding, a seating area, enhanced room amenities, and stylish interiors. Guests can enjoy additional features such as a mini-fridge, coffee-making facilities, and scenic views, making it ideal for both business and leisure stays."
        },
         {
            img:"src/assets/exec.jpeg",
            name:"Executive room",
            description:"Our Executive Suite offers luxury and exclusivity for a truly memorable stay. This spacious suite includes a separate living area, a king-sized bed, elegant furnishings, and top-tier amenities. Guests enjoy added benefits such as priority services, a larger bathroom with premium toiletries, and a private workspace, making it perfect for business executives or guests seeking a high-end experience."
        },
        {
            img:"src/assets/imagesstandard.jpeg",
            name:"Standard room",
            description:"Our Standard Room offers a cozy and comfortable space ideal for solo travelers or couples. Thoughtfully designed with modern décor, it features a comfortable bed, a work desk, high-speed Wi-Fi, a flat-screen TV, and an en-suite bathroom with essential toiletries. It’s the perfect choice for guests seeking simplicity, convenience, and value."
        }
    ]
  return (
    <div className='py-16 bg-white'>
        <div className='max-w-7xl md:w-[80%] mx-auto px-2 w-full font-serif'>
            <h1 className='text-3xl text-amber-900 font-extrabold text-center md:text-left'>Our popular rooms</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-10'>
                {
                    rooms.map((item) => (
                        <div className='bg-gray-100 shadow-md rounded-sm flex flex-col'>
                            <img src={item.img} alt="" className='w-full object-cover'/>
                            <h1 className='p-2 text-amber-900 text-xl font-semibold'>{item.name}</h1>
                            <p className='p-2 text-gray-600'>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default RoomConfrence