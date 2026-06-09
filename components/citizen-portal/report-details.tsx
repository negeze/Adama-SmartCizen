'use client'

import { Clock, MapPin, AlertCircle, User } from 'lucide-react'

interface ReportDetailsProps {
  reportId: string
}

export function ReportDetails({ reportId }: ReportDetailsProps) {
  // Mock data - in real app would fetch based on reportId
  const report = {
    id: reportId,
    title: 'Illegal Parking Zone',
    category: 'Traffic',
    status: 'in-progress',
    createdDate: 'June 8, 2024',
    priority: 'High',
    assignedOfficer: 'Officer Ahmed Hassan',
    department: 'Traffic Management',
    location: 'Adama Main Street, Block 5',
    description: 'Vehicles are being parked in restricted areas causing traffic congestion',
    estimatedResolution: 'June 15, 2024',
    progress: 65,
  }

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="mb-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{report.title}</h3>
            <p className="text-muted-foreground">Report ID: {report.id}</p>
          </div>
          <span className={`px-4 py-2 rounded-lg font-semibold text-sm ${
            report.status === 'in-progress' 
              ? 'bg-blue-100 text-blue-800'
              : report.status === 'pending'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-green-100 text-green-800'
          }`}>
            {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
          </span>
        </div>

        <p className="text-foreground mb-4">{report.description}</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-foreground">Resolution Progress</span>
          <span className="text-sm text-muted-foreground">{report.progress}%</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
          <div 
            className="bg-primary h-full rounded-full transition-all" 
            style={{ width: `${report.progress}%` }}
          />
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-6">
        <div className="flex gap-3">
          <User className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase">Assigned Officer</p>
            <p className="text-foreground font-semibold">{report.assignedOfficer}</p>
            <p className="text-sm text-muted-foreground">{report.department}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase">Location</p>
            <p className="text-foreground font-semibold">{report.location}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase">Est. Resolution</p>
            <p className="text-foreground font-semibold">{report.estimatedResolution}</p>
            <p className="text-sm text-muted-foreground">Created: {report.createdDate}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase">Priority</p>
            <p className="text-foreground font-semibold">{report.priority}</p>
            <p className="text-sm text-muted-foreground">{report.category}</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-6 pt-6 border-t border-border">
        <h4 className="font-bold text-foreground mb-4">Activity Timeline</h4>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-3 h-3 rounded-full bg-primary mt-1.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Report Submitted</p>
              <p className="text-sm text-muted-foreground">June 8, 2024 at 2:30 PM</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-3 h-3 rounded-full bg-primary mt-1.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Assigned to Officer</p>
              <p className="text-sm text-muted-foreground">June 8, 2024 at 4:15 PM</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-3 h-3 rounded-full bg-primary/40 mt-1.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Investigation in Progress</p>
              <p className="text-sm text-muted-foreground">Expected completion by June 15</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
