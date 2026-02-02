import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gallery3 from "@/assets/gallery-3.jpg";

export const AboutSnapshotSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={gallery3}
                alt="Paruchuri Projects Engineering Team"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent rounded-xl p-6 shadow-lg">
              <span className="block text-4xl font-display font-bold text-accent-foreground">
                20+
              </span>
              <span className="text-accent-foreground/90 text-sm font-medium">
                Years of<br />Experience
              </span>
            </div>
            
            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Transformer Specialists with 20+ Years of Expertise
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              M/s. Paruchuri Projects was formed by Shri PNV Kumar with nearly 20 years 
              of experience in Transformer/Reactor Servicing. Headquartered in Vijayawada, 
              we specialize in Unloading, Erection, Oil Filtration & Overhauling works.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of 79+ skilled professionals delivers projects that meet the highest 
              standards of safety, quality, and efficiency. We are trusted partners to 
              esteemed clients including BHEL, Toshiba, Techno Electric, TELK, and NHPTL.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="corporate" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="corporateOutline" size="lg" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
