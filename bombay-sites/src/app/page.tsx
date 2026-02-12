import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { properties } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-zinc-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
             {/* Placeholder for Hero Image */}
            <div className="w-full h-full bg-gradient-to-r from-blue-900 to-slate-900 opacity-90" />
        </div>
        <div className="relative z-10 container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Dream Home in Mumbai
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
            Explore the best properties in Vasai, Virar, and Mumbai suburbs.
          </p>

          <div className="bg-white p-4 rounded-lg shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
            <div className="flex-1">
                <Input placeholder="Search Location, Project..." className="text-black" />
            </div>
            <div className="w-full md:w-48">
                 <Select className="text-black">
                    <option value="">Property Type</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="commercial">Commercial</option>
                 </Select>
            </div>
             <div className="w-full md:w-48">
                 <Select className="text-black">
                    <option value="">Budget</option>
                    <option value="low">Under 50L</option>
                    <option value="mid">50L - 1Cr</option>
                    <option value="high">Above 1Cr</option>
                 </Select>
            </div>
            <Button size="lg" className="w-full md:w-auto">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-zinc-50 dark:bg-zinc-900">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
              <p className="text-muted-foreground">Handpicked properties for you.</p>
            </div>
            <Link href="/properties">
               <Button variant="outline">View All</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.slice(0, 3).map((property) => (
              <Card key={property.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gray-200">
                   {/* Placeholder Image */}
                   <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-300">
                        Property Image
                   </div>
                   <Badge className="absolute top-2 left-2">{property.status}</Badge>
                   <Badge variant="secondary" className="absolute top-2 right-2">{property.type}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{property.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                     {property.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{property.bhk}</span>
                    <span>{property.area}</span>
                  </div>
                  <div className="text-xl font-bold text-primary">
                    {property.price}
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
        </div>
      </section>

      {/* Services/Categories */}
      <section className="py-16">
        <div className="container px-4 mx-auto text-center">
           <h2 className="text-3xl font-bold mb-12">Our Services</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 border rounded-lg hover:border-primary transition-colors">
                  <h3 className="text-xl font-bold mb-4">Buy a Home</h3>
                  <p className="text-muted-foreground mb-4">Find your perfect home with our immersive photo experience and the most listings.</p>
                  <Button variant="outline">Search Homes</Button>
              </div>
              <div className="p-6 border rounded-lg hover:border-primary transition-colors">
                  <h3 className="text-xl font-bold mb-4">Rent a Home</h3>
                  <p className="text-muted-foreground mb-4">We are creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.</p>
                  <Button variant="outline">Find Rentals</Button>
              </div>
              <div className="p-6 border rounded-lg hover:border-primary transition-colors">
                  <h3 className="text-xl font-bold mb-4">Sell a Home</h3>
                  <p className="text-muted-foreground mb-4">No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
                  <Button variant="outline">See Options</Button>
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-zinc-100 dark:bg-zinc-800">
        <div className="container px-4 mx-auto">
           <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                    <p className="italic mb-4">"Bombay Sites helped me find my dream apartment in Vasai. The process was smooth and transparent."</p>
                    <div className="font-bold">- Rahul Sharma</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                    <p className="italic mb-4">"Excellent service and support. They guided me through every step of the home loan process."</p>
                    <div className="font-bold">- Priya Patel</div>
                </CardContent>
              </Card>
           </div>
        </div>
      </section>
    </div>
  )
}
