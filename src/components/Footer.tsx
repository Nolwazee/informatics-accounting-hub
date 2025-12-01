import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

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
              <li>Auditing and Taxation</li>
              <li>Finance and Information Management</li>
              <li>Financial Accounting</li>
              <li>Information and Corporate Management</li>
              <li>Information Technology</li>
              <li>Information Systems</li>
              <li>Management Accounting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>7 Ritson Road, Berea, Ritson Campus, 4001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+27 (31) 373-5597</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>faiec@dut.ac.za</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=100057091736380"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              
              <a
                href="https://www.linkedin.com/in/dut-faculty-of-accounting-and-informatics-615799321/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M192 64v64a48 48 0 01-48-48v80a48 48 0 11-48-48 48 48 0 0148 48V88a80 80 0 1080 80V64h-32z" fill="currentColor" />
                </svg>
              </a>
              <a
                href="http://www.youtube.com/@DUTFacultyofAccoutningandInfo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
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
