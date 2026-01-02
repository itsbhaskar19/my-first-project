/**
 * Validation utility functions for contact form
 */

/**
 * Validates email format using regex
 * @param email - Email string to validate
 * @returns true if email is valid, false otherwise
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validates phone number - allows digits, spaces, dashes, and parentheses
 * @param phone - Phone string to validate
 * @returns true if phone contains valid characters, false otherwise
 */
export function validatePhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;

  const phoneRegex = /^[\d\s\-()]+$/;
  const trimmedPhone = phone.trim();

  // Must contain at least some digits
  const hasDigits = /\d/.test(trimmedPhone);

  return phoneRegex.test(trimmedPhone) && hasDigits && trimmedPhone.length >= 10;
}

/**
 * Validates name - minimum 2 characters, only letters and spaces
 * @param name - Name string to validate
 * @returns true if name is valid, false otherwise
 */
export function validateName(name: string): boolean {
  if (!name || typeof name !== 'string') return false;

  const trimmedName = name.trim();

  // Minimum 2 characters, only letters and spaces
  const nameRegex = /^[a-zA-Z\s]+$/;

  return trimmedName.length >= 2 && nameRegex.test(trimmedName);
}

/**
 * Validates message - minimum 10 characters
 * @param message - Message string to validate
 * @returns true if message is valid, false otherwise
 */
export function validateMessage(message: string): boolean {
  if (!message || typeof message !== 'string') return false;

  const trimmedMessage = message.trim();

  return trimmedMessage.length >= 10;
}
