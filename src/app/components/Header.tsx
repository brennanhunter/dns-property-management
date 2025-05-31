'use client'

import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'

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
        <div className="flex justify-between items-center">
          {/* Phone Number - Left Side */}
          <a 
            href="tel:+14065906089"
            className="flex items-center gap-3 text-white hover:text-anzac transition-all duration-300 font-medium text-lg group"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-anzac/20 transition-all duration-300">
              <Phone className="w-5 h-5" />
            </div>
            <span className="hidden sm:block">(406) 590-6089</span>
          </a>

          {/* Navigation Links - Right Side */}
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

      <style jsx>{`
        .text-anzac { color: #c8913f; }
        .bg-anzac { background-color: #c8913f; }
        .hover\\:text-anzac:hover { color: #c8913f; }
        .group-hover\\:bg-anzac\\/20:hover { background-color: rgba(200, 145, 63, 0.2); }
      `}</style>
    </header>
  )
}