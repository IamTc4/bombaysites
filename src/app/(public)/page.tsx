import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Search } from "lucide-react"
import { properties } from "@/lib/data"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-10">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full flex items-center justify-center bg-gray-900 text-white">
        {/* Placeholder for background image */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=2000")' }}
        />

        <div className="container mx-auto relative z-20 flex flex-col items-center gap-6 text-center px-4">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Find Your Dream Home in Mumbai
          </h1>
          <p className="max-w-[700px] text-lg text-gray-200 sm:text-xl">
            Explore the best properties in Vasai, Virar, and beyond.
          </p>

          <div className="w-full max-w-3xl rounded-lg bg-white p-4 shadow-lg flex flex-col md:flex-row gap-4 items-center">
             <div className="flex-1 w-full">
                <Input placeholder="Search by location, e.g. Vasai" className="text-black bg-white" />
             </div>
             <div className="flex-1 w-full">
                 <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-black">
                    <option value="">Property Type</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="plot">Plot</option>
                 </select>
             </div>
             <Button size="lg" className="w-full md:w-auto">
                <Search className="mr-2 h-4 w-4" /> Search
             </Button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">Featured Properties</h2>
            <Link href="/properties">
              <Button variant="outline">View all properties</Button>
            </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.slice(0, 3).map((property) => (
                <Card key={property.id} className="overflow-hidden group">
                    <div className="aspect-video w-full relative">
                        {/* Use img for simplicity */}
                        <img
                            src={property.imageUrl}
                            alt={property.title}
                            className="object-cover w-full h-full transition-transform group-hover:scale-105 duration-300"
                        />
                        <div className="absolute top-2 right-2">
                           <Badge variant={property.status === "For Rent" ? "secondary" : "default"}>
                              {property.status}
                           </Badge>
                        </div>
                    </div>
                    <CardHeader>
                        <CardTitle className="line-clamp-1 text-lg">{property.title}</CardTitle>
                        <CardDescription>{property.location}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex justify-between text-sm text-muted-foreground">
                            <span>{property.bedrooms} Beds</span>
                            <span>{property.bathrooms} Baths</span>
                            <span>{property.area} sqft</span>
                        </div>
                        <div className="mt-4 text-xl font-bold text-primary">
                            ₹ {property.price.toLocaleString('en-IN')}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Link href={`/properties/${property.id}`} className="w-full">
                            <Button className="w-full">View Details</Button>
                        </Link>
                    </CardFooter>
                </Card>
            ))}
        </div>
      </section>

       {/* Why Choose Us */}
       <section className="bg-muted py-16 mt-10">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-12">Why Choose Bombay Sites?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center gap-4 p-6 bg-background rounded-lg shadow-sm">
                    <div className="p-4 rounded-full bg-primary/10 text-primary">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    </div>
                    <h3 className="text-xl font-bold">Wide Range of Properties</h3>
                    <p className="text-muted-foreground">From luxury villas to affordable apartments, we have something for everyone in Mumbai.</p>
                </div>
                 <div className="flex flex-col items-center gap-4 p-6 bg-background rounded-lg shadow-sm">
                    <div className="p-4 rounded-full bg-primary/10 text-primary">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" x2="23" y1="8" y2="11"/><line x1="23" x2="17" y1="11" y2="11"/></svg>
                    </div>
                    <h3 className="text-xl font-bold">Trusted Agents</h3>
                    <p className="text-muted-foreground">Our agents are verified, experienced, and dedicated to finding you the best deal.</p>
                </div>
                 <div className="flex flex-col items-center gap-4 p-6 bg-background rounded-lg shadow-sm">
                    <div className="p-4 rounded-full bg-primary/10 text-primary">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <h3 className="text-xl font-bold">Fast & Transparent</h3>
                    <p className="text-muted-foreground">We ensure a smooth, transparent, and hassle-free transaction process for all our clients.</p>
                </div>
            </div>
         </div>
       </section>
    </div>
  )
}
