import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Trophy, Target, Flame, Star, Award, Zap } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface BadgeDisplayProps {
  userId?: string;
  limit?: number;
}

const iconMap: Record<string, any> = {
  trophy: Trophy,
  target: Target,
  flame: Flame,
  star: Star,
  award: Award,
  zap: Zap,
};

const BadgeDisplay = ({ userId, limit }: BadgeDisplayProps) => {
  const [achievements, setAchievements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      fetchAchievements();
    }
  }, [userId]);

  const fetchAchievements = async () => {
    try {
      const query = supabase
        .from("user_achievements")
        .select(`
          *,
          achievements (*)
        `)
        .eq("user_id", userId);

      if (limit) {
        query.limit(limit);
      }

      const { data, error } = await query;

      if (error) throw error;
      setAchievements(data || []);
    } catch (error) {
      console.error("Error fetching achievements:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-square bg-muted animate-pulse rounded-lg"></div>
        ))}
      </div>
    );
  }

  if (achievements.length === 0) {
    return (
      <Card className="p-8 text-center">
        <Trophy className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
        <p className="text-muted-foreground">No achievements earned yet</p>
        <p className="text-sm text-muted-foreground mt-2">
          Complete lessons and challenges to earn badges!
        </p>
      </Card>
    );
  }

  return (
    <TooltipProvider>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {achievements.map((achievement) => {
          const Icon = iconMap[achievement.achievements?.icon_url || "trophy"] || Trophy;
          const categoryColors: Record<string, string> = {
            academic: "bg-blue-500/10 text-blue-500 border-blue-500/20",
            social: "bg-green-500/10 text-green-500 border-green-500/20",
            streak: "bg-orange-500/10 text-orange-500 border-orange-500/20",
            challenge: "bg-purple-500/10 text-purple-500 border-purple-500/20",
          };
          const colorClass = categoryColors[achievement.achievements?.category || "academic"];

          return (
            <Tooltip key={achievement.id}>
              <TooltipTrigger asChild>
                <div
                  className={`aspect-square rounded-lg border-2 ${colorClass} flex flex-col items-center justify-center p-4 hover:scale-105 transition-transform cursor-pointer`}
                >
                  <Icon className="w-8 h-8 mb-2" />
                  <span className="text-xs font-medium text-center line-clamp-2">
                    {achievement.achievements?.name}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div className="space-y-1">
                  <p className="font-semibold">{achievement.achievements?.name}</p>
                  <p className="text-sm">{achievement.achievements?.description}</p>
                  <p className="text-xs text-muted-foreground">
                    Earned on {new Date(achievement.earned_at).toLocaleDateString()}
                  </p>
                </div>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
};

export default BadgeDisplay;