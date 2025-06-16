'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from './components/Header';

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
      <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
        <div className="card-dark rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="flex items-center justify-center mx-auto mb-4">
            <Image
              src="/aurada-logo.svg"
              alt="Aurada Logo"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Welcome to Aurada!</h2>
          <p className="text-gray-300 mb-6">
            Thank you for your interest. Our team will contact you within 24 hours to discuss how Aurada can transform your restaurant&apos;s phone ordering experience.
          </p>
          <button 
            onClick={() => setShowSuccess(false)}
            className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg">
      <Header />

      {/* Hero Section */}
      <section className="pt-4 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <Image
                src="/aurada-logo.svg"
                alt="Aurada"
                width={600}
                height={180}
                className="h-32 w-auto mr-8"
              />
              <div className="w-1 h-16 bg-cyan-500 mr-6"></div>
              <p className="text-2xl text-gray-300 font-light">Speak. Text. Serve.</p>
            </div>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Real-time order handling via voice and SMS with immediate confirmation and secure payment links. Zero hardware required, operational in 48 hours.
            </p>
          </div>

          {/* The Problem Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="card-dark rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-8">The Problem</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Staffing & Cost Struggles</h4>
                    <p className="text-gray-300">High labor costs and constant staff shortages impact your bottom line daily.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Lost Phone Orders</h4>
                    <p className="text-gray-300">You&apos;re losing 30-40% of phone orders, especially during busy times, due to unanswered calls.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Lack of Data Visibility</h4>
                    <p className="text-gray-300">Operating without clear data on call volume, lost orders, or upsell success hinders improvement.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Failing Solutions</h4>
                    <p className="text-gray-300">Existing solutions are often too expensive, slow, or unsuited for busy restaurant needs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl p-8 border border-cyan-500/30">
                <div className="text-center">
                  <div className="text-6xl font-bold text-cyan-400 mb-4">30-40%</div>
                  <p className="text-xl text-white mb-6">of phone orders lost</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-4">$129</div>
                  <p className="text-lg text-white mb-6">per location/month</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-4">8-15x</div>
                  <p className="text-lg text-white">projected ROI</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Solution Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-4">Aurada: Our Solution</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-dark rounded-2xl p-6 border-2 border-cyan-500/30">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">AI Call & Text Ordering</h4>
                <p className="text-gray-300 text-sm">Real-time order handling via voice/SMS with immediate confirmation and secure payment links.</p>
              </div>
              
              <div className="card-dark rounded-2xl p-6 border-2 border-cyan-500/30">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Full POS & Kiosk Integrations</h4>
                <p className="text-gray-300 text-sm">Seamless connection with Toast, Square, PAR, and Olo systems.</p>
              </div>
              
              <div className="card-dark rounded-2xl p-6 border-2 border-cyan-500/30">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Smart Upsell Engine</h4>
                <p className="text-gray-300 text-sm">Increases average order value by 15-25% through intelligent recommendations.</p>
              </div>
              
              <div className="card-dark rounded-2xl p-6 border-2 border-cyan-500/30">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Call Analytics Dashboard</h4>
                <p className="text-gray-300 text-sm">Weekly metrics on orders, missed calls, upsell success, and customer retention.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="card-dark rounded-3xl shadow-2xl p-8 border border-cyan-500/30">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold text-white mb-4">
                Start Your 1-Location Pilot
              </h3>
              <p className="text-gray-300 text-lg">
                Zero hardware required. Operational in 48 hours. Fill out the form below for frictionless adoption.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Restaurant Information */}
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/20">
                <h4 className="text-xl font-semibold text-white mb-6">Restaurant Information</h4>
                <div className="grid md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
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
                
                <div className="mt-6">
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
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Street address"
                  />
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mt-6">
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="12345"
                    />
                  </div>
                </div>
              </div>

              {/* Owner Information */}
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/20">
                <h4 className="text-xl font-semibold text-white mb-6">Owner Information</h4>
                <div className="grid md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="owner@restaurant.com"
                    />
                  </div>
                </div>
                
                <div className="mt-6">
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
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Business Information */}
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-cyan-500/20">
                <h4 className="text-xl font-semibold text-white mb-6">Business Information</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="avgOrders" className="block text-sm font-medium text-gray-300 mb-3">
                      Average Phone Orders per Day
                    </label>
                    <select
                      id="avgOrders"
                      name="avgOrders"
                      value={formData.avgOrders}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
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
                
                <div className="mt-6">
                  <label htmlFor="challenges" className="block text-sm font-medium text-gray-300 mb-3">
                    What phone order challenges do you face?
                  </label>
                  <textarea
                    id="challenges"
                    name="challenges"
                    rows={4}
                    value={formData.challenges}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="e.g., Missed calls during busy periods, order errors, staff training, unanswered calls..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-500 text-white py-4 px-6 rounded-xl text-lg font-semibold hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Setting Up Your Pilot...
                    </div>
                  ) : (
                    'Start My Aurada Pilot - $129/month'
                  )}
                </button>
              </div>
              
              <p className="text-sm text-gray-400 text-center">
                By submitting this form, you agree to be contacted by our team to discuss Aurada&apos;s services. Projected 8-15x ROI via reduced labor and increased sales.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-cyan-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/aurada-logo.svg"
                alt="Aurada Logo"
                width={40}
                height={40}
                className="w-10 h-10 mr-3"
              />
              <span className="ml-2 text-xl font-bold text-white">Aurada</span>
              <span className="ml-4 text-gray-400">Speak. Text. Serve.</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Aurada. All rights reserved. | Privacy Policy | Terms of Service
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
