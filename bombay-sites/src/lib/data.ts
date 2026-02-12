export interface Property {
  id: string
  title: string
  price: string
  location: string
  type: "Sale" | "Rent"
  bhk: string
  area: string
  status: "Ready to Move" | "Under Construction" | "Resale"
  image: string
  description: string
  amenities: string[]
  images: string[]
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Luxury 2 BHK Apartment",
    price: "₹ 65 Lakhs",
    location: "Vasai West, Mumbai",
    type: "Sale",
    bhk: "2 BHK",
    area: "950 sq.ft",
    status: "Ready to Move",
    image: "/placeholder-property-1.jpg",
    description: "A beautiful 2 BHK apartment with modern amenities, located in the heart of Vasai West. Close to station and schools.",
    amenities: ["Swimming Pool", "Gym", "Parking", "Security", "Garden"],
    images: ["/placeholder-property-1.jpg", "/placeholder-interior-1.jpg", "/placeholder-kitchen-1.jpg"]
  },
  {
    id: "2",
    title: "Spacious 1 BHK Flat",
    price: "₹ 35 Lakhs",
    location: "Virar West, Mumbai",
    type: "Sale",
    bhk: "1 BHK",
    area: "650 sq.ft",
    status: "Under Construction",
    image: "/placeholder-property-2.jpg",
    description: "Affordable 1 BHK flat in a new project in Virar. Great investment opportunity with high appreciation potential.",
    amenities: ["Lift", "Power Backup", "Club House", "Jogging Track"],
    images: ["/placeholder-property-2.jpg", "/placeholder-interior-2.jpg"]
  },
  {
    id: "3",
    title: "Premium 3 BHK Villa",
    price: "₹ 1.2 Cr",
    location: "Naigaon East, Mumbai",
    type: "Sale",
    bhk: "3 BHK",
    area: "1500 sq.ft",
    status: "Ready to Move",
    image: "/placeholder-property-3.jpg",
    description: "Exquisite 3 BHK villa with private garden and terrace. Peaceful locality with excellent connectivity.",
    amenities: ["Private Garden", "Terrace", "Gated Community", "CCTV"],
    images: ["/placeholder-property-3.jpg", "/placeholder-interior-3.jpg"]
  },
  {
    id: "4",
    title: "Commercial Shop for Rent",
    price: "₹ 25,000 / month",
    location: "Nallasopara West, Mumbai",
    type: "Rent",
    bhk: "Shop",
    area: "300 sq.ft",
    status: "Ready to Move",
    image: "/placeholder-property-4.jpg",
    description: "Prime location shop available for rent. Ideal for retail or office space. High footfall area.",
    amenities: ["Main Road Facing", "Water Connection", "Shutter"],
    images: ["/placeholder-property-4.jpg"]
  },
  {
    id: "5",
    title: "1 RK Studio Apartment",
    price: "₹ 22 Lakhs",
    location: "Malad West, Mumbai",
    type: "Sale",
    bhk: "1 RK",
    area: "400 sq.ft",
    status: "Resale",
    image: "/placeholder-property-5.jpg",
    description: "Cozy 1 RK studio apartment suitable for singles or couples. Near Malad station.",
    amenities: ["24/7 Water", "Security", "Lift"],
    images: ["/placeholder-property-5.jpg"]
  },
]

export const dashboardStats = {
  totalProperties: 124,
  activeLeads: 45,
  propertiesSold: 12,
  revenue: "₹ 8.5 Cr",
  views: 15430
}

export const recentLeads = [
  { id: 1, name: "Rahul Sharma", interest: "2 BHK in Vasai", status: "New", date: "2023-10-25" },
  { id: 2, name: "Priya Patel", interest: "1 BHK Rent", status: "Contacted", date: "2023-10-24" },
  { id: 3, name: "Amit Singh", interest: "Commercial Shop", status: "Site Visit", date: "2023-10-23" },
  { id: 4, name: "Sneha Gupta", interest: "3 BHK Villa", status: "Negotiation", date: "2023-10-22" },
]
