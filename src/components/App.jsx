import React from 'react'
import Hero from './components/Hero'


import 'lenis/dist/lenis.css'
import { ReactLenis, useLenis } from 'lenis/react'

const App = () => {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })

  return (
    <div className="relative bg-gradient-to-t from-[#4A403A] to-[#F9F8F6] text-zinc-900">
      <ReactLenis root />
      <Hero />
    </div>
  )
}

export default App