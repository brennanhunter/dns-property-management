'use client'

import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/MuralWall.JPG')",
          backgroundColor: 'var(--color-dark-gray-cyan)'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-2xl shadow-black/50 animate-fade-in">
            About D&S Property Management
          </h1>
        </div>
      </section>

      {/* Our Mission Section */}
      <section 
        className="py-20 px-6 relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-dark-gray-cyan)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h2 
                className="text-4xl font-bold mb-6 drop-shadow-lg"
                style={{ color: 'var(--color-dark-red)' }}
              >
                Our Mission
              </h2>
              <div 
                className="w-12 h-1 mb-8 shadow-md"
                style={{ backgroundColor: 'var(--color-dark-red)' }}
              ></div>
              <div className="space-y-4 text-lg leading-relaxed drop-shadow-sm" style={{ color: 'var(--color-raven-black)' }}>
                <p className="hover:scale-105 transition-transform duration-300">
                  DNS Property Management is a locally owned company serving Great Falls, MT.
                </p>
                <p className="hover:scale-105 transition-transform duration-300">
                  We help property owners reduce stress by handling everything from tenant screening to rent collection and maintenance.
                </p>
                <p className="hover:scale-105 transition-transform duration-300">
                  Our goal is simple: happy tenants, protected properties, and peace of mind.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/5 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src="/images/couple.png"
                  alt="Happy couple in front of their home"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Owner Section */}
      <section 
        className="py-20 px-6 relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-dark-gray-cyan)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h2 
                className="text-4xl font-bold mb-6 drop-shadow-lg"
                style={{ color: 'var(--color-dark-red)' }}
              >
                About the Owner
              </h2>
              <div 
                className="w-12 h-1 mb-8 shadow-md"
                style={{ backgroundColor: 'var(--color-dark-red)' }}
              ></div>
              <div className="space-y-4 text-lg leading-relaxed drop-shadow-sm" style={{ color: 'var(--color-raven-black)' }}>
                <p className="hover:scale-105 transition-transform duration-300">
                  DNS Property Management is a locally owned company serving Great Falls, MT.
                </p>
                <p className="hover:scale-105 transition-transform duration-300">
                  We help property owners reduce stress by handling everything from tenant screening to rent collection and maintenance.
                </p>
                <p className="hover:scale-105 transition-transform duration-300">
                  Our goal is simple: happy tenants, protected properties, and peace of mind.
                </p>
              </div>

              <div className="mt-12">
                <h2 
                  className="text-4xl font-bold mb-6 pt-4 drop-shadow-lg"
                  style={{ color: 'var(--color-dark-red)' }}
                >
                  A Message to Tenants
                </h2>
                <div 
                  className="w-12 h-1 mb-8 shadow-md"
                  style={{ backgroundColor: 'var(--color-dark-red)' }}
                ></div>
                <div className="space-y-6 text-lg leading-relaxed drop-shadow-sm" style={{ color: 'var(--color-raven-black)' }}>
                  <p className="hover:scale-105 transition-transform duration-300">
                    DNS Property Management is a locally owned company serving Great Falls, MT.
                  </p>
                  <p className="hover:scale-105 transition-transform duration-300">
                    We help property owners reduce stress by handling everything from tenant screening to rent collection and maintenance.
                  </p>
                  <p className="hover:scale-105 transition-transform duration-300">
                    Our goal is simple: happy tenants, protected properties, and peace of mind.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/5 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src="/images/BrickWallPose.JPG"
                  alt="Property owner standing by brick building"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose DNS Section */}
      <section 
        className="py-20 px-6 relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-dark-gray-cyan)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500">
            <h2 
              className="text-4xl font-bold mb-12 drop-shadow-lg"
              style={{ color: 'var(--color-dark-red)' }}
            >
              Why Property Owners Choose DNS
            </h2>
            <ul className="space-y-6 text-lg mb-12" style={{ color: 'var(--color-raven-black)' }}>
              {[
                "Local experts based in Great Falls, MT",
                "Fast, clear communication with owners & tenants", 
                "Hands-on approach to maintenance & tenant issues",
                "Fair pricing and transparent reporting"
              ].map((item, index) => (
                <li key={index} className="flex items-center justify-center group hover:scale-105 transition-all duration-300">
                  <span 
                    className="w-3 h-3 rounded-full mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300" 
                    style={{ backgroundColor: 'var(--color-raven-black)' }}
                  ></span>
                  <span className="drop-shadow-sm">{item}</span>
                </li>
              ))}
            </ul>
            <button 
              className="px-10 py-4 rounded-xl text-white font-semibold hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-lg"
              style={{ backgroundColor: 'var(--color-dark-red)' }}
            >
              Let's Talk
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="py-8 px-6 text-center text-white relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-black-out)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="mb-4 drop-shadow-lg">
            123 Fifth Avenue Great Falls, MT | Phone: 555-555-5555| Email: contact@example.com
          </p>
          <p className="text-sm opacity-75 drop-shadow-md">
            Copyright © 2025 DNS Property Management
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}