import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Target, Award } from "lucide-react";

const Curriculum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/5 via-primary/10 to-background">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <GraduationCap className="w-4 h-4 mr-2" />
            Standards Aligned
          </Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">Curriculum & Standards</h1>
          <p className="text-xl text-muted-foreground">Aligned with national and state educational standards</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Curriculum;