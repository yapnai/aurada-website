'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SignupForm() {
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
              src="/yapn-logo.svg"
              alt="yapn Logo"
              width={80}
              height={80}
              className="w-16 md:w-20 h-16 md:h-20"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Welcome to Yapn!</h2>
          <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-base">
            Thank you for your interest. Our team will contact you within 24 hours to discuss how Yapn can transform your restaurant&apos;s phone ordering experience.
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
    <section id="signup-form" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 md:p-12">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Ready to Scale Your Business? <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Get a Week on Us.</span>
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
                  "Start My Free Week"
                )}
              </button>
            </div>
            
            <p className="text-xs md:text-sm text-gray-400 text-center leading-relaxed px-4">
              By submitting this form, you agree to be contacted by our team to discuss Yapn&apos;s services.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
