import { CitizenPortalHeader } from '@/components/citizen-portal/header'
import { DashboardStats } from '@/components/citizen-portal/dashboard-stats'
import { ComplaintForm } from '@/components/citizen-portal/complaint-form'
import { ComplaintTracker } from '@/components/citizen-portal/complaint-tracker'

export const metadata = {
  title: 'Citizen Portal | SmartCitizen',
  description: 'Submit complaints and track their progress with SmartCitizen',
}

export default function CitizenPortalPage() {
  return (
    <main className="min-h-screen bg-background">
      <CitizenPortalHeader />
      
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Dashboard Stats */}
        <div className="mb-12">
          <DashboardStats />
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Form */}
          <div className="lg:col-span-1">
            <ComplaintForm />
          </div>

          {/* Right Column - Tracker */}
          <div className="lg:col-span-2">
            <ComplaintTracker />
          </div>
        </div>
      </div>
    </main>
  )
}
