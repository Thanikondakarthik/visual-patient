import { Home, Calendar, MessageSquare, CreditCard, Settings, MoreVertical, Users } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-sm transform rotate-45"></div>
          </div>
          <span className="text-xl font-bold text-foreground">
            Tech.<span className="text-foreground">Care</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Home size={20} />
            <span className="font-medium">Overview</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium transition-colors">
            <Users size={20} />
            <span>Patients</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Calendar size={20} />
            <span className="font-medium">Schedule</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <MessageSquare size={20} />
            <span className="font-medium">Message</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <CreditCard size={20} />
            <span className="font-medium">Transactions</span>
          </a>
        </nav>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <Avatar className="w-11 h-11">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Doctor" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div className="border-l border-border pl-3">
            <div className="text-sm font-semibold text-foreground">Dr. Jose Simmons</div>
            <div className="text-xs text-muted-foreground">General Practitioner</div>
          </div>
          <button className="p-1 hover:bg-secondary rounded-lg transition-colors">
            <Settings size={20} className="text-muted-foreground" />
          </button>
          <button className="p-1 hover:bg-secondary rounded-lg transition-colors">
            <MoreVertical size={20} className="text-muted-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
