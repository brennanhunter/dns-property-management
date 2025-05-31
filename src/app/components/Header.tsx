'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/70 backdrop-blur-sm' : ''}`}>
      <nav className="container mx-auto px-20 py-16">
        <div className="flex justify-end">
          {/* Navigation Links - Enhanced */}
          <div className="flex space-x-16">
            {['Home', 'About', 'FAQ', 'Contact'].map((item) => (
              <a 
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-white hover:text-anzac transition-all duration-300 font-medium text-lg relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-anzac transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}