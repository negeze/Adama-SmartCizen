'use client'

import { useRouter } from 'next/navigation'
import { AuthLayout } from '@/components/auth/auth-layout'
import { LoginForm } from '@/components/auth/login-form'

export default function LoginPage() {
  const router = useRouter()

  const handleLoginSuccess = () => {
    router.push('/citizen-portal')
  }

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to access your citizen portal"
    >
      <LoginForm onSuccess={handleLoginSuccess} />
    </AuthLayout>
  )
}