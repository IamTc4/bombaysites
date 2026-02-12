import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">BombaySites</h3>
            <p className="text-sm text-muted-foreground">
              Your trusted partner in finding the perfect home in Mumbai and suburbs.
              We offer end-to-end real estate solutions.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li><Link href="/properties/1" className="hover:text-foreground">Properties</Link></li>
              <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground">Buy Property</Link></li>
              <li><Link href="#" className="hover:text-foreground">Rent Property</Link></li>
              <li><Link href="#" className="hover:text-foreground">Sell Property</Link></li>
              <li><Link href="#" className="hover:text-foreground">Home Loans</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Mumbai, Maharashtra</li>
              <li>info@bombaysites.com</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bombay Sites. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
