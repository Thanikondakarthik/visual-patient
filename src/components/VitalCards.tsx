import { Wind, Thermometer, Heart } from "lucide-react";
import { Patient } from "@/data/patients";

interface VitalCardsProps {
  patient: Patient;
}

const VitalCards = ({ patient }: VitalCardsProps) => {
  const latestReading = patient.diagnosis_history[0];

  const vitals = [
    {
      icon: Wind,
      title: "Respiratory Rate",
      value: `${latestReading.respiratory_rate.value} bpm`,
      status: latestReading.respiratory_rate.levels,
      bgColor: "bg-[hsl(var(--respiratory-bg))]",
      iconColor: "text-[hsl(var(--respiratory-foreground))]",
    },
    {
      icon: Thermometer,
      title: "Temperature",
      value: `${latestReading.temperature.value}°F`,
      status: latestReading.temperature.levels,
      bgColor: "bg-[hsl(var(--temperature-bg))]",
      iconColor: "text-[hsl(var(--temperature-foreground))]",
    },
    {
      icon: Heart,
      title: "Heart Rate",
      value: `${latestReading.heart_rate.value} bpm`,
      status: latestReading.heart_rate.levels,
      bgColor: "bg-[hsl(var(--heart-bg))]",
      iconColor: "text-[hsl(var(--heart-foreground))]",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {vitals.map((vital, index) => {
        const Icon = vital.icon;
        return (
          <div key={index} className={`${vital.bgColor} rounded-xl p-5`}>
            <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center mb-3`}>
              <Icon className={vital.iconColor} size={24} />
            </div>
            <div className="text-sm text-muted-foreground mb-2">{vital.title}</div>
            <div className="text-3xl font-bold text-foreground mb-2">{vital.value}</div>
            <div className="text-sm text-muted-foreground">{vital.status}</div>
          </div>
        );
      })}
    </div>
  );
};

export default VitalCards;
