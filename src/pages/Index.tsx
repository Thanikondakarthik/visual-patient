import { useState } from "react";
import Header from "@/components/Header";
import PatientList from "@/components/PatientList";
import DiagnosisHistory from "@/components/DiagnosisHistory";
import VitalCards from "@/components/VitalCards";
import PatientInfo from "@/components/PatientInfo";
import DiagnosticList from "@/components/DiagnosticList";
import LabResults from "@/components/LabResults";
import { patientsData } from "@/data/patients";

const Index = () => {
  const [selectedPatient, setSelectedPatient] = useState(patientsData[3]); // Jessica Taylor

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Patient List - Left Sidebar */}
          <div className="col-span-3 h-[calc(100vh-140px)]">
            <PatientList
              patients={patientsData}
              selectedPatient={selectedPatient}
              onSelectPatient={setSelectedPatient}
            />
          </div>

          {/* Main Content */}
          <div className="col-span-6 space-y-6">
            <DiagnosisHistory patient={selectedPatient} />
            <VitalCards patient={selectedPatient} />
            <DiagnosticList patient={selectedPatient} />
          </div>

          {/* Patient Info - Right Sidebar */}
          <div className="col-span-3 space-y-6">
            <PatientInfo patient={selectedPatient} />
            <LabResults patient={selectedPatient} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
