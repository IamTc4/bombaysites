"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Building, Users, Settings, FileText, Home } from "lucide-react"

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden border-r bg-muted/40 md:block w-64 min-h-screen">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Home className="h-6 w-6" />
            <span className="">Bombay Sites Admin</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-1 mt-4">
             <SidebarLink href="/admin" icon={LayoutDashboard} label="Dashboard" active={pathname === "/admin"} />
             <SidebarLink href="/admin/properties" icon={Building} label="Properties" active={pathname?.startsWith("/admin/properties")} />
             <SidebarLink href="/admin/leads" icon={Users} label="Leads" active={pathname?.startsWith("/admin/leads")} />
             <SidebarLink href="/admin/content" icon={FileText} label="Content" active={pathname?.startsWith("/admin/content")} />
             <SidebarLink href="/admin/settings" icon={Settings} label="Settings" active={pathname?.startsWith("/admin/settings")} />
          </nav>
        </div>
      </div>
    </aside>
  )
}

function SidebarLink({ href, icon: Icon, label, active }: { href: string; icon: any; label: string; active?: boolean }) {
    return (
        <Link
            href={href}
            className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary hover:bg-muted",
                active ? "bg-muted text-primary" : "text-muted-foreground"
            )}
        >
            <Icon className="h-4 w-4" />
            {label}
        </Link>
    )
}
