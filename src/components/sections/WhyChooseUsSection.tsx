import { Shield, Users, Award, Clock, CheckCircle2, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Feature = ({ icon: Icon, title, description }: FeatureProps) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
      <Icon className="w-6 h-6 text-accent-foreground" />
    </div>
    <div>
      <h3 className="font-display font-bold text-lg text-primary-foreground mb-1">{title}</h3>
      <p className="text-primary-foreground/70 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const features = [
  {
    icon: Award,
    title: "20+ Years Experience",
    description: "Two decades of expertise in electrical infrastructure and transformer installations."
  },
  {
    icon: Users,
    title: "Expert Engineers",
    description: "Team of certified electrical engineers with specialized training and field experience."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Strict adherence to safety protocols and international quality standards."
  },
  {
    icon: Zap,
    title: "Pan-India Operations",
    description: "Successfully operating across 28 states with regional project offices."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Proven track record of completing projects within scheduled timelines."
  },
  {
    icon: CheckCircle2,
    title: "Quality Assurance",
    description: "ISO certified processes ensuring highest quality in every project."
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Trusted by Government & Private Sectors
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              For over two decades, we have been at the forefront of India's electrical 
              infrastructure development, delivering reliable and efficient solutions 
              that power the nation's progress.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <Feature key={feature.title} {...feature} />
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-xl">
              <h3 className="font-display text-2xl font-bold text-foreground mb-8">
                Our Track Record
              </h3>
              
              <div className="space-y-6">
                {[
                  { label: "Client Satisfaction", value: 98, suffix: "%" },
                  { label: "On-Time Delivery", value: 95, suffix: "%" },
                  { label: "Government Contracts", value: 10, suffix: "+" },
                  { label: "Private Projects", value: 35, suffix: "+" },
                ].map((stat, index) => (
                  <div key={stat.label}>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground font-medium">{stat.label}</span>
                      <span className="font-display font-bold text-foreground">
                        {stat.value}{stat.suffix}
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${stat.suffix === "%" ? stat.value : Math.min(stat.value / 5, 100)}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-navy-100 border-2 border-card flex items-center justify-center text-navy-600 text-xs font-bold"
                      >
                        {["RK", "PS", "AM", "VK"][i - 1]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">50+ Expert Team Members</p>
                    <p className="text-muted-foreground text-sm">Engineers & Technicians</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-electric-500/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
