import Link from 'next/link'
import { ReactNode } from 'react'

interface AuthLayoutProps {
  title: string
  subtitle: string
  children: ReactNode
}

export function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Link href="/" className="flex items-center gap-2 w-fit hover:opacity-80 transition-opacity">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">SC</span>
            </div>
            <span className="text-xl font-bold text-foreground">SmartCitizen</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Auth Card */}
          <div className="bg-background border border-border rounded-2xl p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
              <p className="text-muted-foreground">{subtitle}</p>
            </div>

            {children}
          </div>

          {/* Footer Links */}
          <div className="mt-8 text-center text-sm text-muted-foreground space-y-2">
            <p>
              By using SmartCitizen, you agree to our{' '}
              <Link href="#" className="text-primary hover:underline">
                Terms of Service
              </Link>
            </p>
            <p>
              Need help?{' '}
              <Link href="#" className="text-primary hover:underline">
                Contact support
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
