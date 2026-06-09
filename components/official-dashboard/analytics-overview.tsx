import { TrendingUp, AlertTriangle, CheckCircle2, Clock } from 'lucide-react'

interface AnalyticCard {
  label: string
  value: number | string
  change: string
  changePositive: boolean
  icon: React.ComponentType<{ className?: string }>
  bgColor: string
}

const analytics: AnalyticCard[] = [
  {
    label: 'New Complaints',
    value: 24,
    change: '+12% from last week',
    changePositive: false,
    icon: AlertTriangle,
    bgColor: 'bg-red-50 text-red-600',
  },
  {
    label: 'Resolved This Week',
    value: 18,
    change: '+8% from last week',
    changePositive: true,
    icon: CheckCircle2,
    bgColor: 'bg-green-50 text-green-600',
  },
  {
    label: 'Avg Resolution Time',
    value: '2.4 days',
    change: '-0.6 days improvement',
    changePositive: true,
    icon: Clock,
    bgColor: 'bg-blue-50 text-blue-600',
  },
  {
    label: 'Corruption Reports',
    value: 12,
    change: '+4 critical cases',
    changePositive: false,
    icon: TrendingUp,
    bgColor: 'bg-orange-50 text-orange-600',
  },
]

export function AnalyticsOverview() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6">Analytics Overview</h2>
      <div className="grid gap-4 md:grid-cols-4">
        {analytics.map((stat, idx) => {
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
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <p className="text-3xl font-bold text-foreground mb-2">
                {stat.value}
              </p>
              <p className={`text-xs font-medium ${stat.changePositive ? 'text-green-600' : 'text-orange-600'}`}>
                {stat.change}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
