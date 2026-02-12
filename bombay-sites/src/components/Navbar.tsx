import Link from "next/link"
import { Button } from "./ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-primary">Bombay</span>Sites
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/properties/1" className="text-sm font-medium transition-colors hover:text-primary">
            Properties
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/admin">
            <Button variant="outline" size="sm">Admin Login</Button>
          </Link>
          <Button size="sm">List Property</Button>
        </div>
      </div>
    </header>
  )
}
