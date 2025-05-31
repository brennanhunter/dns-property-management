'use client'

import { useState } from 'react'
import { Send, User, Mail, Phone, MapPin, MessageSquare, Home, CheckCircle, AlertCircle, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyAddress: '',
    serviceType: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('https://formspree.io/f/xanjwvdz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          'property-address': formData.propertyAddress,
          'service-type': formData.serviceType,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          propertyAddress: '',
          serviceType: '',
          message: ''
        })
        // Scroll to success message
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setSubmitStatus('error')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
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
          <p className="text-xl md:text-2xl text-white/90 mt-6 drop-shadow-lg animate-fade-in">
            Ready to experience stress-free property management?
          </p>
        </div>
      </section>

      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <div className="bg-green-50 border-l-4 border-green-400 p-6 mx-6 mt-6 rounded-r-lg">
          <div className="flex items-center">
            <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-green-800">Message Sent Successfully!</h3>
              <p className="text-green-700">Thank you for contacting us. We&apos;ll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mx-6 mt-6 rounded-r-lg">
          <div className="flex items-center">
            <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-red-800">Something went wrong</h3>
              <p className="text-red-700">Please try again or call us directly at (406) 590-6089.</p>
            </div>
          </div>
        </div>
      )}

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
                Get Your Free Quote
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-raven-black)' }}>
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <User className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full pl-11 pr-4 py-3 rounded-lg border-0 shadow-lg focus:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                          errors.name ? 'ring-2 ring-red-300 bg-red-50' : ''
                        }`}
                        style={{ backgroundColor: errors.name ? '#fef2f2' : 'var(--color-neutral-gray)' }}
                        placeholder="Your full name"
                      />
                    </div>
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-raven-black)' }}>
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <Mail className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-11 pr-4 py-3 rounded-lg border-0 shadow-lg focus:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                          errors.email ? 'ring-2 ring-red-300 bg-red-50' : ''
                        }`}
                        style={{ backgroundColor: errors.email ? '#fef2f2' : 'var(--color-neutral-gray)' }}
                        placeholder="your@email.com"
                      />
                    </div>
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone & Service Type Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-raven-black)' }}>
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <Phone className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full pl-11 pr-4 py-3 rounded-lg border-0 shadow-lg focus:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                          errors.phone ? 'ring-2 ring-red-300 bg-red-50' : ''
                        }`}
                        style={{ backgroundColor: errors.phone ? '#fef2f2' : 'var(--color-neutral-gray)' }}
                        placeholder="(406) 123-4567"
                      />
                    </div>
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-raven-black)' }}>
                      Service Interest
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <Home className="w-5 h-5 text-gray-400" />
                      </div>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 rounded-lg border-0 shadow-lg focus:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none"
                        style={{ backgroundColor: 'var(--color-neutral-gray)' }}
                      >
                        <option value="">Select a service...</option>
                        <option value="full-management">Full Property Management</option>
                        <option value="tenant-screening">Tenant Screening</option>
                        <option value="maintenance">Property Maintenance</option>
                        <option value="rent-collection">Rent Collection</option>
                        <option value="consultation">Free Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Property Address */}
                <div className="relative">
                  <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-raven-black)' }}>
                    Property Address
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <MapPin className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="propertyAddress"
                      value={formData.propertyAddress}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 rounded-lg border-0 shadow-lg focus:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                      style={{ backgroundColor: 'var(--color-neutral-gray)' }}
                      placeholder="123 Main St, Great Falls, MT (optional)"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--color-raven-black)' }}>
                    Message *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-4">
                      <MessageSquare className="w-5 h-5 text-gray-400" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full pl-11 pr-4 py-3 rounded-lg border-0 shadow-lg focus:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none ${
                        errors.message ? 'ring-2 ring-red-300 bg-red-50' : ''
                      }`}
                      style={{ backgroundColor: errors.message ? '#fef2f2' : 'var(--color-neutral-gray)' }}
                      placeholder="Tell us about your property management needs..."
                    />
                  </div>
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-lg text-white font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                  style={{ backgroundColor: 'var(--color-dark-red)' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      SEND MESSAGE
                    </>
                  )}
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
                {/* Location */}
                <div>
                  <h3 
                    className="text-xl font-semibold mb-2 drop-shadow-sm"
                    style={{ color: 'var(--color-raven-black)' }}
                  >
                    Location
                  </h3>
                  <p 
                    className="text-lg drop-shadow-sm opacity-80"
                    style={{ color: 'var(--color-raven-black)' }}
                  >
                    Great Falls, Montana
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
                  <a
                    href="mailto:dspm406@gmail.com"
                    className="text-lg drop-shadow-sm opacity-80 hover:opacity-100 transition-opacity duration-200"
                    style={{ color: 'var(--color-raven-black)' }}
                  >
                    dspm406@gmail.com
                  </a>
                </div>
                
                {/* Phone */}
                <div>
                  <h3 
                    className="text-xl font-semibold mb-2 drop-shadow-sm"
                    style={{ color: 'var(--color-raven-black)' }}
                  >
                    Call Us
                  </h3>
                  <a
                    href="tel:+14065906089"
                    className="text-lg drop-shadow-sm opacity-80 hover:opacity-100 transition-opacity duration-200"
                    style={{ color: 'var(--color-raven-black)' }}
                  >
                    (406) 590-6089
                  </a>
                </div>
                
                {/* Years of Service */}
                <div>
                  <h3 
                    className="text-xl font-semibold mb-2 drop-shadow-sm"
                    style={{ color: 'var(--color-raven-black)' }}
                  >
                    Experience
                  </h3>
                  <p 
                    className="text-lg drop-shadow-sm opacity-80"
                    style={{ color: 'var(--color-raven-black)' }}
                  >
                    20+ Years Serving Great Falls
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
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg"
                      style={{ backgroundColor: 'var(--color-dark-red)' }}
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg"
                      style={{ backgroundColor: 'var(--color-dark-red)' }}
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg"
                      style={{ backgroundColor: 'var(--color-dark-red)' }}
                    >
                      <Linkedin className="w-5 h-5" />
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