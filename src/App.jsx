import React from 'react'
import Navbar from './component/Navbar'
import Hero from './pages/Hero'
import Services from './pages/Service'


const App = () => {
  return (
    <section>
      <Navbar/>
      <Hero/>
      <Services/>
    </section>
  )
}

export default App