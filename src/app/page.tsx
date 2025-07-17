'use client';

import React from 'react';
import Head from 'next/head';
import { Star, Settings, FileText, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

const DNSPropertyHomepage = () => {
  return (
    <>
      <Head>
        <title>D&amp;S Property Management | Trusted Rental Management in Great Falls, MT</title>
        <meta
          name="description"
          content="Expert property management services in Great Falls, MT with 20+ years of experience. We handle tenant screening, maintenance, rent collection, and more for stress-free ownership."
        />
        <meta
          name="keywords"
          content="property management Great Falls MT, rental management, tenant screening, property maintenance, rent collection, D&S Property Management"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="D&amp;S Property Management | Trusted Rental Management in Great Falls, MT" />
        <meta
          property="og:description"
          content="Less stress, happier tenants, smarter properties. 20 years of trusted care in Great Falls, Montana."
        />
        <meta property="og:image" content="/images/hero.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "D&S Property Management",
              "image": "/images/hero.jpg",
              "telephone": "+1-406-590-6089",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Great Falls",
                "addressRegion": "MT",
                "postalCode": "59401",
                "addressCountry": "US"
              },
              "url": "https://yourwebsite.com",
              "openingHours": "Mo-Fr 09:00-17:00",
              "priceRange": "$$",
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Hunter Coleman"
                  },
                  "reviewBody": "D and S Property Management is amazing. I had another company helping me before, one of the big players, and I just thought impersonal money collection that kept a tenant in the house was the best I could hope for. Susette makes a real effort. She shows up and knows who is in the house. She behaves how I would if I were maintaining the property myself. I am blown away. If you are sick of feeling like you hope things are going okay at your property, call them. You won't be disappointed."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Amy Belcourt"
                  },
                  "reviewBody": "I couldn't ask for a better landlord, Sue is amazing, hands~on, fixes things in a timely manner. Almost 4 years with this company, Outstanding Management~People Skills,very hard to find."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Donald"
                  },
                  "reviewBody": "Sue is amazing, is very hands on and I couldn't ask for a better representative for D&S Property Management..Thank you so much, Sue!!"
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Jew girl in America"
                  },
                  "reviewBody": "I have rented from this company almost 6 yrs. I haven’t had any negative issues. Things are fixed in a timely manner, Sue, the property manager is amazing. She doesn’t make people feel like just A tenant. She’s cares about people and she’s A very fair person. I have always been able to call her and if she doesn’t answer she calls back immediately . She comes right away to fix issues or call a repair man. I have to add , she is very knowledgeable and a lot of times, can fix things herself. That’s impressive. I have to give a five star rating , I have dealt with property managers in the past that were simply not good people. I have no complaints with Sue whatsoever .."
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "4"
              }
            })
          }}
        />
      </Head>
      <div className="min-h-screen bg-white">


        {/* Hero Section - Added alt text, more CTAs */}
        <section 
          className="relative h-screen flex items-center justify-center"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <Image
            src="/images/hero.jpg"
            alt="Beautiful rental property in Great Falls, MT managed by D&S Property Management"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center text-white px-6 max-w-5xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Less Stress. Happier Tenants.<br />
              Smarter Properties.
            </h1>
            <p className="text-xl md:text-2xl mb-10 font-semibold leading-relaxed" style={{color: '#a54034'}}>
              20 Years of Trusted Property Management in Great Falls, MT — Where Service Still Means Something.
            </p>
            <a 
              href="tel:+14065906089"
              className="text-white px-10 py-5 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block mr-4"
              style={{backgroundColor: '#a54034'}}
              onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#8a2e24'}
              onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#a54034'}
            >
              Call Now: (406) 590-6089
            </a>
            <a 
              href="#contact"
              className="text-white px-10 py-5 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block"
              style={{backgroundColor: '#c8913f'}}
              onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#a76f2d'}
              onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#c8913f'}
            >
              Get a Free Quote
            </a>
          </div>
        </section>

        {/* Testimonials Section - Used real reviews, added more for trust, made scrollable if needed */}
        <section id="testimonials" className="py-20" style={{backgroundColor: '#8aa295'}}>
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Real Reviews from Our Satisfied Clients
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">See why property owners and tenants in Great Falls trust D&amp;S Property Management.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
              {[
                {
                  text: "D and S Property Management is amazing. I had another company helping me before, one of the big players, and I just thought impersonal money collection that kept a tenant in the house was the best I could hope for. Susette makes a real effort. She shows up and knows who is in the house. She behaves how I would if I were maintaining the property myself. I am blown away. If you are sick of feeling like you hope things are going okay at your property, call them. You won't be disappointed.",
                  author: "Hunter Coleman",
                  role: "Local Guide",
                  date: "7 weeks ago"
                },
                {
                  text: "I couldn't ask for a better landlord, Sue is amazing, hands~on, fixes things in a timely manner. Almost 4 years with this company, Outstanding Management~People Skills,very hard to find.",
                  author: "Amy Belcourt",
                  role: "",
                  date: "10 weeks ago"
                },
                {
                  text: "Sue is amazing, is very hands on and I couldn't ask for a better representative for D&S Property Management..Thank you so much, Sue!!",
                  author: "Donald",
                  role: "",
                  date: "11 weeks ago"
                },
                {
                  text: "I have rented from this company almost 6 yrs. I haven’t had any negative issues. Things are fixed in a timely manner, Sue, the property manager is amazing. She doesn’t make people feel like just A tenant. She’s cares about people and she’s A very fair person. I have always been able to call her and if she doesn’t answer she calls back immediately . She comes right away to fix issues or call a repair man. I have to add , she is very knowledgeable and a lot of times, can fix things herself. That’s impressive. I have to give a five star rating , I have dealt with property managers in the past that were simply not good people. I have no complaints with Sue whatsoever ..",
                  author: "Jew girl in America",
                  role: "",
                  date: "12 weeks ago"
                }
              ].map((testimonial, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-red-100/50 rounded-2xl transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
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
                    <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                      “{testimonial.text}“
                    </p>
                    <div className="relative">
                      <div className="w-12 h-0.5 mx-auto mb-3 bg-gradient-to-r from-transparent via-orange-300 to-transparent group-hover:w-16 transition-all duration-300"></div>
                      <p className="font-semibold text-gray-800">— {testimonial.author} {testimonial.role && `(${testimonial.role})`}</p>
                      <p className="text-sm text-gray-500">{testimonial.date}</p>
                    </div>
                    <div className="absolute top-3 right-3 w-1 h-1 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" style={{backgroundColor: '#c8913f'}}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a 
                href="https://www.google.com/search?q=D%26S+Property+Management+Great+Falls+MT#reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                See More Reviews on Google
              </a>
            </div>
          </div>
        </section>

        {/* Proudly Serving Section - Added alt text */}
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
          <Image
            src="/images/GreatFallsOverview.jpg"
            alt="Scenic overview of Great Falls, MT - Home to D&S Property Management"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-20 text-center text-white px-6 max-w-5xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Proudly Serving the Great Falls, MT Community
            </h2>
            <p className="text-xl md:text-2xl mb-10 italic leading-relaxed">
              “Locally rooted. Committed to property owners and tenants across Great Falls.“
            </p>
            <a 
              href="#services"
              className="text-white px-10 py-5 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block"
              style={{backgroundColor: '#a54034'}}
              onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#8a2e24'}
              onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#a54034'}
            >
              Explore Our Property Management Services
            </a>
          </div>
        </section>

        {/* Services Section - Enhanced with keywords */}
        <section id="services" className="py-24" style={{backgroundColor: '#8aa295'}}>
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-800">
              Comprehensive Property Management Services in Great Falls, MT
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">From tenant screening to maintenance and rent collection, we handle it all to maximize your rental income.</p>
            <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {[
                {
                  icon: Settings,
                  title: "Property Maintenance & Repairs",
                  description: "Timely repairs and upkeep to protect your investment and keep tenants happy.",
                  details: "24/7 emergency response with trusted local contractors in Great Falls.",
                  gradient: "from-orange-400 to-red-500"
                },
                {
                  icon: FileText,
                  title: "Thorough Tenant Screening",
                  description: "Background checks for reliable tenants and peace of mind.",
                  details: "Credit checks, references, and employment verification to minimize risks.",
                  gradient: "from-yellow-400 to-orange-500"
                },
                {
                  icon: MessageCircle,
                  title: "Reliable Rent Collection",
                  description: "On-time payments with automated systems to ensure steady cash flow.",
                  details: "Automated collection with detailed financial reporting for transparency.",
                  gradient: "from-red-400 to-pink-500"
                }
              ].map((service, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl transform group-hover:scale-105 transition-all duration-500 shadow-lg"></div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transform scale-95 group-hover:scale-100 transition-all duration-700`}></div>
                  <div className="relative bg-white rounded-3xl p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-white/80 backdrop-blur-sm overflow-hidden">
                    <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-20 group-hover:scale-150 group-hover:opacity-30 transition-all duration-700"></div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-tr from-yellow-200 to-orange-200 rounded-full opacity-20 group-hover:scale-125 group-hover:opacity-40 transition-all duration-500"></div>
                    <div className="flex justify-center mb-10">
                      <div className={`relative w-24 h-24 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                        <service.icon className="relative w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 rounded-2xl border-2 border-white/30 group-hover:border-white/60 transition-colors duration-300"></div>
                        <div className="absolute -inset-2 rounded-3xl border border-orange-300/20 group-hover:border-orange-300/40 group-hover:scale-110 transition-all duration-500"></div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg font-medium">
                      {service.description}
                    </p>
                    <div className="relative">
                      <div className="w-12 h-0.5 mx-auto mb-4 bg-gradient-to-r from-transparent via-orange-300 to-transparent group-hover:w-20 transition-all duration-500"></div>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">
                        {service.details}
                      </p>
                    </div>
                    <div className="absolute inset-0 rounded-3xl border border-gradient-to-r from-orange-200 via-transparent to-red-200 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a 
                href="tel:+14065906089"
                className="text-white px-10 py-5 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block"
                style={{backgroundColor: '#a54034'}}
                onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#8a2e24'}
                onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#a54034'}
              >
                Contact Us for Custom Property Management Solutions
              </a>
            </div>
          </div>
        </section>

        {/* New About Section for Trust */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Why Choose D&amp;S Property Management?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <Image
                  src="/images/about-sue.jpg" // Assume an image of Sue or team
                  alt="Susette from D&S Property Management in Great Falls, MT"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  With over 20 years of experience in Great Falls, MT, D&amp;S Property Management is your local partner for hassle-free rental management. Led by Susette (Sue), we prioritize personal service, quick responses, and building strong relationships with owners and tenants alike.
                </p>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center"><Star className="w-6 h-6 mr-2 text-yellow-500" /> Hands-on management for peace of mind</li>
                  <li className="flex items-center"><Star className="w-6 h-6 mr-2 text-yellow-500" /> Local expertise in Great Falls rental market</li>
                  <li className="flex items-center"><Star className="w-6 h-6 mr-2 text-yellow-500" /> Proven track record of happy clients</li>
                  <li className="flex items-center"><Star className="w-6 h-6 mr-2 text-yellow-500" /> Transparent and fair practices</li>
                </ul>
                <a 
                  href="#contact"
                  className="mt-8 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block"
                  style={{backgroundColor: '#c8913f'}}
                  onMouseEnter={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#a76f2d'}
                  onMouseLeave={(e) => (e.target as HTMLAnchorElement).style.backgroundColor = '#c8913f'}
                >
                  Learn More About Our Team
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section for Engagement - Added simple form */}
        <section id="contact" className="py-20" style={{backgroundColor: '#8aa295'}}>
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              Get in Touch - Let's Manage Your Property Today
            </h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center"><Phone className="w-6 h-6 mr-2 text-red-500" /> <a href="tel:+14065906089">(406) 590-6089</a></li>
                  <li className="flex items-center"><Mail className="w-6 h-6 mr-2 text-red-500" /> info@dnspropertymanagement.com</li>
                  <li className="flex items-center"><MapPin className="w-6 h-6 mr-2 text-red-500" /> Great Falls, MT 59401</li>
                </ul>
                <div className="mt-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.287!2d-111.308!3d47.505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDMwJzE4LjAiTiAxMTDCsDE4JzI4LjgiVw!5e0!3m2!1sen!2sus!4v1620000000000" // Update with actual embed
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="D&S Property Management Location in Great Falls, MT"
                  ></iframe>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h3>
                <form className="space-y-6">
                  <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-lg" required />
                  <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-lg" required />
                  <input type="tel" placeholder="Your Phone" className="w-full p-4 border border-gray-300 rounded-lg" required />
                  <textarea placeholder="How can we help with your property?" className="w-full p-4 border border-gray-300 rounded-lg h-32" required></textarea>
                  <button 
                    type="submit"
                    className="w-full text-white px-10 py-5 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    style={{backgroundColor: '#a54034'}}
                    onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#8a2e24'}
                    onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#a54034'}
                  >
                    Submit Inquiry
                  </button>
                </form>
                <p className="mt-4 text-sm text-gray-500">We'll respond within 24 hours. Your information is secure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer for Trust and SEO */}
        <footer className="bg-gray-800 py-8 text-white">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2025 D&amp;S Property Management. All rights reserved.</p>
            <p className="mt-2">Proudly serving Great Falls, MT with top-rated property management services.</p>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#hero" className="hover:underline">Home</a>
              <a href="#services" className="hover:underline">Services</a>
              <a href="#testimonials" className="hover:underline">Testimonials</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </div>
          </div>
        </footer>

        {/* Custom CSS */}
        <style jsx>{`
          .text-anzac { color: #c8913f; }
          .bg-anzac { background-color: #c8913f; }
          .hover\\:text-anzac:hover { color: #c8913f; }
          
          html {
            scroll-behavior: smooth;
          }
          
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
          
          .gradient-text {
            background: linear-gradient(45deg, #c8913f, #a54034);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          
          .card-hover-effect {
            transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          }
          
          .card-hover-effect:hover {
            transform: translateY(-8px) scale(1.02);
          }
        `}</style>
      </div>
    </>
  );
};

export default DNSPropertyHomepage;