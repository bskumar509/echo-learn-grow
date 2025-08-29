import { Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PointsTrackerProps {
  points: number;
}

const PointsTracker = ({ points }: PointsTrackerProps) => {
  return (
    <Badge variant="outline" className="px-3 py-1.5">
      <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
      <span className="font-semibold">{points.toLocaleString()}</span>
      <span className="ml-1 text-muted-foreground">pts</span>
    </Badge>
  );
};

export default PointsTracker;