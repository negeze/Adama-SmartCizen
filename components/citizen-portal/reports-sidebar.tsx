'use client'

import { useState } from 'react'
import { MessageSquare, Plus } from 'lucide-react'

interface Report {
  id: string
  title: string
  category: string
  status: 'pending' | 'in-progress' | 'resolved'
  lastMessage: string
  unread: number
}

interface ReportsSidebarProps {
  selectedReportId: string
  onSelectReport: (reportId: string) => void
}

export function ReportsSidebar({ selectedReportId, onSelectReport }: ReportsSidebarProps) {
  const [reports] = useState<Report[]>([
    {
      id: 'RPT-001',
      title: 'Illegal Parking Zone',
      category: 'Traffic',
      status: 'in-progress',
      lastMessage: 'Official replied 2 hours ago',
      unread: 0,
    },
    {
      id: 'RPT-002',
      title: 'Damaged Road Surface',
      category: 'Infrastructure',
      status: 'pending',
      lastMessage: 'You: Sent photos of the damage...',
      unread: 1,
    },
    {
      id: 'RPT-003',
      title: 'Public Health Concern',
      category: 'Health',
      status: 'resolved',
      lastMessage: 'Issue resolved on June 5',
      unread: 0,
    },
  ])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'in-progress':
        return 'bg-blue-100 text-blue-800'
      case 'resolved':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="w-80 border-r border-border bg-card flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">My Reports</h2>
          <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <Plus className="h-5 w-5 text-primary" />
          </button>
        </div>
        <p className="text-sm text-muted-foreground">Active conversations with officials</p>
      </div>

      {/* Reports List */}
      <div className="flex-1 overflow-y-auto">
        {reports.map((report) => (
          <button
            key={report.id}
            onClick={() => onSelectReport(report.id)}
            className={`w-full p-4 border-b border-border text-left transition-colors hover:bg-secondary/50 ${
              selectedReportId === report.id ? 'bg-secondary border-l-4 border-l-primary' : ''
            }`}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <h3 className="font-semibold text-foreground truncate">{report.title}</h3>
              </div>
              {report.unread > 0 && (
                <span className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-0.5 flex-shrink-0">
                  {report.unread}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className={`text-xs px-2 py-1 rounded ${getStatusColor(report.status)}`}>
                {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
              </span>
              <span className="text-xs text-muted-foreground">{report.category}</span>
            </div>

            <p className="text-xs text-muted-foreground truncate">{report.lastMessage}</p>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border bg-secondary/20">
        <button className="w-full py-2 px-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-sm">
          New Report
        </button>
      </div>
    </div>
  )
}
