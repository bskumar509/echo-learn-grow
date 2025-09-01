import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { LogOut, Trophy, Target, Flame, BookOpen, Award, TrendingUp, Users, Calendar, MessageCircle } from "lucide-react";
import BadgeDisplay from "@/components/gamification/BadgeDisplay";
import PointsTracker from "@/components/gamification/PointsTracker";
import Leaderboard from "@/components/gamification/Leaderboard";
import WeeklyChallenges from "@/components/gamification/WeeklyChallenges";
import LevelProgress from "@/components/gamification/LevelProgress";
import { useAuth } from "@/contexts/AuthContext";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [userStats, setUserStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState<any[]>([]);
  const [upcomingTasks, setUpcomingTasks] = useState<any[]>([]);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }
    fetchDashboardData();
  }, [user, navigate]);

  const fetchDashboardData = async () => {
    try {
      if (!user) return;

      // Fetch user stats
      const { data: stats } = await supabase
        .from("user_stats")
        .select("*")
        .eq("user_id", user.id)
        .single();
      
      if (stats) {
        setUserStats(stats);
      } else {
        // Create initial stats if not exists
        const { data: newStats } = await supabase
          .from("user_stats")
          .insert({ user_id: user.id })
          .select()
          .single();
        setUserStats(newStats);
      }

      // Fetch enrolled courses
      const { data: coursesData } = await supabase
        .from("courses")
        .select("*")
        .eq("is_published", true)
        .limit(6);
      
      setCourses(coursesData || []);

    } catch (error: any) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const stats = [
    { label: "Total Points", value: userStats?.total_points || 0, icon: Trophy, color: "text-yellow-500" },
    { label: "Current Streak", value: `${userStats?.streak_days || 0} days`, icon: Flame, color: "text-orange-500" },
    { label: "Level", value: userStats?.level || 1, icon: TrendingUp, color: "text-blue-500" },
    { label: "Courses", value: userStats?.courses_completed || 0, icon: BookOpen, color: "text-green-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              EchoLearn Student
            </h1>
            <Badge variant="outline" className="hidden sm:inline-flex">
              Level {userStats?.level || 1}
            </Badge>
          </div>
          <div className="flex items-center space-x-4">
            <PointsTracker points={userStats?.total_points || 0} />
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
            Welcome back, {user?.user_metadata?.name || "Student"}! 👋
          </h2>
          <p className="text-muted-foreground">
            Keep up the great work! You're on a {userStats?.streak_days || 0} day learning streak.
          </p>
        </div>

        {/* Level Progress */}
        <div className="mb-8">
          <LevelProgress 
            level={userStats?.level || 1}
            currentXP={userStats?.total_points || 0}
            requiredXP={(userStats?.level || 1) * 1000}
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Continue Learning */}
              <Card>
                <CardHeader>
                  <CardTitle>Continue Learning</CardTitle>
                  <CardDescription>Pick up where you left off</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {courses.slice(0, 3).map((course, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-medium">{course.title}</h4>
                        <p className="text-sm text-muted-foreground">{course.subject}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Continue
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Weekly Goals */}
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Goals</CardTitle>
                  <CardDescription>Track your progress</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Study Time</span>
                      <span>3h 20m / 5h</span>
                    </div>
                    <Progress value={66} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Lessons Completed</span>
                      <span>12 / 15</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Quiz Score Average</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Achievements Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
                <CardDescription>Your latest accomplishments</CardDescription>
              </CardHeader>
              <CardContent>
                <BadgeDisplay userId={user?.id} limit={6} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Courses</CardTitle>
                <CardDescription>Explore your enrolled courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {courses.map((course, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardHeader>
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4"></div>
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">{course.grade_level}</Badge>
                          <Button size="sm">View Course</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>All Achievements</CardTitle>
                <CardDescription>Your complete badge collection</CardDescription>
              </CardHeader>
              <CardContent>
                <BadgeDisplay userId={user?.id} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-4">
            <WeeklyChallenges userId={user?.id} />
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-4">
            <Leaderboard userId={user?.id} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;