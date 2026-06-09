import { Clock, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react'

interface Complaint {
  id: string
  trackingNumber: string
  category: string
  description: string
  status: 'submitted' | 'reviewed' | 'in-progress' | 'resolved'
  date: string
  daysAgo: number
  messages: number
}

const mockComplaints: Complaint[] = [
  {
    id: '1',
    trackingNumber: 'SC-2024-001234',
    category: 'Infrastructure',
    description: 'Pothole on Main Street causing vehicle damage',
    status: 'in-progress',
    date: '2024-01-15',
    daysAgo: 3,
    messages: 2,
  },
  {
    id: '2',
    trackingNumber: 'SC-2024-001233',
    category: 'Corruption',
    description: 'Official demanding illegal payment for permit',
    status: 'reviewed',
    date: '2024-01-12',
    daysAgo: 6,
    messages: 1,
  },
  {
    id: '3',
    trackingNumber: 'SC-2024-001232',
    category: 'Healthcare',
    description: 'Medicine shortage at local clinic',
    status: 'resolved',
    date: '2024-01-08',
    daysAgo: 10,
    messages: 3,
  },
]

const statusConfig = {
  submitted: { label: 'Submitted', color: 'text-yellow-600', bg: 'bg-yellow-50', icon: Clock },
  reviewed: { label: 'Reviewed', color: 'text-blue-600', bg: 'bg-blue-50', icon: MessageSquare },
  'in-progress': { label: 'In Progress', color: 'text-orange-600', bg: 'bg-orange-50', icon: AlertCircle },
  resolved: { label: 'Resolved', color: 'text-green-600', bg: 'bg-green-50', icon: CheckCircle2 },
}

export function ComplaintTracker() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">My Complaints</h2>
      
      {mockComplaints.map((complaint) => {
        const StatusIcon = statusConfig[complaint.status as keyof typeof statusConfig].icon
        const config = statusConfig[complaint.status as keyof typeof statusConfig]
        
        return (
          <div
            key={complaint.id}
            className="rounded-lg border border-border bg-background p-6 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <p className="text-sm font-mono text-muted-foreground">
                    {complaint.trackingNumber}
                  </p>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${config.bg} ${config.color}`}>
                    {config.label}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {complaint.category}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {complaint.description}
                </p>
              </div>
              <StatusIcon className={`h-6 w-6 ${config.color} flex-shrink-0`} />
            </div>

            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{complaint.daysAgo} days ago</span>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-primary hover:underline">
                  <MessageSquare className="h-4 w-4" />
                  {complaint.messages} messages
                </button>
                <button className="text-primary hover:underline font-medium">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
