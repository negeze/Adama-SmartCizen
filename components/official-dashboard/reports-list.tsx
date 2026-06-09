'use client'

import { useState } from 'react'
import { MessageSquare, Plus } from 'lucide-react'

interface CitizenReport {
  id: string
  citizenName: string
  title: string
  category: string
  status: 'pending' | 'in-progress' | 'resolved'
  lastMessage: string
  unread: number
  priority: 'low' | 'medium' | 'high'
  date: string
}

interface OfficialReportsListProps {
  selectedReportId: string
  onSelectReport: (reportId: string) => void
}

export function OfficialReportsList({ selectedReportId, onSelectReport }: OfficialReportsListProps) {
  const [reports] = useState<CitizenReport[]>([
    {
      id: 'RPT-001',
      citizenName: 'Ahmed Mohammed',
      title: 'Illegal Parking Zone',
      category: 'Traffic',
      status: 'in-progress',
      lastMessage: 'Citizen sent evidence photos',
      unread: 0,
      priority: 'high',
      date: 'June 8',
    },
    {
      id: 'RPT-002',
      citizenName: 'Fatima Hassan',
      title: 'Damaged Road Surface',
      category: 'Infrastructure',
      status: 'pending',
      lastMessage: 'Awaiting initial assessment',
      unread: 2,
      priority: 'medium',
      date: 'June 7',
    },
    {
      id: 'RPT-003',
      citizenName: 'Mohamed Ali',
      title: 'Contaminated Water Supply',
      category: 'Health',
      status: 'in-progress',
      lastMessage: 'Test samples collected',
      unread: 0,
      priority: 'high',
      date: 'June 6',
    },
    {
      id: 'RPT-004',
      citizenName: 'Zainab Ibrahim',
      title: 'Illegal Business Operation',
      category: 'Compliance',
      status: 'pending',
      lastMessage: 'Documentation needed',
      unread: 1,
      priority: 'medium',
      date: 'June 5',
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-50'
      case 'medium':
        return 'text-orange-600 bg-orange-50'
      case 'low':
        return 'text-green-600 bg-green-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div className="w-80 border-r border-border bg-card flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">Citizen Reports</h2>
          <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <Plus className="h-5 w-5 text-primary" />
          </button>
        </div>
        <p className="text-sm text-muted-foreground">Active conversations with citizens</p>
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
              <div className="flex items-center gap-2 flex-1">
                <MessageSquare className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground truncate">{report.title}</h3>
                  <p className="text-xs text-muted-foreground">{report.citizenName}</p>
                </div>
              </div>
              {report.unread > 0 && (
                <span className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-0.5 flex-shrink-0">
                  {report.unread}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className={`text-xs px-2 py-1 rounded ${getStatusColor(report.status)}`}>
                {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
              </span>
              <span className={`text-xs px-2 py-1 rounded font-semibold ${getPriorityColor(report.priority)}`}>
                {report.priority.charAt(0).toUpperCase() + report.priority.slice(1)} Priority
              </span>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground truncate">{report.lastMessage}</p>
              <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">{report.date}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border bg-secondary/20">
        <p className="text-xs text-muted-foreground text-center">
          {reports.length} active reports
        </p>
      </div>
    </div>
  )
}
