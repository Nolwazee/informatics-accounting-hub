import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { departments } from "@/data/departments";
import { Users, Calendar } from "lucide-react";

const Projects = () => {
  const [selectedDept, setSelectedDept] = useState<string>("all");

  const filteredProjects = selectedDept === "all" 
    ? projects 
    : projects.filter(p => p.department === selectedDept);

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover innovative research and student projects from across our departments
          </p>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedDept === "all" ? "default" : "outline"}
              onClick={() => setSelectedDept("all")}
              className={selectedDept === "all" ? "bg-primary text-primary-foreground" : ""}
            >
              All Projects
            </Button>
            {departments.map(dept => (
              <Button
                key={dept.id}
                variant={selectedDept === dept.id ? "default" : "outline"}
                onClick={() => setSelectedDept(dept.id)}
                className={selectedDept === dept.id ? "bg-primary text-primary-foreground" : ""}
              >
                {dept.name.replace("Department of ", "")}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="p-6 card-hover border-border flex flex-col"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Badge 
                  variant={project.type === "staff" ? "default" : "secondary"}
                  className={project.type === "staff" ? "bg-primary text-primary-foreground" : ""}
                >
                  {project.type === "staff" ? "Research" : "Student"}
                </Badge>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar size={14} />
                  <span className="text-xs">{project.year}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-3">
                <div>
                  <h4 className="text-xs font-semibold text-foreground mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t border-border">
                  <Users size={14} />
                  <span className="text-xs">{project.contributors}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
