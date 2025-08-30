import { Button } from "@/components/ui/button";
import { 
  Menu,
  BookOpen,
  Trophy,
  Users,
  Library,
  BarChart3,
  LogIn,
  UserPlus,
  ChevronDown,
  GraduationCap,
  Video,
  Calendar,
  HelpCircle,
  Info
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", icon: Info, href: "/about" },
    { label: "Courses", icon: BookOpen, href: "/courses" },
    { label: "Virtual Classroom", icon: Video, href: "/virtual-classroom" },
    { label: "Library", icon: Library, href: "/content-library" },
    { label: "Curriculum", icon: GraduationCap, href: "/curriculum" },
  ];

  const dashboardItems = [
    { label: "Student Dashboard", href: "/dashboard/student" },
    { label: "Teacher Dashboard", href: "/dashboard/teacher" },
    { label: "Parent Dashboard", href: "/dashboard/parent" },
  ];

  const moreItems = [
    { label: "Achievements", icon: Trophy, href: "/achievements" },
    { label: "Assignments", icon: Calendar, href: "/assignments" },
    { label: "Blog", icon: BookOpen, href: "/blog" },
    { label: "Support", icon: HelpCircle, href: "/support" },
    { label: "Contact", icon: Users, href: "/contact" },
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
            
            {/* Dashboard Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                <BarChart3 className="w-4 h-4" />
                <span>Dashboard</span>
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {dashboardItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link to={item.href}>
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                <span>More</span>
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {moreItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link to={item.href} className="flex items-center space-x-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/feedback">Feedback</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/accessibility">Accessibility</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/auth">
              <Button variant="ghost" size="sm">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="hero" size="sm">
                <UserPlus className="w-4 h-4 mr-2" />
                Sign Up
              </Button>
            </Link>
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
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
            
            {/* Dashboard Section */}
            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-muted-foreground mb-2">DASHBOARDS</p>
              {dashboardItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center space-x-2 px-2 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <BarChart3 className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* More Section */}
            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-muted-foreground mb-2">MORE</p>
              {moreItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center space-x-2 px-2 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              ))}
            </div>

            <div className="flex flex-col space-y-2 px-4 pt-2 border-t border-border">
              <Link to="/auth">
                <Button variant="outline" size="sm" className="w-full">
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant="hero" size="sm" className="w-full">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;