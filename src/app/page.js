'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const [formData, setFormData] = useState({
    restaurantName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cuisine: '',
    avgOrders: '',
    currentSystem: '',
    challenges: '',
    hearAbout: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form after showing success
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        restaurantName: '',
        ownerName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        cuisine: '',
        avgOrders: '',
        currentSystem: '',
        challenges: '',
        hearAbout: ''
      });
    }, 3000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center">
          <div className="flex items-center justify-center mx-auto mb-6">
            <Image
              src="/aurada-logo.svg"
              alt="Aurada Logo"
              width={80}
              height={80}
              className="w-16 md:w-20 h-16 md:h-20"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Welcome to Aurada!</h2>
          <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-base">
            Thank you for your interest. Our team will contact you within 24 hours to discuss how Aurada can transform your restaurant&apos;s phone ordering experience.
          </p>
          <button 
            onClick={() => setShowSuccess(false)}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 md:px-8 py-3 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium text-sm md:text-base"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

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
                src="/aurada-logo.svg"
                alt="Aurada"
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
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">$299</div>
              <p className="text-gray-300 text-sm md:text-base">per location/month</p>
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
              AI agents act like trained employees, ready to take action while you stay in control. With Aurada, you can handle every order and make it personal—at scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20">
            <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">AI Call & Text Ordering</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Real-time order handling via voice/SMS with immediate confirmation and secure payment links.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Full POS Integrations</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Seamless connection with Toast, Square, PAR, and Olo systems.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Smart Upsell Engine</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Increases average order value by 15-25% through intelligent recommendations.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">Call Analytics Dashboard</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">Weekly metrics on orders, missed calls, upsell success, and customer retention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section id="signup-form" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 md:p-12">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Scale business without <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">scaling your headcount</span>
              </h3>
              <p className="text-base md:text-xl text-gray-300 leading-relaxed px-4">
                Zero hardware required. Operational in 48 hours. Fill out the form below for frictionless adoption.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {/* Restaurant Information */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8">Restaurant Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-300 mb-3">
                      Restaurant Name *
                    </label>
                    <input
                      type="text"
                      id="restaurantName"
                      name="restaurantName"
                      required
                      value={formData.restaurantName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 md:py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300 text-base"
                      placeholder="Enter your restaurant name"
                    />
                  </div>
                  <div>
                    <label htmlFor="cuisine" className="block text-sm font-medium text-gray-300 mb-3">
                      Cuisine Type *
                    </label>
                    <select
                      id="cuisine"
                      name="cuisine"
                      required
                      value={formData.cuisine}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 md:py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white backdrop-blur-xl transition-all duration-300 text-base"
                    >
                      <option value="">Select cuisine type</option>
                      <option value="American">American</option>
                      <option value="Italian">Italian</option>
                      <option value="Chinese">Chinese</option>
                      <option value="Mexican">Mexican</option>
                      <option value="Indian">Indian</option>
                      <option value="Japanese">Japanese</option>
                      <option value="Thai">Thai</option>
                      <option value="Mediterranean">Mediterranean</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-6">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-3">
                    Restaurant Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 md:py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300 text-base"
                    placeholder="Street address"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-3">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 md:py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300 text-base"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-300 mb-3">
                      State *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 md:py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300 text-base"
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-300 mb-3">
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 md:py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300 text-base"
                      placeholder="12345"
                    />
                  </div>
                </div>
              </div>

              {/* Owner Information */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8">Owner Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="ownerName" className="block text-sm font-medium text-gray-300 mb-3">
                      Owner/Manager Name *
                    </label>
                    <input
                      type="text"
                      id="ownerName"
                      name="ownerName"
                      required
                      value={formData.ownerName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 md:py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300 text-base"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 md:py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300 text-base"
                      placeholder="owner@restaurant.com"
                    />
                  </div>
                </div>
                
                <div className="mt-4 md:mt-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 md:py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300 text-base"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Business Information */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8">Business Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="avgOrders" className="block text-sm font-medium text-gray-300 mb-3">
                      Average Phone Orders per Day
                    </label>
                    <select
                      id="avgOrders"
                      name="avgOrders"
                      value={formData.avgOrders}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 md:py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white backdrop-blur-xl transition-all duration-300 text-base"
                    >
                      <option value="">Select range</option>
                      <option value="1-10">1-10 orders</option>
                      <option value="11-25">11-25 orders</option>
                      <option value="26-50">26-50 orders</option>
                      <option value="51-100">51-100 orders</option>
                      <option value="100+">100+ orders</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="currentSystem" className="block text-sm font-medium text-gray-300 mb-3">
                      Current POS System
                    </label>
                    <select
                      id="currentSystem"
                      name="currentSystem"
                      value={formData.currentSystem}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 md:py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white backdrop-blur-xl transition-all duration-300 text-base"
                    >
                      <option value="">Select system</option>
                      <option value="Toast">Toast</option>
                      <option value="Square">Square</option>
                      <option value="PAR">PAR</option>
                      <option value="Olo">Olo</option>
                      <option value="Other">Other</option>
                      <option value="None">No POS system</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-6">
                  <label htmlFor="challenges" className="block text-sm font-medium text-gray-300 mb-3">
                    What phone order challenges do you face?
                  </label>
                  <textarea
                    id="challenges"
                    name="challenges"
                    rows={4}
                    value={formData.challenges}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 md:py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300 text-base"
                    placeholder="e.g., Missed calls during busy periods, order errors, staff training, unanswered calls..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 md:pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 md:py-5 px-6 md:px-8 rounded-xl text-lg md:text-xl font-semibold hover:from-cyan-600 hover:to-blue-600 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 md:h-6 md:w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Setting Up Your Pilot...
                    </div>
                  ) : (
                    'Start My Free 7 Day Pilot'
                  )}
                </button>
              </div>
              
              <p className="text-xs md:text-sm text-gray-400 text-center leading-relaxed px-4">
                By submitting this form, you agree to be contacted by our team to discuss Aurada&apos;s services. Projected 8-15x ROI via reduced labor and increased sales.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
