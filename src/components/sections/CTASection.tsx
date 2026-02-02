import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-navy-800 via-navy-900 to-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-500/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Power Your Next Project?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Get in touch with our team of experts to discuss your electrical 
            infrastructure requirements. We provide free consultations and project estimates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl" 
              asChild
            >
              <a href="tel:+918465080241">
                <Phone className="w-5 h-5" />
                +91 84650 80241
              </a>
            </Button>
          </div>

          <p className="text-primary-foreground/60 text-sm mt-6">
            Response within 24 hours 
          </p>
        </div>
      </div>
    </section>
  );
};
