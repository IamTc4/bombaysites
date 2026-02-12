"use client"

import { useState } from "react"
import { properties } from "@/lib/data"
import { Property } from "@/lib/data"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import Link from "next/link"
import { Search, Filter } from "lucide-react"

export default function PropertiesPage() {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState<string>("all")

  const handleSearch = () => {
    let filtered = properties.filter((property) => {
      const matchesSearch = property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            property.title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesType = selectedType === "all" || property.type.toLowerCase() === selectedType.toLowerCase()

      return matchesSearch && matchesType
    })
    setFilteredProperties(filtered)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold">Properties for Sale & Rent</h1>
        <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative w-full md:w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search location..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
            </div>
            <Button onClick={handleSearch}>Search</Button>
             <Button variant="outline" className="md:hidden">
                <Filter className="h-4 w-4" />
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters - Hidden on mobile for now */}
        <div className="hidden lg:block space-y-6">
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">Filters</h3>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Type</label>
                    <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                    >
                        <option value="all">All Types</option>
                        <option value="apartment">Apartment</option>
                        <option value="villa">Villa</option>
                        <option value="plot">Plot</option>
                    </select>
                </div>

                 <div className="space-y-2">
                    <label className="text-sm font-medium">Price Range</label>
                    <Input type="number" placeholder="Min Price" className="mb-2" />
                    <Input type="number" placeholder="Max Price" />
                </div>
                 <Button className="w-full" onClick={handleSearch}>Apply Filters</Button>
            </div>
        </div>

        {/* Property Grid */}
        <div className="lg:col-span-3">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.length > 0 ? (
                    filteredProperties.map((property) => (
                        <Card key={property.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                             <div className="aspect-video w-full relative">
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
                                    <Button variant="outline" className="w-full">View Details</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 text-muted-foreground">
                        No properties found matching your criteria.
                    </div>
                )}
             </div>
        </div>
      </div>
    </div>
  )
}
