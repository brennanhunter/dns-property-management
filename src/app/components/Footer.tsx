'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import ContactModal from './ContactModal'; // Adjust path as needed

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <footer className="relative overflow-hidden">
      {/* Call-to-Action Section */}
      <section 
        className="py-16 px-6 text-center text-white relative"
        style={{ backgroundColor: 'var(--color-dark-red)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Ready to Experience Stress-Free Property Management?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the difference of professional property management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              onClick={() => setIsContactModalOpen(true)}
              onMouseEnter={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.backgroundColor = '#f9f9f9';
                target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.backgroundColor = 'white';
                target.style.transform = 'scale(1)';
              }}
            >
              Get Free Quote
            </button>
            <a 
              href="tel:+14065906089"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:bg-white hover:text-gray-800 hover:scale-105 inline-block"
            >
              Call (406) 590-6089
            </a>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <section 
        className="py-16 px-6 relative"
        style={{ backgroundColor: 'var(--color-black-out)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/10 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12 text-white">
            
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-anzac)' }}>
                D&S Property Management
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With 20 years of trusted care in Great Falls, MT, we provide comprehensive property management services where service still means something. Your investment is our priority.
              </p>
              
              {/* Contact Info with Icons */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-dark-red)' }}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Great Falls, Montana</span>
                </div>
                
                <a 
                  href="tel:+14065906089"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-dark-red)' }}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>(406) 590-6089</span>
                </a>
                
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--color-dark-red)' }}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>dspm406@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold mb-6" style={{ color: 'var(--color-anzac)' }}>
                Our Services
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Property Maintenance</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Tenant Screening</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Rent Collection</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Property Marketing</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">Financial Reporting</li>
                <li className="hover:text-white transition-colors duration-300 cursor-pointer">24/7 Emergency Response</li>
              </ul>
            </div>

            {/* Quick Links & Social */}
            <div>
              <h4 className="text-xl font-bold mb-6" style={{ color: 'var(--color-anzac)' }}>
                Connect With Us
              </h4>
              
              {/* Quick Links */}
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>
                  <Link 
                    href="/" 
                    className="hover:text-white transition-colors duration-300 block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a 
                    href="/about" 
                    className="hover:text-white transition-colors duration-300 block"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="/faq" 
                    className="hover:text-white transition-colors duration-300 block"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a 
                    href="/contact" 
                    className="hover:text-white transition-colors duration-300 block"
                  >
                    Contact
                  </a>
                </li>
              </ul>

              {/* Social Media */}
              <div>
                <p className="text-gray-400 mb-4">Follow us:</p>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110" 
                       style={{ backgroundColor: 'var(--color-dark-gray-cyan)' }}
                       onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--color-dark-red)'}
                       onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--color-dark-gray-cyan)'}>
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110" 
                       style={{ backgroundColor: 'var(--color-dark-gray-cyan)' }}
                       onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = 'var(--color-dark-red)')}
                       onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = 'var(--color-dark-gray-cyan)')}>
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110" 
                       style={{ backgroundColor: 'var(--color-dark-gray-cyan)' }}
                       onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = 'var(--color-dark-red)')}
                       onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = 'var(--color-dark-gray-cyan)')}>
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              
              {/* Credentials */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <span className="bg-gray-800 px-3 py-1 rounded-full">Licensed & Insured</span>
                <span className="bg-gray-800 px-3 py-1 rounded-full">20+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">
              Copyright © 2025 D&S Property Management. All rights reserved. 
              <span className="mx-2">|</span>
              Proudly serving Great Falls, Montana since 2005
            </p>
            <p className="text-xs">
          <a
            href="https://xtremery.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse hover:animate-shimmer"
          >
            Pixel-polished by Xtremery · Deland, FL
          </a>
        </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-500/10 to-transparent rounded-full"></div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </footer>
  );
}