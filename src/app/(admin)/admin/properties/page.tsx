import { properties } from "@/lib/data"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { Plus, Pencil, Trash } from "lucide-react"

export default function AdminPropertiesPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Properties</h1>
        <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Property
        </Button>
      </div>

      <div className="rounded-md border bg-white">
        <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm text-left">
                <thead className="[&_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Title</th>
                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Location</th>
                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Type</th>
                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Price</th>
                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Status</th>
                        <th className="h-12 px-4 align-middle font-medium text-muted-foreground text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                    {properties.map((property) => (
                        <tr key={property.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td className="p-4 align-middle font-medium">{property.title}</td>
                            <td className="p-4 align-middle">{property.location}</td>
                            <td className="p-4 align-middle">{property.type}</td>
                            <td className="p-4 align-middle">₹ {property.price.toLocaleString('en-IN')}</td>
                            <td className="p-4 align-middle">
                                <Badge variant={property.status === "For Rent" ? "secondary" : "default"}>
                                    {property.status}
                                </Badge>
                            </td>
                            <td className="p-4 align-middle text-right">
                                <div className="flex justify-end gap-2">
                                    <Button variant="ghost" size="icon">
                                        <Pencil className="h-4 w-4" />
                                        <span className="sr-only">Edit</span>
                                    </Button>
                                    <Button variant="ghost" size="icon">
                                        <Trash className="h-4 w-4 text-destructive" />
                                        <span className="sr-only">Delete</span>
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}
