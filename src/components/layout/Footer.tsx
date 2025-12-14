import { Wrench, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    services: [
      { label: "Electrical", href: "#" },
      { label: "Plumbing", href: "#" },
      { label: "ICT & Networking", href: "#" },
      { label: "Carpentry", href: "#" },
      { label: "HVAC", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Become a Technician", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
    support: [
      { label: "Help Center", href: "#" },
      { label: "Safety", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-background">
                Fundi<span className="text-primary">Connect</span>
              </span>
            </a>
            <p className="text-background/60 mb-6 max-w-xs">
              Connecting Tanzanians with trusted technicians for all technical service needs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-background/60">
                <Mail className="w-4 h-4" />
                <span>hello@fundiconnect.co.tz</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/60">
                <Phone className="w-4 h-4" />
                <span>+255 123 456 789</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/60">
                <MapPin className="w-4 h-4" />
                <span>Arusha, Tanzania</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-background mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © 2025 Fundi Connect. All rights reserved.
          </p>
          <p className="text-sm text-background/50">
            Made with ❤️ in Tanzania
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
