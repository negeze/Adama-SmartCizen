'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeOff, AlertCircle } from 'lucide-react'
import { validateEmail } from '@/lib/auth-validators'

export function LoginForm() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [generalError, setGeneralError] = useState('')

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    const emailValidation = validateEmail(email)

    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.message
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setGeneralError('')

    if (!validateForm()) return

    setIsLoading(true)

    try {
      // Replace this with your real login API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log('Login successful:', email)

      // Redirect to Citizen Portal
      router.push('/citizen-portal')
    } catch (error) {
      console.error(error)
      setGeneralError('Login failed. Please try again.')
    } finally {
      setIsLoading(false)
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

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-foreground"
        >
          Email Address
        </label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)

            if (errors.email) {
              setErrors({ ...errors, email: '' })
            }
          }}
          placeholder="your@email.com"
          className={`w-full px-4 py-2.5 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
            errors.email
              ? 'border-destructive bg-destructive/5'
              : 'border-border bg-background'
          }`}
        />

        {errors.email && (
          <p className="text-xs text-destructive">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-foreground"
        >
          Password
        </label>

        <div className="relative">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)

              if (errors.password) {
                setErrors({ ...errors, password: '' })
              }
            }}
            placeholder="••••••••"
            className={`w-full px-4 py-2.5 rounded-lg border pr-10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 ${
              errors.password
                ? 'border-destructive bg-destructive/5'
                : 'border-border bg-background'
            }`}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-muted-foreground" />
            ) : (
              <Eye className="h-5 w-5 text-muted-foreground" />
            )}
          </button>
        </div>

        {errors.password && (
          <p className="text-xs text-destructive">{errors.password}</p>
        )}
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="rounded border-border" />
          <span className="text-muted-foreground">Remember me</span>
        </label>

        <Link
          href="/forgot-password"
          className="text-primary hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50"
      >
        {isLoading ? 'Signing In...' : 'Sign In'}
      </button>

      <p className="text-center text-sm text-muted-foreground">
        Don't have an account?{' '}
        <Link
          href="/auth/register"
          className="text-primary font-semibold hover:underline"
        >
          Create account
        </Link>
      </p>
    </form>
  )
}