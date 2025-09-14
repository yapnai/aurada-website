// Form handling utilities - dynamically imported to reduce initial bundle size
export const initFormValidation = () => {
  // Form validation logic
  const validateForm = (formData) => {
    const errors = {};
    
    if (!formData.restaurantName?.trim()) {
      errors.restaurantName = 'Restaurant name is required';
    }
    
    if (!formData.ownerName?.trim()) {
      errors.ownerName = 'Owner name is required';
    }
    
    if (!formData.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    
    if (!formData.phone?.trim()) {
      errors.phone = 'Phone number is required';
    }
    
    return errors;
  };
  
  return { validateForm };
};

export const initFormSubmission = () => {
  // Form submission logic
  const submitForm = async (formData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would normally send to your API
      console.log('Form submitted:', formData);
      
      return { success: true };
    } catch (error) {
      console.error('Form submission error:', error);
      return { success: false, error: error.message };
    }
  };
  
  return { submitForm };
};

export const initAnalytics = () => {
  // Analytics tracking - only loaded when needed
  const trackFormInteraction = (eventName, data) => {
    // Track form interactions
    console.log('Analytics:', eventName, data);
  };
  
  const trackFormSubmission = (formData) => {
    trackFormInteraction('form_submission', {
      restaurant_name: formData.restaurantName,
      cuisine_type: formData.cuisine,
      avg_orders: formData.avgOrders
    });
  };
  
  return { trackFormInteraction, trackFormSubmission };
}; 