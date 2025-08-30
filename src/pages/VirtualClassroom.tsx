import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { 
  Video, 
  Users, 
  Calendar as CalendarIcon,
  Clock,
  Mic,
  MicOff,
  VideoOff,
  Share2,
  MessageSquare,
  Settings,
  Download,
  Play,
  ChevronRight,
  PlusCircle,
  ExternalLink
} from "lucide-react";

const VirtualClassroom = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const upcomingSessions = [
    {
      id: 1,
      title: "Advanced Mathematics - Calculus",
      teacher: "Dr. Sarah Johnson",
      time: "10:00 AM",
      duration: "60 min",
      students: 25,
      status: "upcoming",
      meetingUrl: "#",
    },
    {
      id: 2,
      title: "Physics Lab - Quantum Mechanics",
      teacher: "Prof. Michael Chen",
      time: "2:00 PM",
      duration: "90 min",
      students: 18,
      status: "live",
      meetingUrl: "#",
    },
    {
      id: 3,
      title: "English Literature Discussion",
      teacher: "Emma Williams",
      time: "4:00 PM",
      duration: "45 min",
      students: 30,
      status: "upcoming",
      meetingUrl: "#",
    },
  ];

  const recordedSessions = [
    {
      id: 1,
      title: "Introduction to Chemistry",
      teacher: "Dr. Robert Brown",
      date: "Jan 15, 2024",
      duration: "55 min",
      views: 234,
      thumbnail: "/api/placeholder/320/180",
    },
    {
      id: 2,
      title: "World History: Ancient Rome",
      teacher: "Prof. Lisa Anderson",
      date: "Jan 14, 2024",
      duration: "65 min",
      views: 189,
      thumbnail: "/api/placeholder/320/180",
    },
    {
      id: 3,
      title: "Biology: Cell Structure",
      teacher: "Dr. James Wilson",
      date: "Jan 13, 2024",
      duration: "50 min",
      views: 456,
      thumbnail: "/api/placeholder/320/180",
    },
  ];

  const breakoutRooms = [
    { name: "Group A - Math Problems", participants: 5, active: true },
    { name: "Group B - Science Project", participants: 4, active: true },
    { name: "Group C - Essay Review", participants: 6, active: false },
    { name: "Group D - Language Practice", participants: 3, active: true },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary/5 via-primary/10 to-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Video className="w-4 h-4 mr-2" />
              Live Interactive Learning
            </Badge>
            <h1 className="text-5xl font-bold mb-6 gradient-text">
              Virtual Classroom
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join live sessions, collaborate with peers, and learn from expert teachers in real-time
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Video className="mr-2 w-5 h-5" />
                Start Teaching
              </Button>
              <Button variant="outline" size="lg">
                <CalendarIcon className="mr-2 w-5 h-5" />
                Schedule Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="live" className="space-y-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
              <TabsTrigger value="live">Live Sessions</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="recordings">Recordings</TabsTrigger>
              <TabsTrigger value="breakout">Breakout Rooms</TabsTrigger>
            </TabsList>

            {/* Live Sessions Tab */}
            <TabsContent value="live" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  {/* Currently Live */}
                  {upcomingSessions
                    .filter(s => s.status === "live")
                    .map(session => (
                      <Card key={session.id} className="border-success">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="default" className="bg-success">
                                  <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></div>
                                  LIVE NOW
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                  {session.students} students joined
                                </span>
                              </div>
                              <CardTitle>{session.title}</CardTitle>
                              <p className="text-muted-foreground mt-1">{session.teacher}</p>
                            </div>
                            <Button variant="hero" size="lg">
                              <Video className="mr-2 w-5 h-5" />
                              Join Now
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex gap-4">
                            <Button variant="outline" size="sm">
                              <MessageSquare className="w-4 h-4 mr-2" />
                              Chat
                            </Button>
                            <Button variant="outline" size="sm">
                              <Share2 className="w-4 h-4 mr-2" />
                              Share Screen
                            </Button>
                            <Button variant="outline" size="sm">
                              <Users className="w-4 h-4 mr-2" />
                              Participants
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                  {/* Upcoming Sessions */}
                  <h3 className="text-xl font-bold">Upcoming Sessions</h3>
                  {upcomingSessions
                    .filter(s => s.status === "upcoming")
                    .map(session => (
                      <Card key={session.id}>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between">
                            <div className="space-y-2">
                              <h4 className="font-semibold">{session.title}</h4>
                              <p className="text-sm text-muted-foreground">{session.teacher}</p>
                              <div className="flex items-center gap-4 text-sm">
                                <span className="flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {session.time}
                                </span>
                                <span className="flex items-center">
                                  <Users className="w-4 h-4 mr-1" />
                                  {session.students} enrolled
                                </span>
                                <span>{session.duration}</span>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline">
                                <CalendarIcon className="w-4 h-4 mr-2" />
                                Add to Calendar
                              </Button>
                              <Button>
                                Set Reminder
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Quick Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button className="w-full justify-start" variant="outline">
                        <PlusCircle className="w-4 h-4 mr-2" />
                        Create New Session
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        Schedule Session
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Video className="w-4 h-4 mr-2" />
                        Start Instant Meeting
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Settings className="w-4 h-4 mr-2" />
                        Classroom Settings
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Help Resources */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Need Help?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <a href="#" className="flex items-center text-sm hover:text-primary transition-colors">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        Virtual Classroom Guide
                      </a>
                      <a href="#" className="flex items-center text-sm hover:text-primary transition-colors">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        Audio/Video Troubleshooting
                      </a>
                      <a href="#" className="flex items-center text-sm hover:text-primary transition-colors">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        Best Practices for Online Teaching
                      </a>
                      <a href="#" className="flex items-center text-sm hover:text-primary transition-colors">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        Student Engagement Tips
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Schedule Tab */}
            <TabsContent value="schedule" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Session Calendar</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border"
                      />
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Today's Schedule</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {upcomingSessions.map((session, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div>
                            <p className="font-medium text-sm">{session.title}</p>
                            <p className="text-xs text-muted-foreground">{session.time}</p>
                          </div>
                          <Badge variant={session.status === "live" ? "default" : "secondary"}>
                            {session.status}
                          </Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Recordings Tab */}
            <TabsContent value="recordings" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recordedSessions.map(recording => (
                  <Card key={recording.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative aspect-video bg-muted">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-12 h-12 text-primary" />
                      </div>
                      <Badge className="absolute top-2 right-2">
                        {recording.duration}
                      </Badge>
                    </div>
                    <CardContent className="pt-4">
                      <h4 className="font-semibold mb-1">{recording.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{recording.teacher}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{recording.date}</span>
                        <span className="flex items-center">
                          <Play className="w-3 h-3 mr-1" />
                          {recording.views} views
                        </span>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Play className="w-4 h-4 mr-2" />
                          Watch
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Breakout Rooms Tab */}
            <TabsContent value="breakout" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {breakoutRooms.map((room, index) => (
                  <Card key={index} className={room.active ? "border-success" : ""}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant={room.active ? "default" : "secondary"}>
                          {room.active ? "Active" : "Inactive"}
                        </Badge>
                        <Users className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <h4 className="font-semibold mb-2">{room.name}</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {room.participants} participants
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Join Room
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <Users className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-semibold mb-2">Create Breakout Rooms</h3>
                    <p className="text-muted-foreground mb-6">
                      Split your class into smaller groups for focused discussions
                    </p>
                    <Button variant="hero">
                      <PlusCircle className="w-4 h-4 mr-2" />
                      Create New Room
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VirtualClassroom;