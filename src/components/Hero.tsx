import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="gradient-hero min-h-screen flex items-center justify-center text-primary-foreground pt-20">
      <div className="container-custom px-6 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Faculty of Accounting
          <br />
          <span className="text-secondary">& Informatics</span>
        </h1>
      <h2 className="text-lg md:text-2xl font-medium mb-6 leading-tight text-gray-700">
       Engineering Practices Innovation Projects
      </h2>
        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
          Empowering future leaders through excellence in education, research, and innovation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection("departments")}
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 group"
          >
            Explore Departments
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button
            onClick={() => scrollToSection("overview")}
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
