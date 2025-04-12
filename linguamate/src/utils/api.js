// src/utils/api.js
import { getAuth } from './auth';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.locallingo.com/v1';

/**
 * Configuration for fetch requests
 * @param {string} method - HTTP method
 * @param {object} data - Request body data
 * @param {boolean} requiresAuth - Whether the request requires authentication
 * @returns {object} Fetch configuration
 */
const createFetchConfig = (method, data, requiresAuth = true) => {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (requiresAuth) {
    const token = getAuth()?.token;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  }

  if (data) {
    config.body = JSON.stringify(data);
  }

  return config;
};

/**
 * Handle API responses
 * @param {Response} response - Fetch response
 * @returns {Promise} Resolved data or rejection
 */
const handleResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    // Format error message from API or use default
    const errorMessage = data.message || data.error || 'An unexpected error occurred';
    
    // Throw error with status and message
    const error = new Error(errorMessage);
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
};

/**
 * API request utility
 * @param {string} endpoint - API endpoint
 * @param {string} method - HTTP method
 * @param {object} data - Request body data
 * @param {boolean} requiresAuth - Whether the request requires authentication
 * @returns {Promise} API response
 */
const apiRequest = async (endpoint, method = 'GET', data = null, requiresAuth = true) => {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const config = createFetchConfig(method, data, requiresAuth);
    const response = await fetch(url, config);
    return await handleResponse(response);
  } catch (error) {
    console.error(`API Error (${method} ${endpoint}):`, error);
    throw error;
  }
};

// API service object with methods for different request types
const api = {
  // Auth endpoints
  auth: {
    login: (credentials) => apiRequest('/auth/login', 'POST', credentials, false),
    register: (userData) => apiRequest('/auth/register', 'POST', userData, false),
    verifyEmail: (token) => apiRequest(`/auth/verify-email/${token}`, 'GET', null, false),
    resetPassword: (email) => apiRequest('/auth/reset-password', 'POST', { email }, false),
    confirmResetPassword: (data) => apiRequest('/auth/reset-password/confirm', 'POST', data, false),
  },
  
  // User endpoints
  users: {
    getCurrent: () => apiRequest('/users/me'),
    updateCurrent: (userData) => apiRequest('/users/me', 'PUT', userData),
    updatePassword: (passwordData) => apiRequest('/users/me/password', 'PUT', passwordData),
    uploadProfileImage: async (imageFile) => {
      const formData = new FormData();
      formData.append('image', imageFile);
      
      const token = getAuth()?.token;
      const response = await fetch(`${API_BASE_URL}/users/me/image`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });
      
      return handleResponse(response);
    },
    deleteAccount: () => apiRequest('/users/me', 'DELETE'),
  },
  
  // Translator endpoints
  translators: {
    getAll: (filters = {}) => {
      const queryParams = new URLSearchParams();
      
      // Add filter parameters if they exist
      if (filters.languages) queryParams.append('languages', filters.languages.join(','));
      if (filters.location) queryParams.append('location', filters.location);
      if (filters.serviceType) queryParams.append('serviceType', filters.serviceType);
      if (filters.minRating) queryParams.append('minRating', filters.minRating);
      if (filters.maxPrice) queryParams.append('maxPrice', filters.maxPrice);
      
      const queryString = queryParams.toString();
      return apiRequest(`/translators${queryString ? `?${queryString}` : ''}`);
    },
    getById: (id) => apiRequest(`/translators/${id}`),
    getReviews: (id) => apiRequest(`/translators/${id}/reviews`),
    becomeTranslator: (translatorData) => apiRequest('/translators', 'POST', translatorData),
    updateTranslatorProfile: (translatorData) => apiRequest('/translators/me', 'PUT', translatorData),
  },
  
  // Booking endpoints
  bookings: {
    create: (bookingData) => apiRequest('/bookings', 'POST', bookingData),
    getAll: () => apiRequest('/bookings'),
    getById: (id) => apiRequest(`/bookings/${id}`),
    cancel: (id) => apiRequest(`/bookings/${id}/cancel`, 'PUT'),
    complete: (id) => apiRequest(`/bookings/${id}/complete`, 'PUT'),
    addReview: (id, reviewData) => apiRequest(`/bookings/${id}/review`, 'POST', reviewData),
  },
  
  // Messaging endpoints
  messages: {
    getConversations: () => apiRequest('/messages/conversations'),
    getConversation: (userId) => apiRequest(`/messages/conversations/${userId}`),
    sendMessage: (recipientId, content) => 
      apiRequest('/messages', 'POST', { recipientId, content }),
  },
  
  // Notification endpoints
  notifications: {
    getAll: () => apiRequest('/notifications'),
    markAsRead: (id) => apiRequest(`/notifications/${id}/read`, 'PUT'),
    markAllAsRead: () => apiRequest('/notifications/read-all', 'PUT'),
  }
};

export default api;