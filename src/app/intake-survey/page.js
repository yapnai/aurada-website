'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function IntakeSurvey() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Business Basics
    businessCategory: '',
    website: '',
    socialMedia: '',
    contactRole: '',
    
    // Hours & Schedule
    operatingHours: {
      monday: { open: '', close: '', closed: false },
      tuesday: { open: '', close: '', closed: false },
      wednesday: { open: '', close: '', closed: false },
      thursday: { open: '', close: '', closed: false },
      friday: { open: '', close: '', closed: false },
      saturday: { open: '', close: '', closed: false },
      sunday: { open: '', close: '', closed: false }
    },
    holidayHours: [],
    specialEventHours: '',
    
    // Menu & Dietary Info
    allergenOptions: [],
    dietaryOptions: [],
    dietaryHandling: '',
    
    // Phone Order Operations
    dailyOrderVolume: '',
    peakHours: [],
    commonQuestions: [{ question: '', answer: '' }],
    complaintHandling: '',
    
    // Policies & Service Standards
    pickupInstructions: '',
    pickupPolicies: '',
    pickupLeadTime: '',
    cateringAvailable: '',
    cateringRequirements: '',
    cateringLeadTime: '',
    brandVoice: '',
    upsellingApproach: '',
    paymentPolicies: '',
    
    // Integration & Technical
    currentPOS: '',
    onlinePlatforms: [],
    kitchenCapacity: '',
    
    // Growth & Insights
    businessGoals: [],
    expansionPlans: [],
    reportingPriorities: [],
    
    // File Upload
    uploadedFiles: [],
    documentDescription: ''
  });

  const steps = [
    'Hours & Schedule', 
    'Menu & Dietary Info',
    'Phone Order Operations',
    'Policies & Service Standards',
    'Integration & Technical',
    'Growth & Insights',
    'Document Upload'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayToggle = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleHoursChange = (day, field, value) => {
    setFormData(prev => ({
      ...prev,
      operatingHours: {
        ...prev.operatingHours,
        [day]: {
          ...prev.operatingHours[day],
          [field]: value
        }
      }
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle final submission
    console.log('Survey submitted:', formData);
    setCurrentStep(steps.length); // Show thank you page
  };

  // Thank you page
  if (currentStep >= steps.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full text-center">
          <div className="flex items-center justify-center mx-auto">
            <Image
              src="/yapn-logo.svg"
              alt="yapn Logo"
              width={300}
              height={300}
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Thank You!</h2>
          <p className="text-gray-300 mb-8 leading-relaxed text-lg">
            We&apos;ve received your detailed information and will use it to train your AI agent. 
            A member of our team will reach out to you within 24 hours to begin the setup process.
          </p>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <p className="text-cyan-400 font-medium">What&apos;s Next?</p>
            <p className="text-gray-300 mt-2">
              Our team will review your responses and begin customizing your AI agent to match your restaurant&apos;s unique needs and voice.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center">
            <Image
              src="/yapn-logo.svg"
              alt="yapn"
              width={450}
              height={450}
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We&apos;re excited to get you set up!
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Please answer in as much detail as possible. This information will be used to train your AI agent 
            to handle calls exactly the way you want.
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-medium">Step {currentStep + 1} of {steps.length}</span>
              <span className="text-gray-300">{steps[currentStep]}</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Survey Content */}
      <div className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 md:p-12">
            
            {/* Step Content */}
            {currentStep === 0 && (
              <HoursScheduleStep 
                formData={formData}
                handleInputChange={handleInputChange}
                handleHoursChange={handleHoursChange}
                handleArrayToggle={handleArrayToggle}
              />
            )}
            
            {currentStep === 1 && (
              <MenuDietaryStep 
                formData={formData}
                handleInputChange={handleInputChange}
                handleArrayToggle={handleArrayToggle}
              />
            )}
            
            {currentStep === 2 && (
              <PhoneOperationsStep 
                formData={formData}
                handleInputChange={handleInputChange}
                handleArrayToggle={handleArrayToggle}
              />
            )}
            
            {currentStep === 3 && (
              <PoliciesStep 
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )}
            
            {currentStep === 4 && (
              <IntegrationStep 
                formData={formData}
                handleInputChange={handleInputChange}
                handleArrayToggle={handleArrayToggle}
              />
            )}
            
            {currentStep === 5 && (
              <GrowthInsightsStep 
                formData={formData}
                handleArrayToggle={handleArrayToggle}
              />
            )}
            
            {currentStep === 6 && (
              <DocumentUploadStep 
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-12 pt-8 border-t border-white/10">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center px-6 py-3 text-gray-300 hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
              
              {currentStep === steps.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Complete Survey
                </button>
              ) : (
                <button
                  onClick={nextStep}
                  className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Next
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HoursScheduleStep({ formData, handleInputChange, handleHoursChange, handleArrayToggle }) {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const dayLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const holidays = [
    'New Year\'s Day', 'Martin Luther King Jr. Day', 'Presidents Day', 'Memorial Day',
    'Independence Day', 'Labor Day', 'Columbus Day', 'Veterans Day', 'Thanksgiving', 'Christmas Day'
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Hours & Schedule</h2>
        <p className="text-gray-300">Help us understand when you&apos;re open and any special scheduling.</p>
      </div>

      {/* Operating Hours */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-6">Regular Operating Hours</h3>
        <div className="space-y-4">
          {days.map((day, index) => (
            <div key={day} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <label className="text-gray-300 font-medium">{dayLabels[index]}</label>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.operatingHours[day].closed}
                  onChange={(e) => handleHoursChange(day, 'closed', e.target.checked)}
                  className="mr-2 rounded border-white/20 bg-white/5 text-cyan-500 focus:ring-cyan-500"
                />
                <span className="text-gray-300 text-sm">Closed</span>
              </div>
              
              {!formData.operatingHours[day].closed && (
                <>
                  <input
                    type="time"
                    value={formData.operatingHours[day].open}
                    onChange={(e) => handleHoursChange(day, 'open', e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white backdrop-blur-xl"
                  />
                  <input
                    type="time"
                    value={formData.operatingHours[day].close}
                    onChange={(e) => handleHoursChange(day, 'close', e.target.value)}
                    className="px-3 py-2 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white backdrop-blur-xl"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Holiday Hours */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Holiday Closures</h3>
        <p className="text-gray-300 mb-4 text-sm">Select holidays when you&apos;re typically closed:</p>
        <HolidayDropdown 
          selectedHolidays={formData.holidayHours}
          holidays={holidays}
          onChange={(selected) => handleInputChange('holidayHours', selected)}
        />
      </div>

      {/* Special Event Hours */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">
          Special Event Hours or Seasonal Changes
        </label>
        <textarea
          value={formData.specialEventHours}
          onChange={(e) => handleInputChange('specialEventHours', e.target.value)}
          rows={4}
          className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300"
          placeholder="e.g., Extended hours during football season, closed for private events on Sundays, summer hours May-September..."
        />
      </div>
    </div>
  );
}

function MenuDietaryStep({ formData, handleInputChange, handleArrayToggle }) {
  const allergenOptions = [
    'Gluten-Free Options',
    'Dairy-Free Options', 
    'Nut-Free Options',
    'Soy-Free Options',
    'Egg-Free Options',
    'Shellfish-Free Options'
  ];

  const dietaryOptions = [
    'Vegan Options',
    'Vegetarian Options',
    'Halal Options',
    'Kosher Options',
    'Keto-Friendly Options',
    'Low-Carb Options'
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Menu & Dietary Information</h2>
        <p className="text-gray-300">Help your AI handle dietary questions and special requests.</p>
      </div>

      {/* Allergen Options */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Allergen-Free Options Available</h3>
        <p className="text-gray-300 mb-4 text-sm">Select all that apply to your menu:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {allergenOptions.map(option => (
            <label key={option} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.allergenOptions.includes(option)}
                onChange={() => handleArrayToggle('allergenOptions', option)}
                className="mr-3 rounded border-white/20 bg-white/5 text-cyan-500 focus:ring-cyan-500"
              />
              <span className="text-gray-300">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Dietary Options */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Special Dietary Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {dietaryOptions.map(option => (
            <label key={option} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.dietaryOptions.includes(option)}
                onChange={() => handleArrayToggle('dietaryOptions', option)}
                className="mr-3 rounded border-white/20 bg-white/5 text-cyan-500 focus:ring-cyan-500"
              />
              <span className="text-gray-300">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* How to Handle Dietary Questions */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">
          How should your AI handle dietary questions and restrictions?
        </label>
        <textarea
          value={formData.dietaryHandling}
          onChange={(e) => handleInputChange('dietaryHandling', e.target.value)}
          rows={5}
          className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300"
          placeholder="e.g., 'We have gluten-free buns and a dedicated fryer for fries. Our chef can modify most dishes to be dairy-free. Please let us know about severe allergies so we can take extra precautions in the kitchen.'"
        />
      </div>
    </div>
  );
}

function PhoneOperationsStep({ formData, handleInputChange, handleArrayToggle }) {
  const volumeOptions = [
    '1-10 orders per day',
    '11-25 orders per day',
    '26-50 orders per day', 
    '51-100 orders per day',
    '100+ orders per day'
  ];

  const timeSlots = [
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '1:00 PM - 2:00 PM',
    '5:00 PM - 6:00 PM',
    '6:00 PM - 7:00 PM',
    '7:00 PM - 8:00 PM',
    '8:00 PM - 9:00 PM'
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Phone Order Operations</h2>
        <p className="text-gray-300">Help us understand your current phone order patterns and common questions.</p>
      </div>

      {/* Daily Order Volume */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">
          Current Daily Phone Order Volume
        </label>
        <select
          value={formData.dailyOrderVolume}
          onChange={(e) => handleInputChange('dailyOrderVolume', e.target.value)}
          className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white transition-all duration-300 appearance-none bg-no-repeat bg-right pr-12"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: 'right 0.75rem center',
            backgroundSize: '1.5em 1.5em'
          }}
        >
          <option value="">Select volume range</option>
          {volumeOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Peak Hours */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Peak Busy Hours</h3>
        <p className="text-gray-300 mb-4 text-sm">When do you get the most phone calls?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {timeSlots.map(slot => (
            <label key={slot} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.peakHours.includes(slot)}
                onChange={() => handleArrayToggle('peakHours', slot)}
                className="mr-3 rounded border-white/20 bg-white/5 text-cyan-500 focus:ring-cyan-500"
              />
              <span className="text-gray-300">{slot}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Complaint Handling */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">
          What types or requests do you typically receive?
        </label>
        <textarea
          value={formData.complaintHandling}
          onChange={(e) => handleInputChange('complaintHandling', e.target.value)}
          rows={4}
          className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300"
          placeholder="e.g., Apologize sincerely, offer to remake the order or provide a refund, escalate to manager for orders over $50..."
        />
      </div>
    </div>
  );
}

function PoliciesStep({ formData, handleInputChange }) {
  const leadTimeOptions = [
    'Immediate (under 10 minutes)',
    '15 Minutes',
    '20 Minutes', 
    '30 Minutes',
    '45+ Minutes'
  ];

  const cateringLeadOptions = [
    'Same Day',
    '24 Hours',
    '48 Hours',
    '72+ Hours'
  ];

  const voiceOptions = [
    'Professional',
    'Friendly & Casual',
    'Warm & Personal',
    'Efficient & Direct'
  ];

  const upsellingOptions = [
    'Aggressive - Always suggest add-ons',
    'Moderate - Suggest when appropriate', 
    'Subtle - Only mention specials',
    'Minimal - Focus on order accuracy'
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Policies & Service Standards</h2>
        <p className="text-gray-300">Define how your AI should interact with customers and handle orders.</p>
      </div>

      {/* Pickup Instructions */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">
          Pickup Instructions
        </label>
        <textarea
          value={formData.pickupInstructions}
          onChange={(e) => handleInputChange('pickupInstructions', e.target.value)}
          rows={3}
          className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300"
          placeholder="e.g., Come to the front counter, parking available in back, call when you arrive..."
        />
      </div>

      {/* Pickup Policies */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">
          Pickup Policies
        </label>
        <textarea
          value={formData.pickupPolicies}
          onChange={(e) => handleInputChange('pickupPolicies', e.target.value)}
          rows={3}
          className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300"
          placeholder="e.g., Orders held for 20 minutes, please call if running late, ID required for large orders..."
        />
      </div>

      {/* Pickup Lead Time */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">
          Typical Pickup Lead Time
        </label>
        <select
          value={formData.pickupLeadTime}
          onChange={(e) => handleInputChange('pickupLeadTime', e.target.value)}
          className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white transition-all duration-300 appearance-none bg-no-repeat bg-right pr-12"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: 'right 0.75rem center',
            backgroundSize: '1.5em 1.5em'
          }}
        >
          <option value="">Select lead time</option>
          {leadTimeOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Catering */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Do you offer catering?
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="catering"
                value="yes"
                checked={formData.cateringAvailable === 'yes'}
                onChange={(e) => handleInputChange('cateringAvailable', e.target.value)}
                className="mr-3 text-cyan-500 focus:ring-cyan-500"
              />
              <span className="text-gray-300">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="catering"
                value="no"
                checked={formData.cateringAvailable === 'no'}
                onChange={(e) => handleInputChange('cateringAvailable', e.target.value)}
                className="mr-3 text-cyan-500 focus:ring-cyan-500"
              />
              <span className="text-gray-300">No</span>
            </label>
          </div>
        </div>

        {formData.cateringAvailable === 'yes' && (
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Catering Lead Time Required
            </label>
            <select
              value={formData.cateringLeadTime}
              onChange={(e) => handleInputChange('cateringLeadTime', e.target.value)}
              className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white transition-all duration-300 appearance-none bg-no-repeat bg-right pr-12"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em'
              }}
            >
              <option value="">Select lead time</option>
              {cateringLeadOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {formData.cateringAvailable === 'yes' && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Catering Requirements & Policies
          </label>
          <textarea
            value={formData.cateringRequirements}
            onChange={(e) => handleInputChange('cateringRequirements', e.target.value)}
            rows={3}
            className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300"
            placeholder="e.g., Minimum 10 people, 50% deposit required, delivery available within 5 miles..."
          />
        </div>
      )}

      {/* Brand Voice */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Brand Voice/Tone
          </label>
          <select
            value={formData.brandVoice}
            onChange={(e) => handleInputChange('brandVoice', e.target.value)}
            className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white transition-all duration-300 appearance-none bg-no-repeat bg-right pr-12"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: 'right 0.75rem center',
              backgroundSize: '1.5em 1.5em'
            }}
          >
            <option value="">Select tone</option>
            {voiceOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-3">
            Upselling Approach
          </label>
          <select
            value={formData.upsellingApproach}
            onChange={(e) => handleInputChange('upsellingApproach', e.target.value)}
            className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white transition-all duration-300 appearance-none bg-no-repeat bg-right pr-12"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: 'right 0.75rem center',
              backgroundSize: '1.5em 1.5em'
            }}
          >
            <option value="">Select approach</option>
            {upsellingOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Payment Policies */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">
          Payment Policies
        </label>
        <textarea
          value={formData.paymentPolicies}
          onChange={(e) => handleInputChange('paymentPolicies', e.target.value)}
          rows={3}
          className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300"
          placeholder="e.g., Cash, card, or mobile payments accepted. Deposits required for orders over $100..."
        />
      </div>
    </div>
  );
}

function IntegrationStep({ formData, handleInputChange, handleArrayToggle }) {
  const posOptions = [
    'Toast',
    'Square', 
    'PAR',
    'Olo',
    'Clover',
    'Resy',
    'Other',
    'No POS system'
  ];

  const platformOptions = [
    'DoorDash',
    'Uber Eats',
    'Grubhub',
    'Postmates',
    'ChowNow',
    'Online ordering website',
    'None'
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Integration & Technical</h2>
        <p className="text-gray-300">Help us understand your current systems and operational capacity.</p>
      </div>

      {/* Current POS */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">
          Current POS System
        </label>
        <select
          value={formData.currentPOS}
          onChange={(e) => handleInputChange('currentPOS', e.target.value)}
          className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white transition-all duration-300 appearance-none bg-no-repeat bg-right pr-12"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: 'right 0.75rem center',
            backgroundSize: '1.5em 1.5em'
          }}
        >
          <option value="">Select POS system</option>
          {posOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Online Platforms */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Existing Online Ordering Platforms</h3>
        <p className="text-gray-300 mb-4 text-sm">Select all platforms you currently use:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {platformOptions.map(platform => (
            <label key={platform} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.onlinePlatforms.includes(platform)}
                onChange={() => handleArrayToggle('onlinePlatforms', platform)}
                className="mr-3 rounded border-white/20 bg-white/5 text-cyan-500 focus:ring-cyan-500"
              />
              <span className="text-gray-300">{platform}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Kitchen Capacity */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">
          Kitchen Capacity & Rush Hour Notes
        </label>
        <textarea
          value={formData.kitchenCapacity}
          onChange={(e) => handleInputChange('kitchenCapacity', e.target.value)}
          rows={4}
          className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300"
          placeholder="e.g., Can handle 20 orders simultaneously, longer wait times during lunch rush, certain items take 15+ minutes to prepare..."
        />
      </div>
    </div>
  );
}

function GrowthInsightsStep({ formData, handleArrayToggle }) {
  const businessGoals = [
    'Reduce Missed Calls',
    'Free Up Staff Time',
    'Improve Customer Experience',
    'Increase Order Accuracy',
    'Capture More Catering Orders',
    'Boost Average Order Value',
    'Handle Peak Hours Better',
    'Expand Without More Staff'
  ];

  const expansionPlans = [
    'New Locations',
    'Catering Growth',
    'Franchising',
    'Delivery Partnerships',
    'New Menu Concepts',
    'Extended Hours',
    'No Expansion Planned'
  ];

  const reportingPriorities = [
    'Order Volume',
    'Call Volume',
    'Missed Calls',
    'Upsell Success',
    'Revenue Tracking',
    'Customer FAQs',
    'Peak Hour Analysis',
    'Staff Time Savings'
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Growth & Insights</h2>
        <p className="text-gray-300">Help us understand your goals and what success looks like for you.</p>
      </div>

      {/* Business Goals */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Business Goals with Yapn</h3>
        <p className="text-gray-300 mb-4 text-sm">What do you hope to achieve? (Select all that apply)</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {businessGoals.map(goal => (
            <label key={goal} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.businessGoals.includes(goal)}
                onChange={() => handleArrayToggle('businessGoals', goal)}
                className="mr-3 rounded border-white/20 bg-white/5 text-cyan-500 focus:ring-cyan-500"
              />
              <span className="text-gray-300">{goal}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Expansion Plans */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Expansion Plans</h3>
        <p className="text-gray-300 mb-4 text-sm">What are your growth plans for the next 1-2 years?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {expansionPlans.map(plan => (
            <label key={plan} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.expansionPlans.includes(plan)}
                onChange={() => handleArrayToggle('expansionPlans', plan)}
                className="mr-3 rounded border-white/20 bg-white/5 text-cyan-500 focus:ring-cyan-500"
              />
              <span className="text-gray-300">{plan}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Reporting Priorities */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Reporting Priorities</h3>
        <p className="text-gray-300 mb-4 text-sm">What metrics are most important for you to track?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {reportingPriorities.map(priority => (
            <label key={priority} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.reportingPriorities.includes(priority)}
                onChange={() => handleArrayToggle('reportingPriorities', priority)}
                className="mr-3 rounded border-white/20 bg-white/5 text-cyan-500 focus:ring-cyan-500"
              />
              <span className="text-gray-300">{priority}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

function DocumentUploadStep({ formData, handleInputChange }) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Document Upload</h2>
        <p className="text-gray-300">Upload any documents that will help us set up your AI agent perfectly.</p>
      </div>

      {/* File Upload Area */}
      <div className="border-2 border-dashed border-white/20 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-colors duration-300">
        <div className="flex flex-col items-center">
          <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <h3 className="text-lg font-semibold text-white mb-2">Upload Documents</h3>
          <p className="text-gray-300 mb-4">Drag and drop files here, or click to browse</p>
          <input
            type="file"
            multiple
            className="hidden"
            id="file-upload"
            accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
          />
          <label
            htmlFor="file-upload"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 cursor-pointer"
          >
            Choose Files
          </label>
          <p className="text-gray-400 text-sm mt-3">
            Supported formats: PDF, DOC, TXT, images (Max 10MB each)
          </p>
        </div>
      </div>

      {/* Document Description */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-3">
          What are you uploading? (Optional)
        </label>
        <textarea
          value={formData.documentDescription}
          onChange={(e) => handleInputChange('documentDescription', e.target.value)}
          rows={4}
          className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-xl transition-all duration-300"
          placeholder="e.g., Current menu with prices, staff training scripts, customer service policies, frequently asked questions..."
        />
      </div>

      {/* Helpful Examples */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h4 className="text-lg font-semibold text-white mb-4">Helpful Documents to Upload:</h4>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start">
            <span className="text-cyan-400 mr-2">•</span>
            Current menu with prices and descriptions
          </li>
          <li className="flex items-start">
            <span className="text-cyan-400 mr-2">•</span>
            Existing phone scripts or training materials
          </li>
          <li className="flex items-start">
            <span className="text-cyan-400 mr-2">•</span>
            Customer service policies and procedures
          </li>
          <li className="flex items-start">
            <span className="text-cyan-400 mr-2">•</span>
            Frequently asked questions and answers
          </li>
          <li className="flex items-start">
            <span className="text-cyan-400 mr-2">•</span>
            Catering menus and pricing sheets
          </li>
          <li className="flex items-start">
            <span className="text-cyan-400 mr-2">•</span>
            Brand guidelines or voice/tone examples
          </li>
        </ul>
      </div>
    </div>
  );
}

// Custom Holiday Dropdown Component
function HolidayDropdown({ selectedHolidays, holidays, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showOtherForm, setShowOtherForm] = useState(false);
  const [customHolidayName, setCustomHolidayName] = useState('');
  const [customHolidayDate, setCustomHolidayDate] = useState('');

  const toggleHoliday = (holiday) => {
    const newSelected = selectedHolidays.includes(holiday)
      ? selectedHolidays.filter(h => h !== holiday)
      : [...selectedHolidays, holiday];
    onChange(newSelected);
  };

  const addCustomHoliday = () => {
    if (customHolidayName.trim()) {
      const customHoliday = customHolidayDate 
        ? `${customHolidayName.trim()} (${customHolidayDate})`
        : customHolidayName.trim();
      
      const newSelected = [...selectedHolidays, customHoliday];
      onChange(newSelected);
      
      // Reset form
      setCustomHolidayName('');
      setCustomHolidayDate('');
      setShowOtherForm(false);
    }
  };

  const displayText = selectedHolidays.length === 0 
    ? 'Select holidays...' 
    : selectedHolidays.length === 1 
      ? selectedHolidays[0]
      : `${selectedHolidays.length} holidays selected`;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-4 bg-slate-800 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white transition-all duration-300 appearance-none bg-no-repeat bg-right pr-12 text-left"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
          backgroundPosition: 'right 0.75rem center',
          backgroundSize: '1.5em 1.5em'
        }}
      >
        {displayText}
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-slate-800 border border-slate-600 rounded-xl shadow-lg max-h-80 overflow-y-auto">
          {holidays.map(holiday => (
            <label
              key={holiday}
              className="flex items-center px-4 py-3 hover:bg-slate-700 cursor-pointer transition-colors duration-200"
            >
              <input
                type="checkbox"
                checked={selectedHolidays.includes(holiday)}
                onChange={() => toggleHoliday(holiday)}
                className="mr-3 rounded border-slate-500 bg-slate-700 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-0"
              />
              <span className="text-gray-300">{holiday}</span>
            </label>
          ))}
          
          {/* Other Option */}
          <div className="border-t border-slate-600">
            <button
              type="button"
              onClick={() => setShowOtherForm(!showOtherForm)}
              className="flex items-center w-full px-4 py-3 hover:bg-slate-700 cursor-pointer transition-colors duration-200 text-left"
            >
              <span className="text-cyan-400 mr-3">+</span>
              <span className="text-gray-300">Add Custom Holiday</span>
            </button>
            
            {showOtherForm && (
              <div className="px-4 pb-4 space-y-3">
                <input
                  type="text"
                  placeholder="Holiday name"
                  value={customHolidayName}
                  onChange={(e) => setCustomHolidayName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-500 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-400 text-sm"
                />
                <input
                  type="date"
                  placeholder="Date (optional)"
                  value={customHolidayDate}
                  onChange={(e) => setCustomHolidayDate(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-500 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white text-sm"
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={addCustomHoliday}
                    disabled={!customHolidayName.trim()}
                    className="px-3 py-1 bg-cyan-600 text-white rounded text-sm hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowOtherForm(false);
                      setCustomHolidayName('');
                      setCustomHolidayDate('');
                    }}
                    className="px-3 py-1 bg-slate-600 text-white rounded text-sm hover:bg-slate-500"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
