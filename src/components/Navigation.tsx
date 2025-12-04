import { useState, useEffect } from "react";
import { Instagram, Youtube, Music } from "lucide-react";
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="font-display text-3xl tracking-wider text-destructive">
          THUGBULL
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#music" className="nav-link text-sm tracking-[0.2em] uppercase">
            Music
          </a>
          <a href="#about" className="nav-link text-sm tracking-[0.2em] uppercase">
            About
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a href="https://youtube.com/@Thugbull" target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-all duration-300 hover:text-gold hover:scale-110">
            <Youtube className="h-5 w-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-all duration-300 hover:text-gold hover:scale-110">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-all duration-300 hover:text-gold hover:scale-110">
            <Music className="h-5 w-5" />
          </a>
        </div>
      </div>
    </nav>;
};
export default Navigation;