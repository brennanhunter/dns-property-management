'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Bear.JPG')",
          backgroundColor: 'var(--color-dark-gray-cyan)'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-2xl shadow-black/50 animate-fade-in">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        className="py-20 px-6 relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-dark-gray-cyan)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h2 
                className="text-4xl font-bold mb-8 drop-shadow-lg"
                style={{ color: 'var(--color-raven-black)' }}
              >
                We&apos;re Ready. Let&apos;s Talk.
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-0 shadow-lg focus:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                    style={{ backgroundColor: 'var(--color-neutral-gray)' }}
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-0 shadow-lg focus:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                    style={{ backgroundColor: 'var(--color-neutral-gray)' }}
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border-0 shadow-lg focus:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                    style={{ backgroundColor: 'var(--color-neutral-gray)' }}
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="px-8 py-3 rounded-lg text-white font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg"
                  style={{ backgroundColor: 'var(--color-dark-red)' }}
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h2 
                className="text-4xl font-bold mb-8 drop-shadow-lg"
                style={{ color: 'var(--color-raven-black)' }}
              >
                Contact Info
              </h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div>
                  <h3 
                    className="text-xl font-semibold mb-2 drop-shadow-sm"
                    style={{ color: 'var(--color-raven-black)' }}
                  >
                    Address
                  </h3>
                  <p 
                    className="text-lg drop-shadow-sm opacity-80"
                    style={{ color: 'var(--color-raven-black)' }}
                  >
                    123 Fifth Avenue, NY 10160, New York, USA
                  </p>
                </div>
                
                {/* Email */}
                <div>
                  <h3 
                    className="text-xl font-semibold mb-2 drop-shadow-sm"
                    style={{ color: 'var(--color-raven-black)' }}
                  >
                    Email Us
                  </h3>
                  <p 
                    className="text-lg drop-shadow-sm opacity-80"
                    style={{ color: 'var(--color-raven-black)' }}
                  >
                    contact@example.com
                  </p>
                </div>
                
                {/* Phone */}
                <div>
                  <h3 
                    className="text-xl font-semibold mb-2 drop-shadow-sm"
                    style={{ color: 'var(--color-raven-black)' }}
                  >
                    Call Us
                  </h3>
                  <p 
                    className="text-lg drop-shadow-sm opacity-80"
                    style={{ color: 'var(--color-raven-black)' }}
                  >
                    800-123-456
                  </p>
                </div>
                
                {/* Social Media */}
                <div>
                  <h3 
                    className="text-xl font-semibold mb-4 drop-shadow-sm"
                    style={{ color: 'var(--color-raven-black)' }}
                  >
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg"
                      style={{ backgroundColor: 'var(--color-dark-red)' }}
                    >
                      <span className="text-sm font-bold">f</span>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg"
                      style={{ backgroundColor: 'var(--color-dark-red)' }}
                    >
                      <span className="text-sm font-bold">t</span>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg"
                      style={{ backgroundColor: 'var(--color-dark-red)' }}
                    >
                      <span className="text-sm font-bold">▶</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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