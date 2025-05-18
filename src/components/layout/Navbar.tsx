
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme/ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">A-Zone</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/70 transition-colors hover:text-foreground">Home</Link>
          <Link to="/about" className="text-foreground/70 transition-colors hover:text-foreground">About</Link>
          <Link to="/services" className="text-foreground/70 transition-colors hover:text-foreground">Services</Link>
          <Link to="/contact" className="text-foreground/70 transition-colors hover:text-foreground">Contact</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild className="hidden md:flex">
            <Link to="/contact">Get Started</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-background p-6 md:hidden">
          <div className="relative z-20 grid gap-6 p-4">
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <span className="font-bold text-xl">A-Zone</span>
            </Link>
            <nav className="grid grid-flow-row auto-rows-max text-lg gap-6">
              <Link to="/" className="flex w-full items-center py-2 text-foreground/70 hover:text-foreground" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="flex w-full items-center py-2 text-foreground/70 hover:text-foreground" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/services" className="flex w-full items-center py-2 text-foreground/70 hover:text-foreground" onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/contact" className="flex w-full items-center py-2 text-foreground/70 hover:text-foreground" onClick={() => setIsOpen(false)}>Contact</Link>
            </nav>
            <Button asChild className="w-full">
              <Link to="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
