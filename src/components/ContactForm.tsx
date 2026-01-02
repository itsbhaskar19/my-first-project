'use client';

import { useState } from 'react';
import {
  validateEmail,
  validatePhone,
  validateName,
  validateMessage,
} from '@/utils/validation';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset previous errors
    setErrors({});

    // Validate all fields
    const newErrors: FormErrors = {};

    if (!validateName(name)) {
      newErrors.name = 'Name must be at least 2 characters and contain only letters and spaces.';
    }

    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!validatePhone(phone)) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits).';
    }

    if (!validateMessage(message)) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    // If there are errors, display them and don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Start submitting
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Log form data (simulating submission)
    console.log('Form submitted:', {
      name,
      email,
      phone,
      message,
    });

    // Show success message
    setShowSuccess(true);

    // Clear form after 3 seconds
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setShowSuccess(false);
    }, 3000);

    setIsSubmitting(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-primary-dark mb-6">Send us a Message</h2>

      {showSuccess && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          Thank you! We'll contact you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`
              w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary
              ${errors.name ? 'border-red-500' : 'border-gray-300'}
            `}
            placeholder="Your full name"
            required
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`
              w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary
              ${errors.email ? 'border-red-500' : 'border-gray-300'}
            `}
            placeholder="your.email@example.com"
            required
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`
              w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary
              ${errors.phone ? 'border-red-500' : 'border-gray-300'}
            `}
            placeholder="+91 1234567890"
            required
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className={`
              w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none
              ${errors.message ? 'border-red-500' : 'border-gray-300'}
            `}
            placeholder="Tell us about your plant needs..."
            required
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || showSuccess}
          className={`
            w-full px-6 py-3 rounded-lg font-semibold transition-colors
            ${
              isSubmitting || showSuccess
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-primary text-white hover:bg-primary-light'
            }
          `}
        >
          {isSubmitting ? 'Sending...' : showSuccess ? 'Message Sent!' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
