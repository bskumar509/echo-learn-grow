import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { FileText, Scale } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/5 via-primary/10 to-background">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <Scale className="w-4 h-4 mr-2" />
            Legal
          </Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">Please read our terms and conditions carefully</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Terms;