import { GraduationCap, Code, DollarSign, Heart, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

const AcademyPreview = () => {
  const { toast } = useToast();

  const courses = [
    {
      icon: Code,
      title: "Coding Skills",
      description: "Learn web development and programming",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: DollarSign,
      title: "Business Training",
      description: "Start your entrepreneurship journey",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: Heart,
      title: "Therapy Sessions",
      description: "Professional counseling support",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <Card className="p-6 shadow-soft bg-gradient-to-br from-card to-secondary/30">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Empowerment Academy</h2>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => toast({ title: "Coming Soon", description: "Full academy launching soon!" })}
        >
          View All <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-card border border-border hover:shadow-soft transition-all cursor-pointer"
          >
            <div className={`w-12 h-12 rounded-lg ${course.bgColor} flex items-center justify-center mb-3`}>
              <course.icon className={`w-6 h-6 ${course.color}`} />
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{course.title}</h3>
            <p className="text-xs text-muted-foreground">{course.description}</p>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
        <p className="text-sm text-foreground font-medium mb-2">🎓 Build Your Independence</p>
        <p className="text-sm text-muted-foreground">
          Access free skills training, business courses, and professional therapy to rebuild your life with confidence
          and financial independence.
        </p>
      </div>
    </Card>
  );
};

export default AcademyPreview;
