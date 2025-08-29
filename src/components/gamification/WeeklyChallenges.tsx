import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, BookOpen, Clock, Users, Trophy, ChevronRight } from "lucide-react";

interface WeeklyChallengesProps {
  userId?: string;
}

const WeeklyChallenges = ({ userId }: WeeklyChallengesProps) => {
  const [challenges, setChallenges] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChallenges();
  }, []);

  const fetchChallenges = async () => {
    try {
      const { data, error } = await supabase
        .from("weekly_challenges")
        .select("*")
        .eq("is_active", true)
        .gte("end_date", new Date().toISOString().split("T")[0])
        .order("start_date", { ascending: false });

      if (error) throw error;
      setChallenges(data || []);
    } catch (error) {
      console.error("Error fetching challenges:", error);
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "lessons":
        return BookOpen;
      case "quizzes":
        return Target;
      case "study_time":
        return Clock;
      case "collaboration":
        return Users;
      default:
        return Trophy;
    }
  };

  const getProgress = (challenge: any) => {
    // This would typically fetch actual user progress
    // For now, return mock progress
    return Math.floor(Math.random() * 100);
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Weekly Challenges</CardTitle>
          <CardDescription>Complete challenges to earn bonus points!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="p-4 border rounded-lg">
                <div className="h-20 bg-muted animate-pulse rounded"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (challenges.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Weekly Challenges</CardTitle>
          <CardDescription>Complete challenges to earn bonus points!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Trophy className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">No active challenges</p>
            <p className="text-sm text-muted-foreground mt-2">
              Check back soon for new challenges!
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Challenges</CardTitle>
        <CardDescription>Complete challenges to earn bonus points!</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {challenges.map((challenge) => {
            const Icon = getIcon(challenge.target_type);
            const progress = getProgress(challenge);
            const daysLeft = Math.ceil(
              (new Date(challenge.end_date).getTime() - new Date().getTime()) /
                (1000 * 60 * 60 * 24)
            );

            return (
              <div
                key={challenge.id}
                className="p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{challenge.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary">
                    +{challenge.reward_points} pts
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Progress: {progress}% of {challenge.target_value}
                    </span>
                    <span className="text-muted-foreground">
                      {daysLeft} days left
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                <div className="flex justify-end mt-3">
                  <Button size="sm" variant="ghost" className="group">
                    View Details
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeeklyChallenges;