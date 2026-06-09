export interface ValidationResult {
  isValid: boolean
  message: string
}

export function validateEmail(email: string): ValidationResult {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email) {
    return { isValid: false, message: 'Email is required' }
  }
  if (!emailRegex.test(email)) {
    return { isValid: false, message: 'Please enter a valid email address' }
  }
  return { isValid: true, message: '' }
}

export function validatePhoneNumber(phone: string): ValidationResult {
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/
  if (!phone) {
    return { isValid: false, message: 'Phone number is required' }
  }
  if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
    return { isValid: false, message: 'Please enter a valid phone number' }
  }
  return { isValid: true, message: '' }
}

export function validateNationalID(id: string): ValidationResult {
  if (!id) {
    return { isValid: false, message: 'National ID is required' }
  }
  if (id.length < 8) {
    return { isValid: false, message: 'National ID must be at least 8 characters' }
  }
  return { isValid: true, message: '' }
}

export function validateName(name: string): ValidationResult {
  if (!name || name.trim().length === 0) {
    return { isValid: false, message: 'Full name is required' }
  }
  if (name.length < 2) {
    return { isValid: false, message: 'Name must be at least 2 characters' }
  }
  return { isValid: true, message: '' }
}

export interface PasswordStrength {
  score: number // 0-4
  level: 'weak' | 'fair' | 'good' | 'strong' | 'very-strong'
  message: string
  requirements: {
    hasMinLength: boolean
    hasUppercase: boolean
    hasLowercase: boolean
    hasNumbers: boolean
    hasSpecialChars: boolean
  }
}

export function validatePassword(password: string): PasswordStrength {
  const requirements = {
    hasMinLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumbers: /[0-9]/.test(password),
    hasSpecialChars: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  }

  const metRequirements = Object.values(requirements).filter(Boolean).length

  let score = 0
  let level: PasswordStrength['level'] = 'weak'
  let message = ''

  if (password.length === 0) {
    message = 'Password is required'
  } else if (metRequirements === 5) {
    score = 4
    level = 'very-strong'
    message = 'Excellent password strength'
  } else if (metRequirements === 4) {
    score = 3
    level = 'strong'
    message = 'Strong password'
  } else if (metRequirements === 3) {
    score = 2
    level = 'good'
    message = 'Good password'
  } else if (metRequirements === 2) {
    score = 1
    level = 'fair'
    message = 'Fair password - add more variety'
  } else {
    score = 0
    level = 'weak'
    message = 'Weak password - add numbers, uppercase, and special characters'
  }

  return {
    score,
    level,
    message,
    requirements,
  }
}

export function validatePasswordMatch(password: string, confirmPassword: string): ValidationResult {
  if (password !== confirmPassword) {
    return { isValid: false, message: 'Passwords do not match' }
  }
  return { isValid: true, message: '' }
}
