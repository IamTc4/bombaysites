import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
             <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold text-xl">Bombay Sites</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for finding the perfect home in Mumbai suburbs. We make real estate simple and transparent.
            </p>
            <div className="flex space-x-4">
               <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
               </Link>
               <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
               </Link>
               <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
               </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
               </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/properties" className="hover:underline">Properties</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Contact Us</h3>
             <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Real Estate Plaza, Andheri West, Mumbai</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                 <Mail className="h-4 w-4" />
                 <span>info@bombaysites.com</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
             <h3 className="text-sm font-medium">Newsletter</h3>
             <p className="text-sm text-muted-foreground">Subscribe to get the latest property updates.</p>
             <form className="flex flex-col space-y-2">
                <Input type="email" placeholder="Enter your email" />
                <Button type="submit">Subscribe</Button>
             </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
           <p>&copy; {new Date().getFullYear()} Bombay Sites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
