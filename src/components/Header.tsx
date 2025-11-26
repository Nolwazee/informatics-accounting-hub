import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-custom px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-primary rounded flex items-center justify-center shadow-md">
            <span className="text-primary-foreground font-bold text-2xl">F</span>
          </div>
          <div>
            <h1 className="text-base font-bold text-foreground leading-tight tracking-tight">
              FACULTY OF ACCOUNTING
            </h1>
            <p className="text-xs text-muted-foreground font-medium tracking-wide">& INFORMATICS</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("overview")}
            className="text-foreground hover:text-secondary transition-colors text-sm font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("departments")}
            className="text-foreground hover:text-secondary transition-colors text-sm font-medium"
          >
            Departments
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-foreground hover:text-secondary transition-colors text-sm font-medium"
          >
            Projects
          </button>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container-custom px-6 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("overview")}
              className="text-foreground hover:text-secondary transition-colors text-sm font-medium text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("departments")}
              className="text-foreground hover:text-secondary transition-colors text-sm font-medium text-left"
            >
              Departments
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-secondary transition-colors text-sm font-medium text-left"
            >
              Projects
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
