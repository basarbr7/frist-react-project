import React from 'react'
import Navbar from './component/Navbar'
import Hero from './pages/Hero'
import Services from './pages/Service'
import Skills from './pages/Skill'
import About from './pages/About'
import Footer from './pages/Footer'


const App = () => {
  return (
    <section>
      <Navbar/>
      <Hero/>
      <Services/>
      <Skills/>
      <Footer/>
    </section>
  )
}

export default App