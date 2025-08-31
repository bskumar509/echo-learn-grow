import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Handshake } from "lucide-react";

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/5 via-primary/10 to-background">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <Handshake className="w-4 h-4 mr-2" />
            Partnerships
          </Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">Our Partners</h1>
          <p className="text-xl text-muted-foreground">Collaborating to enhance education</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Partners;