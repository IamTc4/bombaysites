export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // sq ft
  status: "For Sale" | "For Rent";
  imageUrl: string;
  description: string;
  amenities: string[];
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Luxury 3BHK Apartment in Vasai West",
    location: "Vasai West, Mumbai",
    price: 12500000,
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    area: 1450,
    status: "For Sale",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000",
    description: "Spacious 3BHK with modern amenities, sea view, and proximity to the station.",
    amenities: ["Swimming Pool", "Gym", "Parking", "Security"],
  },
  {
    id: "2",
    title: "Affordable 1BHK in Virar",
    location: "Virar East, Mumbai",
    price: 3500000,
    type: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    area: 550,
    status: "For Sale",
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1000",
    description: "Perfect for first-time buyers. Close to schools and markets.",
    amenities: ["Lift", "Water Supply", "CCTV"],
  },
  {
    id: "3",
    title: "Premium Villa in Malad",
    location: "Malad West, Mumbai",
    price: 45000000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 4,
    area: 3200,
    status: "For Sale",
    imageUrl: "https://images.unsplash.com/photo-1613490493576-2f5037657911?auto=format&fit=crop&q=80&w=1000",
    description: "Exclusive villa with private garden and terrace.",
    amenities: ["Private Pool", "Garden", "Home Theater", "Servant Quarter"],
  },
   {
    id: "4",
    title: "2BHK Rental in Andheri",
    location: "Andheri West, Mumbai",
    price: 45000,
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 950,
    status: "For Rent",
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1000",
    description: "Fully furnished 2BHK near metro station.",
    amenities: ["Furnished", "Wi-Fi", "Gym Access"],
  },
];
