import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MusicSection from "@/components/MusicSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <MusicSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
