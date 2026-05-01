import { Route, Router, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Rooms from "./Components/Rooms/Rooms"
import Services from "./Components/Services/Services"
import Confrence from "./Components/Confrence/Confrence"
import Contact from "./Components/Contact/Contact"

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="" element={<Home/>}/> 
      <Route path="/about" element={<About/>}/>
      <Route path="/rooms" element={<Rooms/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/confrence" element={<Confrence/>}/>
      <Route path="/contact" element={<Contact/>}/> 
      </Routes>      
    </div>
  )
}

export default App
