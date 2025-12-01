import React, { useState } from "react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import labs from "@/data/labs";

const Projects = () => {
  const [selectedLabId, setSelectedLabId] = useState<string | null>(null);

  // Filter projects by selected lab
  const filteredProjects =
    selectedLabId === null
      ? projects
      : projects.filter((p) => p.labId === selectedLabId);

  // Department display names
  const deptNames: Record<string, string> = {
    "financial-accounting": "Financial Accounting",
    "management-accounting": "Management Accounting",
    "info-corporate-management": "Information & Corporate Management",
    "business-informatics": "Business Informatics",
  };

  const getDeptName = (deptId?: string) => {
    if (!deptId) return "Department";
    return deptNames[deptId] || deptId;
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore innovative projects developed across our specialist labs
          </p>
        </div>

        {/* Lab Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          <Button
            onClick={() => setSelectedLabId(null)}
            variant={selectedLabId === null ? "default" : "outline"}
            className="rounded-full"
          >
            All Labs
          </Button>
          {labs.map((lab) => (
            <Button
              key={lab.id}
              onClick={() => setSelectedLabId(lab.id)}
              variant={selectedLabId === lab.id ? "default" : "outline"}
              className="rounded-full"
            >
              {lab.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((proj) => (
              <Card
                key={proj.id}
                className="p-6 card-hover border-border flex flex-col"
              >
                <div className="mb-3 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {proj.type === "student" ? "Student" : "Staff"}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {getDeptName(proj.department)}
                  </Badge>
                </div>

                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {proj.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {proj.description}
                </p>

                <div className="border-t border-border pt-3">
                  <p className="text-xs text-muted-foreground mb-2">
                    <span className="font-medium">Lab:</span> {proj.lab}
                  </p>
                  {proj.year && (
                    <p className="text-xs text-muted-foreground mb-2">
                      <span className="font-medium">Year:</span> {proj.year}
                    </p>
                  )}
                  {proj.contributors && (
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium">Contributors:</span> {proj.contributors}
                    </p>
                  )}
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">
                No projects found for the selected lab.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
