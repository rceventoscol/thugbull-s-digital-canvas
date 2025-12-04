const AboutSection = () => {
  return <section id="about" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title mb-8 animate-fade-up text-destructive">THUGBULL</h2>
          <div className="mx-auto mb-8 h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent bg-destructive" />
          <p className="animate-fade-up-delay-1 text-lg leading-relaxed text-muted-foreground md:text-xl">Trayendo energía pura y sonidos auténticos a las calles. Sigue el viaje y mantente atento a los nuevos lanzamientos.</p>
        </div>
      </div>
    </section>;
};
export default AboutSection;