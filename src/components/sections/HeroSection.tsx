import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-electrical.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Electrical Infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/60" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-sm font-medium">Pan-India Operations</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Powering India's{" "}
            <span className="text-gradient-accent">Electrical</span>{" "}
            Infrastructure
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            With 20+ years of expertise, Paruchuri Projects delivers reliable transformer 
            installation, unloading, oil filtration, and overhauling services for 
            esteemed clients including BHEL, Toshiba, and Techno Electric.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/services">
                Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-display font-bold text-primary-foreground">20+</span>
                <span className="text-sm text-primary-foreground/70">Years Experience</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-display font-bold text-primary-foreground">500+</span>
                <span className="text-sm text-primary-foreground/70">Projects Done</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-display font-bold text-primary-foreground">28</span>
                <span className="text-sm text-primary-foreground/70">States Covered</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-accent animate-pulse" />
        </div>
      </div>
    </section>
  );
};
