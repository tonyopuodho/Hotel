import React from 'react'

function Facilities() {
    const facilities = [
        {
            img:"src/assets/SPA-Health-Wellness.jpg",
            name:"Spa & Wellness",
            description:"Relax and rejuvenate at our luxurious spa, where a range of treatments are designed to refresh both body and mind. From soothing massages to beauty therapies and wellness programs, our professional therapists ensure a calming experience that leaves you feeling renewed and revitalized."
        },
         {
            img:"src/assets/best-type-of-swimming-pool-for-my-home.jpg",
            name:"Swimming pool",
            description:"Take a refreshing dip in our beautifully maintained swimming pool, perfect for both relaxation and recreation. Whether you want to swim a few laps, unwind by the poolside, or enjoy a sunny afternoon, our pool area offers a serene environment with comfortable loungers and attentive service."
        },
        {
            img:"src/assets/images.jpeg",
            name:"Fitness center",
            description:"Stay active during your stay in our fully equipped fitness center. Featuring modern exercise machines, free weights, and a clean, spacious environment, our gym caters to all fitness levels. Whether you prefer cardio workouts or strength training, you’ll have everything you need to maintain your routine."
        }
    ]
  return (
    <div className='py-16 bg-gray-100 '>
        <div className='max-w-7xl md:w-[80%] w-full px-2 mx-auto font-serif'>
            <h1 className='text-3xl text-amber-900 font-extrabold md:text-left text-center'>Amenities</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-10'>
                {
                    facilities.map((item) => (
                        <div className='bg-white shadow-md rounded-sm flex flex-col'>
                            <img src={item.img} alt="" className='w-full object-cover h-[60%]'/>
                            <h1 className='p-2 text-amber-900 text-xl font-semibold'>{item.name}</h1>
                            <p className='p-2 text-gray-600'>{item.description}</p>
                        </div>
                    ))
                }
            </div>
            <button className='px-8 py-2 text-white bg-amber-950 rounded-2xl text-xl cursor-pointer mt-4'>view all</button>
        </div>
    </div>
  )
}

export default Facilities