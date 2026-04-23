import React from 'react'
import Navbar from './Navbar'
import NotesHelper from './utils/NotesHelper'

const Hero = () => {
  return (
    <div className="avif-bg relative w-full h-screen flex justify-center items-center">
      {/* <NotesHelper /> */}
      <h1 className="space-grotesk-bold text-[22rem] font-bold text-gradient text-zinc-900 opacity-25 tracking-tighter leading-none select-none">KRISHNA</h1>
      <img src="/sticker.png" alt="Hero Section" className="absolute -top-9 left-90 w-196 h-fit object-cover drop-shadow-md select-none" loading="lazy"/>
      <Navbar />
    </div>
  )
}

export default Hero