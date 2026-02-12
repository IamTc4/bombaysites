import { properties } from "@/lib/data"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Badge } from "@/components/ui/Badge"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card"
import { MapPin, Bed, Bath, Move, Home, CheckCircle } from "lucide-react"

export default async function PropertyDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = properties.find((p) => p.id === id)

  if (!property) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title & Location */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
             <div>
                 <h1 className="text-3xl font-bold">{property.title}</h1>
                 <div className="flex items-center text-muted-foreground mt-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{property.location}</span>
                 </div>
             </div>
             <div className="flex flex-col items-end">
                <div className="text-3xl font-bold text-primary">₹ {property.price.toLocaleString('en-IN')}</div>
                <Badge variant={property.status === "For Rent" ? "secondary" : "default"} className="mt-2 text-lg px-4 py-1">
                    {property.status}
                </Badge>
             </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Main Content */}
         <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                <img src={property.imageUrl} alt={property.title} className="w-full h-full object-cover" />
            </div>

            {/* Overview */}
            <Card>
                <CardHeader>
                    <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                            <Bed className="h-6 w-6 mb-2 text-primary" />
                            <span className="font-semibold">{property.bedrooms}</span>
                            <span className="text-sm text-muted-foreground">Bedrooms</span>
                        </div>
                         <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                            <Bath className="h-6 w-6 mb-2 text-primary" />
                            <span className="font-semibold">{property.bathrooms}</span>
                            <span className="text-sm text-muted-foreground">Bathrooms</span>
                        </div>
                         <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                            <Move className="h-6 w-6 mb-2 text-primary" />
                            <span className="font-semibold">{property.area}</span>
                            <span className="text-sm text-muted-foreground">Sq Ft</span>
                        </div>
                         <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                            <Home className="h-6 w-6 mb-2 text-primary" />
                            <span className="font-semibold">{property.type}</span>
                            <span className="text-sm text-muted-foreground">Type</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Description */}
             <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                </p>
            </div>

             {/* Amenities */}
             <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2 p-3 bg-muted/30 rounded-md">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span>{amenity}</span>
                        </div>
                    ))}
                </div>
            </div>
         </div>

         {/* Sidebar - Contact Form */}
         <div className="lg:col-span-1">
            <Card className="sticky top-24">
                <CardHeader>
                    <CardTitle>Contact Agent</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-muted-foreground">
                            RS
                        </div>
                        <div>
                            <div className="font-semibold">Rahul Sharma</div>
                            <div className="text-sm text-muted-foreground">Senior Agent</div>
                        </div>
                    </div>
                    <form className="space-y-4">
                        <Input placeholder="Your Name" />
                        <Input placeholder="Email Address" type="email" />
                        <Input placeholder="Phone Number" type="tel" />
                        <textarea
                            className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                            placeholder="I am interested in this property..."
                        />
                        <Button className="w-full">Send Message</Button>
                    </form>
                </CardContent>
            </Card>
         </div>
      </div>
    </div>
  )
}
