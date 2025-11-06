import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { Patient } from "@/data/patients";
import { ChevronDown } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface DiagnosisHistoryProps {
  patient: Patient;
}

const DiagnosisHistory = ({ patient }: DiagnosisHistoryProps) => {
  const last6Months = patient.diagnosis_history.slice(0, 6).reverse();
  
  const chartData = {
    labels: last6Months.map(entry => `${entry.month.slice(0, 3)}, ${entry.year}`),
    datasets: [
      {
        label: "Systolic",
        data: last6Months.map(entry => entry.blood_pressure.systolic.value),
        borderColor: "hsl(340, 85%, 65%)",
        backgroundColor: "hsl(340, 85%, 65%, 0.1)",
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: "hsl(340, 85%, 65%)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
      {
        label: "Diastolic",
        data: last6Months.map(entry => entry.blood_pressure.diastolic.value),
        borderColor: "hsl(260, 60%, 60%)",
        backgroundColor: "hsl(260, 60%, 60%, 0.1)",
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: "hsl(260, 60%, 60%)",
        pointBorderColor: "#fff",
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 12,
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 13,
        },
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
          color: "hsl(220, 15%, 45%)",
        },
        grid: {
          color: "hsl(220, 15%, 90%)",
        },
      },
      x: {
        ticks: {
          color: "hsl(220, 15%, 45%)",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const latestReading = patient.diagnosis_history[0];

  return (
    <div className="bg-card rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-foreground mb-6">Diagnosis History</h2>
      
      <div className="bg-[hsl(260,60%,97%)] rounded-xl p-6 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-foreground">Blood Pressure</h3>
          <button className="flex items-center gap-2 text-sm text-foreground bg-white px-3 py-1.5 rounded-lg">
            Last 6 months
            <ChevronDown size={16} />
          </button>
        </div>
        
        <div className="h-64">
          <Line data={chartData} options={options} />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-[hsl(340,85%,65%)]"></div>
              <span className="text-sm font-semibold text-foreground">Systolic</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{latestReading.blood_pressure.systolic.value}</div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <span>▲</span>
              <span>{latestReading.blood_pressure.systolic.levels}</span>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-[hsl(260,60%,60%)]"></div>
              <span className="text-sm font-semibold text-foreground">Diastolic</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{latestReading.blood_pressure.diastolic.value}</div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
              <span>▼</span>
              <span>{latestReading.blood_pressure.diastolic.levels}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
