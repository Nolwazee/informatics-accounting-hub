import labs from "@/data/labs";
import { Card } from "@/components/ui/card";

const LabGallery = () => {
  return (
    <section id="gallery" className="section-padding bg-background/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Labs Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A visual tour of our specialist labs and facilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab) => (
            <Card key={lab.id} className="p-0 overflow-hidden">
              <img
                src={`https://source.unsplash.com/collection/190727/800x600?${encodeURIComponent(lab.name)}`}
                alt={lab.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground">{lab.name}</h3>
                <p className="text-sm text-muted-foreground">{lab.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabGallery;
