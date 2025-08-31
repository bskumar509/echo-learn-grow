import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, TrendingUp, Lock, ChevronRight } from "lucide-react";

const CommunityForum = () => {
  const categories = [
    { name: "General Discussion", topics: 1234, posts: 5678, icon: MessageSquare },
    { name: "Study Groups", topics: 456, posts: 2345, icon: Users },
    { name: "Homework Help", topics: 789, posts: 3456, icon: TrendingUp },
    { name: "Teacher's Lounge", topics: 234, posts: 1234, icon: Lock }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/5 via-primary/10 to-background">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            Community
          </Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">Community Forum</h1>
          <p className="text-xl text-muted-foreground">Connect, discuss, and learn together</p>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <category.icon className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {category.topics} topics • {category.posts} posts
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost">
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CommunityForum;