import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import labs from "@/data/labs";
import { Monitor, Database, ShieldCheck, Cpu, Calculator, Box } from "lucide-react";

const iconByIndex = [Monitor, Cpu, Database, ShieldCheck, Calculator, Box];

const Labs = () => {
  return (
    <section id="labs" className="section-padding bg-background/20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Specialist Resources</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on laboratories supporting teaching and research across accounting and informatics disciplines.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {labs.map((lab, index) => {
            const Icon = iconByIndex[index % iconByIndex.length];
            return (
              <Card key={lab.id} className="p-6 card-hover border-border" style={{ animationDelay: `${index * 0.06}s` }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-1">{lab.name}</h3>
                    <p className="text-sm text-muted-foreground">{lab.location} • In-charge: {lab.inCharge}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{lab.description}</p>

                <div>
                  <h4 className="text-xs font-semibold text-foreground mb-2">Key Equipment</h4>
                  <div className="flex flex-wrap gap-2">
                    {lab.equipment.map((eq, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {eq}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Labs;
