import { ChevronDown, ArrowRight } from "lucide-react";
import mulerunLogo from "@/assets/mulerun-logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-[120px] py-4 h-20 bg-background">
      <div className="flex items-center gap-11">
        {/* Logo */}
        <a 
          href="https://mulerun.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-stone-dark rounded-sm py-1 pr-2 pl-0.5 h-10 hover:opacity-90 transition-opacity"
        >
          <div className="w-9 h-9 bg-card rounded-sm border border-border/10 flex items-center justify-center overflow-hidden">
            <img src={mulerunLogo} alt="MuleRun" className="w-7 h-7 object-contain" />
          </div>
          <span className="font-jakarta font-bold text-lg text-foreground">MuleRun</span>
        </a>

        {/* Nav Links */}
        <nav className="flex items-center gap-7">
          <a 
            href="https://mulerun.com/agent-store" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-jetbrains font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors"
          >
            Agent Store
          </a>
          <button className="font-jetbrains font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors">
            Ambassadors
          </button>
          <button className="font-jetbrains font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors">
            DOCS
          </button>
          <button className="flex items-center gap-0 font-jetbrains font-bold text-sm uppercase tracking-tight text-foreground/80 hover:text-foreground transition-colors">
            Resources
            <ChevronDown className="w-6 h-6" />
          </button>
        </nav>
      </div>

      {/* Sign In Button */}
      <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded font-jetbrains font-bold text-sm uppercase tracking-tight hover:bg-primary/90 transition-colors">
        Sign In
        <ArrowRight className="w-5 h-5" />
      </button>
    </header>
  );
};

export default Header;
