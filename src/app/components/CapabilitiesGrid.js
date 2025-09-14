'use client';

import { useState, useCallback, memo } from 'react';

// Memoized SVG icons to prevent re-creation
const PhoneIcon = memo(() => (
  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
));
PhoneIcon.displayName = 'PhoneIcon';

const DatabaseIcon = memo(() => (
  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
));
DatabaseIcon.displayName = 'DatabaseIcon';

const LightbulbIcon = memo(() => (
  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
));
LightbulbIcon.displayName = 'LightbulbIcon';

const TrendingIcon = memo(() => (
  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
));
TrendingIcon.displayName = 'TrendingIcon';

const CreditCardIcon = memo(() => (
  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
));
CreditCardIcon.displayName = 'CreditCardIcon';

const QuestionIcon = memo(() => (
  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
));
QuestionIcon.displayName = 'QuestionIcon';

const UsersIcon = memo(() => (
  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
));
UsersIcon.displayName = 'UsersIcon';

const BuildingIcon = memo(() => (
  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
));
BuildingIcon.displayName = 'BuildingIcon';

const ChartIcon = memo(() => (
  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
));
ChartIcon.displayName = 'ChartIcon';

const CheckIcon = memo(() => (
  <svg className="w-4 h-4 md:w-5 md:h-5 mr-3 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
));
CheckIcon.displayName = 'CheckIcon';

const CapabilitiesGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Expanded descriptions for each capability
  const capabilityDetails = {
    'voice-text': {
      title: 'Voice + Text AI',
      description: 'Advanced AI agents handle both voice calls and text messages with natural language processing. Customers can place orders conversationally without navigating complex menus or waiting on hold. Supports multiple languages and accents.',
      features: ['Natural conversation flow', 'Multi-language support', 'No menu navigation needed', 'Instant order confirmation'],
      icon: PhoneIcon
    },
    'pos-injection': {
      title: 'POS Order Injection',
      description: 'Seamlessly integrates with your existing POS system to automatically input structured orders. No manual entry required - orders flow directly from AI conversations into your kitchen workflow.',
      features: ['Toast, Square, PAR, Olo integration', 'Automatic order formatting', 'Real-time kitchen updates', 'No double entry needed'],
      icon: DatabaseIcon
    },
    'menu-intelligence': {
      title: 'Menu Intelligence',
      description: 'AI understands your complete menu including modifiers, combos, and dietary restrictions. Handles complex customizations and suggests alternatives for unavailable items.',
      features: ['Modifier management', 'Dietary preference handling', 'Combo meal recognition', 'Alternative suggestions'],
      icon: LightbulbIcon
    },
    'upsell-engine': {
      title: 'USE (Upsell Engine)',
      description: 'Data-driven upselling that analyzes customer behavior, order history, and real-time inventory to suggest high-conversion add-ons at the perfect moment in the conversation.',
      features: ['Behavioral analysis', 'Inventory-aware suggestions', 'Perfect timing optimization', '15-25% AOV increase'],
      icon: TrendingIcon
    },
    'payments': {
      title: 'Payments',
      description: 'Secure payment processing with multiple options. Send SMS payment links for card payments or confirm cash/card on pickup. PCI compliant with fraud protection.',
      features: ['SMS payment links', 'Pay-on-pickup options', 'PCI compliance', 'Fraud protection'],
      icon: CreditCardIcon
    },
    'order-status': {
      title: 'Order Status + FAQs',
      description: 'Handles common customer inquiries without staff intervention. Provides real-time order status, operating hours, location info, and answers frequently asked questions.',
      features: ['Real-time order tracking', 'Operating hours info', 'FAQ automation', 'Location details'],
      icon: QuestionIcon
    },
    'catering': {
      title: 'Catering Support',
      description: 'Specialized handling for large, complex catering orders. Manages multi-item orders, special timing requirements, delivery coordination, and payment processing for high-ticket sales.',
      features: ['Large order management', 'Timing coordination', 'Delivery scheduling', 'High-ticket processing'],
      icon: UsersIcon
    },
    'store-logic': {
      title: 'Store Logic',
      description: 'Customizable business rules for each location. Set specific operating hours, promotional campaigns, menu availability, and language preferences for multi-location management.',
      features: ['Location-specific hours', 'Promotional campaigns', 'Menu availability rules', 'Multi-language support'],
      icon: BuildingIcon
    },
    'analytics': {
      title: 'Analytics Report',
      description: 'Comprehensive reporting dashboard with call volume, conversion rates, upsell success, customer behavior patterns, and revenue impact across all locations.',
      features: ['Call volume tracking', 'Conversion analytics', 'Revenue impact reports', 'Chain-wide insights'],
      icon: ChartIcon
    }
  };

  const capabilities = [
    { id: 'voice-text', title: 'Voice + Text AI', description: 'Voice & text ordering — skip menus and hold times' },
    { id: 'pos-injection', title: 'POS Order Injection', description: 'Structured orders into Toast, Square, etc.' },
    { id: 'menu-intelligence', title: 'Menu Intelligence', description: 'Handles modifiers, combos, and dietary preferences' },
    { id: 'upsell-engine', title: 'USE (Upsell Engine)', description: 'Suggests data-backed, real-time, high-conversion add-ons' },
    { id: 'payments', title: 'Payments', description: 'Secure SMS payment links or pay-on-pickup confirmations' },
    { id: 'order-status', title: 'Order Status + FAQs', description: 'Answers "Is it ready?", "Are you open?", etc., without staff' },
    { id: 'catering', title: 'Catering Support', description: 'Handles complex, high-ticket orders end-to-end' },
    { id: 'store-logic', title: 'Store Logic', description: 'Location-specific rules (hours, promos, languages, etc.)' },
    { id: 'analytics', title: 'Analytics Report', description: 'Tracks volume, upsells, and caller behavior chain-wide' }
  ];

  // Hover handlers with debugging
  const handleMouseEnter = (cardId) => {
    console.log('Mouse enter:', cardId);
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    console.log('Mouse leave');
    setHoveredCard(null);
  };

  console.log('Current hovered card:', hoveredCard);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20">
      {capabilities.map((capability) => {
        const IconComponent = capabilityDetails[capability.id].icon;
        const isHovered = hoveredCard === capability.id;
        const details = capabilityDetails[capability.id];
        
        console.log(`Card ${capability.id} - isHovered:`, isHovered);
        
        return (
          <div 
            key={capability.id}
            className="bg-slate-900/40 border border-cyan-500/20 rounded-2xl p-6 md:p-8 hover:bg-slate-800/50 transition-all duration-300 group relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter(capability.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
              <IconComponent />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">{capability.title}</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">{capability.description}</p>
            
            {/* Debug overlay visibility */}
            {isHovered && <div className="absolute top-0 left-0 w-4 h-4 bg-red-500 z-50"></div>}
            
            {/* Hover Overlay positioned above this specific card */}
            {isHovered && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-full w-80 md:w-96 bg-gradient-to-br from-cyan-600/95 to-blue-600/95 rounded-2xl p-6 md:p-8 z-50 shadow-2xl border border-white/20">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">{details.title}</h3>
                  <p className="text-white/90 leading-relaxed text-sm md:text-base">{details.description}</p>
                  <div>
                    <h4 className="text-white font-medium mb-3 text-sm md:text-base">Key Features:</h4>
                    <ul className="space-y-3">
                      {details.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-white/90 text-sm md:text-base">
                          <CheckIcon />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Arrow pointing to card */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-cyan-600/95"></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CapabilitiesGrid;