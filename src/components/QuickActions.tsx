import { Users, MapPin, FileText, Shield } from "lucide-react";
import { Card } from "./ui/card";
import { useToast } from "./ui/use-toast";

const QuickActions = () => {
  const { toast } = useToast();

  const actions = [
    {
      icon: Users,
      label: "Emergency Contacts",
      color: "text-primary",
      action: () => toast({ title: "Emergency Contacts", description: "Manage your trusted contacts" }),
    },
    {
      icon: MapPin,
      label: "Request Nearby Help",
      color: "text-success",
      action: () => toast({ title: "Finding Help", description: "Locating nearest responders..." }),
    },
    {
      icon: FileText,
      label: "Anonymous Report",
      color: "text-warning",
      action: () => toast({ title: "Anonymous Reporting", description: "Report an incident safely" }),
    },
    {
      icon: Shield,
      label: "Safe Places",
      color: "text-accent",
      action: () => toast({ title: "Safe Places", description: "View nearby safe locations" }),
    },
  ];

  return (
    <Card className="p-4 shadow-soft">
      <h3 className="text-sm font-semibold text-foreground mb-3">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.action}
            className="p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors flex flex-col items-center gap-2 text-center"
          >
            <action.icon className={`w-6 h-6 ${action.color}`} />
            <span className="text-xs font-medium text-secondary-foreground">{action.label}</span>
          </button>
        ))}
      </div>
    </Card>
  );
};

export default QuickActions;
