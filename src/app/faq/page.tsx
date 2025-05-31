'use client'

import { useState } from 'react'
import { ChevronDown, Users, Home, Phone, Mail, Shield, Calendar } from 'lucide-react'
import Image from 'next/image'

export default function FAQPage() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  const ownerFAQs = [
    {
      id: 'insurance',
      question: 'Are you insured and bonded?',
      answer: 'Yes, I have a Fidelity Bond and carry liability insurance to protect both property owners and tenants.'
    },
    {
      id: 'property-types',
      question: 'What type of properties do you manage?',
      answer: 'I manage single and multifamily apartments, single family homes, mobile homes, and condominiums throughout the Great Falls area.'
    },
    {
      id: 'payments',
      question: 'How and when do you pay owners?',
      answer: 'Rent payments are directly deposited into your account. All rents are collected by the 12th of each month - sometimes earlier, but we like to leave a little room for processing.'
    },
    {
      id: 'reserve',
      question: 'Do you ask for a reserve amount?',
      answer: 'Yes, usually $500.00, but this may vary depending on the specific property and owner needs.'
    },
    {
      id: 'statements',
      question: 'Do you provide monthly statements?',
      answer: 'Yes. Monthly statements show all income and expenses for the month, and we include all receipts for supplies, contractors, and repairs for complete transparency.'
    },
    {
      id: 'screening',
      question: 'How do you screen tenants?',
      answer: 'The application process is thorough and covers rental history, criminal background, and credit worthiness. We verify employment, income, job length, and get landlord references to ensure quality tenants.'
    },
    {
      id: 'inspections',
      question: 'Do you do property inspections?',
      answer: 'Yes. We conduct the first inspection within three months, then annually unless red flags appear that require more frequent monitoring.'
    },
    {
      id: 'vendors',
      question: 'How do you choose vendors and contractors?',
      answer: 'Unless an owner has specific vendors they prefer, we work with trusted contractors we\'ve built relationships with over many years in the Great Falls community.'
    }
  ]

  const tenantFAQs = [
    {
      id: 'apply',
      question: 'How do I apply for a rental?',
      answer: 'Call Sue first to get property details and schedule a viewing. Then complete the online application with the required application fee.'
    },
    {
      id: 'deposits',
      question: 'Do I pay first, last and security deposit?',
      answer: 'Security deposit plus first month\'s rent (or prorated rent) is required. In some instances, last month\'s rent may also be required.'
    },
    {
      id: 'rent-payment',
      question: 'How do I pay rent?',
      answer: 'You can pay rent on-site, through ACH, or Zelle payments for your convenience.'
    },
    {
      id: 'security-refund',
      question: 'Is the security deposit refundable?',
      answer: 'Yes - providing there\'s no damage, the home needs no cleaning (including yard/landscaping), and all utilities are current and paid.'
    },
    {
      id: 'renters-insurance',
      question: 'Is renters\' insurance required?',
      answer: 'Yes. While your landlord has insurance, it doesn\'t cover your belongings, displacement, or accidents caused by tenants or guests. Renters\' insurance typically runs around $12-15 monthly.'
    },
    {
      id: 'maintenance',
      question: 'How do I submit a maintenance request?',
      answer: 'Simply call Sue or send an email. We\'re committed to quick responses for all maintenance needs.'
    },
    {
      id: 'after-hours',
      question: 'Can I reach you after hours?',
      answer: 'Yes. Just give us a call - we\'re available when you need us.'
    },
    {
      id: 'moving-out',
      question: 'What about moving out and giving notice?',
      answer: 'Give 30-day notice. You\'re responsible for the full month\'s rent even if you move early. Security deposits cannot be used for last month\'s rent.'
    },
    {
      id: 'pets',
      question: 'What\'s your pet policy?',
      answer: 'Pet policies vary by property owner. Due to insurance liability, we cannot allow certain breeds including Doberman Pinschers, Akitas, Wolf-Hybrids, Cane Corsos, Pit Bulls, Rottweilers, and Siberian Huskies (full or mixed breeds). Please ask Sue about the specific pet policy for your property of interest.'
    }
  ]

  const AccordionItem = ({ faq, section }: { faq: any, section: string }) => {
    const isOpen = openAccordion === `${section}-${faq.id}`
    
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        <button
          onClick={() => toggleAccordion(`${section}-${faq.id}`)}
          className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
        >
          <span 
            className="text-lg font-semibold drop-shadow-sm"
            style={{ color: 'var(--color-raven-black)' }}
          >
            {faq.question}
          </span>
          <ChevronDown 
            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            style={{ color: 'var(--color-dark-red)' }}
          />
        </button>
        <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-6 pb-5">
            <div 
              className="w-12 h-0.5 mb-4"
              style={{ backgroundColor: 'var(--color-dark-red)' }}
            ></div>
            <p 
              className="text-base leading-relaxed drop-shadow-sm"
              style={{ color: 'var(--color-raven-black)' }}
            >
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/CircleDoor.JPG')",
          backgroundColor: 'var(--color-dark-gray-cyan)'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-2xl shadow-black/50 animate-fade-in">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-white mt-6 drop-shadow-lg">
            Everything you need to know about working with D&S Property Management
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section 
        className="py-20 px-6 relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-dark-gray-cyan)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h2 
                className="text-4xl font-bold mb-6 drop-shadow-lg"
                style={{ color: 'var(--color-dark-red)' }}
              >
                You Have a Choice
              </h2>
              <div 
                className="w-12 h-1 mb-8 shadow-md"
                style={{ backgroundColor: 'var(--color-dark-red)' }}
              ></div>
              <div className="space-y-4 text-lg leading-relaxed drop-shadow-sm" style={{ color: 'var(--color-raven-black)' }}>
                <p>
                  Today's property management industry follows a corporate, online-only structure. It's so prevalent it seems like the only way.
                </p>
                <p className="font-semibold">
                  But you have a choice.
                </p>
                <p>
                  With 20 years of experience, I take personal care in screening quality tenants, maintaining properties, and protecting your property value. My success rate is incredibly high for occupancy, timely rent payments, and satisfied tenants.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/5 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src="/images/UpdatedKitchen.png"
                  alt="Personal property management approach"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Owners FAQ */}
      <section 
        className="py-20 px-6 relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-dark-gray-cyan)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: 'var(--color-dark-red)' }}
              >
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 
              className="text-4xl font-bold mb-4 drop-shadow-lg"
              style={{ color: 'var(--color-dark-red)' }}
            >
              For Property Owners
            </h2>
            <p 
              className="text-lg drop-shadow-sm"
              style={{ color: 'var(--color-raven-black)' }}
            >
              Common questions from property owners about our services
            </p>
          </div>

          <div className="space-y-4">
            {ownerFAQs.map((faq) => (
              <AccordionItem key={faq.id} faq={faq} section="owner" />
            ))}
          </div>
        </div>
      </section>

      {/* Tenants FAQ */}
      <section 
        className="py-20 px-6 relative overflow-hidden"
        style={{ backgroundColor: 'var(--color-dark-gray-cyan)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: 'var(--color-dark-red)' }}
              >
                <Home className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 
              className="text-4xl font-bold mb-4 drop-shadow-lg"
              style={{ color: 'var(--color-dark-red)' }}
            >
              For Tenants
            </h2>
            <p 
              className="text-lg drop-shadow-sm"
              style={{ color: 'var(--color-raven-black)' }}
            >
              Everything you need to know about renting with us
            </p>
          </div>

          <div className="space-y-4">
            {tenantFAQs.map((faq) => (
              <AccordionItem key={faq.id} faq={faq} section="tenant" />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
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
              className="text-4xl font-bold mb-6 drop-shadow-lg"
              style={{ color: 'var(--color-dark-red)' }}
            >
              Still Have Questions?
            </h2>
            <p 
              className="text-lg mb-8 drop-shadow-sm"
              style={{ color: 'var(--color-raven-black)' }}
            >
              Each owner is different in what they want from a property manager. Let's discuss your specific needs and see if we're the right fit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                className="flex items-center px-8 py-4 rounded-xl text-white font-semibold hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: 'var(--color-dark-red)' }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Sue Now
              </button>
              <button 
                className="flex items-center px-8 py-4 rounded-xl text-white font-semibold hover:scale-110 hover:shadow-2xl transition-all duration-300 shadow-lg"
                style={{ backgroundColor: 'var(--color-anzac)' }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </button>
            </div>
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
            123 Fifth Avenue Great Falls, MT | Phone: 555-555-5555 | Email: contact@example.com
          </p>
          <p className="text-sm opacity-75 drop-shadow-md">
            Copyright © 2025 D&S Property Management
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