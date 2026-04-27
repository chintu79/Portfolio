import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Shery from "sheryjs";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

Shery.mouseFollower({
  //Parameters are optional.
  skew: false,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.7,
  debug: false,
});


const App = () => {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024) // desktop breakpoint
    }

    checkScreen()
    window.addEventListener('resize', checkScreen)

    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  if (!isDesktop) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#4A403A] text-[#F9F8F6] text-center px-6">
        <p className="text-xl md:text-2xl font-semibold">
          Some portfolios are meant to be seen on big screens.
        </p>
      </div>
    )
  }

  return (
    <div className="relative bg-gradient-to-t from-[#4A403A] to-[#F9F8F6] text-zinc-900">
      <Hero />
    </div>
  )
}

export default App