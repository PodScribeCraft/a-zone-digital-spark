
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-800/20 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">A-Zone</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-300 transition-colors hover:text-white">Home</Link>
          <Link to="/about" className="text-gray-300 transition-colors hover:text-white">About</Link>
          <Link to="/services" className="text-gray-300 transition-colors hover:text-white">Services</Link>
          <Link to="/faq" className="text-gray-300 transition-colors hover:text-white">FAQ</Link>
          <Link to="/contact" className="text-gray-300 transition-colors hover:text-white">Contact</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex bg-purple-700 hover:bg-purple-600">
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-gray-900 p-6 md:hidden">
          <div className="relative z-20 grid gap-6 p-4">
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <span className="font-bold text-xl bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">A-Zone</span>
            </Link>
            <nav className="grid grid-flow-row auto-rows-max text-lg gap-6">
              <Link to="/" className="flex w-full items-center py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="flex w-full items-center py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/services" className="flex w-full items-center py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/faq" className="flex w-full items-center py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>FAQ</Link>
              <Link to="/contact" className="flex w-full items-center py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Contact</Link>
            </nav>
            <Button asChild className="w-full bg-purple-700 hover:bg-purple-600">
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
