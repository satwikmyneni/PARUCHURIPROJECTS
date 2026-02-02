import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Building2, Wrench, ClipboardCheck, Droplets, Package, Settings, Gauge, Cable } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import heroImage from "@/assets/hero-electrical.jpg";
import { CTASection } from "@/components/sections/CTASection";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => (
  <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 card-hover">
    <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
      <Icon className="w-8 h-8 text-accent" />
    </div>
    <h3 className="font-display text-xl font-bold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
    <ul className="space-y-2">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const services: ServiceCardProps[] = [
  {
    icon: Zap,
    title: "Transformer Installation",
    description: "Complete installation and commissioning of power transformers and reactors with precision engineering.",
    features: [
      "ICT (Interconnecting Transformer) installation",
      "Reactor installation and commissioning",
      "Site preparation and foundation work",
      "As per OGA (Outline General Arrangement)",
      "Testing and certification",
    ],
  },
  {
    icon: Package,
    title: "Unloading of Transformer",
    description: "Safe and professional unloading of transformers at site with specialized equipment and trained personnel.",
    features: [
      "Heavy equipment handling",
      "Chain pulley blocks (1 to 10 ton capacity)",
      "Safe positioning at foundation",
      "Coordination with site customers",
      "FME (Foreign Material Exclusion) compliance",
    ],
  },
  {
    icon: Droplets,
    title: "Oil Filtration",
    description: "Ultra high vacuum oil filtration services to ensure optimal transformer oil quality and performance.",
    features: [
      "12000 LPH Ultra High Vacuum Filter",
      "6000 LPH and 3000 LPH options",
      "Oil parameter achievement",
      "NAS value compliance",
      "Storage tanks (60kL, 40kL, 20kL)",
    ],
  },
  {
    icon: Wrench,
    title: "Overhauling Works",
    description: "Comprehensive overhauling services for transformers and reactors to restore optimal performance.",
    features: [
      "Complete transformer overhaul",
      "Bushing cleaning and inspection",
      "Winding assessment",
      "Touch up painting",
      "Accessories replacement",
    ],
  },
  {
    icon: Building2,
    title: "Erection Works",
    description: "Professional erection of all types of transformers as per customer specifications and drawings.",
    features: [
      "Pipeline matching (6-inch, 8-inch)",
      "As per OGA drawings",
      "Precision engineering",
      "Quality checks at each stage",
      "Documentation compliance",
    ],
  },
  {
    icon: Settings,
    title: "Dry Air Generation",
    description: "Specialized dry air generation services to maintain optimal dew point in transformers.",
    features: [
      "Dew point achievement",
      "Multiple dry air generators",
      "Continuous monitoring",
      "Vaisala, Rotronic, Vasthi meters",
      "PPM kit testing",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Testing & Commissioning",
    description: "Professional testing and commissioning services to ensure safety and regulatory compliance.",
    features: [
      "Ratio and insulation testing",
      "Digital 5 KV Megger testing",
      "DGA (Dissolved Gas Analysis)",
      "Documentation and certification",
      "TOC (Taking Over Certificate) support",
    ],
  },
  {
    icon: Gauge,
    title: "Site Quality Management",
    description: "Complete site quality management as per Field Quality Plan (FQP) requirements.",
    features: [
      "FQP compliance",
      "Customer site norms adherence",
      "Transparent reporting",
      "Issue resolution support",
      "Quality documentation",
    ],
  },
  {
    icon: Cable,
    title: "NAS Filtration",
    description: "Specialized NAS (National Aerospace Standard) filtration for particle-free oil.",
    features: [
      "NAS Filter Machine",
      "Particle Counter Machine",
      "Required NAS value achievement",
      "Oil cleanliness verification",
      "Quality certification",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Our Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/90 to-navy-900/80" />
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-2xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Comprehensive Transformer Solutions
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              From transformer installation to oil filtration and overhauling, we deliver 
              end-to-end transformer servicing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-muted-foreground text-lg">
              Our comprehensive range of services covers every aspect of transformer 
              and reactor servicing, from installation to maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/50">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
              How We Work
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", description: "We understand your requirements and assess the project scope." },
              { step: "02", title: "Planning", description: "Detailed project planning as per FQP and customer site norms." },
              { step: "03", title: "Execution", description: "Professional execution with safety protocols and quality checks." },
              { step: "04", title: "Handover", description: "Testing, commissioning, and TOC documentation for smooth handover." },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-card rounded-xl p-6 shadow-md border border-border/50 h-full">
                  <span className="text-5xl font-display font-bold text-accent/20">{item.step}</span>
                  <h3 className="font-display font-bold text-lg text-foreground mt-2 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 text-accent">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
              Our Equipment
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tools & Plants
            </h2>
            <p className="text-muted-foreground">
              We maintain a comprehensive inventory of specialized equipment for all transformer servicing needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "12000 LPH Ultra High Vacuum Filter (2 Nos)",
              "6000 LPH Ultra High Vacuum Filter (2 Nos)",
              "3000 LPH Ultra High Vacuum Filter (1 No)",
              "Dry Air Generators (2 Nos)",
              "60 kL Storage Tank (1 No)",
              "40 kL Storage Tanks (4 Nos)",
              "20 kL Storage Tanks (2 Nos)",
              "NAS Filter Machine & Particle Counter",
              "Dew Point Meters (Vaisala, Rotronic, Vasthi)",
              "Online PPM Kits (6 Nos)",
              "160 KVA & 45 KVA Diesel Generators",
              "Digital 5 KV Megger (2 Nos)",
              "Chain Pulley Blocks (1-10 ton)",
              "Welding & Drilling Machines",
              "Power Cables (1500 mtrs)",
              "DGA Glass Syringes & SS Bottles",
            ].map((equipment) => (
              <div key={equipment} className="bg-muted/50 rounded-lg p-4 text-sm text-foreground">
                {equipment}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
