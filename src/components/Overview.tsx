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
              Developing Adaptive and Transformative Leaders for a Smart Society Through:
  </p>
  <div className="text-muted-foreground leading-relaxed space-y-2 ml-4">
    <p className="mb-2">• Excellence in Learning, Teaching and Assessment.</p>
    <p className="mb-2">• Relevant Research and Creative Innovation.</p>
    <p className="mb-2">• Collaboration and Entrepreneurship.</p>
  </div>
          </Card>

          <Card className="p-8 card-hover border-border">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
                alt="Dean"
                className="w-36 h-36 md:w-48 md:h-48 rounded-lg object-cover shadow-md"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Dean's Message</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xl">
                  "Welcome to our faculty, where tradition meets innovation. We are committed to nurturing talent and shaping the future of accounting and information technology. Our programmes combine practical skills with research-led teaching to prepare graduates for the modern workplace."
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-10 bg-muted/30 border-border">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Our Values</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Fairness
              </h4>
              <p className="text-muted-foreground text-sm">
                We treat equitably and with respect, ensure our decisions are impartial, and firmly embrace diversity and inclusion
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Accountability
              </h4>
              <p className="text-muted-foreground text-sm">
                We accept responsibility for activities, decisions, actions and disclose outcomes in a transparent way. 
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Integrity
              </h4>
              <p className="text-muted-foreground text-sm">
                We enhance our reputation with consistent trustworthy and professional conduct. 
              </p>
            </div>

          </div>
        </Card>
      </div>
    </section>
  );
};

export default Overview;
