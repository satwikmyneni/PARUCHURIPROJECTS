import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Target, Eye, Users, Shield, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import heroImage from "@/assets/hero-electrical.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="About Paruchuri Projects" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/90 to-navy-900/80" />
        </div>
        <div className="section-container relative z-10">
          <div className="max-w-2xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Powering Progress Across India
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              A legacy of excellence in transformer servicing with 20+ years of expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Journey
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                M/s. Paruchuri Projects was formed by Shri PNV Kumar, who brings nearly 
                20 years of hands-on experience in the field of Transformer/Reactor 
                Servicing. Headquartered in Vijayawada, Andhra Pradesh, we have grown 
                to become a trusted name in electrical infrastructure.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We specialize in Unloading, Erection, Oil Filtration & Overhauling 
                works for transformers and reactors of various capacities. Our 
                commitment to quality and safety has earned us the trust of major 
                clients including BHEL, Toshiba, Techno Electric, TELK, and National 
                High Power Test Laboratory.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a dedicated team of 79+ skilled professionals including engineers, 
                supervisors, foremen, and specialized operators, we execute projects 
                with precision and adherence to international standards.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img src={gallery3} alt="Our Team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent rounded-xl p-6 shadow-lg">
                <span className="block text-4xl font-display font-bold text-accent-foreground">
                  79+
                </span>
                <span className="text-accent-foreground/90 text-sm font-medium">
                  Team<br />Members
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver reliable, safe, and efficient transformer servicing solutions 
                that power India's growth. We are committed to excellence in every 
                installation, oil filtration, and overhauling project we undertake, 
                ensuring our clients receive the highest quality workmanship.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be India's most trusted transformer servicing partner, known for 
                technical expertise, safety standards, and timely project delivery. We 
                envision expanding our reach while maintaining the personalized service 
                and quality that has defined our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
              Leadership
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experienced Leadership
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="aspect-square rounded-xl bg-navy-100 flex items-center justify-center text-4xl font-display font-bold text-navy-600">
                    PNV
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Shri PNV Kumar
                  </h3>
                  <p className="text-accent font-semibold mb-4">Managing Partner</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    With nearly 20 years of hands-on experience in the transformer and 
                    reactor servicing sector, Shri PNV Kumar founded Paruchuri Projects 
                    with a vision to build a company that prioritizes quality, safety, 
                    and client satisfaction above all.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    His technical expertise spans transformer installation, oil filtration, 
                    erection, and overhauling works. Under his leadership, Paruchuri Projects 
                    has become a trusted partner to major corporations including BHEL, 
                    Toshiba, and Techno Electric.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Strength */}
      <section className="section-padding bg-muted/50">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
              Our Team
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Manpower Strength
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { count: "8", title: "Site Engineers", description: "Trained for ICT/Reactor works with FQP compliance" },
              { count: "12", title: "Site Supervisors", description: "Coordination and transparent reporting specialists" },
              { count: "15", title: "Foremen", description: "Specialized in transformer erection per OGA drawings" },
              { count: "12", title: "Operators", description: "Filter machine and dry air generator specialists" },
              { count: "32", title: "Skilled Labors", description: "Non-technical and support work professionals" },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-6 shadow-md border border-border/50 text-center">
                <span className="text-4xl font-display font-bold text-accent">{item.count}</span>
                <h3 className="font-display font-bold text-lg text-foreground mt-2 mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-primary">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
              What Drives Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Safety First", description: "Strict safety protocols protect our team and your assets" },
              { icon: Award, title: "Quality", description: "FQP-compliant processes ensure excellence in every project" },
              { icon: Clock, title: "Reliability", description: "On-time delivery with transparent communication" },
              { icon: Users, title: "Expertise", description: "Certified engineers with specialized field experience" },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent mx-auto flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg text-primary-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Equipment
              </h2>
              <p className="text-muted-foreground mb-8">
                We are equipped with the best tools and plants for carrying Transformer/Reactor 
                installation and overhauling works.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "12000 LPH & 6000 LPH Ultra High Vacuum Filter Machines",
                  "Dry Air Generators and Evacuation System",
                  "60 kL, 40 kL, and 20 kL Storage Tanks",
                  "NAS Filter Machine and Particle Counter",
                  "Digital 5 KV Megger and Dew Point Meters",
                  "160 KVA & 45 KVA Diesel Generators",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="corporate" size="lg" asChild>
                <Link to="/services">
                  View Our Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img src={gallery1} alt="Our Equipment" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Esteemed Clients */}
      <section className="section-padding bg-muted/50">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
              Our Clients
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Esteemed Customers
            </h2>
            <p className="text-muted-foreground">
              Trusted by India's leading power and electrical infrastructure companies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "BHEL",
              "Toshiba",
              "Techno Electric",
              "TELK",
              "Kanohar",
              "NHPTL",
            ].map((client) => (
              <div key={client} className="bg-card rounded-xl p-6 shadow-md border border-border/50 flex items-center justify-center">
                <span className="font-display font-bold text-foreground text-center">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
