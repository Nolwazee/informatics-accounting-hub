import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="gradient-hero text-primary-foreground">
      <div className="container-custom px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">F</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Faculty of</h3>
                <p className="text-xs text-primary-foreground/80">Accounting & Informatics</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Leading the way in accounting and informatics education, research, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#overview" className="hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#departments" className="hover:text-secondary transition-colors">
                  Departments
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-secondary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Departments</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Accounting</li>
              <li>Informatics</li>
              <li>Business Information Systems</li>
              <li>Data Science & Analytics</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 University Drive, Campus City, UC 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@faculty-ai.edu</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Faculty of Accounting and Informatics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
