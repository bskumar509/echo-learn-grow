import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, Play, Users } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of 2 students",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      text: "EchoLearn has transformed how my children learn. The interactive lessons keep them engaged, and I love being able to track their progress in real-time.",
      highlight: "Progress tracking is amazing!"
    },
    {
      name: "Michael Chen",
      role: "High School Teacher",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      text: "As a teacher, I appreciate the comprehensive tools for creating and managing classes. The automated grading saves me hours every week.",
      highlight: "Saves me hours every week"
    },
    {
      name: "Emily Rodriguez",
      role: "8th Grade Student",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      text: "Learning is actually fun now! I love earning badges and competing with my friends on the leaderboard. The video lessons are really helpful.",
      highlight: "Learning is actually fun!"
    },
    {
      name: "David Park",
      role: "School Administrator",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      text: "We've seen a 40% improvement in student engagement since implementing EchoLearn. The platform is intuitive and the support team is excellent.",
      highlight: "40% improvement in engagement"
    },
    {
      name: "Lisa Thompson",
      role: "Homeschool Parent",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      text: "EchoLearn provides the structure and resources I needed for homeschooling. The curriculum is comprehensive and aligned with standards.",
      highlight: "Perfect for homeschooling"
    },
    {
      name: "James Wilson",
      role: "10th Grade Student",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      text: "The AI tutor helps me understand difficult concepts. It's like having a personal teacher available 24/7. My grades have improved significantly!",
      highlight: "Grades improved significantly"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Students" },
    { number: "4.9", label: "Average Rating" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "1M+", label: "Lessons Completed" }
  ];

  const videoTestimonials = [
    {
      name: "Anderson School District",
      thumbnail: "/api/placeholder/400/225",
      duration: "2:45",
      title: "How EchoLearn Transformed Our Remote Learning"
    },
    {
      name: "Parent Success Story",
      thumbnail: "/api/placeholder/400/225",
      duration: "3:12",
      title: "From Struggling to Thriving: A Student's Journey"
    },
    {
      name: "Teacher Spotlight",
      thumbnail: "/api/placeholder/400/225",
      duration: "4:20",
      title: "Creating Engaging Virtual Classrooms"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/5 via-primary/10 to-background">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <Users className="w-4 h-4 mr-2" />
            Success Stories
          </Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">What Our Community Says</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of satisfied students, teachers, and parents who have 
            transformed their educational experience with EchoLearn.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Student & Parent Reviews</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                
                <Badge variant="secondary" className="mb-4">
                  {testimonial.highlight}
                </Badge>
                
                <div className="flex items-center gap-3 mt-6 pt-4 border-t">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Video Testimonials</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {videoTestimonials.map((video, index) => (
              <Card key={index} className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-primary ml-1" />
                    </div>
                  </div>
                  <Badge className="absolute top-2 right-2">{video.duration}</Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-primary/5 to-background">
            <Quote className="w-12 h-12 text-primary mb-6" />
            <blockquote className="text-2xl font-medium mb-6">
              "EchoLearn has revolutionized our approach to education. The platform's 
              combination of technology and pedagogy creates an unparalleled learning 
              experience. Our students are more engaged, motivated, and achieving 
              better results than ever before."
            </blockquote>
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/api/placeholder/100/100" />
                <AvatarFallback>RB</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold text-lg">Dr. Robert Brown</div>
                <div className="text-muted-foreground">Principal, Westfield Academy</div>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;