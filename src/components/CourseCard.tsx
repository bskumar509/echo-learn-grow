import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Clock,
  Users,
  Star,
  PlayCircle,
  Award,
  BookOpen,
  ChevronRight
} from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  progress?: number;
  category: string;
  thumbnail?: string;
  price?: number;
  isEnrolled?: boolean;
}

const CourseCard = ({
  title,
  description,
  instructor,
  duration,
  students,
  rating,
  level,
  progress,
  category,
  thumbnail,
  price,
  isEnrolled = false
}: CourseCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-success/10 text-success border-success/20";
      case "Intermediate":
        return "bg-warning/10 text-warning border-warning/20";
      case "Advanced":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "";
    }
  };

  return (
    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl card-hover">
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-secondary overflow-hidden">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <BookOpen className="w-16 h-16 text-white/50" />
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Category Badge */}
        <Badge className="absolute top-4 left-4 bg-white/90 text-foreground">
          {category}
        </Badge>
        
        {/* Level Badge */}
        <Badge className={`absolute top-4 right-4 border ${getLevelColor(level)}`}>
          {level}
        </Badge>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 rounded-full p-4 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <PlayCircle className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title & Description */}
        <div>
          <h3 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Instructor */}
        <div className="flex items-center space-x-2 text-sm">
          <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-medium">
            {instructor.charAt(0)}
          </div>
          <span className="text-muted-foreground">by {instructor}</span>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{students.toLocaleString()}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Progress (if enrolled) */}
        {isEnrolled && progress !== undefined && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium text-primary">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
            {progress === 100 && (
              <div className="flex items-center space-x-1 text-success text-sm">
                <Award className="w-4 h-4" />
                <span>Completed!</span>
              </div>
            )}
          </div>
        )}

        {/* Action Button */}
        <Button 
          variant={isEnrolled ? "outline" : "default"}
          className="w-full group/btn"
        >
          {isEnrolled ? (
            <>
              Continue Learning
              <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </>
          ) : (
            <>
              {price ? `Enroll - $${price}` : "Enroll Free"}
              <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};

export default CourseCard;