'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, Shield, Clock, Heart, Home, CheckCircle, ArrowRight, MapPin, Phone } from 'lucide-react'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Glow Points */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-20 w-24 h-24 bg-gradient-to-r from-yellow-400/15 to-orange-400/15 rounded-full blur-2xl animate-float-1"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gradient-to-r from-red-400/10 to-pink-400/10 rounded-full blur-3xl animate-float-2"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-r from-orange-300/20 to-red-300/20 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-gradient-to-r from-yellow-300/25 to-orange-300/25 rounded-full blur-xl animate-float-3"></div>
      </div>

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/MuralWall.JPG')",
          backgroundColor: 'var(--color-dark-gray-cyan)'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        <div className={`relative z-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl mb-6">
            About D&S Property Management
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg max-w-3xl mx-auto px-6">
            Personal service with genuine care — born and raised in Great Falls
          </p>
        </div>
      </section>

      {/* Meet Sue Section */}
      <section 
        className="py-20 px-6 relative"
        style={{ backgroundColor: 'var(--color-dark-gray-cyan)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-white/10 to-transparent rounded-3xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold drop-shadow-lg" style={{ color: 'var(--color-dark-red)' }}>
                    Meet Sue
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--color-raven-black)' }}>
                  <p className="transform hover:scale-[1.02] transition-all duration-300 text-xl font-medium italic">
                    "My name is Sue, and I&apos;m the owner and operator of D&S Property Management here in beautiful Great Falls, Montana."
                  </p>
                  <p className="transform hover:scale-[1.02] transition-all duration-300">
                    <strong>Born and raised</strong> in this amazing community, I feel truly blessed to call Great Falls home. My Montana roots have shaped the values I bring to my work — <em>hardworking, trustworthy, and reliable service with genuine care for people.</em>
                  </p>
                  <p className="transform hover:scale-[1.02] transition-all duration-300">
                    I&apos;ve been <strong>self-employed my entire working life</strong>, and that experience has given me a strong work ethic and deep respect for the clients and residents I work with. I care for every property as if it were my own, and I treat every resident like a neighbor — because they are!
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3 p-4 bg-white/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-orange-400" />
                    <div>
                      <div className="font-bold text-orange-400">Great Falls</div>
                      <div className="text-sm opacity-80">Born & Raised</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/10 rounded-xl">
                    <Home className="w-6 h-6 text-orange-400" />
                    <div>
                      <div className="font-bold text-orange-400">Personal</div>
                      <div className="text-sm opacity-80">One-on-One Service</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/BrickWallPose.JPG"
                    alt="Sue, owner of D&S Property Management"
                    width={500}
                    height={400}
                    className="transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section 
        className="py-20 px-6 relative"
        style={{ backgroundColor: 'var(--color-dark-gray-cyan)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-16 items-center">
            <div className="flex justify-center order-2 md:order-1 md:col-span-2">
              <div className="relative group">
                <div className="absolute -inset-8 bg-gradient-to-l from-orange-400/20 to-red-400/20 rounded-3xl blur-3xl opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/Events.jpg"
                    alt="Happy family - the heart of Great Falls community"
                    width={800}
                    height={600}
                    className="transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="absolute -inset-6 bg-gradient-to-l from-white/10 to-transparent rounded-3xl blur-xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold drop-shadow-lg" style={{ color: 'var(--color-dark-red)' }}>
                    Family & Community
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'var(--color-raven-black)' }}>
                  <p className="transform hover:scale-[1.02] transition-all duration-300">
                    When I&apos;m not managing properties, I&apos;m likely spending time with my <strong>4-year-old granddaughter and 8-year-old niece</strong>. Whether we&apos;re walking the dogs, swimming, or playing make-believe (vet, motel, coffee shop, salon — you name it!), we&apos;re always making memories.
                  </p>
                  <p className="transform hover:scale-[1.02] transition-all duration-300">
                    We rope in my daughter too and cherish every moment together. And yes... <em>lots of Bluey lately!</em> 😊
                  </p>
                  <p className="transform hover:scale-[1.02] transition-all duration-300">
                    I also have a passion for <strong>great music and delicious food</strong>, and I love discovering both the new and nostalgic sides of Great Falls. This community isn&apos;t just where I work — it&apos;s where my heart is.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-white/10 rounded-xl border-l-4 border-orange-400">
                  <p className="italic font-medium text-orange-400">
                    "I treat every resident like a neighbor — because they are!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Sue & D&S Section */}
      <section 
        className="py-20 px-6 relative"
        style={{ backgroundColor: 'var(--color-dark-gray-cyan)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-orange-400/10 to-red-400/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl font-bold drop-shadow-lg" style={{ color: 'var(--color-dark-red)' }}>
                  Why Work with Sue?
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[
                  { icon: Heart, text: "Personal, one-on-one service — you work directly with Sue", highlight: "No call centers" },
                  { icon: MapPin, text: "Born and raised in Great Falls with deep local knowledge", highlight: "True local expertise" },
                  { icon: Home, text: "Treats every property like her own with genuine care", highlight: "Personal investment" },
                  { icon: Shield, text: "Self-employed work ethic with proven reliability", highlight: "Trusted service" },
                  { icon: Clock, text: "Responsive communication and prompt attention", highlight: "Always available" },
                  { icon: CheckCircle, text: "Honest, transparent service with no hidden surprises", highlight: "Montana values" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-left group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium mb-1" style={{ color: 'var(--color-raven-black)' }}>{item.text}</p>
                      <p className="text-sm text-orange-400 font-semibold">{item.highlight}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-8 p-6 bg-white/10 rounded-xl">
                <p className="text-xl font-medium italic mb-4" style={{ color: 'var(--color-dark-red)' }}>
                  "Thank you for considering D&S Property Management. Whether you&apos;re a property owner or someone looking for housing, I look forward to serving you."
                </p>
                <p className="text-lg font-semibold text-orange-400">— Sue</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg"
                  style={{ backgroundColor: 'var(--color-dark-red)' }}
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+14065906089"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white hover:text-gray-800 hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Sue: (406) 590-6089
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
          33% { transform: translateY(-20px) translateX(10px); opacity: 0.7; }
          66% { transform: translateY(10px) translateX(-15px); opacity: 0.5; }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          25% { transform: translateY(15px) translateX(-20px); opacity: 0.6; }
          50% { transform: translateY(-10px) translateX(25px); opacity: 0.4; }
          75% { transform: translateY(20px) translateX(-10px); opacity: 0.7; }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
          40% { transform: translateY(-25px) translateX(15px); opacity: 0.8; }
          80% { transform: translateY(15px) translateX(-20px); opacity: 0.3; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 12s ease-in-out infinite;
        }
        
        .animate-float-3 {
          animation: float-3 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}