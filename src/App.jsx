import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'

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