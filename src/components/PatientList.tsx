import { Search, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Patient } from "@/data/patients";
import { cn } from "@/lib/utils";

interface PatientListProps {
  patients: Patient[];
  selectedPatient: Patient | null;
  onSelectPatient: (patient: Patient) => void;
}

const PatientList = ({ patients, selectedPatient, onSelectPatient }: PatientListProps) => {
  return (
    <div className="bg-card rounded-2xl p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Patients</h2>
        <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
          <Search size={20} className="text-foreground" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
        {patients.map((patient, index) => (
          <div
            key={index}
            onClick={() => onSelectPatient(patient)}
            className={cn(
              "flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors",
              selectedPatient?.name === patient.name
                ? "bg-[hsl(var(--selected-patient))]"
                : "hover:bg-secondary"
            )}
          >
            <Avatar className="w-12 h-12">
              <AvatarImage src={patient.profile_picture} />
              <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-foreground truncate">{patient.name}</div>
              <div className="text-sm text-muted-foreground">
                {patient.gender}, {patient.age}
              </div>
            </div>
            <button className="p-1 hover:bg-background rounded-lg transition-colors">
              <MoreHorizontal size={20} className="text-muted-foreground" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientList;
