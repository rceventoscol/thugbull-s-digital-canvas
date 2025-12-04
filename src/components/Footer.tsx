import { Instagram, Youtube, Music } from "lucide-react";
const Footer = () => {
  return <footer className="relative border-t border-border/30 bg-card/30 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <a href="#" className="font-display text-4xl tracking-wider text-shadow-gold text-destructive">
            THUGBULL
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="https://youtube.com/@Thugbull" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 text-foreground/60 transition-all duration-300 hover:border-gold hover:text-gold hover:glow-gold">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 text-foreground/60 transition-all duration-300 hover:border-gold hover:text-gold hover:glow-gold">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 text-foreground/60 transition-all duration-300 hover:border-gold hover:text-gold hover:glow-gold">
              <Music className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Thugbull. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;