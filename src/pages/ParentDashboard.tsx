import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "@/hooks/use-toast";
import { LogOut, Users, TrendingUp, BookOpen, Calendar, MessageCircle, Bell, ChevronRight, Eye } from "lucide-react";

const ParentDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [children, setChildren] = useState<any[]>([]);
  const [selectedChild, setSelectedChild] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
    fetchChildren();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/auth");
      return;
    }
    setUser(user);
  };

  const fetchChildren = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Fetch linked children
      const { data: links } = await supabase
        .from("student_parent_links")
        .select(`
          *,
          profiles:student_id (
            name,
            avatar_url,
            grade
          ),
          user_stats:student_id (
            total_points,
            level,
            streak_days,
            lessons_completed,
            quiz_score_average
          )
        `)
        .eq("parent_id", user.id)
        .eq("approved", true);

      if (links && links.length > 0) {
        setChildren(links);
        setSelectedChild(links[0]);
      }
    } catch (error) {
      console.error("Error fetching children:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading parent dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              EchoLearn Parent Portal
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => navigate("/messages")}>
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Welcome, {user?.user_metadata?.name || "Parent"}! 👋
          </h2>
          <p className="text-muted-foreground">
            Monitor your children's learning progress and achievements
          </p>
        </div>

        {/* Children Selector */}
        {children.length > 0 && (
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Your Children</CardTitle>
                <CardDescription>Select a child to view their progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  {children.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => setSelectedChild(child)}
                      className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all min-w-[120px] ${
                        selectedChild?.id === child.id
                          ? "border-primary bg-primary/5"
                          : "border-muted hover:border-primary/50"
                      }`}
                    >
                      <Avatar className="h-16 w-16 mb-2">
                        <AvatarImage src={child.profiles?.avatar_url} />
                        <AvatarFallback>
                          {child.profiles?.name?.charAt(0)?.toUpperCase() || "S"}
                        </AvatarFallback>
                      </Avatar>
                      <p className="font-medium">{child.profiles?.name}</p>
                      <Badge variant="secondary" className="mt-1">
                        Grade {child.profiles?.grade || "N/A"}
                      </Badge>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedChild ? (
          <>
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Level</p>
                      <p className="text-2xl font-bold mt-1">
                        {selectedChild.user_stats?.level || 1}
                      </p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Points</p>
                      <p className="text-2xl font-bold mt-1">
                        {selectedChild.user_stats?.total_points || 0}
                      </p>
                    </div>
                    <Users className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Streak</p>
                      <p className="text-2xl font-bold mt-1">
                        {selectedChild.user_stats?.streak_days || 0} days
                      </p>
                    </div>
                    <Calendar className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Quiz Average</p>
                      <p className="text-2xl font-bold mt-1">
                        {selectedChild.user_stats?.quiz_score_average || 0}%
                      </p>
                    </div>
                    <BookOpen className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Tabs */}
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="progress">Progress</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Weekly Summary */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Weekly Summary</CardTitle>
                      <CardDescription>
                        {selectedChild.profiles?.name}'s progress this week
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Study Time</span>
                          <span>12h 30m / 15h</span>
                        </div>
                        <Progress value={83} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Lessons Completed</span>
                          <span>8 / 10</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Assignments</span>
                          <span>5 / 5</span>
                        </div>
                        <Progress value={100} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Latest learning activities</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { subject: "Mathematics", activity: "Completed Chapter 5 Quiz", score: "95%" },
                          { subject: "Science", activity: "Watched Video Lesson", score: null },
                          { subject: "English", activity: "Submitted Essay", score: "A+" },
                          { subject: "History", activity: "Started New Module", score: null },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <p className="font-medium">{item.subject}</p>
                              <p className="text-sm text-muted-foreground">{item.activity}</p>
                            </div>
                            {item.score && (
                              <Badge variant="secondary">{item.score}</Badge>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="progress" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Subject Progress</CardTitle>
                    <CardDescription>Performance across different subjects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { subject: "Mathematics", progress: 85, grade: "A" },
                        { subject: "Science", progress: 78, grade: "B+" },
                        { subject: "English", progress: 92, grade: "A+" },
                        { subject: "History", progress: 70, grade: "B" },
                        { subject: "Geography", progress: 88, grade: "A" },
                      ].map((subject, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{subject.subject}</span>
                              <Badge variant="outline">{subject.grade}</Badge>
                            </div>
                            <span className="text-sm text-muted-foreground">{subject.progress}%</span>
                          </div>
                          <Progress value={subject.progress} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="schedule" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Schedule</CardTitle>
                    <CardDescription>Classes and assignments for this week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-muted-foreground">
                      Schedule view coming soon
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reports" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Reports</CardTitle>
                    <CardDescription>Detailed progress reports</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-between">
                        Weekly Progress Report
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="w-full justify-between">
                        Monthly Performance Summary
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="w-full justify-between">
                        Subject-wise Analysis
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </>
        ) : (
          <Card>
            <CardContent className="p-8 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">No children linked to your account</p>
              <p className="text-sm text-muted-foreground mt-2">
                Ask your child to share their student ID to link accounts
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ParentDashboard;