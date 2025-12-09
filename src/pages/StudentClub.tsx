import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

const StudentClub = () => {
  const clubs = [
    {
      id: "varisty-genie",
      name: "VarsityGenie",
      description: "Varsity Genie helps students gain real-world project experience, improve employability, and earn valuable certifications that prepare them for industry.",
      contact: "varsitygenie@dut.ac.za",
    },
    {
      id: "ACFE-DUT Student Chapter",
      name: "Finance Society",
      description: "Guest speakers, investment challenges and student mentoring in finance.",
      contact: "finance@faculty.edu",
    },
    {
      id: "the-men-carve",
      name: "The Men Carve",
      description: "The MenCarve supports students through food parcels and sanitary items, and hosts events that address important youth and community issues. They also visit schools and student residences to offer guidance and support.",
      contact: "mencarve@dut.ac.za",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Student Clubs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get involved: student-run clubs that support learning, professional growth, and community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <Card key={club.id} className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{club.name}</h3>
                  <p className="text-sm text-muted-foreground">{club.description}</p>
                </div>
              </div>

              <div className="mt-4">
                <Badge variant="outline" className="text-xs">Contact: {club.contact}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentClub;
