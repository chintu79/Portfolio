import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


import 'lenis/dist/lenis.css'
import { ReactLenis, useLenis } from 'lenis/react'

const App = () => {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })

  return (
    <div className="relative p-4 m-4 bg-zinc-200 text-zinc-900">
      <ReactLenis root />
      <Hero />
      <Footer />
    </div>
  )
}

export default App