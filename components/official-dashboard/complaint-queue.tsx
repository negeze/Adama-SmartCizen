import { AlertCircle, Eye, CheckCircle2, MessageSquare } from 'lucide-react'

interface QueueComplaint {
  id: string
  trackingNumber: string
  category: string
  priority: 'critical' | 'high' | 'medium' | 'low'
  submittedBy: string
  date: string
  status: string
}

const queueComplaints: QueueComplaint[] = [
  {
    id: '1',
    trackingNumber: 'SC-2024-001245',
    category: 'Corruption - Bribery',
    priority: 'critical',
    submittedBy: 'Anonymous',
    date: '2024-01-18 09:30',
    status: 'Pending Review',
  },
  {
    id: '2',
    trackingNumber: 'SC-2024-001244',
    category: 'Police Abuse',
    priority: 'high',
    submittedBy: 'Citizen #4521',
    date: '2024-01-18 08:15',
    status: 'Under Investigation',
  },
  {
    id: '3',
    trackingNumber: 'SC-2024-001243',
    category: 'Healthcare',
    priority: 'medium',
    submittedBy: 'Citizen #2893',
    date: '2024-01-17 14:20',
    status: 'Assigned to Health Dept',
  },
  {
    id: '4',
    trackingNumber: 'SC-2024-001242',
    category: 'Infrastructure',
    priority: 'medium',
    submittedBy: 'Citizen #5612',
    date: '2024-01-17 10:45',
    status: 'In Progress',
  },
  {
    id: '5',
    trackingNumber: 'SC-2024-001241',
    category: 'Education',
    priority: 'low',
    submittedBy: 'Citizen #1234',
    date: '2024-01-16 16:00',
    status: 'Awaiting Action',
  },
]

const priorityConfig = {
  critical: 'bg-red-100 text-red-800',
  high: 'bg-orange-100 text-orange-800',
  medium: 'bg-yellow-100 text-yellow-800',
  low: 'bg-green-100 text-green-800',
}

export function ComplaintQueue() {
  return (
    <div className="rounded-lg border border-border bg-background overflow-hidden">
      <div className="p-6 border-b border-border">
        <h2 className="text-2xl font-bold text-foreground">Complaint Queue</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {queueComplaints.length} complaints awaiting action
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-border bg-secondary/30">
            <tr>
              <th className="text-left px-6 py-3 font-semibold text-foreground">Tracking ID</th>
              <th className="text-left px-6 py-3 font-semibold text-foreground">Category</th>
              <th className="text-left px-6 py-3 font-semibold text-foreground">Priority</th>
              <th className="text-left px-6 py-3 font-semibold text-foreground">Submitted</th>
              <th className="text-left px-6 py-3 font-semibold text-foreground">Status</th>
              <th className="text-right px-6 py-3 font-semibold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {queueComplaints.map((complaint) => (
              <tr
                key={complaint.id}
                className="border-b border-border hover:bg-secondary/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <p className="font-mono text-sm text-primary font-semibold">
                    {complaint.trackingNumber}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-foreground font-medium">
                    {complaint.category}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      priorityConfig[complaint.priority]
                    }`}
                  >
                    {complaint.priority.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-muted-foreground">
                    {complaint.date}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-foreground">
                    {complaint.status}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors" title="View">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors" title="Message">
                      <MessageSquare className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 rounded-lg hover:bg-primary/10 text-primary hover:bg-primary/20 transition-colors" title="Assign">
                      <CheckCircle2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
