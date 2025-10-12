'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';
import SignupForm from './components/SignupForm';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Expanded descriptions for each capability
  const capabilityDetails = {
    'voice-text': {
      title: 'Voice + Text AI',
      description: 'Advanced AI agents handle both voice calls and text messages with natural language processing. Customers can place orders conversationally without navigating complex menus or waiting on hold. Supports multiple languages and accents.',
      features: ['Natural conversation flow', 'Multi-language support', 'No menu navigation needed', 'Instant order confirmation']
    },
    'pos-injection': {
      title: 'POS Order Injection',
      description: 'Seamlessly integrates with your existing POS system to automatically input structured orders. No manual entry required - orders flow directly from AI conversations into your kitchen workflow.',
      features: ['Toast, Square, PAR, Olo integration', 'Automatic order formatting', 'Real-time kitchen updates', 'No double entry needed']
    },
    'menu-intelligence': {
      title: 'Menu Intelligence',
      description: 'AI understands your complete menu including modifiers, combos, and dietary restrictions. Handles complex customizations and suggests alternatives for unavailable items.',
      features: ['Modifier management', 'Dietary preference handling', 'Combo meal recognition', 'Alternative suggestions']
    },
    'upsell-engine': {
      title: 'USE (Upsell Engine)',
      description: 'Data-driven upselling that analyzes customer behavior, order history, and real-time inventory to suggest high-conversion add-ons at the perfect moment in the conversation.',
      features: ['Behavioral analysis', 'Inventory-aware suggestions', 'Perfect timing optimization', '15-25% AOV increase']
    },
    'payments': {
      title: 'Payments',
      description: 'Secure payment processing with multiple options. Send SMS payment links for card payments or confirm cash/card on pickup. PCI compliant with fraud protection.',
      features: ['SMS payment links', 'Pay-on-pickup options', 'PCI compliance', 'Fraud protection']
    },
    'order-status': {
      title: 'Order Status + FAQs',
      description: 'Handles common customer inquiries without staff intervention. Provides real-time order status, operating hours, location info, and answers frequently asked questions.',
      features: ['Real-time order tracking', 'Operating hours info', 'FAQ automation', 'Location details']
    },
    'catering': {
      title: 'Catering Support',
      description: 'Specialized handling for large, complex catering orders. Manages multi-item orders, special timing requirements, delivery coordination, and payment processing for high-ticket sales.',
      features: ['Large order management', 'Timing coordination', 'Delivery scheduling', 'High-ticket processing']
    },
    'store-logic': {
      title: 'Store Logic',
      description: 'Customizable business rules for each location. Set specific operating hours, promotional campaigns, menu availability, and language preferences for multi-location management.',
      features: ['Location-specific hours', 'Promotional campaigns', 'Menu availability rules', 'Multi-language support']
    },
    'analytics': {
      title: 'Analytics Report',
      description: 'Comprehensive reporting dashboard with call volume, conversion rates, upsell success, customer behavior patterns, and revenue impact across all locations.',
      features: ['Call volume tracking', 'Conversion analytics', 'Revenue impact reports', 'Chain-wide insights']
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-12 md:pt-24 pb-16 md:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 md:mb-20">
            <div className="flex flex-col md:flex-row items-center justify-center mb-8 md:mb-12">
              <Image
                src="/yapn-logo.svg"
                alt="yapn"
                width={600}
                height={180}
                className="h-20 md:h-32 w-auto mb-4 md:mb-0 md:mr-8"
              />
              <div className="hidden md:block w-px h-20 bg-gradient-to-b from-cyan-500 to-blue-500 mr-8"></div>
              <p className="text-xl md:text-3xl text-gray-300 font-light tracking-wide">Speak. Text. Serve.</p>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight px-4">
              AI agents for all your <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">restaurant orders</span>
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Real-time order handling via voice and SMS with immediate confirmation and secure payment links. Zero hardware required, operational in 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <button
                onClick={() => document.getElementById('signup-form').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 md:px-10 py-4 rounded-xl text-base md:text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Pilot
              </button>
              <button className="border border-white/20 text-white px-8 md:px-10 py-4 rounded-xl text-base md:text-lg font-semibold hover:bg-white/5 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-20 px-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">30-40%</div>
              <p className="text-gray-300 text-sm md:text-base">of phone orders lost</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">$0.20</div>
              <p className="text-gray-300 text-sm md:text-base">Starting price per minute</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">8-15x</div>
              <p className="text-gray-300 text-sm md:text-base">projected ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Restaurants deserve more than <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">lost orders and high costs</span>
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Today&apos;s restaurants face endless staffing challenges, missed calls, and lack of data—yet they&apos;re expected to deliver perfect service at scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Staffing & Cost Struggles</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">High labor costs and constant staff shortages impact your bottom line daily.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Lost Phone Orders</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">You&apos;re losing 30-40% of phone orders, especially during busy times, due to unanswered calls.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Lack of Data Visibility</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Operating without clear data on call volume, lost orders, or upsell success hinders improvement.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Failing Solutions</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Existing solutions are often too expensive, slow, or unsuited for busy restaurant needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              A new approach to <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">restaurant ordering</span>
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              AI agents act like trained employees, ready to take action while you stay in control. With Yapn, you can handle every order and make it personal—at scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20">
            {/* Voice + Text AI */}
            <div 
              className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group relative cursor-pointer"
              onMouseEnter={() => setHoveredCard('voice-text')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Voice + Text AI</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Voice & text ordering — skip menus and hold times</p>
              
              {/* Hover Overlay */}
              {hoveredCard === 'voice-text' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-full w-80 md:w-96 bg-gradient-to-br from-cyan-500/95 to-blue-500/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 z-50 animate-in fade-in duration-200 shadow-2xl border border-white/20">
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{capabilityDetails['voice-text'].title}</h3>
                    <p className="text-white/90 leading-relaxed text-sm md:text-base">{capabilityDetails['voice-text'].description}</p>
                    <div>
                      <h4 className="text-white font-medium mb-3 text-sm md:text-base">Key Features:</h4>
                      <ul className="space-y-3">
                        {capabilityDetails['voice-text'].features.map((feature, index) => (
                          <li key={index} className="flex items-start text-white/90 text-sm md:text-base">
                            <svg className="w-4 h-4 md:w-5 md:h-5 mr-3 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Arrow pointing to card */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-cyan-500/95"></div>
                </div>
              )}
            </div>
            
            {/* POS Order Injection */}
            <div 
              className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group relative cursor-pointer"
              onMouseEnter={() => setHoveredCard('pos-injection')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">POS Order Injection</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Structured orders into Toast, Square, etc.</p>
              
              {/* Hover Overlay */}
              {hoveredCard === 'pos-injection' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-full w-80 md:w-96 bg-gradient-to-br from-cyan-500/95 to-blue-500/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 z-50 animate-in fade-in duration-200 shadow-2xl border border-white/20">
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{capabilityDetails['pos-injection'].title}</h3>
                    <p className="text-white/90 leading-relaxed text-sm md:text-base">{capabilityDetails['pos-injection'].description}</p>
                    <div>
                      <h4 className="text-white font-medium mb-3 text-sm md:text-base">Key Features:</h4>
                      <ul className="space-y-3">
                        {capabilityDetails['pos-injection'].features.map((feature, index) => (
                          <li key={index} className="flex items-start text-white/90 text-sm md:text-base">
                            <svg className="w-4 h-4 md:w-5 md:h-5 mr-3 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Arrow pointing to card */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-cyan-500/95"></div>
                </div>
              )}
            </div>
            
            {/* Menu Intelligence */}
            <div 
              className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group relative cursor-pointer"
              onMouseEnter={() => setHoveredCard('menu-intelligence')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Menu Intelligence</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Handles modifiers, combos, and dietary preferences</p>
              
              {/* Hover Overlay */}
              {hoveredCard === 'menu-intelligence' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-full w-80 md:w-96 bg-gradient-to-br from-cyan-500/95 to-blue-500/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 z-50 animate-in fade-in duration-200 shadow-2xl border border-white/20">
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{capabilityDetails['menu-intelligence'].title}</h3>
                    <p className="text-white/90 leading-relaxed text-sm md:text-base">{capabilityDetails['menu-intelligence'].description}</p>
                    <div>
                      <h4 className="text-white font-medium mb-3 text-sm md:text-base">Key Features:</h4>
                      <ul className="space-y-3">
                        {capabilityDetails['menu-intelligence'].features.map((feature, index) => (
                          <li key={index} className="flex items-start text-white/90 text-sm md:text-base">
                            <svg className="w-4 h-4 md:w-5 md:h-5 mr-3 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Arrow pointing to card */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-cyan-500/95"></div>
                </div>
              )}
            </div>
            
            {/* USE (Upsell Engine) */}
            <div 
              className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group relative cursor-pointer"
              onMouseEnter={() => setHoveredCard('upsell-engine')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">USE (Upsell Engine)</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Suggests data-backed, real-time, high-conversion add-ons</p>
              
              {/* Hover Overlay */}
              {hoveredCard === 'upsell-engine' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-full w-80 md:w-96 bg-gradient-to-br from-cyan-500/95 to-blue-500/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 z-50 animate-in fade-in duration-200 shadow-2xl border border-white/20">
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{capabilityDetails['upsell-engine'].title}</h3>
                    <p className="text-white/90 leading-relaxed text-sm md:text-base">{capabilityDetails['upsell-engine'].description}</p>
                    <div>
                      <h4 className="text-white font-medium mb-3 text-sm md:text-base">Key Features:</h4>
                      <ul className="space-y-3">
                        {capabilityDetails['upsell-engine'].features.map((feature, index) => (
                          <li key={index} className="flex items-start text-white/90 text-sm md:text-base">
                            <svg className="w-4 h-4 md:w-5 md:h-5 mr-3 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Arrow pointing to card */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-cyan-500/95"></div>
                </div>
              )}
            </div>
            
            {/* Payments */}
            <div 
              className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group relative cursor-pointer"
              onMouseEnter={() => setHoveredCard('payments')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Payments</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Secure SMS payment links or pay-on-pickup confirmations</p>
              
              {/* Hover Overlay */}
              {hoveredCard === 'payments' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-full w-80 md:w-96 bg-gradient-to-br from-cyan-500/95 to-blue-500/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 z-50 animate-in fade-in duration-200 shadow-2xl border border-white/20">
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{capabilityDetails['payments'].title}</h3>
                    <p className="text-white/90 leading-relaxed text-sm md:text-base">{capabilityDetails['payments'].description}</p>
                    <div>
                      <h4 className="text-white font-medium mb-3 text-sm md:text-base">Key Features:</h4>
                      <ul className="space-y-3">
                        {capabilityDetails['payments'].features.map((feature, index) => (
                          <li key={index} className="flex items-start text-white/90 text-sm md:text-base">
                            <svg className="w-4 h-4 md:w-5 md:h-5 mr-3 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Arrow pointing to card */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-cyan-500/95"></div>
                </div>
              )}
            </div>
            
            {/* Order Status + FAQs */}
            <div 
              className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group relative cursor-pointer"
              onMouseEnter={() => setHoveredCard('order-status')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Order Status + FAQs</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Answers &quot;Is it ready?&quot;, &quot;Are you open?&quot;, etc., without staff</p>
              
              {/* Hover Overlay */}
              {hoveredCard === 'order-status' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-full w-80 md:w-96 bg-gradient-to-br from-cyan-500/95 to-blue-500/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 z-50 animate-in fade-in duration-200 shadow-2xl border border-white/20">
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{capabilityDetails['order-status'].title}</h3>
                    <p className="text-white/90 leading-relaxed text-sm md:text-base">{capabilityDetails['order-status'].description}</p>
                    <div>
                      <h4 className="text-white font-medium mb-3 text-sm md:text-base">Key Features:</h4>
                      <ul className="space-y-3">
                        {capabilityDetails['order-status'].features.map((feature, index) => (
                          <li key={index} className="flex items-start text-white/90 text-sm md:text-base">
                            <svg className="w-4 h-4 md:w-5 md:h-5 mr-3 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Arrow pointing to card */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-cyan-500/95"></div>
                </div>
              )}
            </div>
            
            {/* Catering Support */}
            <div 
              className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group relative cursor-pointer"
              onMouseEnter={() => setHoveredCard('catering')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Catering Support</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Handles complex, high-ticket orders end-to-end</p>
              
              {/* Hover Overlay */}
              {hoveredCard === 'catering' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-full w-80 md:w-96 bg-gradient-to-br from-cyan-500/95 to-blue-500/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 z-50 animate-in fade-in duration-200 shadow-2xl border border-white/20">
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{capabilityDetails['catering'].title}</h3>
                    <p className="text-white/90 leading-relaxed text-sm md:text-base">{capabilityDetails['catering'].description}</p>
                    <div>
                      <h4 className="text-white font-medium mb-3 text-sm md:text-base">Key Features:</h4>
                      <ul className="space-y-3">
                        {capabilityDetails['catering'].features.map((feature, index) => (
                          <li key={index} className="flex items-start text-white/90 text-sm md:text-base">
                            <svg className="w-4 h-4 md:w-5 md:h-5 mr-3 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Arrow pointing to card */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-cyan-500/95"></div>
                </div>
              )}
            </div>
            
            {/* Store Logic */}
            <div 
              className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group relative cursor-pointer"
              onMouseEnter={() => setHoveredCard('store-logic')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Store Logic</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Location-specific rules (hours, promos, languages, etc.)</p>
              
              {/* Hover Overlay */}
              {hoveredCard === 'store-logic' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-full w-80 md:w-96 bg-gradient-to-br from-cyan-500/95 to-blue-500/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 z-50 animate-in fade-in duration-200 shadow-2xl border border-white/20">
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{capabilityDetails['store-logic'].title}</h3>
                    <p className="text-white/90 leading-relaxed text-sm md:text-base">{capabilityDetails['store-logic'].description}</p>
                    <div>
                      <h4 className="text-white font-medium mb-3 text-sm md:text-base">Key Features:</h4>
                      <ul className="space-y-3">
                        {capabilityDetails['store-logic'].features.map((feature, index) => (
                          <li key={index} className="flex items-start text-white/90 text-sm md:text-base">
                            <svg className="w-4 h-4 md:w-5 md:h-5 mr-3 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Arrow pointing to card */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-cyan-500/95"></div>
                </div>
              )}
            </div>
            
            {/* Analytics Report */}
            <div 
              className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group relative cursor-pointer"
              onMouseEnter={() => setHoveredCard('analytics')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Analytics Report</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Tracks volume, upsells, and caller behavior chain-wide</p>
              
              {/* Hover Overlay */}
              {hoveredCard === 'analytics' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-full w-80 md:w-96 bg-gradient-to-br from-cyan-500/95 to-blue-500/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 z-50 animate-in fade-in duration-200 shadow-2xl border border-white/20">
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{capabilityDetails['analytics'].title}</h3>
                    <p className="text-white/90 leading-relaxed text-sm md:text-base">{capabilityDetails['analytics'].description}</p>
                    <div>
                      <h4 className="text-white font-medium mb-3 text-sm md:text-base">Key Features:</h4>
                      <ul className="space-y-3">
                        {capabilityDetails['analytics'].features.map((feature, index) => (
                          <li key={index} className="flex items-start text-white/90 text-sm md:text-base">
                            <svg className="w-4 h-4 md:w-5 md:h-5 mr-3 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Arrow pointing to card */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-cyan-500/95"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <SignupForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}
