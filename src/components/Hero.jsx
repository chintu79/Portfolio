import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Shery from 'sheryjs'

const Hero = () => {
  useEffect(() => {
    // Check if WebGL is available
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('webgl2')

    if (!gl) {
      console.debug('WebGL is not available. Shery effects will be disabled.')
      return
    }

    Shery.imageEffect(".img", {
      style: 2, //Select Style
      config: {
        /* Config made from debug panel */
      },
      preset: "./presets/wigglewobble.json",
    });

    try {
      const textElements = document.querySelectorAll('.text-target')
      if (textElements.length > 0) {
        Shery.textAnimate(".text-target" /* Element to target.*/, {
          //Parameters are optional.
          style: 1,
          y: 10,
          delay: 0.1,
          duration: 2.5,
          ease: "cubic-bezier(0.23, 1, 0.320, 1)",
          multiplier: 0.1,
        })
      }
    } catch (error) {
      console.debug('Shery textAnimate failed:', error)
    }
  }, [])

  return (
    <div className="avif-bg w-full h-screen hero-container">
      <h1 className="text-target space-grotesk-bold text-[22rem] font-bold text-gradient text-zinc-900 opacity-25 tracking-tighter leading-none select-none">KRISHNA</h1>
      <img src="/sticker.png" alt="Hero Section" loading='lazy' className="w-[46rem] h-auto object-cover drop-shadow-xl select-none" />
      <Navbar />
    </div>
  )
}

export default Hero