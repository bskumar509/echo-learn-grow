import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Star } from "lucide-react";

interface LevelProgressProps {
  level: number;
  currentXP: number;
  requiredXP: number;
}

const LevelProgress = ({ level, currentXP, requiredXP }: LevelProgressProps) => {
  const progress = Math.min((currentXP / requiredXP) * 100, 100);
  const xpToNextLevel = Math.max(requiredXP - currentXP, 0);

  return (
    <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-accent/5 rounded-lg p-6 border">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-full">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold">Level {level}</h3>
              <Badge variant="outline" className="text-xs">
                <Star className="w-3 h-3 mr-1" />
                Rank: Student
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              {xpToNextLevel.toLocaleString()} XP to level {level + 1}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold">{currentXP.toLocaleString()}</p>
          <p className="text-sm text-muted-foreground">Total XP</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="font-medium">Progress to Next Level</span>
          <span className="text-muted-foreground">
            {currentXP.toLocaleString()} / {requiredXP.toLocaleString()} XP
          </span>
        </div>
        <Progress value={progress} className="h-3" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Level {level}</span>
          <span>{Math.floor(progress)}%</span>
          <span>Level {level + 1}</span>
        </div>
      </div>

      {/* Milestone rewards preview */}
      <div className="mt-4 pt-4 border-t">
        <p className="text-sm font-medium mb-2">Next Milestone Rewards:</p>
        <div className="flex space-x-2">
          <Badge variant="secondary" className="text-xs">
            New Badge
          </Badge>
          <Badge variant="secondary" className="text-xs">
            +100 Bonus Points
          </Badge>
          <Badge variant="secondary" className="text-xs">
            Title: Scholar
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default LevelProgress;