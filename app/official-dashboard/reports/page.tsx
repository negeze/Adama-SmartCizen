'use client'

import { useState } from 'react'
import { OfficialDashboardHeader } from '@/components/official-dashboard/header'
import { OfficialReportsList } from '@/components/official-dashboard/reports-list'
import { OfficialReportsChat } from '@/components/official-dashboard/reports-chat'

export default function OfficialReportsPage() {
  const [selectedReportId, setSelectedReportId] = useState('RPT-001')

  return (
    <main className="min-h-screen bg-background">
      <OfficialDashboardHeader />

      <div className="flex h-[calc(100vh-70px)]">
        {/* Sidebar with Reports List */}
        <OfficialReportsList selectedReportId={selectedReportId} onSelectReport={setSelectedReportId} />

        {/* Chat Section */}
        <div className="flex-1 overflow-hidden">
          <OfficialReportsChat reportId={selectedReportId} citizenName="Ahmed Mohammed" />
        </div>
      </div>
    </main>
  )
}
