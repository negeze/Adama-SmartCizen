'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, AlertCircle, CheckCircle2, AlertTriangle } from 'lucide-react'
import {
  validateEmail,
  validatePhoneNumber,
  validateNationalID,
  validateName,
  validatePassword,
  validatePasswordMatch,
} from '@/lib/auth-validators'

export function SignupForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    nationalID: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    level: 'weak' as const,
    message: '',
    requirements: {
      hasMinLength: false,
      hasUppercase: false,
      hasLowercase: false,
      hasNumbers: false,
      hasSpecialChars: false,
    },
  })
  const [isLoading, setIsLoading] = useState(false)
  const [generalError, setGeneralError] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }

    // Update password strength indicator
    if (name === 'password') {
      const strength = validatePassword(value)
      setPasswordStrength(strength)
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    const nameValidation = validateName(formData.fullName)
    if (!nameValidation.isValid) {
      newErrors.fullName = nameValidation.message
    }

    const idValidation = validateNationalID(formData.nationalID)
    if (!idValidation.isValid) {
      newErrors.nationalID = idValidation.message
    }

    const emailValidation = validateEmail(formData.email)
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.message
    }

    const phoneValidation = validatePhoneNumber(formData.phoneNumber)
    if (!phoneValidation.isValid) {
      newErrors.phoneNumber = phoneValidation.message
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (passwordStrength.score < 2) {
      newErrors.password = 'Password must be strong (at least 8 characters with uppercase, lowercase, and numbers)'
    }

    const matchValidation = validatePasswordMatch(formData.password, formData.confirmPassword)
    if (!matchValidation.isValid) {
      newErrors.confirmPassword = matchValidation.message
    }

    if (!agreeTerms) {
      newErrors.terms = 'You must agree to the terms and conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setGeneralError('')

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log('[v0] Registration attempt:', {
        fullName: formData.fullName,
        nationalID: formData.nationalID,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
      })

      alert('Account created successfully! (Demo)')
      // In a real app, you would make an API call here
    } catch (error) {
      setGeneralError('Registration failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const getPasswordStrengthColor = () => {
    switch (passwordStrength.level) {
      case 'very-strong':
        return 'bg-green-500'
      case 'strong':
        return 'bg-green-400'
      case 'good':
        return 'bg-yellow-400'
      case 'fair':
        return 'bg-orange-400'
      default:
        return 'bg-red-400'
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {generalError && (
        <div className="flex gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/30">
          <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
          <p className="text-sm text-destructive">{generalError}</p>
        </div>
      )}

      {/* Full Name */}
      <div className="space-y-2">
        <label htmlFor="fullName" className="block text-sm font-semibold text-foreground">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="John Doe"
          className={`w-full px-4 py-2.5 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            errors.fullName ? 'border-destructive bg-destructive/5' : 'border-border bg-background'
          }`}
        />
        {errors.fullName && (
          <p className="text-xs text-destructive mt-1">{errors.fullName}</p>
        )}
      </div>

      {/* National ID */}
      <div className="space-y-2">
        <label htmlFor="nationalID" className="block text-sm font-semibold text-foreground">
          National ID
        </label>
        <input
          id="nationalID"
          type="text"
          name="nationalID"
          value={formData.nationalID}
          onChange={handleInputChange}
          placeholder="e.g., ET-12345678"
          className={`w-full px-4 py-2.5 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            errors.nationalID ? 'border-destructive bg-destructive/5' : 'border-border bg-background'
          }`}
        />
        {errors.nationalID && (
          <p className="text-xs text-destructive mt-1">{errors.nationalID}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-semibold text-foreground">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="your@email.com"
          className={`w-full px-4 py-2.5 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            errors.email ? 'border-destructive bg-destructive/5' : 'border-border bg-background'
          }`}
        />
        {errors.email && (
          <p className="text-xs text-destructive mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone Number */}
      <div className="space-y-2">
        <label htmlFor="phoneNumber" className="block text-sm font-semibold text-foreground">
          Phone Number
        </label>
        <input
          id="phoneNumber"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="+251 912 345 678"
          className={`w-full px-4 py-2.5 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            errors.phoneNumber ? 'border-destructive bg-destructive/5' : 'border-border bg-background'
          }`}
        />
        {errors.phoneNumber && (
          <p className="text-xs text-destructive mt-1">{errors.phoneNumber}</p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-semibold text-foreground">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="••••••••"
            className={`w-full px-4 py-2.5 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 pr-10 ${
              errors.password ? 'border-destructive bg-destructive/5' : 'border-border bg-background'
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Password Strength Indicator */}
        {formData.password && (
          <div className="space-y-2">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    i < passwordStrength.score ? getPasswordStrengthColor() : 'bg-border'
                  }`}
                />
              ))}
            </div>
            <p className={`text-xs ${
              passwordStrength.score >= 2 ? 'text-green-600' : 'text-orange-600'
            }`}>
              {passwordStrength.message}
            </p>

            {/* Requirements Checklist */}
            <div className="grid grid-cols-2 gap-2 mt-3 p-3 bg-secondary/30 rounded-lg">
              {[
                { key: 'hasMinLength', label: 'At least 8 characters' },
                { key: 'hasUppercase', label: 'Uppercase letter' },
                { key: 'hasLowercase', label: 'Lowercase letter' },
                { key: 'hasNumbers', label: 'Number' },
                { key: 'hasSpecialChars', label: 'Special character' },
              ].map(({ key, label }) => (
                <div key={key} className="flex items-center gap-2 text-xs">
                  {passwordStrength.requirements[key as keyof typeof passwordStrength.requirements] ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  )}
                  <span className="text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {errors.password && (
          <p className="text-xs text-destructive mt-1">{errors.password}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="space-y-2">
        <label htmlFor="confirmPassword" className="block text-sm font-semibold text-foreground">
          Confirm Password
        </label>
        <div className="relative">
          <input
            id="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="••••••••"
            className={`w-full px-4 py-2.5 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 pr-10 ${
              errors.confirmPassword ? 'border-destructive bg-destructive/5' : 'border-border bg-background'
            }`}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showConfirmPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-xs text-destructive mt-1">{errors.confirmPassword}</p>
        )}
      </div>

      {/* Terms Checkbox */}
      <div className="flex items-start gap-3">
        <input
          id="terms"
          type="checkbox"
          checked={agreeTerms}
          onChange={(e) => {
            setAgreeTerms(e.target.checked)
            if (errors.terms) {
              setErrors({ ...errors, terms: '' })
            }
          }}
          className="mt-1 rounded border-border cursor-pointer"
        />
        <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
          I agree to the{' '}
          <Link href="#" className="text-primary hover:underline">
            Terms and Conditions
          </Link>{' '}
          and{' '}
          <Link href="#" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </label>
      </div>
      {errors.terms && (
        <p className="text-xs text-destructive">{errors.terms}</p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary text-primary-foreground font-semibold py-2.5 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Creating Account...' : 'Create Account'}
      </button>

      <p className="text-center text-muted-foreground text-sm">
        Already have an account?{' '}
        <Link href="/auth/login" className="text-primary hover:underline font-semibold">
          Sign in
        </Link>
      </p>
    </form>
  )
}
