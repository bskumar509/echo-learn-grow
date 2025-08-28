import { 
  Video,
  Headphones,
  FileText,
  BrainCircuit,
  Trophy,
  Users,
  BarChart3,
  Shield,
  Sparkles,
  Zap,
  Globe,
  MessageSquare
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Video,
      title: "Multimedia Learning",
      description: "Engage with video lessons, interactive animations, and immersive content",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: BrainCircuit,
      title: "Adaptive Learning",
      description: "AI-powered system adapts to each student's learning pace and style",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Trophy,
      title: "Gamification",
      description: "Earn badges, climb leaderboards, and unlock achievements as you learn",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Community Forums",
      description: "Connect with peers, ask questions, and share knowledge",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Track learning outcomes with detailed insights and reports",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "WCAG compliant with enterprise-grade security and privacy",
      gradient: "from-red-500 to-pink-500"
    }
  ];

  const additionalFeatures = [
    { icon: Headphones, label: "Audio Lessons" },
    { icon: FileText, label: "Study Materials" },
    { icon: MessageSquare, label: "Live Chat Support" },
    { icon: Globe, label: "Multi-language" },
    { icon: Zap, label: "Instant Feedback" },
    { icon: Sparkles, label: "AI Tutor" }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Powerful Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="gradient-text block">Succeed in Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with proven pedagogical methods
            to create an engaging and effective learning experience.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card hover:bg-card-hover rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-full h-full text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-gradient-subtle rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Plus Many More Features
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-white shadow-md flex items-center justify-center group-hover:shadow-lg group-hover:scale-110 transition-all">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;