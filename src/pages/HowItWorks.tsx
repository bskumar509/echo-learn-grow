import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  UserPlus, 
  BookOpen, 
  Trophy, 
  ArrowRight,
  CheckCircle,
  Users,
  Sparkles,
  GraduationCap
} from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up & Choose Your Role",
      description: "Create your account as a student, teacher, or parent. Each role gets a customized experience tailored to their needs.",
      icon: UserPlus,
      features: ["Free account creation", "Role-based dashboards", "Personalized learning paths"]
    },
    {
      number: "02",
      title: "Explore & Enroll in Courses",
      description: "Browse our extensive course catalog, preview content, and enroll in courses that match your learning goals.",
      icon: BookOpen,
      features: ["1000+ courses available", "Interactive previews", "Skill assessments"]
    },
    {
      number: "03",
      title: "Learn & Practice",
      description: "Engage with interactive lessons, complete assignments, and participate in live virtual classrooms.",
      icon: Sparkles,
      features: ["Interactive content", "Real-time feedback", "Collaborative learning"]
    },
    {
      number: "04",
      title: "Track Progress & Earn Rewards",
      description: "Monitor your progress, earn badges and achievements, and climb the leaderboards.",
      icon: Trophy,
      features: ["Progress tracking", "Achievement system", "Certificates"]
    },
    {
      number: "05",
      title: "Graduate & Advance",
      description: "Complete courses, earn certificates, and advance to more challenging content.",
      icon: GraduationCap,
      features: ["Course certificates", "Skill validation", "Career pathways"]
    }
  ];

  const userJourneys = [
    {
      role: "Students",
      color: "from-primary/20 to-primary/5",
      journey: [
        "Create student account",
        "Take placement test",
        "Get personalized recommendations",
        "Start learning journey",
        "Earn achievements"
      ]
    },
    {
      role: "Teachers",
      color: "from-secondary/20 to-secondary/5",
      journey: [
        "Create teacher account",
        "Set up virtual classroom",
        "Create or import courses",
        "Manage students",
        "Track class performance"
      ]
    },
    {
      role: "Parents",
      color: "from-accent/20 to-accent/5",
      journey: [
        "Create parent account",
        "Link child accounts",
        "Monitor progress",
        "Communicate with teachers",
        "Support learning"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/5 via-primary/10 to-background">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Simple & Effective
          </Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">How EchoLearn Works</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of learners on their educational journey. 
            Get started in minutes and transform your learning experience.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Your Learning Journey</h2>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-white text-2xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <step.icon className="w-6 h-6 text-primary" />
                        <h3 className="text-2xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      
                      <div className="flex flex-wrap gap-4">
                        {step.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-success" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-muted-foreground animate-bounce" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Journeys */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Path</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {userJourneys.map((journey, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${journey.color}`} />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold">{journey.role}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {journey.journey.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <span className="text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of learners and unlock your potential with personalized education.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="gap-2">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/features">
              <Button size="lg" variant="outline">
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;