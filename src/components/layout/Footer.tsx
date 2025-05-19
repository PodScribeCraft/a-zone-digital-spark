
import { HashLink } from "react-router-hash-link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  };
  
  return (
    <footer className="w-full border-t border-purple-800/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
      <div className="container flex h-16 items-center justify-between py-0">
        <HashLink to="#home" className="flex items-center gap-2" scroll={scrollWithOffset}>
          <span className="font-bold text-xl bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">A-Zone</span>
        </HashLink>
        
        <div className="hidden md:flex items-center gap-6">
          <HashLink to="#services" className="text-gray-300 transition-colors hover:text-purple-400" scroll={scrollWithOffset}>Services</HashLink>
          <HashLink to="#about" className="text-gray-300 transition-colors hover:text-purple-400" scroll={scrollWithOffset}>About</HashLink>
          <HashLink to="#faq" className="text-gray-300 transition-colors hover:text-purple-400" scroll={scrollWithOffset}>FAQ</HashLink>
          <HashLink to="#contact" className="text-gray-300 transition-colors hover:text-purple-400" scroll={scrollWithOffset}>Contact</HashLink>
        </div>
        
        <p className="text-sm text-muted-foreground hidden md:block">
          &copy; {currentYear} A-Zone Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
