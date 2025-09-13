import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">snchaurasia@bhu.ac.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 9492425485</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span className="text-sm">
                  Department of Computer Science<br />
                  Banaras Hindu University<br />
                  Varanasi-221005, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-sm hover:text-accent transition-colors">
                About
              </a>
              <a href="/research" className="block text-sm hover:text-accent transition-colors">
                Research
              </a>
              <a href="/contact" className="block text-sm hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Academic Profiles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Academic Profiles</h3>
            <div className="space-y-2">
              <a
                href="https://scholar.google.co.in/citations?user=hZz9PpYAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-accent transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                <span>Google Scholar</span>
              </a>
              <a
                href="https://orcid.org/0000-0002-0635-0808"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-accent transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                <span>ORCID</span>
              </a>
              <a
                href="https://publons.com/researcher/1316067/sachchida-n"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-accent transition-colors"
              >
                <ExternalLink className="h-3 w-3" />
                <span>Researcher ID</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-light">
          <div className="text-center">
            <p className="text-sm">
              © 2024 Dr. Sachchida Nand Chaurasia. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;