import { AuthLayout } from '@/components/auth/auth-layout'
import { SignupForm } from '@/components/auth/signup-form'

export const metadata = {
  title: 'Create Account - SmartCitizen',
  description: 'Create your SmartCitizen account',
}

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join SmartCitizen to submit complaints and track progress"
    >
      <SignupForm />
    </AuthLayout>
  )
}
