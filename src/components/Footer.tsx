import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    platform: [
      { label: "About Us", href: "/about" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Testimonials", href: "/testimonials" }
    ],
    resources: [
      { label: "Course Catalog", href: "/courses" },
      { label: "Study Materials", href: "/resources" },
      { label: "Community Forum", href: "/community" },
      { label: "Help Center", href: "/help" },
      { label: "Blog", href: "/blog" }
    ],
    company: [
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Press Kit", href: "/press" },
      { label: "Contact Us", href: "/contact" },
      { label: "Sitemap", href: "/sitemap" }
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Data Protection", href: "/data-protection" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-subtle border-t border-border">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Learning Tips
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get weekly insights, new course announcements, and exclusive educational content
            delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
            />
            <Button variant="secondary" size="lg" className="group">
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">E</span>
              </div>
              <span className="text-xl font-bold gradient-text">EchoLearn</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Empowering K-12 students with interactive, personalized learning experiences
              that make education engaging and effective.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>support@echolearn.edu</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>1-800-ECHO-EDU</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 EchoLearn. All rights reserved. | WCAG 2.1 AA Compliant
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-white flex items-center justify-center transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;