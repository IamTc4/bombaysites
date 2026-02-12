import { dashboardStats, recentLeads } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.totalProperties}</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.activeLeads}</div>
            <p className="text-xs text-muted-foreground">+10 since last week</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Properties Sold</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.propertiesSold}</div>
            <p className="text-xs text-muted-foreground">+1 this week</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardStats.views}</div>
            <p className="text-xs text-muted-foreground">+200 today</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Leads */}
      <div>
         <h2 className="text-xl font-bold mb-4">Recent Leads</h2>
         <Card>
            <CardContent className="p-0">
               <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                     <thead className="[&_tr]:border-b">
                        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                           <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Name</th>
                           <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Interest</th>
                           <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                           <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Date</th>
                        </tr>
                     </thead>
                     <tbody className="[&_tr:last-child]:border-0">
                        {recentLeads.map((lead) => (
                           <tr key={lead.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                              <td className="p-4 align-middle font-medium">{lead.name}</td>
                              <td className="p-4 align-middle">{lead.interest}</td>
                              <td className="p-4 align-middle">
                                 <Badge variant="outline">{lead.status}</Badge>
                              </td>
                              <td className="p-4 align-middle">{lead.date}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  )
}
