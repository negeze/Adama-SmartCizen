import { CheckCircle2, MessageSquare, ShieldAlert, TrendingUp, Users, Map, Lock, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">SC</span>
            </div>
            <span className="text-xl font-bold text-foreground">SmartCitizen</span>
          </div>
          <div className="flex items-center gap-3">
            <Link 
              href="/citizen-portal"
              className="rounded-lg px-4 py-2 font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Citizen Portal
            </Link>
            <Link 
              href="/official-dashboard"
              className="rounded-lg px-4 py-2 font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Official Dashboard
            </Link>
            <div className="w-px h-6 bg-border"></div>
            <Link 
              href="/auth/login"
              className="rounded-lg px-4 py-2 font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/auth/register"
              className="rounded-lg bg-primary px-6 py-2 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground mb-6">
            Direct Connection Between Citizens and Government
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We are reducing the communication gap between citizens and government through digital transparency and direct accountability.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="/citizen-portal"
              className="rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors inline-block"
            >
              Submit a Complaint
            </a>
            <a 
              href="/citizen-portal"
              className="rounded-lg border border-border bg-secondary px-8 py-3 font-semibold text-secondary-foreground hover:bg-secondary/80 transition-colors inline-block"
            >
              Track Request
            </a>
          </div>
        </div>
      </section>

      {/* Core Problems Section */}
      <section className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-foreground">The Problems We&apos;re Solving</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: 'Citizens isolated from officials', icon: '📍' },
              { title: 'Long travel distances required', icon: '🚗' },
              { title: 'Illegal intermediaries and bribes', icon: '⚠️' },
              { title: 'Delayed or ignored complaints', icon: '⏳' },
              { title: 'Lack of transparency on progress', icon: '👁️' },
              { title: 'Citizens unaware where to report', icon: '❓' },
            ].map((problem, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                <span className="text-2xl flex-shrink-0">{problem.icon}</span>
                <p className="text-foreground font-semibold">{problem.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Features Section */}
      <section className="border-b border-border px-6 py-20 bg-secondary/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Essential Features</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Users,
                title: 'Citizen Dashboard',
                desc: 'Account creation, request submission with photo/video uploads, and complaint tracking.',
              },
              {
                icon: TrendingUp,
                title: 'Complaint Tracking',
                desc: 'Unique tracking numbers, real-time status updates, and estimated response times.',
              },
              {
                icon: MessageSquare,
                title: 'Direct Messaging',
                desc: 'Route complaints directly to responsible departments like municipality, police, health, and education.',
              },
              {
                icon: ShieldAlert,
                title: 'Anonymous Reporting',
                desc: 'Report bribery, abuse, corruption, and illegal payments with full anonymity.',
              },
              {
                icon: TrendingUp,
                title: 'Official Dashboard',
                desc: 'Manage complaints, assign tasks, update statuses, and generate performance reports.',
              },
              {
                icon: Lock,
                title: 'Smart Analytics',
                desc: 'Visualize city issues, identify corruption hotspots, and evaluate department performance.',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="flex gap-4 p-6 rounded-lg bg-background border border-border hover:border-primary transition-colors">
                  <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Advanced Capabilities</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Map, title: 'Geo-location Mapping', desc: 'Precise problem reporting with interactive maps' },
              { icon: Zap, title: 'AI Chat Assistant', desc: 'Multilingual support in Afaan Oromo, Amharic & English' },
              { icon: CheckCircle2, title: 'Emergency Priority', desc: 'Fast-track urgent issues like violence and emergencies' },
              { icon: MessageSquare, title: 'SMS Integration', desc: 'Reach users without internet access via SMS' },
              { icon: TrendingUp, title: 'Data-Driven Insights', desc: 'Help officials prioritize resources effectively' },
              { icon: Lock, title: 'Secure & Transparent', desc: 'Modern security with visible progress tracking' },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="p-6 rounded-lg bg-secondary/20 border border-border text-center hover:border-primary/50 transition-colors">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Expected Impact Section */}
      <section className="border-b border-border px-6 py-20 bg-secondary/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Expected Impact</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: 'Reduce Corruption', desc: 'Eliminate illegal intermediaries and bribery' },
              { title: 'Improve Responsiveness', desc: 'Government responds faster to citizen needs' },
              { title: 'Build Trust', desc: 'Increase citizen trust in public institutions' },
              { title: 'Simplify Communication', desc: 'Direct connection without intermediaries' },
              { title: 'Smart Cities', desc: 'Data-driven insights for better resource allocation' },
              { title: 'Transparency', desc: 'Full visibility into complaint progress and outcomes' },
            ].map((impact, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-background border border-border flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{impact.title}</h3>
                  <p className="text-muted-foreground text-sm">{impact.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Make a Difference?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the digital accountability movement. Submit your first complaint or explore how SmartCitizen can transform your city.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="/citizen-portal"
              className="rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors inline-block"
            >
              Access Citizen Portal
            </a>
            <a 
              href="/official-dashboard"
              className="rounded-lg border border-border bg-background px-8 py-3 font-semibold text-foreground hover:bg-secondary transition-colors inline-block"
            >
              Official Dashboard
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/20 px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">SmartCitizen</h4>
              <p className="text-sm text-muted-foreground">Digital accountability platform for Adama and Ethiopian cities.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/citizen-portal" className="hover:text-primary">Citizen Portal</a></li>
                <li><a href="/official-dashboard" className="hover:text-primary">Official Dashboard</a></li>
                <li><a href="/official-dashboard" className="hover:text-primary">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-primary">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 SmartCitizen. All rights reserved. Reducing the communication gap between citizens and government.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
