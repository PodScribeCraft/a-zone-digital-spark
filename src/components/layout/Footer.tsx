
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-purple-800/20 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container flex h-16 items-center justify-between py-0">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-xl bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">A-Zone</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/services" className="text-gray-300 transition-colors hover:text-white">Services</Link>
          <Link to="/about" className="text-gray-300 transition-colors hover:text-white">About</Link>
          <Link to="/faq" className="text-gray-300 transition-colors hover:text-white">FAQ</Link>
          <Link to="/contact" className="text-gray-300 transition-colors hover:text-white">Contact</Link>
        </div>
        
        <p className="text-sm text-muted-foreground hidden md:block">
          &copy; {currentYear} A-Zone Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
