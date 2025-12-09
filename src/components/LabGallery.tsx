import labs from "@/data/labs";
import { Card } from "@/components/ui/card";

const LabGallery = () => {
  // Map lab IDs to their image files
  const labImages: Record<string, string> = {
    "4ir-lab-of-excellence": "/4IR.PNG",
    "moses-kotana-lab": "/MKRI.PNG",
    "arm-ecosystem-lab": "/ARM.PNG",
    "accounting-center-of-excellence": "/ACE.PNG",
    "luban-nbiot-workshop": "/Luban Workshop.PNG",
    "luban-additive-manufacturing-workshop": "/Addaptive Manufacturing .PNG",
  };

  // Map lab IDs to their object-position for zoom effect
  const labImagePositions: Record<string, string> = {
    "ACFEDUT.jpg": "center 30%", // Zoom out effect for ACFEDUT
  };

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
          {labs.map((lab) => {
            const imagePath = labImages[lab.id] || `/placeholder.svg`;
            const isACFEDUT = imagePath.includes("ACE");
            
            return (
              <Card key={lab.id} className="p-0 overflow-hidden">
                <img
                  src={imagePath}
                  alt={lab.name}
                  className={`w-full h-48 object-cover ${isACFEDUT ? "object-[center_30%] scale-75" : ""}`}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground">{lab.name}</h3>
                  <p className="text-sm text-muted-foreground">{lab.location}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LabGallery;
