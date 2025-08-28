import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseCard from "./CourseCard";
import { 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Clock,
  Star
} from "lucide-react";

const CoursesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Courses" },
    { id: "mathematics", label: "Mathematics" },
    { id: "science", label: "Science" },
    { id: "english", label: "English" },
    { id: "history", label: "History" },
    { id: "technology", label: "Technology" }
  ];

  const courses = [
    {
      id: 1,
      title: "Introduction to Algebra",
      description: "Master the fundamentals of algebraic expressions and equations",
      instructor: "Dr. Sarah Johnson",
      duration: "8 weeks",
      students: 15234,
      rating: 4.8,
      level: "Beginner" as const,
      category: "Mathematics",
      price: 0,
      isPopular: true
    },
    {
      id: 2,
      title: "Biology: Life Sciences",
      description: "Explore the fascinating world of living organisms and ecosystems",
      instructor: "Prof. Michael Chen",
      duration: "10 weeks",
      students: 12450,
      rating: 4.9,
      level: "Intermediate" as const,
      category: "Science",
      price: 29,
      isPopular: true
    },
    {
      id: 3,
      title: "Creative Writing Workshop",
      description: "Develop your storytelling skills and find your unique voice",
      instructor: "Emma Williams",
      duration: "6 weeks",
      students: 8923,
      rating: 4.7,
      level: "Beginner" as const,
      category: "English",
      price: 19,
      isNew: true
    },
    {
      id: 4,
      title: "World History: Ancient Civilizations",
      description: "Journey through the rise and fall of ancient empires",
      instructor: "Dr. Robert Lee",
      duration: "12 weeks",
      students: 10567,
      rating: 4.6,
      level: "Intermediate" as const,
      category: "History",
      price: 0
    },
    {
      id: 5,
      title: "Introduction to Coding",
      description: "Learn programming basics with fun, interactive projects",
      instructor: "Alex Rodriguez",
      duration: "8 weeks",
      students: 18934,
      rating: 4.9,
      level: "Beginner" as const,
      category: "Technology",
      price: 0,
      isPopular: true
    },
    {
      id: 6,
      title: "Advanced Physics",
      description: "Deep dive into quantum mechanics and relativity",
      instructor: "Dr. Lisa Park",
      duration: "14 weeks",
      students: 6234,
      rating: 4.8,
      level: "Advanced" as const,
      category: "Science",
      price: 39,
      isNew: true
    }
  ];

  const filteredCourses = selectedCategory === "all" 
    ? courses 
    : courses.filter(course => course.category.toLowerCase() === selectedCategory);

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Popular Courses</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Discover Your Next
            <span className="gradient-text block">Learning Adventure</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from hundreds of courses designed specifically for K-12 students,
            with expert instructors and engaging content.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card rounded-xl p-6 border border-border flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm text-muted-foreground">Active Courses</p>
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-sm text-muted-foreground">Learning Access</p>
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold">4.8/5</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            View All Courses
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;