
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-purple-800/20 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-bold text-2xl bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">A-Zone</span>
            </Link>
            <p className="text-muted-foreground">
              Digital solutions that drive success in today's ever-changing landscape.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-white">Web & Mobile Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-white">E-commerce Website Management</Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-white">Data Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-white">AI Solutions</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-white">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <address className="not-italic text-muted-foreground">
              <p>Toronto, Canada</p>
              <p className="mt-2">info@a-zone.agency</p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t border-purple-800/20 pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} A-Zone Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
