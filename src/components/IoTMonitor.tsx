import { Heart, Volume2, Activity, Thermometer } from "lucide-react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { useEffect, useState } from "react";

interface IoTMonitorProps {
  alertActive: boolean;
}

const IoTMonitor = ({ alertActive }: IoTMonitorProps) => {
  const [heartRate, setHeartRate] = useState(72);
  const [audioLevel, setAudioLevel] = useState(35);
  const [motionLevel, setMotionLevel] = useState(20);
  const [temperature, setTemperature] = useState(22);

  useEffect(() => {
    if (alertActive) {
      setHeartRate(120);
      setAudioLevel(85);
      setMotionLevel(75);
    } else {
      setHeartRate(72);
      setAudioLevel(35);
      setMotionLevel(20);
    }
  }, [alertActive]);

  const metrics = [
    {
      icon: Heart,
      label: "Heart Rate",
      value: heartRate,
      unit: "bpm",
      status: heartRate > 100 ? "critical" : heartRate > 80 ? "warning" : "normal",
      progress: (heartRate / 180) * 100,
    },
    {
      icon: Volume2,
      label: "Audio Level",
      value: audioLevel,
      unit: "dB",
      status: audioLevel > 70 ? "critical" : audioLevel > 50 ? "warning" : "normal",
      progress: audioLevel,
    },
    {
      icon: Activity,
      label: "Motion Activity",
      value: motionLevel,
      unit: "%",
      status: motionLevel > 60 ? "critical" : motionLevel > 40 ? "warning" : "normal",
      progress: motionLevel,
    },
    {
      icon: Thermometer,
      label: "Environment Temp",
      value: temperature,
      unit: "°C",
      status: "normal",
      progress: (temperature / 50) * 100,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "text-destructive";
      case "warning":
        return "text-warning";
      default:
        return "text-success";
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case "critical":
        return "bg-destructive";
      case "warning":
        return "bg-warning";
      default:
        return "bg-success";
    }
  };

  return (
    <Card className="p-6 shadow-soft">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Real-Time Monitoring</h2>
        <span className="text-xs px-3 py-1 rounded-full bg-success/10 text-success font-medium">
          IoT Connected
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-muted/50 border border-border transition-all hover:shadow-soft"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-primary/10`}>
                  <metric.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{metric.label}</p>
                  <p className={`text-2xl font-bold ${getStatusColor(metric.status)}`}>
                    {metric.value}
                    <span className="text-sm ml-1 text-muted-foreground">{metric.unit}</span>
                  </p>
                </div>
              </div>
            </div>
            <Progress value={metric.progress} className="h-2" indicatorClassName={getProgressColor(metric.status)} />
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
        <p className="text-sm text-foreground">
          <span className="font-semibold">AI Analysis:</span>{" "}
          {alertActive
            ? "⚠️ Elevated stress indicators detected. Alert triggered."
            : "All indicators within normal range. Environment appears safe."}
        </p>
      </div>
    </Card>
  );
};

export default IoTMonitor;
