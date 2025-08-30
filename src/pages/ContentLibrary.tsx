import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Search,
  Filter,
  BookOpen,
  Video,
  FileText,
  Download,
  Bookmark,
  Clock,
  TrendingUp,
  Plus,
  Grid3x3,
  List,
  Play,
  File,
  ChevronRight,
  Star
} from "lucide-react";

const ContentLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedSubject, setSelectedSubject] = useState("all");

  const subjects = [
    { id: "all", name: "All Subjects", icon: BookOpen, color: "primary" },
    { id: "math", name: "Mathematics", icon: BookOpen, color: "blue-500" },
    { id: "science", name: "Science", icon: BookOpen, color: "green-500" },
    { id: "english", name: "English", icon: BookOpen, color: "purple-500" },
    { id: "social", name: "Social Studies", icon: BookOpen, color: "orange-500" },
    { id: "computer", name: "Computer Science", icon: BookOpen, color: "cyan-500" },
    { id: "languages", name: "Languages", icon: BookOpen, color: "pink-500" },
  ];

  const resources = [
    {
      id: 1,
      title: "Algebra Fundamentals Video Series",
      type: "video",
      subject: "Mathematics",
      duration: "2h 30m",
      downloads: 1234,
      rating: 4.8,
      isNew: true,
      thumbnail: "/api/placeholder/320/180",
    },
    {
      id: 2,
      title: "Chemistry Lab Manual PDF",
      type: "pdf",
      subject: "Science",
      pages: 156,
      downloads: 892,
      rating: 4.6,
      isNew: false,
      thumbnail: "/api/placeholder/320/180",
    },
    {
      id: 3,
      title: "Interactive Physics Simulations",
      type: "simulation",
      subject: "Science",
      interactions: 45,
      downloads: 2341,
      rating: 4.9,
      isNew: true,
      thumbnail: "/api/placeholder/320/180",
    },
    {
      id: 4,
      title: "English Grammar Practice Tests",
      type: "test",
      subject: "English",
      questions: 200,
      downloads: 3456,
      rating: 4.7,
      isNew: false,
      thumbnail: "/api/placeholder/320/180",
    },
    {
      id: 5,
      title: "World History Timeline",
      type: "interactive",
      subject: "Social Studies",
      events: 500,
      downloads: 1567,
      rating: 4.5,
      isNew: false,
      thumbnail: "/api/placeholder/320/180",
    },
    {
      id: 6,
      title: "Python Programming Tutorial",
      type: "video",
      subject: "Computer Science",
      duration: "4h 15m",
      downloads: 4532,
      rating: 4.9,
      isNew: true,
      thumbnail: "/api/placeholder/320/180",
    },
  ];

  const recentlyAdded = resources.filter(r => r.isNew);
  const popularResources = [...resources].sort((a, b) => b.downloads - a.downloads).slice(0, 3);

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "video": return Video;
      case "pdf": return FileText;
      case "test": return File;
      default: return BookOpen;
    }
  };

  const getResourceBadgeColor = (type: string) => {
    switch (type) {
      case "video": return "bg-blue-500/10 text-blue-500";
      case "pdf": return "bg-red-500/10 text-red-500";
      case "simulation": return "bg-purple-500/10 text-purple-500";
      case "test": return "bg-green-500/10 text-green-500";
      case "interactive": return "bg-orange-500/10 text-orange-500";
      default: return "bg-gray-500/10 text-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/5 via-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              10,000+ Resources
            </Badge>
            <h1 className="text-5xl font-bold mb-6 gradient-text">
              Content Library
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access a vast collection of educational resources, from videos to interactive simulations
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for videos, PDFs, simulations, and more..."
                className="pl-10 pr-4 py-6 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Categories */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex overflow-x-auto gap-4 pb-4">
            {subjects.map(subject => (
              <Button
                key={subject.id}
                variant={selectedSubject === subject.id ? "default" : "outline"}
                className="flex-shrink-0"
                onClick={() => setSelectedSubject(subject.id)}
              >
                <subject.icon className="w-4 h-4 mr-2" />
                {subject.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="all" className="space-y-8">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="all">All Resources</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="simulations">Simulations</TabsTrigger>
                <TabsTrigger value="tests">Practice Tests</TabsTrigger>
                <TabsTrigger value="saved">My Bookmarks</TabsTrigger>
              </TabsList>

              <div className="flex gap-2">
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Most Relevant</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>

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

            <TabsContent value="all" className="space-y-8">
              {/* Quick Stats */}
              <div className="grid md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Total Resources</p>
                        <p className="text-2xl font-bold">10,234</p>
                      </div>
                      <BookOpen className="w-8 h-8 text-primary" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Videos</p>
                        <p className="text-2xl font-bold">3,456</p>
                      </div>
                      <Video className="w-8 h-8 text-blue-500" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Documents</p>
                        <p className="text-2xl font-bold">4,789</p>
                      </div>
                      <FileText className="w-8 h-8 text-red-500" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Simulations</p>
                        <p className="text-2xl font-bold">1,989</p>
                      </div>
                      <Play className="w-8 h-8 text-purple-500" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recently Added */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Recently Added</h2>
                  <Button variant="ghost" size="sm">
                    View All
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentlyAdded.map(resource => {
                    const Icon = getResourceIcon(resource.type);
                    return (
                      <Card key={resource.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative aspect-video bg-muted">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Icon className="w-12 h-12 text-muted-foreground" />
                          </div>
                          {resource.isNew && (
                            <Badge className="absolute top-2 left-2 bg-success">
                              NEW
                            </Badge>
                          )}
                          <Badge className={`absolute top-2 right-2 ${getResourceBadgeColor(resource.type)}`}>
                            {resource.type}
                          </Badge>
                        </div>
                        <CardContent className="pt-4">
                          <h3 className="font-semibold mb-2 line-clamp-2">{resource.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{resource.subject}</p>
                          
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-sm">
                              {resource.duration && (
                                <span className="flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {resource.duration}
                                </span>
                              )}
                              {resource.pages && (
                                <span>{resource.pages} pages</span>
                              )}
                              {resource.questions && (
                                <span>{resource.questions} questions</span>
                              )}
                            </div>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-500 mr-1" />
                              <span className="text-sm">{resource.rating}</span>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <Play className="w-4 h-4 mr-2" />
                              Preview
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Bookmark className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Popular Resources */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Popular Resources</h2>
                  <Button variant="ghost" size="sm">
                    View All
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {popularResources.map(resource => {
                    const Icon = getResourceIcon(resource.type);
                    return (
                      <Card key={resource.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative aspect-video bg-muted">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Icon className="w-12 h-12 text-muted-foreground" />
                          </div>
                          <Badge className="absolute top-2 left-2" variant="secondary">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Popular
                          </Badge>
                          <Badge className={`absolute top-2 right-2 ${getResourceBadgeColor(resource.type)}`}>
                            {resource.type}
                          </Badge>
                        </div>
                        <CardContent className="pt-4">
                          <h3 className="font-semibold mb-2 line-clamp-2">{resource.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{resource.subject}</p>
                          
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm text-muted-foreground">
                              {resource.downloads.toLocaleString()} downloads
                            </span>
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-500 mr-1" />
                              <span className="text-sm">{resource.rating}</span>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <Play className="w-4 h-4 mr-2" />
                              Preview
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Bookmark className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </TabsContent>

            {/* Other tabs would have similar content structure */}
            <TabsContent value="videos">
              <div className="text-center py-12">
                <Video className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Video Resources</h3>
                <p className="text-muted-foreground">Browse our collection of educational videos</p>
              </div>
            </TabsContent>

            <TabsContent value="documents">
              <div className="text-center py-12">
                <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Document Resources</h3>
                <p className="text-muted-foreground">Access PDFs, worksheets, and study guides</p>
              </div>
            </TabsContent>

            <TabsContent value="simulations">
              <div className="text-center py-12">
                <Play className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Interactive Simulations</h3>
                <p className="text-muted-foreground">Explore concepts through interactive experiences</p>
              </div>
            </TabsContent>

            <TabsContent value="tests">
              <div className="text-center py-12">
                <File className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Practice Tests</h3>
                <p className="text-muted-foreground">Prepare with our comprehensive test library</p>
              </div>
            </TabsContent>

            <TabsContent value="saved">
              <div className="text-center py-12">
                <Bookmark className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Your Bookmarks</h3>
                <p className="text-muted-foreground mb-6">You haven't bookmarked any resources yet</p>
                <Button variant="hero">
                  Browse Resources
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentLibrary;
