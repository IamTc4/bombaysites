import Link from "next/link"
import { LayoutDashboard, Home, Users, Settings, LogOut } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-muted/40">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r bg-background md:flex">
        <div className="flex h-16 items-center px-6 font-bold text-lg border-b">
           Admin Panel
        </div>
        <nav className="flex-1 space-y-2 p-4">
           <Link href="/admin" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
           </Link>
           <Link href="/admin/properties" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted">
              <Home className="h-4 w-4" />
              Properties
           </Link>
           <Link href="/admin/leads" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted">
              <Users className="h-4 w-4" />
              Leads
           </Link>
           <Link href="/admin/settings" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted">
              <Settings className="h-4 w-4" />
              Settings
           </Link>
        </nav>
        <div className="p-4 border-t">
           <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-destructive hover:bg-destructive/10">
              <LogOut className="h-4 w-4" />
              Logout
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
         {children}
      </main>
    </div>
  )
}
