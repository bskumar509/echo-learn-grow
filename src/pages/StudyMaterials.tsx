import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Download, 
  Search,
  Filter,
  BookOpen,
  Video,
  Headphones,
  FileQuestion,
  Clock,
  Eye
} from "lucide-react";

const StudyMaterials = () => {
  const materials = {
    textbooks: [
      {
        title: "Mathematics Grade 9",
        subject: "Mathematics",
        type: "PDF",
        size: "12.5 MB",
        downloads: 1234,
        preview: true
      },
      {
        title: "Physics Fundamentals",
        subject: "Science",
        type: "PDF",
        size: "8.3 MB",
        downloads: 892,
        preview: true
      },
      {
        title: "English Grammar Guide",
        subject: "English",
        type: "PDF",
        size: "5.7 MB",
        downloads: 2341,
        preview: true
      }
    ],
    videos: [
      {
        title: "Introduction to Algebra",
        subject: "Mathematics",
        duration: "45:20",
        views: 5432,
        thumbnail: "/api/placeholder/300/169"
      },
      {
        title: "Chemical Reactions Explained",
        subject: "Chemistry",
        duration: "32:15",
        views: 3210,
        thumbnail: "/api/placeholder/300/169"
      },
      {
        title: "World War II History",
        subject: "History",
        duration: "58:45",
        views: 4567,
        thumbnail: "/api/placeholder/300/169"
      }
    ],
    audiobooks: [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        duration: "12h 45m",
        plays: 890
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        duration: "8h 30m",
        plays: 675
      },
      {
        title: "1984",
        author: "George Orwell",
        duration: "10h 15m",
        plays: 1234
      }
    ],
    worksheets: [
      {
        title: "Quadratic Equations Practice",
        subject: "Mathematics",
        questions: 25,
        difficulty: "Intermediate"
      },
      {
        title: "Grammar Exercises",
        subject: "English",
        questions: 30,
        difficulty: "Beginner"
      },
      {
        title: "Chemistry Lab Report Template",
        subject: "Chemistry",
        questions: 15,
        difficulty: "Advanced"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/5 via-primary/10 to-background">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Study Resources
          </Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">Study Materials Library</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Access thousands of educational resources including textbooks, videos, 
            worksheets, and more to enhance your learning experience.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search materials..." 
                className="pl-10 h-12"
              />
            </div>
            <Button size="lg" variant="outline">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Materials Tabs */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="textbooks" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="textbooks">Textbooks</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="audiobooks">Audiobooks</TabsTrigger>
              <TabsTrigger value="worksheets">Worksheets</TabsTrigger>
            </TabsList>
            
            <TabsContent value="textbooks" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {materials.textbooks.map((book, index) => (
                  <Card key={index} className="p-6">
                    <FileText className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">{book.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{book.subject}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span>{book.type}</span>
                      <span>•</span>
                      <span>{book.size}</span>
                      <span>•</span>
                      <span>{book.downloads} downloads</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="videos" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {materials.videos.map((video, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative">
                      <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
                      <Badge className="absolute top-2 right-2">{video.duration}</Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{video.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{video.subject}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {video.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {video.duration}
                        </span>
                      </div>
                      <Button className="w-full">
                        <Video className="w-4 h-4 mr-2" />
                        Watch Now
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="audiobooks" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {materials.audiobooks.map((audio, index) => (
                  <Card key={index} className="p-6">
                    <Headphones className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-semibold mb-1">{audio.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">by {audio.author}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span>{audio.duration}</span>
                      <span>•</span>
                      <span>{audio.plays} plays</span>
                    </div>
                    
                    <Button className="w-full">
                      <Headphones className="w-4 h-4 mr-2" />
                      Listen Now
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="worksheets" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {materials.worksheets.map((worksheet, index) => (
                  <Card key={index} className="p-6">
                    <FileQuestion className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">{worksheet.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{worksheet.subject}</p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline">{worksheet.questions} Questions</Badge>
                      <Badge variant="secondary">{worksheet.difficulty}</Badge>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudyMaterials;