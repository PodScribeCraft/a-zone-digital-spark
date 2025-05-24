
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  };
  
  return (
    <header className={`sticky top-0 z-50 w-full border-b border-purple-800/20 backdrop-blur transition-colors duration-200 ${scrolled ? 'bg-black/95 supports-[backdrop-filter]:bg-black/80' : 'bg-black/80 supports-[backdrop-filter]:bg-black/60'}`}>
      <div className="container flex h-16 items-center justify-between">
        <HashLink to="#home" className="flex items-center gap-2" scroll={scrollWithOffset}>
          <span className="font-bold text-2xl bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">A-Zone</span>
        </HashLink>
        
        <nav className="hidden md:flex items-center gap-6">
          <HashLink to="#home" className="text-gray-300 transition-colors hover:text-purple-400" scroll={scrollWithOffset}>Home</HashLink>
          <HashLink to="#services" className="text-gray-300 transition-colors hover:text-purple-400" scroll={scrollWithOffset}>Services</HashLink>
          <HashLink to="#about" className="text-gray-300 transition-colors hover:text-purple-400" scroll={scrollWithOffset}>About</HashLink>
          <HashLink to="#faq" className="text-gray-300 transition-colors hover:text-purple-400" scroll={scrollWithOffset}>FAQ</HashLink>
          <HashLink to="#contact" className="text-gray-300 transition-colors hover:text-purple-400" scroll={scrollWithOffset}>Contact</HashLink>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex bg-purple-700 hover:bg-purple-600">
            <HashLink to="#contact" scroll={scrollWithOffset}>Contact Us</HashLink>
          </Button>
          {isOpen ? 
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button> :           
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          }
        </div>
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-black p-6 md:hidden">
          <div className="relative z-20 grid gap-6 p-4">
            <div className="flex items-center justify-between">
              <HashLink to="#home" className="flex items-center gap-2" onClick={() => setIsOpen(false)} scroll={scrollWithOffset}>
                <span className="font-bold text-xl bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">A-Zone</span>
              </HashLink>
            </div>
            <nav className="grid grid-flow-row auto-rows-max text-lg gap-6">
              <HashLink to="#home" className="flex w-full items-center py-2 text-gray-300 hover:text-purple-400" onClick={() => setIsOpen(false)} scroll={scrollWithOffset}>Home</HashLink>
              <HashLink to="#services" className="flex w-full items-center py-2 text-gray-300 hover:text-purple-400" onClick={() => setIsOpen(false)} scroll={scrollWithOffset}>Services</HashLink>
              <HashLink to="#about" className="flex w-full items-center py-2 text-gray-300 hover:text-purple-400" onClick={() => setIsOpen(false)} scroll={scrollWithOffset}>About</HashLink>
              <HashLink to="#faq" className="flex w-full items-center py-2 text-gray-300 hover:text-purple-400" onClick={() => setIsOpen(false)} scroll={scrollWithOffset}>FAQ</HashLink>
              <HashLink to="#contact" className="flex w-full items-center py-2 text-gray-300 hover:text-purple-400" onClick={() => setIsOpen(false)} scroll={scrollWithOffset}>Contact</HashLink>
            </nav>
            <Button asChild className="w-full bg-purple-700 hover:bg-purple-600">
              <HashLink to="#contact" onClick={() => setIsOpen(false)} scroll={scrollWithOffset}>Contact Us</HashLink>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
