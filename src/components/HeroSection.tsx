import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToMusic = () => {
    document.getElementById("music")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-animation.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-20">
        <button
          onClick={scrollToMusic}
          className="animate-float group flex flex-col items-center gap-2 text-foreground/60 transition-colors hover:text-gold"
        >
          <span className="text-sm font-light tracking-[0.3em] uppercase">
            Scroll
          </span>
          <ChevronDown className="h-6 w-6 transition-transform group-hover:translate-y-1" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
