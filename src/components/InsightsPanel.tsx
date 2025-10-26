import { TrendingUp, AlertTriangle, CheckCircle, Database } from "lucide-react";
import { Card } from "./ui/card";

const InsightsPanel = () => {
  const insights = [
    {
      icon: CheckCircle,
      title: "Safety Score",
      value: "87%",
      trend: "+5% from last week",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: Database,
      title: "Evidence Collected",
      value: "24 incidents",
      trend: "AI-analyzed patterns",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: AlertTriangle,
      title: "Risk Alerts",
      value: "3 this week",
      trend: "2 resolved",
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
  ];

  return (
    <Card className="p-6 shadow-soft">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold text-foreground">AI-Powered Insights</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {insights.map((insight, index) => (
          <div key={index} className="p-4 rounded-xl bg-muted/50 border border-border">
            <div className={`w-10 h-10 rounded-lg ${insight.bgColor} flex items-center justify-center mb-3`}>
              <insight.icon className={`w-5 h-5 ${insight.color}`} />
            </div>
            <p className="text-sm text-muted-foreground mb-1">{insight.title}</p>
            <p className="text-2xl font-bold text-foreground mb-1">{insight.value}</p>
            <p className="text-xs text-muted-foreground">{insight.trend}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/20">
        <h3 className="text-sm font-semibold text-foreground mb-2">Daily AI Summary</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Based on your recent activity patterns, the AI has detected stable emotional indicators and consistent
          routine behavior. No significant risk patterns identified. Keep up your daily safety practices.
        </p>
      </div>
    </Card>
  );
};

export default InsightsPanel;
