import React from 'react'
import RegistrationForm from './Components/RegistrationForm'
import Ruff from './Components/Ruff'
import Portfolio from './Components/Portfolio'
import Cht from './Components/Cht'
import Chtp from './Components/Chtp'
import Project from './Components/Project'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import About from './Components/About'


function App() {
  return (
    <div className=' bg-gray-700'>
   <Portfolio />
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
      <Footer/>
      
      
    </div>
  )
}

export default App