import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Building, Users, Activity, DollarSign } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹ 4.5Cr</div>
            <p className="text-xs text-muted-foreground">+19% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">+201 since last hour</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity or Chart Placeholder */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                <span className="text-muted-foreground">Chart Placeholder</span>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
                <div className="flex items-center">
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">Amit Patel</p>
                        <p className="text-sm text-muted-foreground">amit@example.com</p>
                    </div>
                    <div className="ml-auto font-medium">Just now</div>
                </div>
                <div className="flex items-center">
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">Priya Singh</p>
                        <p className="text-sm text-muted-foreground">priya@example.com</p>
                    </div>
                    <div className="ml-auto font-medium">2m ago</div>
                </div>
                 <div className="flex items-center">
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">Rahul Kumar</p>
                        <p className="text-sm text-muted-foreground">rahul@example.com</p>
                    </div>
                    <div className="ml-auto font-medium">5m ago</div>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
