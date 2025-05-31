'use client';

import React, {} from 'react';
import { Star, Settings, FileText, MessageCircle } from 'lucide-react';

const DNSPropertyHomepage = () => {



  return (
    <div className="min-h-screen bg-white">
    

      {/* Hero Section - Improved Typography & Spacing */}
      <section 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Less Stress. Happier Tenants.<br />
            Smarter Properties.
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-semibold leading-relaxed" style={{color: '#a54034'}}>
            20 Years of Trusted Care — Where Service Still Means Something.
          </p>
<a 
  href="tel:+14065906089"
  className="text-white px-10 py-5 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block"
  style={{backgroundColor: '#a54034'}}
  onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#8a2e24'}
  onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#a54034'}
>
  Call Now
</a>
        </div>
      </section>

      {/* Testimonials Section - Cleaner Enhanced Cards */}
      <section className="py-20" style={{backgroundColor: '#8aa295'}}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                text: "D&S made renting out my property so easy! Highly recommend.",
                author: "A. Smith"
              },
              {
                text: "Professional, responsive, and trustworthy.",
                author: "J. Davis"
              },
              {
                text: "They handled everything — I just got paid.",
                author: "M. Kelly"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group relative">
                {/* Single clean background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-red-100/50 rounded-2xl transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                {/* Main card */}
                <div className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  
                  {/* Stars with clean spacing */}
                  <div className="flex justify-center mb-6 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-6 h-6 fill-current transform group-hover:scale-110 transition-all duration-300" 
                        style={{
                          color: '#c8913f',
                          transitionDelay: `${i * 30}ms`
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Quote text */}
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                    &ldquo;{testimonial.text}&ldquo;
                  </p>
                  
                  {/* Author with subtle accent */}
                  <div className="relative">
                    <div className="w-12 h-0.5 mx-auto mb-3 bg-gradient-to-r from-transparent via-orange-300 to-transparent group-hover:w-16 transition-all duration-300"></div>
                    <p className="font-semibold text-gray-800">— {testimonial.author}</p>
                  </div>
                  
                  {/* Subtle corner accent */}
                  <div className="absolute top-3 right-3 w-1 h-1 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#c8913f'}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proudly Serving Section - Enhanced with Subtle Animation */}
      <section 
        className="relative flex items-center justify-center"
        style={{
          height: '32rem',
          backgroundImage: "url('/images/GreatFallsOverview.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center -45px',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-20 text-center text-white px-6 max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Proudly Serving the Great Falls, MT Community
          </h2>
          <p className="text-xl md:text-2xl mb-10 italic leading-relaxed">
            &ldquo;Locally rooted. Committed to property owners and tenants across Great Falls.&ldquo;
          </p>
<a 
  href="#services"
  className="text-white px-10 py-5 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block"
  style={{backgroundColor: '#a54034'}}
  onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#8a2e24'}
  onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#a54034'}
>
  See Our Services
</a>
        </div>
      </section>

      {/* Services Section - Super Enhanced Cards */}
      <section id="services" className="py-24" style={{backgroundColor: '#8aa295'}}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-800">
            What We Offer
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                icon: Settings,
                title: "Property Maintenance",
                description: "Timely repairs and upkeep to protect your investment.",
                details: "24/7 emergency response with trusted local contractors",
                gradient: "from-orange-400 to-red-500"
              },
              {
                icon: FileText,
                title: "Tenant Screening",
                description: "Thorough background checks for peace of mind.",
                details: "Credit checks, references, and employment verification",
                gradient: "from-yellow-400 to-orange-500"
              },
              {
                icon: MessageCircle,
                title: "Consistent Rent Payments",
                description: "On-time payments to protect your investment.",
                details: "Automated collection with detailed financial reporting",
                gradient: "from-red-400 to-pink-500"
              }
            ].map((service, index) => (
              <div key={index} className="group relative">
                {/* Animated background layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl transform group-hover:scale-105 transition-all duration-500 shadow-lg"></div>
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transform scale-95 group-hover:scale-100 transition-all duration-700`}></div>
                
                {/* Main card */}
                <div className="relative bg-white rounded-3xl p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-white/80 backdrop-blur-sm overflow-hidden">
                  
                  {/* Floating geometric elements */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-20 group-hover:scale-150 group-hover:opacity-30 transition-all duration-700"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-tr from-yellow-200 to-orange-200 rounded-full opacity-20 group-hover:scale-125 group-hover:opacity-40 transition-all duration-500"></div>
                  
                  {/* Icon container with enhanced styling */}
                  <div className="flex justify-center mb-10">
                    <div className={`relative w-24 h-24 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                      {/* Icon glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                      <service.icon className="relative w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                      
                      {/* Pulsing ring */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-white/30 group-hover:border-white/60 transition-colors duration-300"></div>
                      <div className="absolute -inset-2 rounded-3xl border border-orange-300/20 group-hover:border-orange-300/40 group-hover:scale-110 transition-all duration-500"></div>
                    </div>
                  </div>
                  
                  {/* Title with gradient effect */}
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description with better styling */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg font-medium">
                    &ldquo;{service.description}&ldquo;
                  </p>
                  
                  {/* Details with decorative element */}
                  <div className="relative">
                    <div className="w-12 h-0.5 mx-auto mb-4 bg-gradient-to-r from-transparent via-orange-300 to-transparent group-hover:w-20 transition-all duration-500"></div>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                      {service.details}
                    </p>
                  </div>
                  
                  {/* Subtle animated border */}
                  <div className="absolute inset-0 rounded-3xl border border-gradient-to-r from-orange-200 via-transparent to-red-200 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Custom CSS - Enhanced with Card Effects */}
      <style jsx>{`
        .text-anzac { color: #c8913f; }
        .bg-anzac { background-color: #c8913f; }
        .hover\\:text-anzac:hover { color: #c8913f; }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Enhanced animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(200, 145, 63, 0.3); }
          50% { box-shadow: 0 0 30px rgba(200, 145, 63, 0.6); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: 200px 0; }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        /* Gradient text effect */
        .gradient-text {
          background: linear-gradient(45deg, #c8913f, #a54034);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        /* Card hover effects */
        .card-hover-effect {
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .card-hover-effect:hover {
          transform: translateY(-8px) scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default DNSPropertyHomepage;