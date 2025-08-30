import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/5 via-primary/10 to-background">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <Mail className="w-4 h-4 mr-2" />
            Get in Touch
          </Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">Contact Us</h1>
          <p className="text-xl text-muted-foreground">We're here to help with any questions</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;