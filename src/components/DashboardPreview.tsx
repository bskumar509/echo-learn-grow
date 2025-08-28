import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Target,
  Flame,
  TrendingUp,
  BookOpen,
  Clock,
  Award,
  ChevronRight,
  Calendar,
  BarChart3
} from "lucide-react";
import badgeImage from "@/assets/badge-achievement.png";

const DashboardPreview = () => {
  const stats = [
    { label: "Streak Days", value: "15", icon: Flame, color: "text-orange-500" },
    { label: "XP Points", value: "2,450", icon: Trophy, color: "text-yellow-500" },
    { label: "Courses Active", value: "4", icon: BookOpen, color: "text-blue-500" },
    { label: "Study Hours", value: "48", icon: Clock, color: "text-purple-500" }
  ];

  const recentAchievements = [
    { name: "Math Master", description: "Complete 10 math lessons", icon: badgeImage },
    { name: "Science Explorer", description: "Finish first science module", icon: badgeImage },
    { name: "Consistent Learner", description: "7-day learning streak", icon: badgeImage }
  ];

  const upcomingTasks = [
    { title: "Algebra Quiz", subject: "Mathematics", due: "Tomorrow", progress: 60 },
    { title: "Biology Assignment", subject: "Science", due: "In 3 days", progress: 30 },
    { title: "Essay Draft", subject: "English", due: "Next week", progress: 15 }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
            <BarChart3 className="w-4 h-4" />
            <span className="text-sm font-medium">Student Dashboard</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Track Your Learning
            <span className="gradient-text block">Journey & Progress</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Personalized dashboards for students, educators, and administrators
            with real-time insights and analytics.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-6xl mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  <TrendingUp className="w-4 h-4 text-success" />
                </div>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Learning Progress */}
            <Card className="lg:col-span-2 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Active Courses</h3>
                <Badge variant="outline">4 Courses</Badge>
              </div>
              <div className="space-y-4">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-medium">{task.title}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {task.subject}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {task.due}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{task.progress}%</span>
                      </div>
                      <Progress value={task.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Achievements */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Achievements</h3>
                <Award className="w-5 h-5 text-accent" />
              </div>
              <div className="space-y-4">
                {recentAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors">
                    <img 
                      src={achievement.icon} 
                      alt={achievement.name}
                      className="w-12 h-12"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{achievement.name}</p>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
                <button className="w-full text-center text-sm text-primary hover:text-primary-hover font-medium py-2">
                  View All Achievements →
                </button>
              </div>
            </Card>
          </div>

          {/* Weekly Goals */}
          <Card className="mt-8 p-6 bg-gradient-subtle">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Weekly Goals</h3>
              <Target className="w-5 h-5 text-primary" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Study Time</p>
                <p className="text-2xl font-bold">12/15 hrs</p>
                <Progress value={80} className="h-2 mt-2" />
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Lessons Completed</p>
                <p className="text-2xl font-bold">8/10</p>
                <Progress value={80} className="h-2 mt-2" />
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Quiz Score Avg</p>
                <p className="text-2xl font-bold">92%</p>
                <Progress value={92} className="h-2 mt-2" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;