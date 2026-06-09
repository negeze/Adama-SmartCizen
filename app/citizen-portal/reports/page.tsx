'use client'

import { useState } from 'react'
import { CitizenPortalHeader } from '@/components/citizen-portal/header'
import { ReportsSidebar } from '@/components/citizen-portal/reports-sidebar'
import { ReportDetails } from '@/components/citizen-portal/report-details'
import { ReportChat } from '@/components/citizen-portal/report-chat'

export default function CitizenReportsPage() {
  const [selectedReportId, setSelectedReportId] = useState('RPT-001')

  return (
    <main className="min-h-screen bg-background">
      <CitizenPortalHeader />

      <div className="flex h-[calc(100vh-70px)]">
        {/* Sidebar */}
        <ReportsSidebar selectedReportId={selectedReportId} onSelectReport={setSelectedReportId} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Report Details */}
          <div className="border-b border-border bg-card p-6 max-h-fit overflow-y-auto">
            <ReportDetails reportId={selectedReportId} />
          </div>

          {/* Chat Section */}
          <div className="flex-1 overflow-hidden">
            <ReportChat reportId={selectedReportId} officialName="Officer Ahmed Hassan" />
          </div>
        </div>
      </div>
    </main>
  )
}
