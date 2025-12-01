import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const tryScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return true;
    }
    return false;
  };

  // Waits up to `timeout` ms, polling every `interval` ms for element with `id`.
  const waitForElementAndScroll = async (id: string, timeout = 1000, interval = 80) => {
    const start = Date.now();
    return new Promise<boolean>((resolve) => {
      const check = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          resolve(true);
          return;
        }
        if (Date.now() - start >= timeout) {
          resolve(false);
          return;
        }
        setTimeout(check, interval);
      };
      check();
    });
  };

  const scrollToSection = async (id: string) => {
    setIsMenuOpen(false);

    if (id === "home") {
      if (location.pathname !== "/") {
        navigate("/");
        // wait for root to render then scroll to top
        await new Promise((r) => setTimeout(r, 120));
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // If we're already on index try immediate scroll or fallback to polling
    if (location.pathname === "/") {
      if (tryScroll(id)) return;
      const found = await waitForElementAndScroll(id);
      if (!found) console.warn(`No element with id="${id}" found to scroll to.`);
      return;
    }

    // Not on index: navigate home then wait/poll for element
    navigate("/");
    const found = await waitForElementAndScroll(id, 1200, 100);
    if (!found) {
      console.warn(`No element with id="${id}" found to scroll to after navigation.`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-custom px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-primary rounded flex items-center justify-center shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/44x44.png?text=F"
              alt="Faculty logo"
              className="w-11 h-11 object-cover"
            />
          </div>
          <div>
            <h1 className="text-base font-bold text-foreground leading-tight tracking-tight">
              FACULTY OF ACCOUNTING
            </h1>
            <p className="text-xs text-muted-foreground font-medium tracking-wide">& INFORMATICS</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-secondary transition-colors text-sm font-medium">Home</button>
          <button onClick={() => scrollToSection("overview")} className="text-foreground hover:text-secondary transition-colors text-sm font-medium">About</button>
          <button onClick={() => scrollToSection("departments")} className="text-foreground hover:text-secondary transition-colors text-sm font-medium">Departments</button>
          <button onClick={() => scrollToSection("labs")} className="text-foreground hover:text-secondary transition-colors text-sm font-medium">Labs</button>
          <button onClick={() => scrollToSection("gallery")} className="text-foreground hover:text-secondary transition-colors text-sm font-medium">Gallery</button>
          <button onClick={() => scrollToSection("projects")} className="text-foreground hover:text-secondary transition-colors text-sm font-medium">Projects</button>
          <button onClick={() => scrollToSection("student-clubs")} className="text-foreground hover:text-secondary transition-colors text-sm font-medium">Clubs</button>
          <Button onClick={() => scrollToSection("contact")} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Contact Us</Button>
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
            <button onClick={() => { scrollToSection("home"); }} className="text-foreground hover:text-secondary transition-colors text-sm font-medium text-left">Home</button>
            <button onClick={() => { scrollToSection("overview"); }} className="text-foreground hover:text-secondary transition-colors text-sm font-medium text-left">About</button>
            <button onClick={() => { scrollToSection("departments"); }} className="text-foreground hover:text-secondary transition-colors text-sm font-medium text-left">Departments</button>
            <button onClick={() => { scrollToSection("labs"); }} className="text-foreground hover:text-secondary transition-colors text-sm font-medium text-left">Labs</button>
            <button onClick={() => { scrollToSection("gallery"); }} className="text-foreground hover:text-secondary transition-colors text-sm font-medium text-left">Gallery</button>
            <button onClick={() => { scrollToSection("projects"); }} className="text-foreground hover:text-secondary transition-colors text-sm font-medium text-left">Projects</button>
            <button onClick={() => { scrollToSection("student-clubs"); }} className="text-foreground hover:text-secondary transition-colors text-sm font-medium text-left">Clubs</button>
            <Button onClick={() => { scrollToSection("contact"); }} className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full">Contact Us</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
