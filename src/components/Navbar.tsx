import { Button } from "@/components/ui/button";
import { 
  Menu,
  BookOpen,
  Trophy,
  Users,
  Library,
  BarChart3,
  LogIn,
  UserPlus
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Courses", icon: BookOpen, href: "/courses" },
    { label: "Dashboard", icon: BarChart3, href: "/dashboard" },
    { label: "Community", icon: Users, href: "/community" },
    { label: "Resources", icon: Library, href: "/resources" },
    { label: "Achievements", icon: Trophy, href: "/achievements" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">E</span>
            </div>
            <span className="text-xl font-bold gradient-text">EchoLearn</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button variant="hero" size="sm">
              <UserPlus className="w-4 h-4 mr-2" />
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border animate-slide-up">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center space-x-2 px-4 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-all"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
            <div className="flex flex-col space-y-2 px-4 pt-2">
              <Button variant="outline" size="sm" className="w-full">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button variant="hero" size="sm" className="w-full">
                <UserPlus className="w-4 h-4 mr-2" />
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;