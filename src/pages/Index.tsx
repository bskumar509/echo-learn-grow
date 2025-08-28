import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CoursesSection from "@/components/CoursesSection";
import DashboardPreview from "@/components/DashboardPreview";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CoursesSection />
        <DashboardPreview />
      </main>
      <Footer />
      
      {/* Floating Support Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          variant="hero" 
          size="icon"
          className="w-14 h-14 rounded-full shadow-xl hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;