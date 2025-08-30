import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, MessageCircle } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/5 via-primary/10 to-background">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            24/7 Support
          </Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">Help & Support</h1>
          <p className="text-xl text-muted-foreground">Get help with guides, tutorials, and live chat</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Support;