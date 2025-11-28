import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import clubs from "@/data/clubs";
import { Users } from "lucide-react";

const StudentClubs = () => {
  return (
    <section id="student-clubs" className="section-padding bg-muted/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Student Clubs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Student-run clubs supporting learning, professional growth and community projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <Card key={club.id} className="p-6 card-hover">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{club.name}</h3>
                  <p className="text-sm text-muted-foreground">{club.description}</p>
                </div>
              </div>
              <div>
                <Badge variant="outline" className="text-xs">Contact: {club.contact}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentClubs;
