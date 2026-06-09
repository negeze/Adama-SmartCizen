import { OfficialDashboardHeader } from '@/components/official-dashboard/header'
import { AnalyticsOverview } from '@/components/official-dashboard/analytics-overview'
import { ComplaintQueue } from '@/components/official-dashboard/complaint-queue'
import { PerformanceMetrics } from '@/components/official-dashboard/performance-metrics'

export const metadata = {
  title: 'Official Dashboard | SmartCitizen',
  description: 'Manage complaints and track department performance with SmartCitizen',
}

export default function OfficialDashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <OfficialDashboardHeader />
      
      <div className="mx-auto max-w-7xl px-6 py-8 space-y-8">
        {/* Analytics Overview */}
        <AnalyticsOverview />

        {/* Complaint Queue */}
        <ComplaintQueue />

        {/* Performance Metrics */}
        <PerformanceMetrics />
      </div>
    </main>
  )
}
