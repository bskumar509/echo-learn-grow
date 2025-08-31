import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/5 via-primary/10 to-background">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <Briefcase className="w-4 h-4 mr-2" />
            Join Us
          </Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">Careers at EchoLearn</h1>
          <p className="text-xl text-muted-foreground">Build the future of education with us</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Careers;