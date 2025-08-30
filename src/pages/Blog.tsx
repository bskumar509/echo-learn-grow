import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/5 via-primary/10 to-background">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Latest Updates
          </Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">Blog & Announcements</h1>
          <p className="text-xl text-muted-foreground">Educational news, tips, and community highlights</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;