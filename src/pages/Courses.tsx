import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Filter, 
  Search, 
  BookOpen, 
  Clock, 
  TrendingUp,
  Grid3x3,
  List,
  SlidersHorizontal
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  const grades = ["all", "1-3", "4-6", "7-9", "10-12"];
  const subjects = ["all", "Mathematics", "Science", "English", "Social Studies", "Computer Science", "Languages"];
  const difficulties = ["all", "Beginner", "Intermediate", "Advanced"];

  const courses = [
    {
      title: "Mathematics Fundamentals",
      description: "Build a strong foundation in basic mathematical concepts",
      instructor: "Dr. Sarah Johnson",
      duration: "8 weeks",
      students: 1234,
      rating: 4.8,
      level: "Beginner" as const,
      category: "Mathematics",
      thumbnail: "/api/placeholder/400/225",
      price: "$49",
      isEnrolled: false,
      progress: 0,
    },
    {
      title: "Advanced Physics",
      description: "Explore complex physics concepts with interactive simulations",
      instructor: "Prof. Michael Chen",
      duration: "12 weeks",
      students: 856,
      rating: 4.9,
      level: "Advanced" as const,
      category: "Science",
      thumbnail: "/api/placeholder/400/225",
      price: "$79",
      isEnrolled: true,
      progress: 65,
    },
    {
      title: "Creative Writing Workshop",
      description: "Develop your writing skills through practical exercises",
      instructor: "Emma Williams",
      duration: "6 weeks",
      students: 2341,
      rating: 4.7,
      level: "Intermediate" as const,
      category: "English",
      thumbnail: "/api/placeholder/400/225",
      price: "$39",
      isEnrolled: false,
      progress: 0,
    },
    {
      title: "World History: Ancient Civilizations",
      description: "Journey through the great civilizations of the past",
      instructor: "Dr. Robert Brown",
      duration: "10 weeks",
      students: 1567,
      rating: 4.6,
      level: "Intermediate" as const,
      category: "Social Studies",
      thumbnail: "/api/placeholder/400/225",
      price: "$59",
      isEnrolled: true,
      progress: 30,
    },
    {
      title: "Introduction to Programming",
      description: "Learn the basics of coding with Python",
      instructor: "Alex Kumar",
      duration: "8 weeks",
      students: 3456,
      rating: 4.9,
      level: "Beginner" as const,
      category: "Computer Science",
      thumbnail: "/api/placeholder/400/225",
      price: "$69",
      isEnrolled: false,
      progress: 0,
    },
    {
      title: "Spanish for Beginners",
      description: "Start your journey to Spanish fluency",
      instructor: "Maria Garcia",
      duration: "12 weeks",
      students: 2890,
      rating: 4.8,
      level: "Beginner" as const,
      category: "Languages",
      thumbnail: "/api/placeholder/400/225",
      price: "$45",
      isEnrolled: true,
      progress: 45,
    },
  ];

  const popularPaths = [
    { name: "STEM Excellence", courses: 15, students: 5000 },
    { name: "Language Mastery", courses: 10, students: 3500 },
    { name: "Creative Arts", courses: 8, students: 2000 },
    { name: "Social Sciences", courses: 12, students: 2800 },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === "all" || course.category === selectedSubject;
    const matchesDifficulty = selectedDifficulty === "all" || course.level === selectedDifficulty;
    
    return matchesSearch && matchesSubject && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/5 via-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              500+ Courses Available
            </Badge>
            <h1 className="text-5xl font-bold mb-6 gradient-text">
              Explore Our Course Catalog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover curriculum-aligned courses designed to inspire and educate
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search courses by title, subject, or instructor..."
                className="pl-10 pr-4 py-6 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Grade Level" />
                </SelectTrigger>
                <SelectContent>
                  {grades.map(grade => (
                    <SelectItem key={grade} value={grade}>
                      {grade === "all" ? "All Grades" : `Grade ${grade}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map(subject => (
                    <SelectItem key={subject} value={subject}>
                      {subject === "all" ? "All Subjects" : subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map(difficulty => (
                    <SelectItem key={difficulty} value={difficulty}>
                      {difficulty === "all" ? "All Levels" : difficulty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="outline" size="sm">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>

            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid3x3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Popular Learning Paths</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {popularPaths.map((path, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">{path.name}</h3>
                  <TrendingUp className="w-4 h-4 text-success" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">{path.courses} courses</p>
                <div className="flex items-center text-sm">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{path.students.toLocaleString()} students</span>
                </div>
              </Card>
            ))}
          </div>

          {/* Course Tabs */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList>
              <TabsTrigger value="all">All Courses</TabsTrigger>
              <TabsTrigger value="enrolled">My Courses</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="new">New Arrivals</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredCourses.length} courses
                </p>
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Most Relevant</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Course Grid */}
              <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
                {filteredCourses.map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="enrolled" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.filter(c => c.isEnrolled).map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="trending" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.slice(0, 3).map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="new" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.slice(2, 5).map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recommended" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.slice(1, 4).map((course, index) => (
                  <CourseCard key={index} {...course} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Courses
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;