import { Card } from "@/components/ui/card";
import { Target, Eye, MessageSquare } from "lucide-react";

const Overview = () => {
  return (
    <section id="overview" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Our Faculty
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leading the way in accounting, informatics, and business education with innovative programs and cutting-edge research
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 card-hover border-border">
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
              <Eye className="text-secondary" size={28} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be a globally recognized center of excellence in accounting and informatics education, fostering innovation and producing leaders who drive positive change in business and technology.
            </p>
          </Card>

          <Card className="p-8 card-hover border-border">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-accent" size={28} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide world-class education, conduct impactful research, and cultivate partnerships that prepare students for successful careers and contribute to societal advancement.
            </p>
          </Card>

          <Card className="p-8 card-hover border-border">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <MessageSquare className="text-primary" size={28} />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Dean's Message</h3>
            <p className="text-muted-foreground leading-relaxed">
              "Welcome to our faculty, where tradition meets innovation. We are committed to nurturing talent and shaping the future of accounting and information technology."
            </p>
          </Card>
        </div>

        <Card className="p-10 bg-muted/30 border-border">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Our Values</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Excellence
              </h4>
              <p className="text-muted-foreground text-sm">
                Pursuing the highest standards in teaching, research, and service
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Innovation
              </h4>
              <p className="text-muted-foreground text-sm">
                Embracing new ideas and technologies to stay ahead
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Integrity
              </h4>
              <p className="text-muted-foreground text-sm">
                Upholding ethical standards and transparency in all we do
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Collaboration
              </h4>
              <p className="text-muted-foreground text-sm">
                Fostering partnerships within and beyond our community
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Overview;
