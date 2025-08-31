import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Sparkles, 
  Video, 
  Users, 
  Trophy, 
  Brain, 
  Shield,
  Globe,
  Zap,
  BookOpen,
  MessageSquare,
  BarChart,
  Smartphone,
  Cloud,
  Lock,
  Headphones,
  Palette
} from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: Video,
      title: "Live Virtual Classrooms",
      description: "Interactive live sessions with real-time collaboration, screen sharing, and instant feedback."
    },
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Personalized learning paths adapted to each student's pace and learning style."
    },
    {
      icon: Trophy,
      title: "Gamification System",
      description: "Earn points, badges, and climb leaderboards while learning."
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Group projects, peer reviews, and discussion forums for enhanced learning."
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Detailed progress tracking and performance insights for students and teachers."
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Moderated content, secure communications, and age-appropriate materials."
    }
  ];

  const studentFeatures = [
    "Personalized dashboard",
    "Progress tracking",
    "Interactive lessons",
    "Practice exercises",
    "Achievement badges",
    "Study reminders",
    "Offline mode",
    "Note-taking tools"
  ];

  const teacherFeatures = [
    "Class management",
    "Assignment creation",
    "Automated grading",
    "Student analytics",
    "Content library",
    "Communication tools",
    "Attendance tracking",
    "Custom curricula"
  ];

  const parentFeatures = [
    "Progress monitoring",
    "Performance reports",
    "Teacher communication",
    "Screen time controls",
    "Activity logs",
    "Payment management",
    "Multiple child accounts",
    "Mobile notifications"
  ];

  const technicalFeatures = [
    {
      icon: Cloud,
      title: "Cloud-Based Platform",
      description: "Access from anywhere, automatic saves, and seamless synchronization."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-level encryption, secure authentication, and data protection."
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Works on desktop, tablet, and mobile devices with native apps."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with instant loading and smooth interactions."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support and learning assistance."
    },
    {
      icon: Palette,
      title: "Customizable Interface",
      description: "Personalize themes, layouts, and accessibility options."
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
            Powerful Features
          </Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">Features That Transform Learning</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the comprehensive suite of tools and features designed to make 
            online education engaging, effective, and accessible for everyone.
          </p>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Role-Based Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Features by Role</h2>
          
          <Tabs defaultValue="students" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="teachers">Teachers</TabsTrigger>
              <TabsTrigger value="parents">Parents</TabsTrigger>
            </TabsList>
            
            <TabsContent value="students" className="mt-8">
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Student Features</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {studentFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="teachers" className="mt-8">
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Teacher Features</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {teacherFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="parents" className="mt-8">
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-semibold">Parent Features</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {parentFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Excellence</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalFeatures.map((feature, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-card to-card/50 border-primary/10">
                <feature.icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Coming Soon
          </Badge>
          <h2 className="text-3xl font-bold mb-6">Features in Development</h2>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {["VR Learning", "AI Tutors", "Blockchain Certificates", "Voice Commands", 
              "Augmented Reality", "Smart Recommendations", "API Access", "White Labeling"].map((feature) => (
              <Badge key={feature} variant="secondary" className="px-4 py-2">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;