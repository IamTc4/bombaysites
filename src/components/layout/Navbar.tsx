import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Home, Menu } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">
              Bombay Sites
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/properties" className="transition-colors hover:text-primary">
              Properties
            </Link>
            <Link href="/about" className="transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="transition-colors hover:text-primary">
              Contact
            </Link>
             <Link href="/admin" className="transition-colors hover:text-primary">
              Admin (Demo)
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-2">
            <Link href="/login">
                <Button variant="ghost" size="sm">
                    Log in
                </Button>
            </Link>
            <Link href="/signup">
                <Button size="sm">Sign up</Button>
            </Link>
          </nav>
           <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
            </Button>
        </div>
      </div>
    </header>
  )
}
