import { Bell, Settings, LogOut, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export function CitizenPortalHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">SC</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">SmartCitizen</h1>
            <p className="text-xs text-muted-foreground">Citizen Portal</p>
          </div>
        </div>

        <nav className="flex items-center gap-8 mr-6">
          <Link 
            href="/citizen-portal" 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Dashboard
          </Link>
          <Link 
            href="/citizen-portal/reports"
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
            My Reports
          </Link>
        </nav>
        
        <div className="flex items-center gap-6">
          <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Settings className="h-5 w-5" />
          </button>
          
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
