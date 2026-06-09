import { BarChart3, TrendingUp, Clock, CheckCircle2 } from 'lucide-react'

interface Stat {
  label: string
  value: string | number
  icon: React.ComponentType<{ className?: string }>
  color: string
}

const stats: Stat[] = [
  {
    label: 'Total Complaints',
    value: 12,
    icon: BarChart3,
    color: 'text-blue-600 bg-blue-50',
  },
  {
    label: 'Resolved',
    value: 8,
    icon: CheckCircle2,
    color: 'text-green-600 bg-green-50',
  },
  {
    label: 'In Progress',
    value: 3,
    icon: TrendingUp,
    color: 'text-orange-600 bg-orange-50',
  },
  {
    label: 'Avg Response Time',
    value: '2.5 days',
    icon: Clock,
    color: 'text-purple-600 bg-purple-50',
  },
]

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon
        return (
          <div
            key={idx}
            className="rounded-lg border border-border bg-background p-6 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </h3>
              <div className={`p-2 rounded-lg ${stat.color}`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <p className="text-3xl font-bold text-foreground">
              {stat.value}
            </p>
          </div>
        )
      })}
    </div>
  )
}
