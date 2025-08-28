import { Button } from "@/components/ui/button";
import { 
  PlayCircle,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  BookOpen
} from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";
import mascotImage from "@/assets/mascot-echo.png";

const HeroSection = () => {
  const stats = [
    { label: "Active Students", value: "50K+", icon: Users },
    { label: "Interactive Courses", value: "500+", icon: BookOpen },
    { label: "Achievements Earned", value: "1M+", icon: Award },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in">
            <div className="inline-flex items-center space-x-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Welcome to the Future of Learning</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Where Knowledge
              <span className="gradient-text block">Echoes & Grows</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl">
              Empower K-12 students with interactive multimedia courses, gamified learning experiences, 
              and personalized education paths that adapt to each learner's unique journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Learning Free
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                <PlayCircle className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
              <img 
                src={heroImage} 
                alt="Students learning with technology" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Mascot */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 animate-float">
              <img 
                src={mascotImage} 
                alt="Echo mascot" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground p-3 rounded-xl shadow-lg animate-float">
              <Award className="w-6 h-6" />
            </div>
            <div className="absolute top-1/2 -left-4 bg-success text-success-foreground p-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <BookOpen className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;