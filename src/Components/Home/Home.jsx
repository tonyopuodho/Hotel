import React from 'react'
import Hero from './Hero'
import Facilities from './Facilities'
import RoomConfrence from './RoomConfrence'
import Testimonials from './Testimonials'
import Footer from './Footer'

function Home() {
  return (
    <div>
        <Hero/>
        <Facilities/>
        <RoomConfrence/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home