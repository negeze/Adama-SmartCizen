import { BarChart3, PieChart, TrendingUp } from 'lucide-react'

export function PerformanceMetrics() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Category Breakdown */}
      <div className="rounded-lg border border-border bg-background p-6">
        <div className="flex items-center gap-2 mb-6">
          <PieChart className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-bold text-foreground">Complaints by Category</h3>
        </div>
        
        <div className="space-y-4">
          {[
            { category: 'Corruption', count: 24, percentage: 28 },
            { category: 'Infrastructure', count: 18, percentage: 21 },
            { category: 'Police Abuse', count: 16, percentage: 19 },
            { category: 'Healthcare', count: 14, percentage: 16 },
            { category: 'Education', count: 12, percentage: 14 },
          ].map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium text-foreground">{item.category}</p>
                <p className="text-sm font-bold text-primary">{item.count}</p>
              </div>
              <div className="w-full bg-secondary/30 rounded-full h-2">
                <div
                  className="bg-primary rounded-full h-2 transition-all"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Department Performance */}
      <div className="rounded-lg border border-border bg-background p-6">
        <div className="flex items-center gap-2 mb-6">
          <BarChart3 className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-bold text-foreground">Department Performance</h3>
        </div>
        
        <div className="space-y-4">
          {[
            { dept: 'Municipality', resolved: 12, pending: 3, score: 92 },
            { dept: 'Police', resolved: 8, pending: 5, score: 78 },
            { dept: 'Health', resolved: 10, pending: 2, score: 88 },
            { dept: 'Education', resolved: 6, pending: 1, score: 95 },
          ].map((dept, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-semibold text-foreground">{dept.dept}</p>
                  <p className="text-xs text-muted-foreground">
                    {dept.resolved} resolved • {dept.pending} pending
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-primary">{dept.score}%</p>
                  <p className="text-xs text-muted-foreground">Efficiency</p>
                </div>
              </div>
              <div className="w-full bg-secondary/50 rounded-full h-1.5">
                <div
                  className="bg-primary rounded-full h-1.5 transition-all"
                  style={{ width: `${dept.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
