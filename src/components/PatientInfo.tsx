import { Calendar, User, Phone, PhoneCall, Shield } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Patient } from "@/data/patients";

interface PatientInfoProps {
  patient: Patient;
}

const PatientInfo = ({ patient }: PatientInfoProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 h-full flex flex-col">
      <div className="flex flex-col items-center mb-6">
        <Avatar className="w-48 h-48 mb-6">
          <AvatarImage src={patient.profile_picture} />
          <AvatarFallback className="text-4xl">{patient.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h2 className="text-2xl font-bold text-foreground">{patient.name}</h2>
      </div>

      <div className="space-y-4 flex-1">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0">
            <Calendar size={20} className="text-foreground" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Date Of Birth</div>
            <div className="font-semibold text-foreground">{patient.date_of_birth}</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0">
            <User size={20} className="text-foreground" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Gender</div>
            <div className="font-semibold text-foreground">{patient.gender}</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0">
            <Phone size={20} className="text-foreground" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Contact Info.</div>
            <div className="font-semibold text-foreground">{patient.phone_number}</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0">
            <PhoneCall size={20} className="text-foreground" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Emergency Contacts</div>
            <div className="font-semibold text-foreground">{patient.emergency_contact}</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0">
            <Shield size={20} className="text-foreground" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Insurance Provider</div>
            <div className="font-semibold text-foreground">{patient.insurance_type}</div>
          </div>
        </div>
      </div>

      <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-full">
        Show All Information
      </Button>
    </div>
  );
};

export default PatientInfo;
