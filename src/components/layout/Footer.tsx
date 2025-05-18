
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-bold text-2xl bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">A-Zone</span>
            </Link>
            <p className="text-muted-foreground">
              Digital solutions that drive success in today's ever-changing landscape.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground">Web & Mobile Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground">Data & AI Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground">DevOps & Infrastructure</Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground">E-Commerce Solutions</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <address className="not-italic text-muted-foreground">
              <p>Toronto, Canada</p>
              <p className="mt-2">info@a-zone.agency</p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {currentYear} A-Zone Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
