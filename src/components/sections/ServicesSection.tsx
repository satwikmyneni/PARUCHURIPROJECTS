import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Settings, Wrench, Shield, Building2, ClipboardCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay }: ServiceCardProps) => (
  <div 
    className="group bg-card rounded-xl p-6 shadow-md card-hover border border-border/50 animate-fade-in-up"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300">
      <Icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
    </div>
    <h3 className="font-display font-bold text-lg text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </div>
);

const services = [
  {
    icon: Zap,
    title: "Transformer Installation",
    description: "Complete installation of power and distribution transformers ranging from 25 KVA to 315 MVA capacity."
  },
  {
    icon: Building2,
    title: "Substation Works",
    description: "Design, construction, and commissioning of 11KV, 33KV, and 132KV substations with modern equipment."
  },
  {
    icon: Wrench,
    title: "Maintenance & Servicing",
    description: "Comprehensive preventive and corrective maintenance services for all electrical infrastructure."
  },
  {
    icon: ClipboardCheck,
    title: "Testing & Commissioning",
    description: "Professional testing and commissioning services ensuring optimal performance and safety compliance."
  },
  {
    icon: Shield,
    title: "Government Projects",
    description: "Trusted partner for state and central government electrical infrastructure contracts."
  },
  {
    icon: Settings,
    title: "Industrial Contracts",
    description: "Specialized electrical solutions for industrial facilities and manufacturing plants."
  },
];

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Electrical Solutions
          </h2>
          <p className="text-muted-foreground">
            From transformer installation to complete substation works, we deliver 
            end-to-end electrical infrastructure solutions across India.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 100} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="corporate" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
