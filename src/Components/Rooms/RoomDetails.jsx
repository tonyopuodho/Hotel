import React from 'react'

function RoomDetails() {
    const rooms = [
        {
            room:"Deluxe",
            price:"10,000",
            img:"src/assets/deluxe.jpeg"
        },{
            room:"Executive",
            price:"15,000",
            img:"src/assets/exec.jpeg"
        },{
            room:"Standard",
            price:"6,000",
            img:"src/assets/imagesstandard.jpeg"
        }
    ]
  return (
    <div className='py-10'>
        <div className='max-w-7xl md:w-[80%] mx-auto px-2 grid grid-cols-1 gap-5 mt-10 font-serif'>
            {
                rooms.map((item) => (
                    <div className='border  p-2 rounded-sm flex gap-2'>
                        <div className='w-[50%]'>
                            <img src={item.img} className='h-full w-full object-cover object-center' alt="" />
                        </div>
                        <div className='w-[50%] flex flex-col'>
                            <h1 className='text-2xl font-bold text-gray-800'>{item.room}</h1>
                            <h3 className='text-3xl font-extrabold text-gray-600'>from {item.price}</h3>
                            <button className='bg-amber-900 text-white py-2 w-[40%] rounded-sm cursor-pointer mt-5'>More</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default RoomDetails