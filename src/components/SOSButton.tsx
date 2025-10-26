import { AlertCircle, Phone, MessageSquare } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

interface SOSButtonProps {
  alertActive: boolean;
  setAlertActive: (active: boolean) => void;
}

const SOSButton = ({ alertActive, setAlertActive }: SOSButtonProps) => {
  const { toast } = useToast();

  const handleSOS = () => {
    setAlertActive(true);
    toast({
      title: "SOS Alert Sent",
      description: "Emergency contacts and nearby responders have been notified.",
    });
  };

  const handleCallHelp = () => {
    toast({
      title: "Connecting to Help",
      description: "Finding nearest available responder...",
    });
  };

  return (
    <Card className="p-6 shadow-soft border-2 border-primary/20">
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Emergency Actions</h2>
        </div>

        {/* Main SOS Button */}
        <button
          onClick={handleSOS}
          disabled={alertActive}
          className="w-full h-32 rounded-2xl bg-gradient-hero shadow-strong hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 flex flex-col items-center justify-center gap-2"
        >
          <AlertCircle className="w-12 h-12 text-primary-foreground" />
          <span className="text-2xl font-bold text-primary-foreground">
            {alertActive ? "ALERT ACTIVE" : "SOS"}
          </span>
          <span className="text-sm text-primary-foreground/90">
            {alertActive ? "Help is on the way" : "Press for immediate help"}
          </span>
        </button>

        {/* Secondary Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="h-20 flex-col gap-2"
            onClick={handleCallHelp}
          >
            <Phone className="w-5 h-5" />
            <span className="text-xs">Call Help</span>
          </Button>
          <Button
            variant="outline"
            className="h-20 flex-col gap-2"
            onClick={() => toast({ title: "Silent Alert", description: "Discreet alert sent to emergency contacts" })}
          >
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs">Silent Alert</span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SOSButton;
