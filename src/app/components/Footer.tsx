'use client'

export default function Footer() {
  return (
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
  )
}   