import { Download } from "lucide-react";
import { Patient } from "@/data/patients";

interface LabResultsProps {
  patient: Patient;
}

const LabResults = ({ patient }: LabResultsProps) => {
  return (
    <div className="bg-card rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-foreground mb-6">Lab Results</h2>
      
      <div className="space-y-3 max-h-64 overflow-y-auto custom-scrollbar pr-2">
        {patient.lab_results.map((result, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 hover:bg-secondary rounded-lg transition-colors cursor-pointer"
          >
            <span className="text-sm text-foreground">{result}</span>
            <button className="p-2 hover:bg-background rounded-lg transition-colors">
              <Download size={18} className="text-foreground" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabResults;
