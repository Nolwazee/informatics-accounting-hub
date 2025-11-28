import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { departments } from "@/data/departments";
import { GraduationCap, Microscope, Lightbulb, MapPin } from "lucide-react";

const Departments = () => {
  return (
    <section id="departments" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Departments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse academic departments, each offering cutting-edge programs and research opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {departments.map((dept, index) => (
            <Card
              key={dept.id}
              className="p-8 card-hover border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-1">
                    {dept.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin size={14} />
                    <span>{dept.location}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {dept.description}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="text-secondary" size={18} />
                    <h4 className="font-semibold text-foreground">Programmes Offered</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {dept.programmes.map((prog, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {prog}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Microscope className="text-accent" size={18} />
                    <h4 className="font-semibold text-foreground">Research Areas</h4>
                  </div>
                  <ul className="space-y-1">
                    {dept.researchAreas.slice(0, 3).map((area, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="text-secondary" size={18} />
                    <h4 className="font-semibold text-foreground">Notable Projects</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {dept.notableProjects.map((project, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {project}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
