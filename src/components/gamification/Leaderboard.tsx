import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award } from "lucide-react";

interface LeaderboardProps {
  userId?: string;
  classId?: string;
  schoolId?: string;
}

const Leaderboard = ({ userId, classId, schoolId }: LeaderboardProps) => {
  const [leaderboards, setLeaderboards] = useState<any>({
    weekly: [],
    monthly: [],
    allTime: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboards();
  }, [classId, schoolId]);

  const fetchLeaderboards = async () => {
    try {
      const periods = ["weekly", "monthly", "all-time"];
      const results: any = {};

      for (const period of periods) {
        let query = supabase
          .from("leaderboards")
          .select(`
            *,
            profiles:user_id (
              name,
              avatar_url
            )
          `)
          .eq("period", period)
          .order("rank", { ascending: true })
          .limit(10);

        if (classId) query = query.eq("class_id", classId);
        if (schoolId) query = query.eq("school_id", schoolId);

        const { data, error } = await query;
        if (!error) {
          const key = period === "all-time" ? "allTime" : period;
          results[key] = data || [];
        }
      }

      setLeaderboards(results);
    } catch (error) {
      console.error("Error fetching leaderboards:", error);
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Award className="w-5 h-5 text-orange-600" />;
      default:
        return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold">{rank}</span>;
    }
  };

  const LeaderboardList = ({ data, period }: { data: any[]; period: string }) => {
    if (loading) {
      return (
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center space-x-4 p-3">
              <div className="w-8 h-8 bg-muted animate-pulse rounded-full"></div>
              <div className="flex-1 h-12 bg-muted animate-pulse rounded"></div>
            </div>
          ))}
        </div>
      );
    }

    if (data.length === 0) {
      return (
        <div className="text-center py-8">
          <Trophy className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">No leaderboard data yet</p>
          <p className="text-sm text-muted-foreground mt-2">
            Complete activities to appear on the leaderboard!
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-2">
        {data.map((entry, index) => {
          const isCurrentUser = entry.user_id === userId;
          return (
            <div
              key={entry.id}
              className={`flex items-center space-x-4 p-3 rounded-lg transition-colors ${
                isCurrentUser
                  ? "bg-primary/10 border border-primary/20"
                  : "hover:bg-muted/50"
              }`}
            >
              <div className="flex items-center justify-center w-8">
                {getRankIcon(entry.rank || index + 1)}
              </div>
              <Avatar className="h-10 w-10">
                <AvatarImage src={entry.profiles?.avatar_url} />
                <AvatarFallback>
                  {entry.profiles?.name?.charAt(0)?.toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <p className="font-medium">
                    {entry.profiles?.name || "Anonymous"}
                  </p>
                  {isCurrentUser && (
                    <Badge variant="secondary" className="text-xs">
                      You
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  Level {Math.floor(entry.points / 1000) + 1}
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">{entry.points.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">points</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leaderboard</CardTitle>
        <CardDescription>
          See how you rank against other learners
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="weekly">This Week</TabsTrigger>
            <TabsTrigger value="monthly">This Month</TabsTrigger>
            <TabsTrigger value="allTime">All Time</TabsTrigger>
          </TabsList>
          <TabsContent value="weekly" className="mt-4">
            <LeaderboardList data={leaderboards.weekly} period="weekly" />
          </TabsContent>
          <TabsContent value="monthly" className="mt-4">
            <LeaderboardList data={leaderboards.monthly} period="monthly" />
          </TabsContent>
          <TabsContent value="allTime" className="mt-4">
            <LeaderboardList data={leaderboards.allTime} period="all-time" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;