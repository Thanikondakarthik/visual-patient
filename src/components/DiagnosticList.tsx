import { Patient } from "@/data/patients";

interface DiagnosticListProps {
  patient: Patient;
}

const DiagnosticList = ({ patient }: DiagnosticListProps) => {
  return (
    <div className="bg-card rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-foreground mb-6">Diagnostic List</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Problem/Diagnosis</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Description</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {patient.diagnostic_list.map((item, index) => (
              <tr key={index} className="border-b border-border last:border-0">
                <td className="py-4 px-4 text-sm text-foreground">{item.name}</td>
                <td className="py-4 px-4 text-sm text-muted-foreground">{item.description}</td>
                <td className="py-4 px-4 text-sm text-foreground">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
