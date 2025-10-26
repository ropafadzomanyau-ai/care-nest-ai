import { useState } from "react";
import { Shield, Heart, TrendingUp, GraduationCap, Phone, AlertCircle } from "lucide-react";
import SOSButton from "@/components/SOSButton";
import IoTMonitor from "@/components/IoTMonitor";
import QuickActions from "@/components/QuickActions";
import InsightsPanel from "@/components/InsightsPanel";
import AcademyPreview from "@/components/AcademyPreview";

const Index = () => {
  const [alertActive, setAlertActive] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">HerGuardian</h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Status:</span>
              <span className="flex items-center gap-2 text-sm font-medium text-success">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse-soft" />
                Protected
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - SOS & Quick Actions */}
          <div className="space-y-6">
            <SOSButton alertActive={alertActive} setAlertActive={setAlertActive} />
            <QuickActions />
          </div>

          {/* Middle Column - IoT Monitor & Insights */}
          <div className="lg:col-span-2 space-y-6">
            <IoTMonitor alertActive={alertActive} />
            <InsightsPanel />
            <AcademyPreview />
          </div>
        </div>
      </main>

      {/* Emergency Banner */}
      {alertActive && (
        <div className="fixed bottom-0 left-0 right-0 bg-destructive text-destructive-foreground p-4 shadow-strong animate-pulse-soft">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6" />
              <div>
                <p className="font-semibold">Emergency Alert Active</p>
                <p className="text-sm opacity-90">Your emergency contacts have been notified</p>
              </div>
            </div>
            <button
              onClick={() => setAlertActive(false)}
              className="px-4 py-2 bg-destructive-foreground text-destructive rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Cancel Alert
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
