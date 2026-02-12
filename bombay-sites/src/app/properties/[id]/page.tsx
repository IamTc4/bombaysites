import { properties } from "@/lib/data"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MapPin, Home, Square, Calendar } from "lucide-react"

export default async function PropertyPage({ params }: { params: { id: string } }) {
  const { id } = params
  const property = properties.find((p) => p.id === id)

  if (!property) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Property Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            {property.location}
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-right">
          <div className="text-3xl font-bold text-primary">{property.price}</div>
          <Badge className="mt-2 text-lg px-4 py-1">{property.status}</Badge>
        </div>
      </div>

      {/* Image Gallery Mock */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 h-[400px] md:h-[500px]">
         <div className="md:col-span-2 bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
             {/* Main Image Placeholder */}
             <div className="text-gray-500">Main Image</div>
         </div>
         <div className="grid grid-rows-2 gap-4">
            <div className="bg-gray-200 rounded-lg flex items-center justify-center">Image 2</div>
            <div className="bg-gray-200 rounded-lg flex items-center justify-center relative">
                Image 3
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-xl cursor-pointer">
                    +5 More
                </div>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
            {/* Key Features */}
            <Card>
                <CardContent className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                        <Home className="h-6 w-6 mb-2 text-primary" />
                        <span className="text-sm text-muted-foreground">Type</span>
                        <span className="font-bold">{property.bhk}</span>
                    </div>
                     <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                        <Square className="h-6 w-6 mb-2 text-primary" />
                        <span className="text-sm text-muted-foreground">Area</span>
                        <span className="font-bold">{property.area}</span>
                    </div>
                     <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                        <Calendar className="h-6 w-6 mb-2 text-primary" />
                        <span className="text-sm text-muted-foreground">Status</span>
                        <span className="font-bold">{property.status}</span>
                    </div>
                     <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                        <span className="text-2xl font-bold text-primary">EMI</span>
                        <span className="text-xs text-muted-foreground">Starts @</span>
                        <span className="font-bold">₹35k/mo</span>
                    </div>
                </CardContent>
            </Card>

            {/* Description */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                    <br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>

            {/* Amenities */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.amenities.map(amenity => (
                        <div key={amenity} className="flex items-center gap-2">
                             <div className="h-2 w-2 bg-primary rounded-full" />
                             {amenity}
                        </div>
                    ))}
                </div>
            </div>

            {/* Map Mock */}
             <div>
                <h2 className="text-2xl font-bold mb-4">Location</h2>
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                    Google Maps Integration
                </div>
            </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Contact Agent</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 bg-gray-300 rounded-full" />
                        <div>
                            <div className="font-bold">Vikram Malhotra</div>
                            <div className="text-sm text-muted-foreground">Senior Agent</div>
                        </div>
                    </div>
                    <Input placeholder="Your Name" />
                    <Input placeholder="Phone Number" />
                    <Input placeholder="Email Address" />
                    <textarea
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="I'm interested in this property..."
                    />
                    <Button className="w-full">Send Inquiry</Button>
                    <Button variant="outline" className="w-full">Call Now</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>EMI Calculator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between">
                        <span>Loan Amount</span>
                        <span className="font-bold">{property.price}</span>
                    </div>
                     <div className="flex justify-between">
                        <span>Interest Rate</span>
                        <span className="font-bold">8.5%</span>
                    </div>
                     <div className="flex justify-between">
                        <span>Tenure</span>
                        <span className="font-bold">20 Years</span>
                    </div>
                     <div className="pt-4 border-t flex justify-between items-center">
                        <span className="text-lg">Monthly EMI</span>
                        <span className="text-xl font-bold text-primary">₹35,450</span>
                    </div>
                    <Button variant="secondary" className="w-full">View Detailed Breakup</Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  )
}
